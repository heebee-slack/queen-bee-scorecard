// src/utils/slack.js
// All Slack webhook calls — DMs via Slackbot, channel posts
// Called from both frontend (award submit) and GAS (scheduled)

const WEBHOOK_GENERAL = import.meta.env.VITE_SLACK_WEBHOOK_GENERAL
const WEBHOOK_HR      = import.meta.env.VITE_SLACK_WEBHOOK_HR

async function postToWebhook(webhookUrl, payload) {
  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
  } catch (err) {
    console.error('Slack webhook failed:', err)
  }
}

// ─── EMPLOYEE DM-STYLE MESSAGES (post to general, tagged) ────
// Note: True Slackbot DMs require Slack Bot token + chat.postMessage API.
// These helpers post to channels with @mention until bot token is configured.

export async function notifyBeanAwarded({ receiverName, beanType, pts, giverName, actionName }) {
  const { BEAN_TIERS } = await import('./beans.js')
  const tier = BEAN_TIERS[beanType]
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `${tier.icon} *${tier.label}* awarded to *${receiverName}* · +${pts} pts\n👤 From: ${giverName} · 📋 ${actionName}`
  })
}

export async function notifyPositionClimbed({ name, overtookName, newRank, ptsFromNext }) {
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `🎉 Yesss *${name}*! You just overtook *${overtookName}* and climbed to Position *#${newRank}* — only ${ptsFromNext} pts from #${newRank - 1}. Let's go!`
  })
}

export async function notifyPositionDropped({ name, overtookByName, currentRank, ptsBehind }) {
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `⚠️ *${overtookByName}* just moved ahead of *${name}* by ${ptsBehind} pts. Can you catch up and reclaim Position *#${currentRank}*?`
  })
}

export async function notifyVotingOpen(month) {
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `🗳️ *Bean of the Month voting is now open!*\nVote for your pick before midnight on the last day of ${month}. One vote per person — anonymous!`
  })
}

export async function notifyVotingReminder() {
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `⏰ *Reminder: Bean of the Month voting closes tonight at midnight!* Cast your vote if you haven't yet.`
  })
}

export async function notifyBeanOfMonth({ winnerName, month }) {
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `🏆 *Bean of the Month — ${month}*\n\nCongratulations *${winnerName}*! 🎉 You've been voted this month's standout. Well deserved. ☕`
  })
}

export async function notifyBrewStar({ winnerName, quarter }) {
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `⭐ *Brew Star — ${quarter}*\n\n*${winnerName}* topped the vault for the quarter. You've earned it. Recognition coming your way.`
  })
}

export async function notifyDiwaliGrandAward({ winnerName }) {
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `💎 *Diwali Grand Award*\n\nAfter a full year of earning, *${winnerName}* takes the Diwali Grand Award. Biggest recognition of the year. Congratulations! 🪔`
  })
}

export async function notifyWildcardAdded({ nomineeName }) {
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `⚡ Wildcard nomination added: *${nomineeName}* has been added to the Bean of the Month nominations.`
  })
  await postToWebhook(WEBHOOK_HR, {
    text: `⚡ *Wildcard nomination:* ${nomineeName} added to this month's nominees by Owner/CEO/COO.`
  })
}

// ─── HR PRIVATE CHANNEL ──────────────────────────────────────

export async function notifyHRBiasFlag({ giverName, receiverName, pct, outlet }) {
  await postToWebhook(WEBHOOK_HR, {
    text: `🚩 *Bias Flag — Positive Beans*\n*${giverName}* has directed ${pct}% of their bean awards this month to *${receiverName}* (${outlet}).\n\n💡 Review award log before acting. Observe first.`
  })
}

export async function notifyHRDBFlag({ employeeName, dbCount, level }) {
  const messages = {
    silent_flag:       `📋 *DB Note:* ${employeeName} has accumulated ${dbCount} DB this month. Logged for awareness.`,
    suggest_disqualify:`🚩 *DB Flag:* ${employeeName} has ${dbCount} DB this month — crosses suggested disqualification threshold (26+). Review before acting.`,
    owners_notified:   `🚨 *DB Alert:* ${employeeName} has ${dbCount} DB this month (51+). Owners have been notified. Strong suggestion to review.`,
    disciplinary:      `🔴 *Disciplinary Flag:* ${employeeName} has ${dbCount} DB this month (100+). Disciplinary review recommended.`
  }
  await postToWebhook(WEBHOOK_HR, { text: messages[level] || messages.silent_flag })
}

export async function notifyHRCeilingBreached({ giverName, receiverName, requestedDB, issuedDB, offenseName }) {
  await postToWebhook(WEBHOOK_HR, {
    text: `🚩 *DB Ceiling Hit*\n${giverName} attempted to issue ${requestedDB} DB for *${offenseName}* against ${receiverName}. Capped at ${issuedDB} DB (giver ceiling).\n\n💡 Remaining ${requestedDB - issuedDB} DB require senior confirmation.`
  })
}

export async function notifyHRDBIssuedToEmployee({ receiverName, offenseName, giverName, dbCount }) {
  // This is a DM-style — posts to general with employee tagged (until real DM bot)
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `*${receiverName}* — a conduct note has been recorded by *${giverName}*. Reason: ${offenseName} · ${dbCount} DB. Raise a dispute within 48hrs if incorrect.`
  })
}

export async function notifyDisputeOutcome({ employeeName, outcome, offenseName }) {
  const msg = outcome === 'cancelled'
    ? `✅ Your dispute for *${offenseName}* has been reviewed and the conduct note has been **cancelled**.`
    : `📋 Your dispute for *${offenseName}* has been reviewed and **upheld**.`
  await postToWebhook(WEBHOOK_GENERAL, {
    text: `${employeeName}: ${msg}`
  })
}
