# GAS Trigger Schedule — Heebee Bean System

Set these triggers in Google Apps Script > Triggers panel after deploying Code.gs.

| Function | Type | When | Time |
|---|---|---|---|
| `runMonthlyReset` | Month timer | Day 1 of every month | 12:01am IST |
| `openVotingWindow` | Month timer | Day 28 of every month | 9:00am IST |
| `sendVotingReminder` | Month timer | Day 30 of every month | 6:00pm IST |
| `closeVotingAndAnnounce` | Month timer | Day 1 of every month | 12:00am IST (before reset) |
| `announceBrewStar` | Month timer | Mar 31 / Jun 30 / Sep 30 / Dec (custom) | 9:00am IST |
| `runDiwaliGrandAward` | Manual | Diwali date only | Owner runs manually |
| `runDailyBiasCheck` | Day timer | Every day | 6:00pm IST |

## One-time setup functions (run manually from editor once)
- `seedActionMenu()` — loads 7 default actions into Firebase
- `seedOffenseMenu()` — loads 6 default offenses into Firebase
- `seedConfig()` — sets initial config values (db_toggle: false etc.)

## Script Properties to set
In Apps Script → Project Settings → Script Properties:
- `FIREBASE_URL` — e.g. `https://heebee-beans-default-rtdb.firebaseio.com`
- `FIREBASE_AUTH_SECRET` — from Firebase Console → Project Settings → Service Accounts → Database secrets
- `SLACK_WEBHOOK_GENERAL` — Incoming Webhook URL for #general
- `SLACK_WEBHOOK_HR` — Incoming Webhook URL for #hr
