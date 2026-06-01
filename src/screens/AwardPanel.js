// src/screens/AwardPanel.js
// Giver screen — select employee → bean type → action → quantity → submit

import { getAllEmployees, getActions, createAward, addMonthlyPoints, addVaultPoints, getAwardsByEmployee } from '../firebase/db.js'
import { BEAN_TIERS, ROLE_BEAN_PERMISSIONS, canGiveBean, isReceiver } from '../utils/beans.js'
import { notifyBeanAwarded } from '../utils/slack.js'
import { monthKey, todayKey } from '../utils/helpers.js'

export async function renderAwardPanel(container, session, config) {
  container.innerHTML = `
    <div class="page">
      <h1 style="font-size:1.4rem;margin-bottom:4px;">Award Beans</h1>
      <p class="text-dim text-sm mb-16">Select a team member to recognise</p>
      <div id="award-content">
        <div class="loading-center" style="min-height:40vh;"><div class="spinner"></div></div>
      </div>
    </div>
  `

  try {
    const [allEmployees, allActions] = await Promise.all([getAllEmployees(), getActions()])
    const receivers = Object.entries(allEmployees)
      .map(([id, v]) => ({ id, ...v }))
      .filter((e) => isReceiver(e.role) && e.active !== false)
      .sort((a, b) => a.name.localeCompare(b.name))

    const allowedBeans = ROLE_BEAN_PERMISSIONS[session.role] || []
    const activeActions = Object.entries(allActions)
      .map(([id, v]) => ({ id, ...v }))
      .filter((a) => a.active !== false)

    if (receivers.length === 0) {
      container.querySelector('#award-content').innerHTML = `
        <div class="empty-state" style="min-height:50vh;">
          <div style="font-size:2.5rem;margin-bottom:16px;">👥</div>
          <p style="color:var(--text-primary);margin-bottom:8px;">No staff to award yet</p>
          <p class="text-dim text-sm">Approve team registrations from the Approvals tab first.</p>
        </div>
      `
      return
    }

    renderStep1(receivers, allowedBeans, activeActions)
  } catch (err) {
    container.querySelector('#award-content').innerHTML = `
      <p class="text-dim text-sm text-center">Failed to load. Check connection.</p>
    `
  }

  function renderStep1(receivers, allowedBeans, activeActions) {
    const content = container.querySelector('#award-content')
    let selected = { receiver: null, beanType: null, actionId: null, quantity: 1, reasonText: '' }

    content.innerHTML = `
      <!-- Step 1: Pick Employee -->
      <p class="section-header">Who are you recognising?</p>
      <input id="search-emp" class="input" type="text" placeholder="Search by name…" style="margin-bottom:10px;" />
      <div id="emp-list" style="max-height:200px;overflow-y:auto;margin-bottom:24px;border-radius:var(--radius-md);"></div>

      <!-- Step 2: Bean Type -->
      <p class="section-header">Bean Type</p>
      <div id="bean-type-list" style="display:grid;grid-template-columns:repeat(${allowedBeans.length > 2 ? 4 : allowedBeans.length},1fr);gap:10px;margin-bottom:24px;">
        ${allowedBeans.map((bt) => {
          const tier = BEAN_TIERS[bt]
          return `
            <div class="card bean-type-btn" data-type="${bt}"
              style="text-align:center;cursor:pointer;padding:16px 8px;border-radius:var(--radius-md);">
              <div style="font-size:1.6rem;margin-bottom:6px;">${tier.icon}</div>
              <div style="font-size:0.72rem;color:var(--text-secondary);margin-bottom:4px;">${tier.label}</div>
              <div class="mono" style="font-size:0.78rem;color:var(--gold);">+${tier.pts}pt</div>
            </div>
          `
        }).join('')}
      </div>

      <!-- Step 3: Reason -->
      <p class="section-header">Reason <span style="color:var(--text-tertiary);font-weight:400;">(required)</span></p>
      <div id="action-list" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
        ${activeActions.map((a) => `
          <div class="action-btn" data-id="${a.id}"
            style="cursor:pointer;padding:8px 14px;border-radius:20px;border:1px solid var(--border);
            background:var(--glass-bg);font-size:0.82rem;color:var(--text-secondary);transition:all 0.2s;">
            ${a.name}
          </div>
        `).join('')}
      </div>
      <input id="inp-reason" class="input" type="text" placeholder="Optional extra note…" style="margin-bottom:24px;" />

      <!-- Step 4: Quantity -->
      <p class="section-header">How many beans?</p>
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:28px;">
        <button class="btn btn-ghost" id="btn-minus" style="width:48px;height:48px;padding:0;font-size:1.4rem;flex-shrink:0;">−</button>
        <span class="mono" id="qty-display" style="font-size:2rem;color:var(--gold);flex:1;text-align:center;">1</span>
        <button class="btn btn-ghost" id="btn-plus" style="width:48px;height:48px;padding:0;font-size:1.4rem;flex-shrink:0;">+</button>
      </div>

      <p id="award-error" class="text-sm hidden" style="color:var(--red);margin-bottom:12px;text-align:center;"></p>

      <button class="btn btn-primary w-full" id="btn-submit" style="height:54px;font-size:1rem;" disabled>
        Award Beans
      </button>
    `

    // ─── EMPLOYEE SEARCH ───────────────────────────────────
    const empList   = content.querySelector('#emp-list')
    const searchInp = content.querySelector('#search-emp')
    let filteredReceivers = receivers

    function renderEmployeeList() {
      empList.innerHTML = filteredReceivers.map((emp) => `
        <div class="lb-row emp-row" data-id="${emp.id}" style="cursor:pointer;margin-bottom:6px;${selected.receiver?.id === emp.id ? 'border-color:var(--gold);background:rgba(201,168,76,0.06);' : ''}">
          <div style="flex:1;">
            <p style="font-size:0.9rem;">${emp.name}</p>
            <p class="text-xs text-dim">${emp.role} · ${emp.outlet}</p>
          </div>
          ${selected.receiver?.id === emp.id ? '<span class="text-gold">✓</span>' : ''}
        </div>
      `).join('')

      empList.querySelectorAll('.emp-row').forEach((row) => {
        row.addEventListener('click', () => {
          selected.receiver = receivers.find((e) => e.id === row.dataset.id)
          renderEmployeeList()
          checkSubmit()
        })
      })
    }

    searchInp.addEventListener('input', () => {
      const q = searchInp.value.toLowerCase()
      filteredReceivers = q ? receivers.filter((e) => e.name.toLowerCase().includes(q)) : receivers
      renderEmployeeList()
    })

    renderEmployeeList()

    // ─── BEAN TYPE SELECTION ───────────────────────────────
    content.querySelectorAll('.bean-type-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        selected.beanType = btn.dataset.type
        content.querySelectorAll('.bean-type-btn').forEach((b) => {
          b.style.borderColor = b.dataset.type === selected.beanType ? 'var(--gold)' : 'var(--border)'
          b.style.background  = b.dataset.type === selected.beanType ? 'rgba(201,168,76,0.1)' : 'var(--glass-bg)'
        })
        checkSubmit()
      })
    })

    // ─── ACTION SELECTION ──────────────────────────────────
    content.querySelectorAll('.action-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        selected.actionId = btn.dataset.id
        content.querySelectorAll('.action-btn').forEach((b) => {
          b.style.background   = b.dataset.id === selected.actionId ? 'rgba(201,168,76,0.15)' : ''
          b.style.borderColor  = b.dataset.id === selected.actionId ? 'rgba(201,168,76,0.4)' : ''
          b.style.color        = b.dataset.id === selected.actionId ? 'var(--gold)' : ''
        })
        checkSubmit()
      })
    })

    // ─── QUANTITY ─────────────────────────────────────────
    const qtyDisplay = content.querySelector('#qty-display')
    const btnMinus   = content.querySelector('#btn-minus')
    const btnPlus    = content.querySelector('#btn-plus')

    function getMaxQty() {
      if (!selected.beanType) return 10
      return BEAN_TIERS[selected.beanType].dailyCap
    }

    btnMinus.addEventListener('click', () => {
      if (selected.quantity > 1) { selected.quantity--; qtyDisplay.textContent = selected.quantity }
    })
    btnPlus.addEventListener('click', () => {
      if (selected.quantity < getMaxQty()) { selected.quantity++; qtyDisplay.textContent = selected.quantity }
    })

    // ─── SUBMIT ───────────────────────────────────────────
    const btnSubmit = content.querySelector('#btn-submit')
    const errorEl   = content.querySelector('#award-error')

    function checkSubmit() {
      btnSubmit.disabled = !(selected.receiver && selected.beanType && selected.actionId)
    }

    btnSubmit.addEventListener('click', async () => {
      if (!selected.receiver || !selected.beanType || !selected.actionId) return
      btnSubmit.disabled = true
      btnSubmit.textContent = 'Awarding…'
      errorEl.classList.add('hidden')

      try {
        const tier      = BEAN_TIERS[selected.beanType]
        const pts       = tier.pts * selected.quantity
        const actionsMap = await getActions()
        const actionName = Object.values(actionsMap).find((a) => a.id === selected.actionId)

        await createAward({
          giver_id:    session.id,
          giver_name:  session.name,
          receiver_id: selected.receiver.id,
          bean_type:   selected.beanType,
          points_value: tier.pts,
          action_id:   selected.actionId,
          reason_text: content.querySelector('#inp-reason').value.trim(),
          outlet:      session.outlet,
          quantity:    selected.quantity
        })

        await addMonthlyPoints(selected.receiver.id, pts)
        await addVaultPoints(selected.receiver.id, pts)

        // Slack notification
        await notifyBeanAwarded({
          receiverName: selected.receiver.name,
          beanType:     selected.beanType,
          pts,
          giverName:    session.name,
          actionName:   selected.actionId
        })

        // Success state
        content.innerHTML = `
          <div class="text-center" style="padding:60px 20px;">
            <div style="font-size:3rem;margin-bottom:16px;">${tier.icon}</div>
            <h2 style="margin-bottom:8px;">${tier.label} Awarded!</h2>
            <p class="text-dim">+${pts} pts to <strong>${selected.receiver.name}</strong></p>
            <button class="btn btn-primary mt-24" id="btn-award-again">Award Another</button>
          </div>
        `
        content.querySelector('#btn-award-again').addEventListener('click', () => renderStep1(receivers, allowedBeans, activeActions))

      } catch (err) {
        errorEl.textContent = 'Failed to submit. Try again.'
        errorEl.classList.remove('hidden')
        btnSubmit.disabled = false
        btnSubmit.textContent = 'Award Beans'
        console.error(err)
      }
    })
  }
}
