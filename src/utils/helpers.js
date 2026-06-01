// src/utils/helpers.js

// Returns "YYYY-MM" for a given date (or today)
export function monthKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

// Quarter key: "Q1-2026", "Q2-2026" etc.
export function quarterKey(date = new Date()) {
  const q = Math.ceil((date.getMonth() + 1) / 3)
  return `Q${q}-${date.getFullYear()}`
}

// Format points with comma
export function formatPts(n) {
  return Number(n || 0).toLocaleString('en-IN')
}

// Relative time: "2 hrs ago", "just now"
export function relativeTime(timestamp) {
  const diff = Date.now() - timestamp
  if (diff < 60000)        return 'just now'
  if (diff < 3600000)      return `${Math.floor(diff / 60000)}m ago`
  if (diff < 86400000)     return `${Math.floor(diff / 3600000)}h ago`
  return `${Math.floor(diff / 86400000)}d ago`
}

// Today's date string YYYY-MM-DD (used for daily cap checks)
export function todayKey() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// Check if today is >= 28th (voting window)
export function isVotingPeriod(date = new Date()) {
  return date.getDate() >= 28
}

// Check if today is 27th (nomination day)
export function isNominationDay(date = new Date()) {
  return date.getDate() === 27
}

// Debounce utility
export function debounce(fn, ms = 300) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), ms)
  }
}

// Generate a short unique ID
export function uid() {
  return Math.random().toString(36).slice(2, 9)
}

// Sort employees by monthly points descending, return ranked array
export function rankByPoints(pointsMap) {
  return Object.entries(pointsMap)
    .map(([id, data]) => ({ id, ...data }))
    .sort((a, b) => (b.net_points || b.points || 0) - (a.net_points || a.points || 0))
    .map((emp, i) => ({ ...emp, rank: i + 1 }))
}
