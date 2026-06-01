// src/utils/beans.js
// Bean tier definitions, role rules, daily caps, points values

// ─── BEAN TIERS ──────────────────────────────────────────────

export const BEAN_TIERS = {
  green:   { id: 'green',   icon: '🫘', label: 'Green Bean',   pts: 1,  dailyCap: 3  },
  silver:  { id: 'silver',  icon: '☕', label: 'Silver Bean',  pts: 5,  dailyCap: 3  },
  gold:    { id: 'gold',    icon: '🥇', label: 'Gold Bean',    pts: 10, dailyCap: 3  },
  crystal: { id: 'crystal', icon: '💎', label: 'Crystal Bean', pts: 25, dailyCap: 10 }
}

// ─── ROLES ───────────────────────────────────────────────────

// Roles that can RECEIVE beans
export const RECEIVER_ROLES = [
  'Trainee',
  'Barista',
  'Senior Barista',
  'Kitchen Helper',
  'Commi 3',
  'Commi 2',
  'Commi 1',
  'DCDP',
  'CDP'
]

// Roles that can GIVE beans (cannot receive)
export const GIVER_ROLES = [
  'Floor Manager',
  'Sous Chef',
  'Cafe Manager',
  'Head Chef',
  'Area Manager',
  'HOD',
  'CEO',
  'COO',
  'Owner'
]

// Roles with no bean interaction (admin only)
export const ADMIN_ROLES = [
  'HR',
  'Accountant',
  'Admin Staff'
]

// ─── ROLE → BEAN TIER PERMISSION ─────────────────────────────

export const ROLE_BEAN_PERMISSIONS = {
  'Floor Manager': ['green'],
  'Sous Chef':     ['green'],
  'Cafe Manager':  ['silver'],
  'Head Chef':     ['silver'],
  'Area Manager':  ['gold'],
  'HOD':           ['gold'],
  'CEO':           ['green', 'silver', 'gold', 'crystal'],
  'COO':           ['green', 'silver', 'gold', 'crystal'],
  'Owner':         ['green', 'silver', 'gold', 'crystal']
}

// ─── DARK BEAN CEILINGS ──────────────────────────────────────

export const DB_SUBMISSION_CEILINGS = {
  'Floor Manager': 4,
  'Sous Chef':     4,
  'Cafe Manager':  8,
  'Head Chef':     8,
  'Area Manager':  16,
  'HOD':           16,
  'CEO':           Infinity,
  'COO':           Infinity,
  'Owner':         Infinity
}

// ─── DARK BEAN POINTS ────────────────────────────────────────

export const DB_POINTS_EACH = 5

// ─── PRELOADED ACTIONS ───────────────────────────────────────

export const DEFAULT_ACTIONS = [
  { id: 'act_01', name: 'Daily Task Completion',     applicable_bean_tier: 'any',    active: true },
  { id: 'act_02', name: 'Perfect Attendance',        applicable_bean_tier: 'any',    active: true },
  { id: 'act_03', name: 'Upsell Achievement',        applicable_bean_tier: 'silver', active: true },
  { id: 'act_04', name: 'Training Completion',       applicable_bean_tier: 'any',    active: true },
  { id: 'act_05', name: 'Customer Recovery Handle',  applicable_bean_tier: 'silver', active: true },
  { id: 'act_06', name: 'Outlet Opening Standard',   applicable_bean_tier: 'any',    active: true },
  { id: 'act_07', name: 'Special Initiative',        applicable_bean_tier: 'gold',   active: true }
]

// ─── PRELOADED OFFENSES ──────────────────────────────────────

export const DEFAULT_OFFENSES = [
  { id: 'off_01', name: 'Late Arrival',           base_db: 1,  escalation: 'double', submission_cap: 8,  active: true },
  { id: 'off_02', name: 'No-Show No Notice',      base_db: 5,  escalation: 'double', submission_cap: 20, active: true },
  { id: 'off_03', name: 'Negligence',             base_db: 2,  escalation: 'double', submission_cap: 16, active: true },
  { id: 'off_04', name: 'Duty Denial',            base_db: 3,  escalation: 'double', submission_cap: 24, active: true },
  { id: 'off_05', name: 'Misconduct',             base_db: 4,  escalation: 'double', submission_cap: 32, active: true },
  { id: 'off_06', name: 'Serious/Insubordination',base_db: 10, escalation: 'double', submission_cap: 40, active: true }
]

// ─── OUTLETS ─────────────────────────────────────────────────

export const OUTLETS = [
  { id: 'SHB',  name: 'Sarabha Nagar',    brand: 'Heebee Coffee' },
  { id: 'GHB',  name: 'Ghumar Mandi',     brand: 'Heebee Coffee' },
  { id: 'JLD',  name: 'Model Town, Jalandhar', brand: 'Heebee Coffee' },
  { id: 'POUR', name: 'Pour by Heebee',   brand: 'Pour' }
]

// ─── ROLE HELPERS ────────────────────────────────────────────

export function isReceiver(role) {
  return RECEIVER_ROLES.includes(role)
}

export function isGiver(role) {
  return GIVER_ROLES.includes(role)
}

export function isAdmin(role) {
  return ADMIN_ROLES.includes(role)
}

export function isHR(role) {
  return role === 'HR'
}

export function isOwner(role) {
  return ['CEO', 'COO', 'Owner'].includes(role)
}

export function isAreaManagerAndAbove(role) {
  return ['Area Manager', 'HOD', 'CEO', 'COO', 'Owner', 'HR'].includes(role)
}

export function canGiveBean(role, beanType) {
  const allowed = ROLE_BEAN_PERMISSIONS[role]
  if (!allowed) return false
  return allowed.includes(beanType)
}

export function getDbCeiling(role) {
  return DB_SUBMISSION_CEILINGS[role] ?? 0
}

// ─── ESCALATION CALC ─────────────────────────────────────────

/**
 * Calculate DBs for this submission using escalation rule.
 * @param {object} offense  — from DEFAULT_OFFENSES
 * @param {number} instance — 1-indexed (1 = first time this month)
 * @returns {number}        — DBs to issue for this instance
 */
export function calcEscalatedDBs(offense, instance) {
  if (offense.escalation === 'double') {
    return Math.min(offense.base_db * Math.pow(2, instance - 1), offense.submission_cap)
  }
  return offense.base_db // flat if other escalation rules added later
}

// ─── ANTI-BIAS FLAGS ─────────────────────────────────────────

/**
 * Check if giver has exceeded 60% concentration to one receiver this month.
 */
export function checkBiasConcentration(awards) {
  const totalByGiver = {}
  const toReceiverByGiver = {}

  awards.forEach(({ giver_id, receiver_id, points_value }) => {
    totalByGiver[giver_id] = (totalByGiver[giver_id] || 0) + points_value
    const key = `${giver_id}::${receiver_id}`
    toReceiverByGiver[key] = (toReceiverByGiver[key] || 0) + points_value
  })

  const flags = []
  Object.entries(toReceiverByGiver).forEach(([key, pts]) => {
    const [giver_id, receiver_id] = key.split('::')
    const total = totalByGiver[giver_id] || 0
    if (total > 0 && pts / total > 0.6) {
      flags.push({
        type: 'bias_concentration',
        giver_id,
        receiver_id,
        pct: Math.round((pts / total) * 100)
      })
    }
  })
  return flags
}

// ─── DB THRESHOLD FLAGS ──────────────────────────────────────

export function getDBThresholdLevel(dbCount) {
  if (dbCount >= 100) return 'disciplinary'
  if (dbCount >= 51)  return 'owners_notified'
  if (dbCount >= 26)  return 'suggest_disqualify'
  if (dbCount >= 10)  return 'silent_flag'
  return null
}

// ─── POINT DISPLAY ───────────────────────────────────────────

export function formatBeanCounts(awards) {
  const counts = { green: 0, silver: 0, gold: 0, crystal: 0 }
  awards.forEach(({ bean_type }) => {
    if (counts[bean_type] !== undefined) counts[bean_type]++
  })
  return Object.entries(counts)
    .filter(([, n]) => n > 0)
    .map(([type, n]) => `${BEAN_TIERS[type].icon} ${n}`)
    .join(' · ')
}
