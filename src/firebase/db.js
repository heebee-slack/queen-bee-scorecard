// src/firebase/db.js
// All Firebase Realtime DB read/write helpers

import { db } from './config.js'
import {
  ref, get, set, update, push, remove,
  onValue, off, query, orderByChild, limitToLast
} from 'firebase/database'

// ─── EMPLOYEES ───────────────────────────────────────────────

export async function getEmployee(employeeId) {
  const snap = await get(ref(db, `employees/${employeeId}`))
  return snap.exists() ? snap.val() : null
}

export async function getAllEmployees() {
  const snap = await get(ref(db, 'employees'))
  return snap.exists() ? snap.val() : {}
}

export async function upsertEmployee(employeeId, data) {
  await update(ref(db, `employees/${employeeId}`), data)
}

// ─── MONTHLY POINTS ──────────────────────────────────────────

export function monthKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

export async function getMonthlyPoints(employeeId, month = monthKey()) {
  const snap = await get(ref(db, `monthly_points/${month}/${employeeId}`))
  return snap.exists() ? snap.val() : { points: 0, rank: null, db_count: 0, db_pts_deducted: 0, net_points: 0 }
}

export async function addMonthlyPoints(employeeId, pts, month = monthKey()) {
  const current = await getMonthlyPoints(employeeId, month)
  const updated = {
    ...current,
    points: (current.points || 0) + pts,
    net_points: (current.net_points || 0) + pts
  }
  await set(ref(db, `monthly_points/${month}/${employeeId}`), updated)
  return updated
}

export function listenLeaderboard(month = monthKey(), callback) {
  const r = ref(db, `monthly_points/${month}`)
  onValue(r, (snap) => callback(snap.exists() ? snap.val() : {}))
  return () => off(r)
}

// ─── VAULT ───────────────────────────────────────────────────

export async function getVault(employeeId) {
  const snap = await get(ref(db, `vault/${employeeId}`))
  return snap.exists() ? snap.val() : { total_earned: 0, total_deducted: 0, net: 0, last_reset_date: null }
}

export async function addVaultPoints(employeeId, pts) {
  const current = await getVault(employeeId)
  const updated = {
    ...current,
    total_earned: (current.total_earned || 0) + pts,
    net: (current.net || 0) + pts
  }
  await set(ref(db, `vault/${employeeId}`), updated)
  return updated
}

// ─── AWARDS ──────────────────────────────────────────────────

export async function createAward(data) {
  // data: { giver_id, receiver_id, bean_type, points_value, action_id, reason_text, outlet, quantity }
  const awardRef = push(ref(db, 'awards'))
  const award = { ...data, timestamp: Date.now() }
  await set(awardRef, award)
  return awardRef.key
}

export async function getAwardsByEmployee(employeeId) {
  const snap = await get(ref(db, 'awards'))
  if (!snap.exists()) return []
  const all = snap.val()
  return Object.entries(all)
    .map(([id, v]) => ({ id, ...v }))
    .filter((a) => a.receiver_id === employeeId)
    .sort((a, b) => b.timestamp - a.timestamp)
}

export async function getAwardsByGiver(giverId) {
  const snap = await get(ref(db, 'awards'))
  if (!snap.exists()) return []
  const all = snap.val()
  return Object.entries(all)
    .map(([id, v]) => ({ id, ...v }))
    .filter((a) => a.giver_id === giverId)
    .sort((a, b) => b.timestamp - a.timestamp)
}

// ─── DARK BEANS ──────────────────────────────────────────────

export async function createDarkBean(data) {
  // data: { giver_id, receiver_id, offense_id, db_count, pts_deducted, month_key }
  const dbRef = push(ref(db, 'dark_beans'))
  const record = { ...data, timestamp: Date.now(), appealed: false, appeal_status: null }
  await set(dbRef, record)
  return dbRef.key
}

export async function getDarkBeansByEmployee(employeeId, month = monthKey()) {
  const snap = await get(ref(db, 'dark_beans'))
  if (!snap.exists()) return []
  const all = snap.val()
  return Object.entries(all)
    .map(([id, v]) => ({ id, ...v }))
    .filter((a) => a.receiver_id === employeeId && a.month_key === month)
    .sort((a, b) => b.timestamp - a.timestamp)
}

// ─── OFFENSE ESCALATION ──────────────────────────────────────

export async function getOffenseInstance(employeeId, month, offenseId) {
  const snap = await get(ref(db, `offense_escalation/${employeeId}/${month}/${offenseId}`))
  return snap.exists() ? snap.val().instance_count : 0
}

export async function incrementOffenseInstance(employeeId, month, offenseId) {
  const current = await getOffenseInstance(employeeId, month, offenseId)
  await set(ref(db, `offense_escalation/${employeeId}/${month}/${offenseId}`), {
    instance_count: current + 1
  })
  return current + 1
}

// ─── ACTION MENU ─────────────────────────────────────────────

export async function getActions() {
  const snap = await get(ref(db, 'action_menu'))
  return snap.exists() ? snap.val() : {}
}

export async function upsertAction(actionId, data) {
  await update(ref(db, `action_menu/${actionId}`), data)
}

// ─── OFFENSE MENU ────────────────────────────────────────────

export async function getOffenses() {
  const snap = await get(ref(db, 'offense_menu'))
  return snap.exists() ? snap.val() : {}
}

export async function upsertOffense(offenseId, data) {
  await update(ref(db, `offense_menu/${offenseId}`), data)
}

// ─── NOMINATIONS ─────────────────────────────────────────────

export async function getNominations(month = monthKey()) {
  const snap = await get(ref(db, `nominations/${month}`))
  return snap.exists() ? snap.val() : { auto: [], wildcard: [], disqualified: [] }
}

export async function setNominations(month, data) {
  await set(ref(db, `nominations/${month}`), data)
}

// ─── VOTES ───────────────────────────────────────────────────

export async function castVote(month, voterId, nomineeId) {
  await set(ref(db, `votes/${month}/${voterId}`), nomineeId)
}

export async function getVotes(month = monthKey()) {
  const snap = await get(ref(db, `votes/${month}`))
  return snap.exists() ? snap.val() : {}
}

export async function hasVoted(month, voterId) {
  const snap = await get(ref(db, `votes/${month}/${voterId}`))
  return snap.exists()
}

// ─── AUDIT FLAGS ─────────────────────────────────────────────

export async function createAuditFlag(data) {
  const flagRef = push(ref(db, 'audit_flags'))
  const flag = { ...data, timestamp: Date.now(), status: 'open', acted_by: null, acted_at: null }
  await set(flagRef, flag)
  return flagRef.key
}

export async function updateFlagStatus(flagId, status, actedBy) {
  await update(ref(db, `audit_flags/${flagId}`), {
    status,
    acted_by: actedBy,
    acted_at: Date.now()
  })
}

export async function getAllFlags() {
  const snap = await get(ref(db, 'audit_flags'))
  if (!snap.exists()) return []
  return Object.entries(snap.val())
    .map(([id, v]) => ({ id, ...v }))
    .sort((a, b) => b.timestamp - a.timestamp)
}

// ─── PENDING REGISTRATIONS ───────────────────────────────────

export async function submitRegistration(data) {
  const regRef = push(ref(db, 'pending_registrations'))
  await set(regRef, { ...data, submitted_at: Date.now(), status: 'pending' })
  return regRef.key
}

export async function getPendingRegistrations() {
  const snap = await get(ref(db, 'pending_registrations'))
  if (!snap.exists()) return []
  return Object.entries(snap.val())
    .map(([id, v]) => ({ id, ...v }))
    .filter((r) => r.status === 'pending')
    .sort((a, b) => b.submitted_at - a.submitted_at)
}

export async function approveRegistration(regId, reg, approvedBy) {
  const empId = 'emp_' + regId.slice(-8)
  await set(ref(db, `employees/${empId}`), {
    name:      reg.name,
    email:     reg.email,
    role:      reg.role,
    outlet:    reg.outlet,
    pin_hash:  reg.pin_hash,
    active:    true
  })
  await update(ref(db, `pending_registrations/${regId}`), {
    status:      'approved',
    approved_by: approvedBy,
    approved_at: Date.now()
  })
  return empId
}

export async function rejectRegistration(regId, rejectedBy) {
  await update(ref(db, `pending_registrations/${regId}`), {
    status:      'rejected',
    rejected_by: rejectedBy,
    rejected_at: Date.now()
  })
}

export function listenPendingRegistrations(callback) {
  const r = ref(db, 'pending_registrations')
  onValue(r, (snap) => {
    if (!snap.exists()) { callback([]); return }
    const pending = Object.entries(snap.val())
      .map(([id, v]) => ({ id, ...v }))
      .filter((r) => r.status === 'pending')
    callback(pending)
  })
  return () => off(r)
}

// ─── CONFIG ──────────────────────────────────────────────────

export async function getConfig() {
  const snap = await get(ref(db, 'config'))
  return snap.exists() ? snap.val() : {}
}

export async function updateConfig(data) {
  await update(ref(db, 'config'), data)
}

export function listenConfig(callback) {
  const r = ref(db, 'config')
  onValue(r, (snap) => callback(snap.exists() ? snap.val() : {}))
  return () => off(r)
}
