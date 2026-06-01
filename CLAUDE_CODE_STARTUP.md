# Claude Code — Heebee Bean System Startup Prompt

Paste this at the start of every Claude Code session:

---

You are building the **Heebee Bean System v1** — a staff recognition PWA for Heebee Coffee.

## Ground truth
- Full spec: `HEEBEE_BEAN_RATING_SYSTEM_SPEC_v1.md`
- Screen map: `docs/SCREEN_MAP.md`
- Firebase structure: `docs/FIREBASE_STRUCTURE.md`
- GAS triggers: `docs/GAS_TRIGGERS.md`

## Stack
- Vanilla JS + Vite (no React, no TypeScript) — mobile-first, Safari optimised
- Firebase Realtime DB (not Firestore)
- GAS for scheduled jobs (`gas/Code.gs`)
- GitHub Pages deployment (`npm run deploy`)
- Session: `localStorage` key `hb_bs_session`, 2hr TTL, 30s ping
- Design system: Heebee Luxury UI — glassmorphism, Nunito Sans 200/300/400/600, Space Mono, gold `#C9A84C`, dark bg `#0a0a0f`

## What's already scaffolded
- Firebase config, db.js, auth.js (WebAuthn + PIN)
- utils/beans.js — all constants, role rules, escalation logic, bias checks
- utils/helpers.js, utils/slack.js
- styles/main.css — full design system
- screens/Login.js, Dashboard.js, Leaderboard.js, AwardPanel.js, AuditPage.js (partial)
- gas/Code.gs — all 7 scheduled jobs + seed functions
- PWA shell: public/index.html, manifest.json, sw.js

## Phase currently building
**Phase [INSERT PHASE]** — [INSERT SCOPE]

## Key rules
- NO React, NO TypeScript, NO external UI libraries
- Every screen renders into a `container` element passed as first argument
- Navigation via `src/screens/App.js` → `navigate(screenId)`
- Dark Bean system code always exists in codebase — just hidden behind `config.db_toggle === true` check
- System NEVER auto-disqualifies anyone — all human decisions only
- HR always makes final calls, always logged with name + timestamp + reason

Continue from where we left off.
