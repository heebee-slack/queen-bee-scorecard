// src/firebase/auth.js
// WebAuthn (Face ID / Fingerprint) + 4-digit PIN fallback
// Session stored in localStorage as hb_bs_session
// Auto-logout 2hrs, ping every 30s

import { auth } from './config.js'
import { signInAnonymously, signOut } from 'firebase/auth'
import { getEmployee, upsertEmployee } from './db.js'

const SESSION_KEY   = 'hb_bs_session'
const SESSION_TTL   = 2 * 60 * 60 * 1000  // 2 hours ms
const PING_INTERVAL = 30 * 1000            // 30 seconds

// ─── SESSION ─────────────────────────────────────────────────

export function saveSession(employee) {
  const session = { ...employee, loginAt: Date.now() }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export function loadSession() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const session = JSON.parse(raw)
    if (Date.now() - session.loginAt > SESSION_TTL) {
      clearSession()
      return null
    }
    return session
  } catch {
    return null
  }
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}

export function pingSession() {
  const session = loadSession()
  if (session) {
    session.loginAt = Date.now()
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  }
}

export function startSessionPing() {
  return setInterval(pingSession, PING_INTERVAL)
}

// ─── PIN AUTH ────────────────────────────────────────────────

// Simple SHA-256 hash of 4-digit PIN
async function hashPin(pin) {
  const encoder = new TextEncoder()
  const data    = encoder.encode(pin)
  const hashBuf = await crypto.subtle.digest('SHA-256', data)
  const hashArr = Array.from(new Uint8Array(hashBuf))
  return hashArr.map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function loginWithPin(email, pin) {
  // 1. Get employee by email from Firebase
  // NOTE: In production, index employees by email for fast lookup
  const { getAllEmployees } = await import('./db.js')
  const all = await getAllEmployees()
  const employee = Object.entries(all)
    .map(([id, v]) => ({ id, ...v }))
    .find((e) => e.email === email && e.active !== false)

  if (!employee) throw new Error('Employee not found')

  const pinHash = await hashPin(pin)
  if (employee.pin_hash !== pinHash) throw new Error('Incorrect PIN')

  saveSession(employee)
  return employee
}

export async function setPinHash(employeeId, pin) {
  const pinHash = await hashPin(pin)
  await upsertEmployee(employeeId, { pin_hash: pinHash })
}

// ─── WEBAUTHN ────────────────────────────────────────────────

export function isWebAuthnAvailable() {
  return !!(window.PublicKeyCredential && navigator.credentials)
}

// Register biometric credential (called after first PIN login)
export async function registerWebAuthn(employee) {
  if (!isWebAuthnAvailable()) return false

  try {
    const challenge = crypto.getRandomValues(new Uint8Array(32))
    const userId    = new TextEncoder().encode(employee.id)

    const credential = await navigator.credentials.create({
      publicKey: {
        challenge,
        rp:   { name: 'Heebee Bean System' },
        user: { id: userId, name: employee.email, displayName: employee.name },
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }],
        authenticatorSelection: {
          authenticatorAttachment: 'platform',
          userVerification: 'required'
        },
        timeout: 60000,
        attestation: 'none'
      }
    })

    if (credential) {
      // Store credential ID in employee record
      await upsertEmployee(employee.id, {
        webauthn_id: bufferToBase64(credential.rawId)
      })
      return true
    }
    return false
  } catch (err) {
    console.warn('WebAuthn registration failed, using PIN only:', err.message)
    return false
  }
}

// Authenticate with saved biometric
export async function loginWithWebAuthn(employee) {
  if (!isWebAuthnAvailable() || !employee.webauthn_id) return false

  try {
    const challenge    = crypto.getRandomValues(new Uint8Array(32))
    const credentialId = base64ToBuffer(employee.webauthn_id)

    const assertion = await navigator.credentials.get({
      publicKey: {
        challenge,
        allowCredentials: [{ type: 'public-key', id: credentialId }],
        userVerification: 'required',
        timeout: 60000
      }
    })

    if (assertion) {
      saveSession(employee)
      return employee
    }
    return false
  } catch (err) {
    console.warn('WebAuthn auth failed, fall back to PIN:', err.message)
    return false
  }
}

// ─── HELPERS ─────────────────────────────────────────────────

function bufferToBase64(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)))
}

function base64ToBuffer(base64) {
  const binary = atob(base64)
  const buffer = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) buffer[i] = binary.charCodeAt(i)
  return buffer.buffer
}

export function logout() {
  clearSession()
}
