# Heebee Bean System v1

Staff recognition, points, leaderboard, monthly + quarterly + annual rewards for ~70 employees across 4 outlets.

## Stack
- **Firebase Realtime DB** — points, leaderboard, real-time triggers
- **Firebase Auth + WebAuthn** — Face ID / Fingerprint + 4-digit PIN fallback
- **Google Apps Script** — scheduled jobs, Slack webhooks
- **GitHub Pages PWA** — all screens, mobile-first Safari optimised
- **Design System** — Heebee Luxury UI (glassmorphism, Nunito Sans, Space Mono)

## Build Phases

| Phase | Scope | Status |
|---|---|---|
| 1A | Firebase setup + Auth + WebAuthn + PIN login + session | TODO |
| 1B | Employee dashboard + leaderboard + trophy shelf + live feed | TODO |
| 1C | Giver award panel + action menu + Slack DMs | TODO |
| 2A | Nomination + voting + Bean of Month + Brew Star + Diwali | TODO |
| 2B | HR audit page + flag engine + suggestion cards | TODO |
| 2C | Dark Bean system (built, toggle OFF, invisible until flipped) | TODO |
| 2D | DB offense manager + appeals queue + HR nomination panel | TODO |
| 3  | Trigger Page | TODO |

## Outlets
- **SHB** — Sarabha Nagar
- **GHB** — Ghumar Mandi
- **JLD** — Jalandhar Model Town
- **POUR** — Pour by Heebee

## Quick Start

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Deploy to GitHub Pages
npm run deploy
```

## File Structure

```
heebee-bean-system/
├── public/               # Static assets, manifest, icons
│   ├── index.html        # PWA shell
│   ├── manifest.json     # PWA manifest
│   └── sw.js             # Service worker
├── src/
│   ├── firebase/
│   │   ├── config.js     # Firebase init (fill in your project credentials)
│   │   └── db.js         # DB read/write helpers
│   ├── screens/          # One file per screen (see SCREEN_MAP.md)
│   ├── components/       # Shared UI components
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Bean logic, points calc, date helpers
├── gas/
│   └── Code.gs           # Google Apps Script — all scheduled jobs
└── docs/
    ├── SCREEN_MAP.md
    ├── FIREBASE_STRUCTURE.md
    └── SLACK_EVENTS.md
```

## Environment

Copy `.env.example` to `.env` and fill in:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_DATABASE_URL=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_SLACK_WEBHOOK_GENERAL=
VITE_SLACK_WEBHOOK_HR=
```

## Spec

Full locked spec: `HEEBEE_BEAN_RATING_SYSTEM_SPEC_v1.md`

*Version 1.0 — May 2026*
