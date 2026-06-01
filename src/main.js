// src/main.js
// App entry — auth gate → route to correct screen

import './styles/main.css'
import { auth } from './firebase/config.js'
import { signInAnonymously } from 'firebase/auth'
import { loadSession, startSessionPing, logout } from './firebase/auth.js'
import { getConfig } from './firebase/db.js'
import { renderLogin } from './screens/Login.js'
import { renderApp } from './screens/App.js'

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}

async function init() {
  // Sign in anonymously so Firebase DB rules are satisfied
  try { await signInAnonymously(auth) } catch {}

  const app = document.getElementById('app')

  // Check session
  const session = loadSession()
  if (!session) {
    renderLogin(app, onLoginSuccess)
    return
  }

  // Start ping to keep session alive
  startSessionPing()

  // Load global config (dark bean toggle etc.)
  let config = {}
  try { config = await getConfig() } catch {}

  renderApp(app, session, config, onLogout)
}

function onLoginSuccess(employee) {
  startSessionPing()
  init()
}

function onLogout() {
  logout()
  init()
}

init()
