// src/screens/Dashboard.js
// My Dashboard — points, rank, vault, trophy shelf, recent beans

import { getMonthlyPoints, getVault, getAwardsByEmployee, getAwardsByGiver, getAllEmployees, getActions, listenLeaderboard, upsertEmployee } from '../firebase/db.js'
import { compressToBase64 } from '../utils/imageUpload.js'
import { formatPts, relativeTime, rankByPoints, monthKey } from '../utils/helpers.js'
import { formatBeanCounts, BEAN_TIERS, isGiver, isAdmin } from '../utils/beans.js'

export async function renderDashboard(container, session, config, { onLogout, navigate }) {
  const dbOn = config.db_toggle === true

  container.innerHTML = `
    <div class="page">
      <div class="flex justify-between items-center mb-16">
        <div>
          <h1 style="font-size:1.5rem;">${session.name}</h1>
          <p class="text-dim text-sm">${session.role} · ${session.outlet}</p>
        </div>
        <button class="btn btn-ghost text-sm" id="btn-logout" style="padding:8px 14px;">Sign out</button>
      </div>
      <div id="dash-loading" class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      <div id="dash-content" class="hidden"></div>
    </div>
  `

  container.querySelector('#btn-logout').addEventListener('click', onLogout)

  try {
    if (isGiver(session.role)) {
      await renderGiverDash(container, session, navigate)
    } else if (isAdmin(session.role)) {
      await renderAdminDash(container, session, navigate)
    } else {
      await renderReceiverDash(container, session, config, navigate)
    }
  } catch (err) {
    console.error('Dashboard error:', err)
    container.querySelector('#dash-loading').classList.remove('hidden')
    container.querySelector('#dash-loading').innerHTML =
      `<div class="empty-state"><p style="color:var(--red);">Failed to load dashboard.</p><p class="text-dim text-sm mt-8">${err.message}</p></div>`
  }
}

// ─── RECEIVER DASHBOARD ───────────────────────────────────────

async function renderReceiverDash(container, session, config, navigate) {
  const dbOn = config.db_toggle === true
  const [monthly, vault, awards] = await Promise.all([
    getMonthlyPoints(session.id),
    getVault(session.id),
    getAwardsByEmployee(session.id)
  ])

  container.querySelector('#dash-loading').classList.add('hidden')
  const content = container.querySelector('#dash-content')
  content.classList.remove('hidden')

  listenLeaderboard(monthKey(), (pointsMap) => {
    const ranked = rankByPoints(pointsMap)
    const me = ranked.find((e) => e.id === session.id)
    const rankEl = content.querySelector('#my-rank')
    if (rankEl && me) rankEl.textContent = `#${me.rank}`
  })

  const recent     = awards.slice(0, 5)
  const beanCounts = formatBeanCounts(awards)

  const initials = session.name.split(' ').map((w) => w[0]).join('').slice(0,2).toUpperCase()
  const colors   = ['#8B5E3C','#5E6E8B','#5E8B6E','#8B5E7A','#7A8B5E','#6E5E8B','#8B7A5E']
  const bgColor  = colors[session.name.charCodeAt(0) % colors.length]

  content.innerHTML = `
    <!-- Profile Photo -->
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;">
      <div style="position:relative;">
        ${session.photo_url
          ? `<img id="profile-hex" src="${session.photo_url}" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;" />`
          : `<div id="profile-hex" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);background:${bgColor};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:1.3rem;">${initials}</div>`
        }
        <label for="photo-upload" style="position:absolute;bottom:-4px;right:-4px;width:22px;height:22px;background:var(--gold);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:0.65rem;color:#000;font-weight:700;">📷</label>
        <input type="file" id="photo-upload" accept="image/*" style="display:none;" />
      </div>
      <div>
        <p style="font-weight:600;font-size:1rem;">${session.name}</p>
        <p class="text-dim text-sm">${session.role} · ${session.outlet}</p>
        <p id="photo-status" class="text-dim" style="font-size:0.72rem;margin-top:2px;"></p>
      </div>
    </div>

    <div class="card mb-16" style="text-align:center;padding:28px 20px;">
      <p class="section-header" style="margin-bottom:4px;">This Month</p>
      <div class="mono text-gold" style="font-size:3rem;font-weight:400;margin-bottom:4px;">
        ${formatPts(monthly.net_points || monthly.points || 0)}
      </div>
      <p class="text-dim text-sm">points · Rank <span id="my-rank" class="text-gold">#${monthly.rank || '—'}</span></p>
    </div>

    <div class="card mb-16">
      <div class="flex justify-between items-center">
        <div>
          <p class="section-header">🏦 Vault</p>
          <div class="mono" style="font-size:1.6rem;margin-top:4px;">
            ${formatPts(vault.total_earned || 0)} <span class="text-dim text-sm">pts earned</span>
          </div>
        </div>
        ${dbOn && vault.total_deducted > 0 ? `
        <div style="text-align:right;">
          <p class="text-sm" style="color:var(--red);">−${formatPts(vault.total_deducted)}</p>
          <p class="text-xs text-dim">deducted</p>
          <p class="mono text-sm text-gold mt-4">${formatPts(vault.net)} net</p>
        </div>` : ''}
      </div>
    </div>

    ${beanCounts ? `
    <div class="card mb-16">
      <p class="section-header">🏆 Trophy Shelf</p>
      <div class="trophy-shelf mt-8">${buildTrophyShelf(awards)}</div>
    </div>` : ''}

    <p class="section-header">Recent Beans</p>
    ${recent.length === 0
      ? `<div class="empty-state"><div class="icon">🫘</div><p>No beans yet this month</p></div>`
      : recent.map((a) => renderBeanRow(a)).join('')}
  `

  // Photo upload handler
  const photoInput  = content.querySelector('#photo-upload')
  const statusEl    = content.querySelector('#photo-status')
  const profileHex  = content.querySelector('#profile-hex')

  photoInput?.addEventListener('change', async (e) => {
    const file = e.target.files[0]
    if (!file) return
    statusEl.textContent = 'Compressing…'
    try {
      const dataUrl = await compressToBase64(file)
      const kb = Math.round(dataUrl.length / 1024)
      await upsertEmployee(session.id, { photo_url: dataUrl })
      session.photo_url = dataUrl
      const hexEl = content.querySelector('#profile-hex')
      if (hexEl) {
        hexEl.outerHTML = `<img id="profile-hex" src="${dataUrl}" style="width:64px;height:64px;clip-path:polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%);object-fit:cover;" />`
      }
      statusEl.textContent = `✓ Saved (${kb}KB)`
      setTimeout(() => { statusEl.textContent = '' }, 3000)
    } catch (err) {
      statusEl.textContent = 'Failed. Try a smaller image.'
      console.error(err)
    }
  })
}

// ─── GIVER DASHBOARD ─────────────────────────────────────────

async function renderGiverDash(container, session, navigate) {
  const [given, employees, actions] = await Promise.all([
    getAwardsByGiver(session.id),
    getAllEmployees(),
    getActions()
  ])

  container.querySelector('#dash-loading').classList.add('hidden')
  const content = container.querySelector('#dash-content')
  content.classList.remove('hidden')

  const thisMonth  = monthKey()
  const givenMonth = given.filter((a) => {
    const d = new Date(a.timestamp)
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}` === thisMonth
  })

  const totalPtsGiven = givenMonth.reduce((s, a) => s + (a.points_value * (a.quantity || 1)), 0)
  const beanBreakdown = { green: 0, silver: 0, gold: 0, crystal: 0 }
  givenMonth.forEach((a) => { if (beanBreakdown[a.bean_type] !== undefined) beanBreakdown[a.bean_type]++ })

  content.innerHTML = `
    <div class="card mb-16" style="text-align:center;padding:28px 20px;">
      <p class="section-header" style="margin-bottom:4px;">Beans Given This Month</p>
      <div class="mono text-gold" style="font-size:3rem;font-weight:400;margin-bottom:4px;">
        ${givenMonth.length}
      </div>
      <p class="text-dim text-sm">${formatPts(totalPtsGiven)} pts awarded to your team</p>
    </div>

    <div class="card mb-16">
      <p class="section-header" style="margin-bottom:12px;">Bean Breakdown</p>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;text-align:center;">
        ${Object.entries(beanBreakdown).map(([type, count]) => `
          <div style="padding:12px 8px;border-radius:12px;background:var(--glass-bg);">
            <div style="font-size:1.4rem;margin-bottom:4px;">${BEAN_TIERS[type].icon}</div>
            <div class="mono text-gold" style="font-size:1rem;">${count}</div>
            <div class="text-dim" style="font-size:0.65rem;margin-top:2px;">${BEAN_TIERS[type].label.replace(' Bean','')}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="display:flex;gap:10px;margin-bottom:24px;">
      <button class="btn btn-primary" id="btn-quick-award" style="flex:1;height:48px;">
        + Award Beans
      </button>
    </div>

    <p class="section-header">Recent Awards Given</p>
    ${givenMonth.length === 0
      ? `<div class="empty-state"><div class="icon">🫘</div><p>No beans given this month yet</p></div>`
      : givenMonth.slice(0,5).map((a) => renderGivenRow(a, employees, actions)).join('')}
  `

  content.querySelector('#btn-quick-award')?.addEventListener('click', () => navigate('award'))
}

// ─── ADMIN DASHBOARD ─────────────────────────────────────────

async function renderAdminDash(container, session, navigate) {
  container.querySelector('#dash-loading').classList.add('hidden')
  const content = container.querySelector('#dash-content')
  content.classList.remove('hidden')

  content.innerHTML = `
    <div class="card mb-16" style="text-align:center;padding:32px 20px;">
      <div style="font-size:2rem;margin-bottom:12px;">👋</div>
      <h2 style="font-size:1.1rem;margin-bottom:6px;">Welcome, ${session.name}</h2>
      <p class="text-dim text-sm">${session.role} · ${session.outlet}</p>
    </div>
    <div class="card mb-12" style="cursor:pointer;" id="goto-approvals">
      <div class="flex justify-between items-center">
        <div>
          <p style="font-weight:600;margin-bottom:2px;">Pending Approvals</p>
          <p class="text-dim text-sm">Review staff registration requests</p>
        </div>
        <span style="color:var(--gold);font-size:1.2rem;">›</span>
      </div>
    </div>
    <div class="card mb-12" style="cursor:pointer;" id="goto-audit">
      <div class="flex justify-between items-center">
        <div>
          <p style="font-weight:600;margin-bottom:2px;">Audit Log</p>
          <p class="text-dim text-sm">Review flags and bean activity</p>
        </div>
        <span style="color:var(--gold);font-size:1.2rem;">›</span>
      </div>
    </div>
  `

  content.querySelector('#goto-approvals')?.addEventListener('click', () => navigate('approvals'))
  content.querySelector('#goto-audit')?.addEventListener('click', () => navigate('audit'))
}

function buildTrophyShelf(awards) {
  const counts = { green: 0, silver: 0, gold: 0, crystal: 0 }
  awards.forEach(({ bean_type }) => { if (counts[bean_type] !== undefined) counts[bean_type]++ })
  return Object.entries(counts)
    .filter(([, n]) => n > 0)
    .map(([type, n]) => `
      <div class="trophy-item">
        <span style="font-size:1.3rem;">${BEAN_TIERS[type].icon}</span>
        <span>${n}</span>
      </div>
    `).join('')
}

function renderBeanRow(award) {
  const tier = BEAN_TIERS[award.bean_type] || { icon: '🫘', label: award.bean_type }
  return `
    <div class="lb-row" style="margin-bottom:8px;">
      <span style="font-size:1.4rem;">${tier.icon}</span>
      <div style="flex:1;">
        <p style="font-size:0.9rem;">${tier.label} · <span class="text-gold mono">+${award.points_value * (award.quantity || 1)} pts</span></p>
        <p class="text-dim text-xs">${award.action_id || 'Award'} · ${relativeTime(award.timestamp)}</p>
      </div>
    </div>
  `
}

function renderGivenRow(award, employees = {}, actions = {}) {
  const tier       = BEAN_TIERS[award.bean_type] || { icon: '🫘', label: award.bean_type }
  const receiver   = employees[award.receiver_id]
  const name       = receiver ? receiver.name : (award.giver_name || 'Staff')
  const actionName = actions[award.action_id]?.name || award.action_id || 'Award'
  return `
    <div class="lb-row" style="margin-bottom:8px;">
      <span style="font-size:1.4rem;">${tier.icon}</span>
      <div style="flex:1;">
        <p style="font-size:0.9rem;">${name} · <span class="text-gold mono">+${award.points_value * (award.quantity || 1)} pts</span></p>
        <p class="text-dim text-xs">${actionName} · ${relativeTime(award.timestamp)}</p>
      </div>
    </div>
  `
}
