// src/screens/Approvals.js
// Pending registration approvals — Owner / HR only

import { getPendingRegistrations, approveRegistration, rejectRegistration, listenPendingRegistrations } from '../firebase/db.js'

export function renderApprovals(container, session) {
  container.innerHTML = `
    <div class="page">
      <h2 style="font-size:1.2rem;color:#fff;margin-bottom:4px;">Pending Approvals</h2>
      <p class="text-dim text-sm" style="margin-bottom:24px;">Staff who have requested access</p>
      <div id="approvals-list"></div>
    </div>
  `

  const listEl = container.querySelector('#approvals-list')

  const unsub = listenPendingRegistrations((pending) => {
    if (pending.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state">
          <div class="icon">✅</div>
          <p class="text-dim">No pending requests</p>
        </div>
      `
      return
    }

    listEl.innerHTML = pending.map((reg) => `
      <div class="card" style="margin-bottom:12px;" data-id="${reg.id}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
          <div>
            <p style="color:#fff;font-weight:600;margin-bottom:2px;">${reg.name}</p>
            <p class="text-dim text-sm">${reg.email}</p>
          </div>
          <span class="badge" style="background:rgba(201,168,76,0.15);color:var(--gold);border:1px solid rgba(201,168,76,0.3);font-size:0.7rem;padding:4px 10px;border-radius:20px;">
            ${reg.role}
          </span>
        </div>
        <p class="text-dim text-sm" style="margin-bottom:16px;">Outlet: <span style="color:var(--text-primary);">${reg.outlet}</span> &nbsp;·&nbsp; Requested: <span style="color:var(--text-primary);">${timeAgo(reg.submitted_at)}</span></p>
        <div class="flex gap-8">
          <button class="btn btn-primary btn-approve" data-id="${reg.id}" style="flex:1;height:40px;font-size:0.85rem;">
            Approve
          </button>
          <button class="btn btn-ghost btn-reject" data-id="${reg.id}" style="flex:1;height:40px;font-size:0.85rem;border:1px solid rgba(255,80,80,0.3);color:#ff6b6b;">
            Reject
          </button>
        </div>
      </div>
    `).join('')

    listEl.querySelectorAll('.btn-approve').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id  = btn.dataset.id
        const reg = pending.find((r) => r.id === id)
        btn.disabled = true
        btn.textContent = 'Approving…'
        await approveRegistration(id, reg, session.name)
      })
    })

    listEl.querySelectorAll('.btn-reject').forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.id
        btn.disabled = true
        btn.textContent = 'Rejecting…'
        await rejectRegistration(id, session.name)
      })
    })
  })

  // Clean up listener when navigating away
  container._cleanup = unsub
}

function timeAgo(ts) {
  const diff = Date.now() - ts
  const mins = Math.floor(diff / 60000)
  if (mins < 1)  return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24)  return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}
