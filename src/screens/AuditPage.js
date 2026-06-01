// src/screens/AuditPage.js
// HR + Owner only — flag feed, giver breakdown, award log

import { getAllFlags, updateFlagStatus, getAllEmployees, getActions } from '../firebase/db.js'
import { relativeTime } from '../utils/helpers.js'
import { BEAN_TIERS } from '../utils/beans.js'

export async function renderAuditPage(container, session, config) {
  container.innerHTML = `
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:16px;">HR Audit</h1>

      <!-- Tabs -->
      <div class="flex gap-8 mb-16" id="audit-tabs">
        <button class="btn btn-primary audit-tab" data-tab="flags" style="flex:1;padding:10px;">🚩 Flags</button>
        <button class="btn btn-ghost  audit-tab" data-tab="log"   style="flex:1;padding:10px;">📋 Log</button>
      </div>

      <div id="audit-content">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `

  let activeTab = 'flags'
  const auditContent = container.querySelector('#audit-content')

  container.querySelectorAll('.audit-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab
      container.querySelectorAll('.audit-tab').forEach((b) => {
        b.className = b.dataset.tab === activeTab ? 'btn btn-primary audit-tab' : 'btn btn-ghost audit-tab'
        b.style.flex = '1'; b.style.padding = '10px'
      })
      loadTab(activeTab)
    })
  })

  async function loadTab(tab) {
    auditContent.innerHTML = `<div class="loading-center" style="min-height:30vh;"><div class="spinner"></div></div>`
    if (tab === 'flags') await renderFlags()
    if (tab === 'log')   await renderLog()
  }

  async function renderFlags() {
    try {
      const flags = await getAllFlags()
      const open  = flags.filter((f) => f.status === 'open')
      const resolved = flags.filter((f) => f.status !== 'open')

      if (!flags.length) {
        auditContent.innerHTML = `
          <div class="empty-state">
            <div class="icon">✅</div>
            <p>No flags. System looks clean.</p>
          </div>
        `
        return
      }

      auditContent.innerHTML = `
        ${open.length ? `
          <p class="section-header mb-8">Open (${open.length})</p>
          ${open.map((f) => renderFlagCard(f)).join('')}
        ` : ''}
        ${resolved.length ? `
          <p class="section-header mt-16 mb-8">Resolved (${resolved.length})</p>
          ${resolved.map((f) => renderFlagCard(f, true)).join('')}
        ` : ''}
      `

      // Bind act/dismiss buttons
      auditContent.querySelectorAll('.flag-action-btn').forEach((btn) => {
        btn.addEventListener('click', async () => {
          const { flagId, action } = btn.dataset
          btn.disabled = true
          await updateFlagStatus(flagId, action, session.id)
          await loadTab('flags')
        })
      })

    } catch (err) {
      auditContent.innerHTML = `<p class="text-dim text-sm text-center">Failed to load flags.</p>`
    }
  }

  async function renderLog() {
    try {
      const [employees, actions, flagsSnap] = await Promise.all([
        getAllEmployees(),
        getActions(),
        fetch(`https://who-s-the-queen-bee-default-rtdb.asia-southeast1.firebasedatabase.app/awards.json`)
          .then((r) => r.json())
      ])

      const awards = flagsSnap
        ? Object.entries(flagsSnap)
            .map(([id, v]) => ({ id, ...v }))
            .sort((a, b) => b.timestamp - a.timestamp)
        : []

      if (!awards.length) {
        auditContent.innerHTML = `
          <div class="empty-state">
            <div class="icon">📋</div>
            <p class="text-dim">No awards recorded yet.</p>
          </div>
        `
        return
      }

      auditContent.innerHTML = `
        <p class="section-header" style="margin-bottom:12px;">All Awards — ${awards.length} total</p>
        ${awards.map((a) => {
          const tier     = BEAN_TIERS[a.bean_type] || { icon: '🫘', label: a.bean_type }
          const receiver = employees[a.receiver_id]
          const giver    = employees[a.giver_id]
          const action   = actions[a.action_id]
          const pts      = a.points_value * (a.quantity || 1)
          return `
            <div class="lb-row" style="margin-bottom:8px;flex-direction:column;align-items:flex-start;gap:6px;">
              <div style="display:flex;justify-content:space-between;align-items:center;width:100%;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <span style="font-size:1.3rem;">${tier.icon}</span>
                  <div>
                    <p style="font-size:0.9rem;font-weight:600;">${receiver?.name || a.receiver_id}</p>
                    <p class="text-dim" style="font-size:0.75rem;">${receiver?.role || ''} · ${receiver?.outlet || ''}</p>
                  </div>
                </div>
                <span class="mono text-gold" style="font-size:0.9rem;">+${pts} pts</span>
              </div>
              <div style="display:flex;justify-content:space-between;width:100%;padding-left:2px;">
                <p class="text-dim" style="font-size:0.75rem;">
                  By <span style="color:var(--text-secondary);">${giver?.name || a.giver_name || a.giver_id}</span>
                  · ${action?.name || a.action_id}
                  ${a.reason_text ? `· "${a.reason_text}"` : ''}
                </p>
                <p class="text-dim" style="font-size:0.75rem;">${relativeTime(a.timestamp)}</p>
              </div>
            </div>
          `
        }).join('')}
      `
    } catch (err) {
      auditContent.innerHTML = `<p class="text-dim text-sm text-center">Failed to load log.</p>`
    }
  }

  await loadTab(activeTab)
}

function renderFlagCard(flag, resolved = false) {
  const typeLabels = {
    bias_concentration: '🚩 Bias Flag — Positive Beans',
    consecutive_db:     '🚩 Consecutive DB Flag',
    ceiling_breach:     '🚩 Ceiling Hit Flag',
    db_threshold:       '🚩 DB Threshold',
    crystal_frequency:  '🚩 Crystal Bean Frequency',
    cross_flag:         '🚩 Relationship Flag'
  }
  const label = typeLabels[flag.type] || `🚩 ${flag.type}`

  return `
    <div class="flag-card ${resolved ? 'opacity-40' : ''}" style="${resolved ? 'opacity:0.5;' : ''}">
      <div class="flex justify-between items-center mb-8">
        <strong style="font-size:0.9rem;">${label}</strong>
        <span class="text-xs text-dim">${relativeTime(flag.timestamp)}</span>
      </div>
      <p style="font-size:0.875rem;line-height:1.5;">${flag.suggestion_text || formatFlagData(flag)}</p>
      <div class="flag-suggestion">
        💡 ${flag.suggestion || 'Review and make a human decision before acting.'}
      </div>
      ${!resolved ? `
        <div class="flex gap-8 mt-12">
          <button class="btn btn-ghost text-sm flag-action-btn" data-flag-id="${flag.id}" data-action="acted"
            style="flex:1;padding:8px;">Mark Acted</button>
          <button class="btn btn-ghost text-sm flag-action-btn" data-flag-id="${flag.id}" data-action="dismissed"
            style="flex:1;padding:8px;color:var(--text-secondary);">Dismiss</button>
        </div>
      ` : `<p class="text-xs text-dim mt-8">${flag.status === 'acted' ? '✅ Acted' : '🗑 Dismissed'}</p>`}
    </div>
  `
}

function formatFlagData(flag) {
  if (flag.data_snapshot) {
    const d = flag.data_snapshot
    return `Giver: ${d.giverName || flag.giver_id} · Receiver: ${d.receiverName || flag.receiver_id}`
  }
  return `Flag ID: ${flag.id}`
}
