// src/screens/Leaderboard.js
// Live leaderboard — real-time Firebase, outlet filter

import { listenLeaderboard, getAllEmployees } from '../firebase/db.js'
import { formatPts, monthKey } from '../utils/helpers.js'

function avatarHex(emp) {
  const initials = (emp.name || '??').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()
  const colors   = ['#8B5E3C','#5E6E8B','#5E8B6E','#8B5E7A','#7A8B5E','#6E5E8B','#8B7A5E']
  const color    = colors[(emp.name || '').charCodeAt(0) % colors.length]
  const photo    = emp.photo_url
  if (photo) {
    return `<div class="avatar-hex-wrap"><img class="avatar-hex" src="${photo}" alt="${initials}" /></div>`
  }
  return `
    <div class="avatar-hex-wrap">
      <div class="avatar-hex" style="background:${color};color:#fff;">
        ${initials}
      </div>
    </div>
  `
}

export function renderLeaderboard(container, session, config) {
  let employeeMap = {}

  container.innerHTML = `
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:2px;">Leaderboard</h1>
      <p class="text-dim text-sm" style="margin-bottom:20px;">${getMonthLabel()} · Live</p>
      <div id="lb-list">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `

  const lbList = container.querySelector('#lb-list')

  getAllEmployees().then((employees) => {
    employeeMap = employees

    const unsubscribe = listenLeaderboard(monthKey(), (pointsMap) => {
      renderList(pointsMap)
    })

    const observer = new MutationObserver(() => {
      if (!document.contains(lbList)) { unsubscribe(); observer.disconnect() }
    })
    observer.observe(document.body, { childList: true, subtree: true })
  })

  function renderList(pointsMap) {
    const entries = Object.entries(pointsMap)
      .map(([id, data]) => ({ id, ...data, emp: employeeMap[id] || {} }))
      .filter((e) => e.emp.active !== false)
      .sort((a, b) => (b.net_points || b.points || 0) - (a.net_points || a.points || 0))
      .map((e, i) => ({ ...e, rank: i + 1 }))

    if (entries.length === 0) {
      lbList.innerHTML = `
        <div class="empty-state">
          <div style="font-size:2.5rem;margin-bottom:12px;">🏆</div>
          <p class="text-dim">No points recorded yet this month</p>
          <p class="text-dim text-sm" style="margin-top:4px;">Be the first to earn beans!</p>
        </div>
      `
      return
    }

    lbList.innerHTML = entries.map((entry) => {
      const isSelf  = entry.id === session.id
      const pts     = entry.net_points || entry.points || 0
      const isFirst = entry.rank === 1
      const medal   = entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : null
      const rankClass = entry.rank <= 3 ? `top${entry.rank}` : ''

      return `
        <div class="lb-row ${isFirst ? 'lb-row-top1' : ''} ${isSelf ? 'self' : ''}" style="margin-bottom:${isFirst ? '20px' : '8px'};">
          ${isFirst ? '<div class="queen-bee-glow"></div>' : ''}
          ${avatarHex(entry.emp)}
          <div class="lb-rank ${rankClass}" style="min-width:24px;">
            ${medal ? `<span style="font-size:1.1rem;">${medal}</span>` : isFirst ? '' : `<span style="font-size:0.8rem;color:var(--text-tertiary);">#${entry.rank}</span>`}
          </div>
          <div class="lb-name">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span style="${isFirst ? 'color:var(--gold);font-weight:600;' : ''}">${entry.emp.name || entry.id}</span>
              ${isSelf ? `<span class="badge badge-gold" style="font-size:0.6rem;padding:2px 7px;">You</span>` : ''}
              ${isFirst ? `<span style="font-size:0.75rem;color:var(--gold);opacity:0.9;display:flex;align-items:center;gap:3px;"><span class="queen-bee-crown" style="position:static;font-size:0.9rem;transform:none;animation:crown-float 2s ease-in-out infinite;display:inline-block;">👑🐝</span> Queen Bee</span>` : ''}
            </div>
            <div class="text-dim" style="font-size:0.75rem;margin-top:2px;">${entry.emp.role || ''} · ${entry.emp.outlet || ''}</div>
          </div>
          <div class="lb-pts">${formatPts(pts)} <span style="font-size:0.7rem;color:var(--text-tertiary);">pts</span></div>
        </div>
      `
    }).join('')
  }
}

function getMonthLabel() {
  return new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
}
