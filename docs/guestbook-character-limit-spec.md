# Guestbook Character Limit — Feature Spec

## Overview

Add a 200-character limit to guestbook messages with a real-time counter visible as the user types. Enforcement is split across two layers: the client provides a soft-warn UX, and the database provides a hard constraint as a safety backstop.

---

## Requirements

- Users may not submit messages longer than 200 characters.
- Users are not hard-blocked from typing past 200 characters; instead they receive visual feedback and the submit button is disabled until they trim their message.
- A character counter appears below the textarea once the user begins typing, showing `X / 200`.
- The counter turns red when the message exceeds 200 characters.
- The submit button is disabled when the message is empty or exceeds 200 characters.
- The Supabase database enforces a `CHECK` constraint on new inserts and updates. Existing messages over 200 characters are left untouched.

---

## Approach

**Controlled input with `useState`** — Track the message value in React state. Derive all UI behavior (counter visibility, counter color, button disabled state) from `message.length`. No additional state variables or libraries needed.

---

## Architecture

| Layer | Role |
|---|---|
| UI (React) | Controlled `<textarea>` + derived counter and button state |
| Validation (client) | Soft-warn: counter turns red and button disables when `length > 200` |
| API | Existing submission path — unchanged |
| Database (Supabase) | `CHECK (char_length(message) <= 200)` via migration — backstop only |

**Key principle:** The client enforces UX; the database enforces integrity. The two layers are independent and complementary.

---

## Components

**Modified component:** The existing guestbook form component (wherever the `<textarea>` and submit button live). No new components are introduced.

### Controlled `<textarea>`
- `value` bound to `message` state
- `onChange` calls `setMessage(e.target.value)`
- No `maxlength` attribute — required for soft-warn behavior

### Character counter `<span>`
- Displays `{message.length} / 200`
- Positioned below the textarea, right-aligned
- Visible only when `message.length > 0`
- Color: red when `message.length > 200`, neutral otherwise

### Submit button (modified)
- `disabled` when `message.length === 0 || message.length > 200`
- No other changes

### State shape
```
message: string  ← single piece of state (likely already exists)
```

All derived values (`isOverLimit`, `showCounter`, `charCount`) are computed inline — no additional `useState` calls needed.

---

## Data Flow

**On each keystroke:**

1. User types in `<textarea>`
2. `onChange` → `setMessage(e.target.value)`
3. React re-renders synchronously:
   - `message.length` → updates counter display
   - `message.length > 0` → shows/hides counter
   - `message.length > 200` → turns counter red, disables submit button

**On submit:**

1. User clicks Send (only reachable when `0 < message.length ≤ 200`)
2. Existing submission handler fires — no changes
3. Supabase receives the insert
4. DB `CHECK` constraint validates `char_length(message) <= 200`
5. If somehow over limit (UI bypassed), Supabase returns an error — existing error handling catches it

**Diagram:**

```
User types
    ↓
setMessage(value)
    ↓
message.length ──→ counter display ("X / 200")
               ──→ counter color   (red if > 200)
               ──→ button disabled (if > 200 or === 0)
               ──→ counter visible (if > 0)
```

---

## Edge Cases

| Case | Behavior |
|---|---|
| Paste over the limit | Full text lands in state; counter turns red, button disables; user must trim |
| Exactly 200 characters | `200 / 200` shown in neutral color; submit enabled; DB constraint satisfied |
| 201 characters | Counter turns red, button disables; user must delete ≥ 1 character |
| Empty input | Counter hidden; submit button disabled |
| Whitespace-only messages | Passes character constraint; out of scope for this feature |
| Direct API bypass | DB `CHECK` constraint rejects the insert; existing error handler surfaces the error |
| Existing messages > 200 chars | Migration leaves them untouched; constraint applies to new inserts/updates only |

---

## Database Migration

- **Type:** New migration file, tracked in version control
- **Constraint:** `CHECK (char_length(message) <= 200)`
- **Scope:** Applies to new inserts and updates only
- **Existing data:** Left as-is (migration does not backfill or truncate historical rows)

---

## Out of Scope

- Whitespace trimming / empty-message detection beyond length 0
- Server-side error messaging surfaced in the UI for the DB constraint specifically
- Any changes to the submission handler or API layer
