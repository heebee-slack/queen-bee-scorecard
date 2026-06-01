/**
 * Heebee Bean System — Google Apps Script
 * gas/Code.gs
 *
 * All scheduled jobs that run against Firebase REST API + Slack webhooks.
 * Deploy as standalone Apps Script project.
 * Set triggers in Apps Script > Triggers panel.
 *
 * SETUP:
 * 1. Script Properties → Add:
 *    FIREBASE_URL          = https://your-project.firebaseio.com
 *    FIREBASE_AUTH_SECRET  = your-firebase-database-secret (from Project Settings > Service accounts > Database secrets)
 *    SLACK_WEBHOOK_GENERAL = https://hooks.slack.com/services/...
 *    SLACK_WEBHOOK_HR      = https://hooks.slack.com/services/...
 */

// ─── CONFIG ──────────────────────────────────────────────────

function getProps() {
  const props = PropertiesService.getScriptProperties()
  return {
    FB_URL:    props.getProperty('FIREBASE_URL'),
    FB_SECRET: props.getProperty('FIREBASE_AUTH_SECRET'),
    WH_GEN:    props.getProperty('SLACK_WEBHOOK_GENERAL'),
    WH_HR:     props.getProperty('SLACK_WEBHOOK_HR')
  }
}

// ─── FIREBASE HELPERS ─────────────────────────────────────────

function fbGet(path) {
  const { FB_URL, FB_SECRET } = getProps()
  const url = `${FB_URL}/${path}.json?auth=${FB_SECRET}`
  const resp = UrlFetchApp.fetch(url, { method: 'get', muteHttpExceptions: true })
  return JSON.parse(resp.getContentText())
}

function fbSet(path, data) {
  const { FB_URL, FB_SECRET } = getProps()
  const url = `${FB_URL}/${path}.json?auth=${FB_SECRET}`
  UrlFetchApp.fetch(url, {
    method: 'put',
    contentType: 'application/json',
    payload: JSON.stringify(data),
    muteHttpExceptions: true
  })
}

function fbUpdate(path, data) {
  const { FB_URL, FB_SECRET } = getProps()
  const url = `${FB_URL}/${path}.json?auth=${FB_SECRET}`
  UrlFetchApp.fetch(url, {
    method: 'patch',
    contentType: 'application/json',
    payload: JSON.stringify(data),
    muteHttpExceptions: true
  })
}

function fbPush(path, data) {
  const { FB_URL, FB_SECRET } = getProps()
  const url = `${FB_URL}/${path}.json?auth=${FB_SECRET}`
  UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(data),
    muteHttpExceptions: true
  })
}

// ─── SLACK HELPERS ────────────────────────────────────────────

function slackPost(webhookUrl, text) {
  UrlFetchApp.fetch(webhookUrl, {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({ text }),
    muteHttpExceptions: true
  })
}

function monthKey(date) {
  date = date || new Date()
  return Utilities.formatDate(date, 'Asia/Kolkata', 'yyyy-MM')
}

// ─── JOB 1: Monthly Leaderboard Reset ────────────────────────
// Trigger: 1st of every month at 12:01am IST
// Action: archive previous month, clear monthly_points, reset escalation counters

function runMonthlyReset() {
  const { WH_GEN } = getProps()
  const now   = new Date()
  const month = monthKey(now)

  // Archive previous month's points (for history)
  const prevDate = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const prevMonth = monthKey(prevDate)
  const prevPoints = fbGet(`monthly_points/${prevMonth}`)
  if (prevPoints) {
    fbSet(`archive/monthly_points/${prevMonth}`, prevPoints)
  }

  // Reset monthly escalation counters (DB per offense per employee resets monthly)
  fbSet(`offense_escalation`, null)

  Logger.log(`Monthly reset done for ${month}`)
}

// ─── JOB 2: Open Voting Window ────────────────────────────────
// Trigger: 28th of every month at 9:00am IST
// Action: set config/voting_open = true, calculate top 5, post Slack

function openVotingWindow() {
  const { WH_GEN } = getProps()
  const month = monthKey()

  // Set voting open
  fbUpdate('config', { voting_open: true })

  // Calculate top 5 for nominations
  const pointsMap = fbGet(`monthly_points/${month}`)
  if (!pointsMap) return

  const ranked = Object.entries(pointsMap)
    .map(([id, v]) => ({ id, pts: v.net_points || v.points || 0 }))
    .sort((a, b) => b.pts - a.pts)
    .slice(0, 5)
    .map((e) => e.id)

  const existing = fbGet(`nominations/${month}`) || {}
  fbUpdate(`nominations/${month}`, {
    auto: ranked,
    wildcard: existing.wildcard || [],
    disqualified: existing.disqualified || []
  })

  slackPost(WH_GEN,
    `🗳️ *Bean of the Month voting is now open!*\nTop 5 nominees have been selected. Vote for your pick before midnight on the last day of ${month}. One vote only — anonymous!`
  )

  Logger.log(`Voting opened for ${month}`)
}

// ─── JOB 3: Voting Reminder ───────────────────────────────────
// Trigger: 30th of every month at 6:00pm IST

function sendVotingReminder() {
  const { WH_GEN } = getProps()
  slackPost(WH_GEN,
    `⏰ *Reminder: Bean of the Month voting closes tonight at midnight!* Cast your vote if you haven't yet.`
  )
}

// ─── JOB 4: Close Voting + Announce Winner ────────────────────
// Trigger: 1st of every month at 12:00am IST (runs BEFORE runMonthlyReset)

function closeVotingAndAnnounce() {
  const { WH_GEN } = getProps()

  // Use previous month (we're now on 1st of new month)
  const now = new Date()
  const prevDate = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const month = monthKey(prevDate)

  // Close voting
  fbUpdate('config', { voting_open: false })

  // Tally votes
  const votes = fbGet(`votes/${month}`)
  if (!votes) {
    Logger.log('No votes found for ' + month)
    return
  }

  const tally = {}
  Object.values(votes).forEach((nomineeId) => {
    if (typeof nomineeId === 'string') tally[nomineeId] = (tally[nomineeId] || 0) + 1
  })

  const winnerId = Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0]
  if (!winnerId) return

  const employee = fbGet(`employees/${winnerId}`)
  const winnerName = employee?.name || winnerId

  // Store result
  fbUpdate(`votes/${month}`, { results: tally, winner: winnerId })

  slackPost(WH_GEN,
    `🏆 *Bean of the Month — ${month}*\n\nCongratulations *${winnerName}*! 🎉 You've been voted this month's standout. Well deserved. ☕`
  )

  Logger.log(`Bean of Month winner: ${winnerName} for ${month}`)
}

// ─── JOB 5: Quarterly Brew Star ───────────────────────────────
// Trigger: Last day of each quarter (Mar 31, Jun 30, Sep 30, Dec before Diwali)

function announceBrewStar() {
  const { WH_GEN } = getProps()
  const now = new Date()

  // Determine which months are in this quarter
  const qStartMonth = Math.floor(now.getMonth() / 3) * 3
  const months = [0, 1, 2].map((offset) => {
    const d = new Date(now.getFullYear(), qStartMonth + offset, 1)
    return monthKey(d)
  })

  // Sum vault points earned during this quarter
  const employees = fbGet('employees') || {}
  const quarterTotals = {}

  months.forEach((m) => {
    const monthPoints = fbGet(`monthly_points/${m}`) || {}
    Object.entries(monthPoints).forEach(([empId, data]) => {
      quarterTotals[empId] = (quarterTotals[empId] || 0) + (data.points || 0)
    })
  })

  const winner = Object.entries(quarterTotals).sort((a, b) => b[1] - a[1])[0]
  if (!winner) return

  const emp = fbGet(`employees/${winner[0]}`)
  const winnerName = emp?.name || winner[0]
  const qLabel = `Q${Math.floor(now.getMonth() / 3) + 1} ${now.getFullYear()}`

  slackPost(WH_GEN,
    `⭐ *Brew Star — ${qLabel}*\n\n*${winnerName}* topped the vault for the quarter with ${winner[1]} pts. You've earned it. Recognition coming your way.`
  )

  fbPush('brew_stars', { winner_id: winner[0], quarter: qLabel, pts: winner[1], timestamp: Date.now() })
}

// ─── JOB 6: Diwali Grand Award + Vault Reset ─────────────────
// Trigger: Manual run on Diwali date (set in config.diwali_date)

function runDiwaliGrandAward() {
  const { WH_GEN } = getProps()

  const employees = fbGet('employees') || {}
  const vaults = {}

  Object.keys(employees).forEach((empId) => {
    const vault = fbGet(`vault/${empId}`)
    if (vault) vaults[empId] = vault.net || 0
  })

  const winner = Object.entries(vaults).sort((a, b) => b[1] - a[1])[0]
  if (!winner) return

  const emp = fbGet(`employees/${winner[0]}`)
  const winnerName = emp?.name || winner[0]

  slackPost(WH_GEN,
    `💎 *Diwali Grand Award*\n\nAfter a full year of earning, *${winnerName}* takes the Diwali Grand Award with ${winner[1]} net pts. Biggest recognition of the year. Congratulations! 🪔`
  )

  // Archive + reset all vaults
  const year = new Date().getFullYear()
  fbSet(`archive/vault/${year}`, vaults)
  Object.keys(employees).forEach((empId) => {
    fbSet(`vault/${empId}`, { total_earned: 0, total_deducted: 0, net: 0, last_reset_date: new Date().toISOString() })
  })

  fbPush('diwali_awards', { winner_id: winner[0], year, pts: winner[1], timestamp: Date.now() })
  Logger.log(`Diwali Grand Award: ${winnerName}`)
}

// ─── JOB 7: Daily Bias Check ──────────────────────────────────
// Trigger: Daily at 6:00pm IST
// Check for anti-bias flags and post to #hr

function runDailyBiasCheck() {
  const { WH_HR } = getProps()
  const month = monthKey()
  const awards = fbGet('awards') || {}

  const now = Date.now()
  const monthStart = new Date()
  monthStart.setDate(1); monthStart.setHours(0, 0, 0, 0)

  // Filter to this month's awards
  const thisMonth = Object.values(awards).filter((a) => a.timestamp > monthStart.getTime())

  // Check concentration per giver
  const totalByGiver = {}
  const toReceiverByGiver = {}

  thisMonth.forEach(({ giver_id, receiver_id, points_value }) => {
    totalByGiver[giver_id] = (totalByGiver[giver_id] || 0) + points_value
    const key = `${giver_id}::${receiver_id}`
    toReceiverByGiver[key] = (toReceiverByGiver[key] || 0) + points_value
  })

  Object.entries(toReceiverByGiver).forEach(([key, pts]) => {
    const [giver_id, receiver_id] = key.split('::')
    const total = totalByGiver[giver_id] || 0
    if (total > 0 && pts / total > 0.6) {
      const pct = Math.round(pts / total * 100)
      slackPost(WH_HR,
        `🚩 *Bias Flag — Positive Beans*\nGiver ${giver_id} has directed ${pct}% of awards this month to ${receiver_id}.\n\n💡 Review before acting.`
      )
    }
  })
}

// ─── MANUAL SEED: Pre-load action menu ───────────────────────
// Run once from Apps Script editor to seed actions

function seedActionMenu() {
  const actions = [
    { id: 'act_01', name: 'Daily Task Completion',     applicable_bean_tier: 'any',    active: true },
    { id: 'act_02', name: 'Perfect Attendance',        applicable_bean_tier: 'any',    active: true },
    { id: 'act_03', name: 'Upsell Achievement',        applicable_bean_tier: 'silver', active: true },
    { id: 'act_04', name: 'Training Completion',       applicable_bean_tier: 'any',    active: true },
    { id: 'act_05', name: 'Customer Recovery Handle',  applicable_bean_tier: 'silver', active: true },
    { id: 'act_06', name: 'Outlet Opening Standard',   applicable_bean_tier: 'any',    active: true },
    { id: 'act_07', name: 'Special Initiative',        applicable_bean_tier: 'gold',   active: true }
  ]
  actions.forEach((a) => fbSet(`action_menu/${a.id}`, a))
  Logger.log('Action menu seeded ✅')
}

// ─── MANUAL SEED: Pre-load offense menu ──────────────────────

function seedOffenseMenu() {
  const offenses = [
    { id: 'off_01', name: 'Late Arrival',            base_db: 1,  escalation: 'double', submission_cap: 8,  active: true },
    { id: 'off_02', name: 'No-Show No Notice',       base_db: 5,  escalation: 'double', submission_cap: 20, active: true },
    { id: 'off_03', name: 'Negligence',              base_db: 2,  escalation: 'double', submission_cap: 16, active: true },
    { id: 'off_04', name: 'Duty Denial',             base_db: 3,  escalation: 'double', submission_cap: 24, active: true },
    { id: 'off_05', name: 'Misconduct',              base_db: 4,  escalation: 'double', submission_cap: 32, active: true },
    { id: 'off_06', name: 'Serious/Insubordination', base_db: 10, escalation: 'double', submission_cap: 40, active: true }
  ]
  offenses.forEach((o) => fbSet(`offense_menu/${o.id}`, o))
  Logger.log('Offense menu seeded ✅')
}

// ─── MANUAL SEED: Initial config ─────────────────────────────

function seedConfig() {
  fbSet('config', {
    db_toggle:        false,
    voting_open:      false,
    current_quarter:  'Q1',
    diwali_date:      '2026-10-20',
    system_version:   '1.0'
  })
  Logger.log('Config seeded ✅')
}
