// src/screens/Register.js
// Self-registration — staff submit request, Owner/HR approves

import { submitRegistration } from '../firebase/db.js'
import { RECEIVER_ROLES, GIVER_ROLES, ADMIN_ROLES, OUTLETS } from '../utils/beans.js'

const ALL_ROLES = [...RECEIVER_ROLES, ...GIVER_ROLES, ...ADMIN_ROLES]

async function hashPin(pin) {
  const data    = new TextEncoder().encode(pin)
  const hashBuf = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuf)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

export function renderRegister(container, onBack) {
  container.innerHTML = `
    <div class="page" style="display:flex;flex-direction:column;justify-content:center;min-height:100dvh;padding:32px 24px;">

      <div class="text-center" style="margin-bottom:32px;">
        <img src="/logo-light.png" alt="Heebee Coffee" style="width:80px;height:80px;object-fit:contain;margin-bottom:12px;" />
        <h1 style="font-size:1.4rem;color:#fff;margin-bottom:4px;">Join the Team</h1>
        <p class="text-dim text-sm">Your manager will approve your account</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px;">

        <div>
          <p class="section-header">Full Name</p>
          <input id="reg-name" type="text" class="input" placeholder="e.g. Riya Sharma" autocomplete="name" />
        </div>

        <div>
          <p class="section-header">Work Email</p>
          <input id="reg-email" type="email" class="input" placeholder="you@heebeecoffee.com" inputmode="email" />
        </div>

        <div>
          <p class="section-header">Your Role</p>
          <select id="reg-role" class="input" style="appearance:none;-webkit-appearance:none;">
            <option value="">Select role…</option>
            ${ALL_ROLES.map((r) => `<option value="${r}">${r}</option>`).join('')}
          </select>
        </div>

        <div>
          <p class="section-header">Outlet</p>
          <select id="reg-outlet" class="input" style="appearance:none;-webkit-appearance:none;">
            <option value="">Select outlet…</option>
            ${OUTLETS.map((o) => `<option value="${o.id}">${o.name}</option>`).join('')}
          </select>
        </div>

        <div>
          <p class="section-header">Set Your 4-Digit PIN</p>
          <div class="flex gap-12 justify-center mt-8">
            <input type="tel" maxlength="1" class="pin-box" id="reg-pin-0" inputmode="numeric" />
            <input type="tel" maxlength="1" class="pin-box" id="reg-pin-1" inputmode="numeric" />
            <input type="tel" maxlength="1" class="pin-box" id="reg-pin-2" inputmode="numeric" />
            <input type="tel" maxlength="1" class="pin-box" id="reg-pin-3" inputmode="numeric" />
          </div>
        </div>

      </div>

      <p id="reg-error" class="text-sm text-center hidden mt-16" style="color:var(--red);"></p>
      <p id="reg-success" class="text-sm text-center hidden mt-16" style="color:#4caf8a;"></p>

      <button class="btn btn-primary w-full mt-24" id="btn-reg-submit" style="height:52px;">
        Submit Registration
      </button>
      <button class="btn btn-ghost w-full mt-8 text-sm" id="btn-reg-back">
        ← Back to Login
      </button>

    </div>
  `

  const nameEl    = container.querySelector('#reg-name')
  const emailEl   = container.querySelector('#reg-email')
  const roleEl    = container.querySelector('#reg-role')
  const outletEl  = container.querySelector('#reg-outlet')
  const pinInputs = [0,1,2,3].map((i) => container.querySelector(`#reg-pin-${i}`))
  const errEl     = container.querySelector('#reg-error')
  const successEl = container.querySelector('#reg-success')
  const btnSubmit = container.querySelector('#btn-reg-submit')

  // PIN auto-advance
  pinInputs.forEach((input, i) => {
    input.addEventListener('input', (e) => {
      const val = e.target.value.replace(/\D/g, '')
      e.target.value = val
      if (val && i < 3) pinInputs[i + 1].focus()
    })
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && i > 0) {
        pinInputs[i - 1].focus()
        pinInputs[i - 1].value = ''
      }
    })
  })

  container.querySelector('#btn-reg-back').addEventListener('click', onBack)

  btnSubmit.addEventListener('click', async () => {
    errEl.classList.add('hidden')

    const name   = nameEl.value.trim()
    const email  = emailEl.value.trim().toLowerCase()
    const role   = roleEl.value
    const outlet = outletEl.value
    const pin    = pinInputs.map((p) => p.value).join('')

    if (!name)              return showError('Enter your full name')
    if (!email.includes('@')) return showError('Enter a valid email')
    if (!role)              return showError('Select your role')
    if (!outlet)            return showError('Select your outlet')
    if (pin.length < 4)    return showError('Enter a 4-digit PIN')

    btnSubmit.disabled = true
    btnSubmit.textContent = 'Submitting…'

    try {
      const pin_hash = await hashPin(pin)
      await submitRegistration({ name, email, role, outlet, pin_hash })
      successEl.textContent = 'Request sent! Your manager will approve your account shortly.'
      successEl.classList.remove('hidden')
      btnSubmit.textContent = 'Submitted!'
      setTimeout(onBack, 3000)
    } catch (err) {
      showError('Something went wrong. Please try again.')
      btnSubmit.disabled = false
      btnSubmit.textContent = 'Submit Registration'
    }
  })

  function showError(msg) {
    errEl.textContent = msg
    errEl.classList.remove('hidden')
  }
}
