// src/screens/Login.js
// Phase 1A — PIN login with WebAuthn offer on success

import { loginWithPin, loginWithWebAuthn, registerWebAuthn, isWebAuthnAvailable } from '../firebase/auth.js'
import { getAllEmployees } from '../firebase/db.js'
import { renderRegister } from './Register.js'

export function renderLogin(container, onSuccess) {
  container.innerHTML = `
    <div class="page" style="display:flex;flex-direction:column;justify-content:center;min-height:100dvh;">

      <!-- Logo / Brand -->
      <div class="text-center" style="margin-bottom:40px;">
        <img src="/logo-light.png" alt="Heebee Coffee" style="width:120px;height:120px;object-fit:contain;margin-bottom:12px;" />
        <h1 style="font-size:1.6rem;color:#fff;margin-bottom:4px;">Heebee Beans</h1>
        <p class="text-dim text-sm">Staff Recognition System</p>
      </div>

      <!-- Email Input -->
      <div id="step-email">
        <p class="section-header">Your email</p>
        <input
          id="inp-email"
          type="email"
          inputmode="email"
          autocomplete="email"
          class="input"
          placeholder="you@heebeecoffee.com"
        />
        <button class="btn btn-primary w-full mt-16" id="btn-next" style="height:52px;">
          Continue
        </button>
      </div>

      <!-- Register link -->
      <div class="text-center mt-16">
        <button class="btn btn-ghost text-sm" id="btn-register" style="color:var(--text-secondary);">
          New here? Request access
        </button>
      </div>

      <!-- PIN Input (hidden initially) -->
      <div id="step-pin" class="hidden">
        <p class="section-header">Enter your 4-digit PIN</p>
        <div class="flex gap-12 justify-center mt-8 mb-16">
          <input type="tel" maxlength="1" class="pin-box" id="pin-0" inputmode="numeric" />
          <input type="tel" maxlength="1" class="pin-box" id="pin-1" inputmode="numeric" />
          <input type="tel" maxlength="1" class="pin-box" id="pin-2" inputmode="numeric" />
          <input type="tel" maxlength="1" class="pin-box" id="pin-3" inputmode="numeric" />
        </div>
        <p id="login-error" class="text-sm text-center hidden" style="color:var(--red);margin-bottom:12px;"></p>
        <button class="btn btn-ghost w-full text-sm" id="btn-back">← Change email</button>
      </div>

    </div>
  `

  // ─── STEP 1: EMAIL ───────────────────────────────────────
  const inpEmail  = container.querySelector('#inp-email')
  const btnNext   = container.querySelector('#btn-next')
  const stepEmail = container.querySelector('#step-email')
  const stepPin   = container.querySelector('#step-pin')
  const loginErr  = container.querySelector('#login-error')
  const btnBack   = container.querySelector('#btn-back')

  let currentEmail = ''

  btnNext.addEventListener('click', advanceToPin)
  inpEmail.addEventListener('keydown', (e) => { if (e.key === 'Enter') advanceToPin() })

  function advanceToPin() {
    const email = inpEmail.value.trim().toLowerCase()
    if (!email.includes('@')) {
      showError('Enter a valid email address')
      return
    }
    currentEmail = email
    stepEmail.classList.add('hidden')
    stepPin.classList.remove('hidden')
    container.querySelector('#pin-0').focus()

    // Try WebAuthn if available
    tryWebAuthn(email)
  }

  btnBack.addEventListener('click', () => {
    stepPin.classList.add('hidden')
    stepEmail.classList.remove('hidden')
    clearPins()
    hideError()
  })

  container.querySelector('#btn-register').addEventListener('click', () => {
    renderRegister(container, () => renderLogin(container, onSuccess))
  })

  // ─── STEP 2: PIN ─────────────────────────────────────────
  const pinInputs = [0,1,2,3].map((i) => container.querySelector(`#pin-${i}`))

  pinInputs.forEach((input, i) => {
    input.addEventListener('input', (e) => {
      const val = e.target.value.replace(/\D/g, '')
      e.target.value = val
      if (val && i < 3) pinInputs[i + 1].focus()
      if (i === 3 && val) attemptLogin()
    })
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && i > 0) {
        pinInputs[i - 1].focus()
        pinInputs[i - 1].value = ''
      }
    })
  })

  async function attemptLogin() {
    const pin = pinInputs.map((p) => p.value).join('')
    if (pin.length < 4) return
    disableInputs(true)
    hideError()
    try {
      const employee = await loginWithPin(currentEmail, pin)
      onSuccess(employee)
      // Offer WebAuthn enrollment if not already enrolled
      if (isWebAuthnAvailable() && !employee.webauthn_id) {
        setTimeout(() => offerWebAuthn(employee), 500)
      }
    } catch (err) {
      showError(err.message === 'Incorrect PIN' ? 'Incorrect PIN. Try again.' : 'Employee not found.')
      clearPins()
      pinInputs[0].focus()
    } finally {
      disableInputs(false)
    }
  }

  async function tryWebAuthn(email) {
    if (!isWebAuthnAvailable()) return
    try {
      const all = await getAllEmployees()
      const employee = Object.entries(all)
        .map(([id, v]) => ({ id, ...v }))
        .find((e) => e.email === email && e.webauthn_id && e.active !== false)
      if (!employee) return

      const result = await loginWithWebAuthn(employee)
      if (result) onSuccess(result)
    } catch { /* silent — fall back to PIN */ }
  }

  async function offerWebAuthn(employee) {
    const ok = confirm('Enable Face ID / Fingerprint for faster login?')
    if (!ok) return
    await registerWebAuthn(employee)
  }

  // ─── HELPERS ─────────────────────────────────────────────
  function showError(msg) {
    loginErr.textContent = msg
    loginErr.classList.remove('hidden')
  }
  function hideError() { loginErr.classList.add('hidden') }
  function clearPins() { pinInputs.forEach((p) => { p.value = '' }) }
  function disableInputs(v) { pinInputs.forEach((p) => { p.disabled = v }) }
}
