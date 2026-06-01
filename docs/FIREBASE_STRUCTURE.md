# Firebase Realtime DB Structure — Heebee Bean System v1

```
/employees/{employeeId}
  name            : string
  email           : string
  role            : string  — exact match to RECEIVER_ROLES / GIVER_ROLES / ADMIN_ROLES
  outlet          : string  — "SHB" | "GHB" | "JLD" | "POUR"
  pin_hash        : string  — SHA-256 of 4-digit PIN
  webauthn_id     : string  — base64 rawId from WebAuthn registration
  active          : boolean — false = deactivated, excluded from all lists

/monthly_points/{YYYY-MM}/{employeeId}
  points          : number  — total earned this month (before DB deductions)
  rank            : number  — cached rank (recalculated by GAS daily)
  db_count        : number  — total DBs issued this month
  db_pts_deducted : number  — total pts deducted from DBs
  net_points      : number  — points - db_pts_deducted

/vault/{employeeId}
  total_earned    : number
  total_deducted  : number
  net             : number
  last_reset_date : string  — ISO date of last Diwali reset

/awards/{awardId}
  giver_id        : string
  giver_name      : string
  receiver_id     : string
  bean_type       : "green" | "silver" | "gold" | "crystal"
  points_value    : number  — PER BEAN (not total)
  quantity        : number  — how many beans in this award
  action_id       : string  — must be a valid action_menu key
  reason_text     : string  — optional free text
  outlet          : string
  timestamp       : number  — Unix ms

/dark_beans/{dbId}
  giver_id        : string
  receiver_id     : string
  offense_id      : string  — must be a valid offense_menu key
  db_count        : number  — DBs issued
  pts_deducted    : number  — db_count * 5
  timestamp       : number
  month_key       : string  — "YYYY-MM"
  instance_number : number  — nth occurrence of this offense this month for this employee
  appealed        : boolean
  appeal_status   : "pending" | "upheld" | "cancelled" | null

/offense_escalation/{employeeId}/{YYYY-MM}/{offenseId}
  instance_count  : number  — resets to 0 on 1st of every month

/nominations/{YYYY-MM}
  auto            : [empId, ...]    — top 5 by monthly points
  wildcard        : [empId, ...]    — manually added by Owner/CEO/COO
  disqualified    : [{ id, reason, by, timestamp }, ...]

/votes/{YYYY-MM}
  {voter_id}      : nominee_id      — one entry per voter
  results         : { nominee_id: vote_count }
  voting_open     : boolean
  winner          : empId           — set after close

/action_menu/{actionId}
  name                : string
  applicable_bean_tier: "any" | "silver" | "gold" | "crystal"
  active              : boolean
  outlets_enabled     : ["all"] | ["SHB","GHB","JLD","POUR"]

/offense_menu/{offenseId}
  name            : string
  base_db         : number
  escalation      : "double" | "flat"
  submission_cap  : number
  active          : boolean

/audit_flags/{flagId}
  type            : "bias_concentration" | "consecutive_db" | "ceiling_breach" | "db_threshold" | "crystal_frequency" | "cross_flag"
  giver_id        : string
  receiver_id     : string
  data_snapshot   : object  — raw numbers at time of flag
  suggestion_text : string  — plain-language what happened
  suggestion      : string  — what HR should do
  status          : "open" | "acted" | "dismissed"
  timestamp       : number
  acted_by        : string  — HR employeeId
  acted_at        : number

/config
  db_toggle       : boolean   — Dark Bean system on/off (Owner only)
  voting_open     : boolean   — set by GAS on 28th
  current_quarter : "Q1" | "Q2" | "Q3" | "Q4"
  diwali_date     : "YYYY-MM-DD"
  system_version  : "1.0"

/archive/monthly_points/{YYYY-MM}  — copy of monthly_points before reset
/archive/vault/{YYYY}              — copy of all vaults before Diwali reset
/brew_stars/{id}                   — Quarterly Brew Star winners log
/diwali_awards/{id}                — Annual Diwali Grand Award log
```

## Security Rules (paste in Firebase Console → Realtime DB → Rules)

```json
{
  "rules": {
    ".read":  false,
    ".write": false,
    "employees": {
      ".read":  "auth != null",
      ".write": "auth != null"
    },
    "monthly_points": {
      ".read":  "auth != null",
      ".write": "auth != null"
    },
    "vault": {
      "$empId": {
        ".read":  "auth != null",
        ".write": "auth != null"
      }
    },
    "awards": {
      ".read":  "auth != null",
      ".write": "auth != null"
    },
    "dark_beans": {
      ".read":  "auth != null",
      ".write": "auth != null"
    },
    "config": {
      ".read":  "auth != null",
      ".write": "auth != null"
    },
    "audit_flags": {
      ".read":  "auth != null",
      ".write": "auth != null"
    },
    "action_menu": {
      ".read":  "auth != null",
      ".write": "auth != null"
    },
    "offense_menu": {
      ".read":  "auth != null",
      ".write": "auth != null"
    },
    "nominations": {
      ".read":  "auth != null",
      ".write": "auth != null"
    },
    "votes": {
      ".read":  "auth != null",
      ".write": "auth != null"
    },
    "offense_escalation": {
      ".read":  "auth != null",
      ".write": "auth != null"
    }
  }
}
```

Note: Phase 1 uses open auth rules. Tighten per-role in Phase 2 using Firebase custom claims.
