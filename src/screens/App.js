// src/screens/App.js
// Post-login shell: renders nav bar + routes to screens by role

import { isReceiver, isGiver, isAdmin, isHR, isOwner } from '../utils/beans.js'
import { listenPendingRegistrations } from '../firebase/db.js'
import { renderDashboard }   from './Dashboard.js'
import { renderLeaderboard } from './Leaderboard.js'
import { renderAwardPanel }  from './AwardPanel.js'
import { renderAuditPage }   from './AuditPage.js'
import { renderApprovals }   from './Approvals.js'

export function renderApp(container, session, config, onLogout) {
  const role  = session.role
  const dbOn  = config.db_toggle === true

  // Build nav items based on role
  const navItems = buildNav(role, dbOn)

  container.innerHTML = `
    <div id="screen-container"></div>
    <nav class="nav-bar" id="nav-bar">
      ${navItems.map(({ id, icon, label }) => `
        <div class="nav-item" data-screen="${id}">
          ${icon}
          <span>${label}</span>
        </div>
      `).join('')}
    </nav>
  `

  const screenContainer = container.querySelector('#screen-container')
  let activeScreen = navItems[0].id

  function navigate(screenId) {
    activeScreen = screenId
    container.querySelectorAll('.nav-item').forEach((el) => {
      el.classList.toggle('active', el.dataset.screen === screenId)
    })
    loadScreen(screenId)
  }

  function loadScreen(id) {
    screenContainer.innerHTML = ''
    switch (id) {
      case 'dashboard':   renderDashboard(screenContainer, session, config, { onLogout, navigate }); break
      case 'leaderboard': renderLeaderboard(screenContainer, session, config); break
      case 'award':       renderAwardPanel(screenContainer, session, config); break
      case 'audit':       renderAuditPage(screenContainer, session, config); break
      case 'approvals':   renderApprovals(screenContainer, session); break
      default:
        screenContainer.innerHTML = `
          <div class="page">
            <div class="empty-state">
              <div class="icon">🚧</div>
              <p class="text-dim">This screen is coming in a future phase.</p>
            </div>
          </div>
        `
    }
  }

  // Nav click handlers
  container.querySelectorAll('.nav-item').forEach((el) => {
    el.addEventListener('click', () => navigate(el.dataset.screen))
  })

  // Load default screen
  navigate(navItems[0].id)

  // Live badge for pending approvals (Owner/HR only)
  if (isOwner(role) || isHR(role)) {
    listenPendingRegistrations((pending) => {
      const configNav = container.querySelector('.nav-item[data-screen="approvals"]')
      if (!configNav) return
      const existing = configNav.querySelector('.pending-badge')
      if (existing) existing.remove()
      if (pending.length > 0) {
        const badge = document.createElement('span')
        badge.className = 'pending-badge'
        badge.textContent = pending.length
        configNav.appendChild(badge)
      }
    })
  }
}

// ─── NAV BUILDER ─────────────────────────────────────────────

function buildNav(role, dbOn) {
  const base = [
    { id: 'dashboard',   icon: dashIcon(),   label: 'Home'   },
    { id: 'leaderboard', icon: lbIcon(),     label: 'Board'  }
  ]

  if (isGiver(role)) {
    base.push({ id: 'award', icon: awardIcon(), label: 'Award' })
  }

  if (isHR(role) || isOwner(role)) {
    base.push({ id: 'audit', icon: auditIcon(), label: 'Audit' })
  }

  // Approvals for owners and HR
  if (isOwner(role) || isHR(role)) {
    base.push({ id: 'approvals', icon: approvalsIcon(), label: 'Approvals' })
  }

  return base
}

// ─── SVG ICONS ───────────────────────────────────────────────

function dashIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>`
}

function lbIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="12" width="4" height="9" rx="1"/>
    <rect x="10" y="7" width="4" height="14" rx="1"/>
    <rect x="17" y="4" width="4" height="17" rx="1"/>
  </svg>`
}

function awardIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="10" r="6"/>
    <path d="M8.5 17.5L7 22h10l-1.5-4.5"/>
  </svg>`
}

function auditIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M9 11l3 3L22 4"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>`
}

function settingsIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
  </svg>`
}

function approvalsIcon() {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <polyline points="16 11 18 13 22 9"/>
  </svg>`
}
