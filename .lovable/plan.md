

# SMS Consent Page - Complete Plan (with OptiQueue Proof Checklist)

## Overview
Create a publicly accessible SMS consent page at `/sms-consent` that documents the checkbox-based opt-in workflow in OptiQueue, plus ensure OptiQueue has the actual implementation to back it up.

---

## Part 1: Website Implementation (This Codebase)

### Files to Create

#### `src/pages/SmsConsent.tsx`

A legal-style page matching Privacy.tsx and Terms.tsx with these sections:

| Section | Content |
|---------|---------|
| **Program Info** | "OptiBay AI SMS Notifications" by OptiBay AI LLC, joe@optibayai.com |
| **Message Types** | Appointment confirmations/reminders, repair status, scheduling changes, two-way support. "No marketing unless separately opted in." |
| **How to Opt-In** | "During booking/intake in OptiBay AI, provide mobile number and check consent checkbox." + exact checkbox language quoted |
| **Consent Terms** | "Consent is not a condition of purchase." |
| **Frequency** | "Message frequency varies based on appointment activity." |
| **Rates** | "Message and data rates may apply." |
| **STOP/HELP** | "Text STOP to cancel. Text HELP for assistance." |
| **Data Handling** | Phone used only for stated purposes, no selling data, see Privacy Policy |
| **Carrier Disclaimer** | "Carriers are not liable for delayed or undelivered messages." |
| **Related Policies** | Links to `/legal/privacy` and `/legal/terms` |

**Exact checkbox consent language (quoted on page):**

> "I agree to receive SMS messages from OptiBay AI regarding my vehicle service appointments, including appointment confirmations, reminders, and status updates. Message frequency varies. Message and data rates may apply. Reply STOP to cancel, HELP for help. Consent is not a condition of purchase."

**Toll-free number:** Read from `import.meta.env.VITE_PUBLIC_TWILIO_TOLL_FREE_NUMBER` - only display if set.

---

### Files to Modify

#### `src/App.tsx`
- Import SmsConsent component
- Add route: `<Route path="/sms-consent" element={<SmsConsent />} />`

#### `src/components/Layout.tsx`
- Add "SMS Consent" link in footer Legal section

---

### Files NOT Modified

| File | Reason |
|------|--------|
| `vercel.json` | Already has SPA catch-all |
| `src/config/backend.ts` | Not for public UI config |

---

### File Summary

| Action | File |
|--------|------|
| Create | `src/pages/SmsConsent.tsx` |
| Modify | `src/App.tsx` (+2 lines) |
| Modify | `src/components/Layout.tsx` (+4 lines) |

---

## Part 2: OptiQueue Proof Checklist (Required for Twilio Approval)

This checklist is for the OptiQueue product (separate codebase). Complete before Twilio resubmission.

### UI Requirements

| Requirement | Status |
|-------------|--------|
| Checkbox exists in booking/intake UI | Verify |
| Checkbox is **unchecked by default** | Verify |
| User must actively check it (no auto-check) | Verify |
| Booking works if unchecked (SMS is optional) | Verify |
| Checkbox uses exact consent language from above | Verify |

### Consent Storage Requirements

Store the following when user opts in:

| Field | Description |
|-------|-------------|
| `phone` | Customer mobile number |
| `opted_in_at` | Timestamp of consent |
| `source` | `"optiqueue_booking"` or `"optiqueue_intake"` |
| `consent_text_version` | Version ID or hash of disclosure text |
| `customer_id` | Link to customer/ticket record (if available) |
| `ip_address` | Optional but helpful for audit |

### Screenshot Documentation

**Before submitting to Twilio:**

1. Take a screenshot of the OptiQueue consent checkbox UI showing:
   - The unchecked checkbox
   - The full consent text visible
   - The booking/intake form context

2. Attach this screenshot in Twilio Toll-Free Verification as supporting documentation

3. Optionally include a second screenshot showing a successful consent record in the database

This visual proof significantly reduces denial risk.

---

## Production URL

After publishing: `https://optibayai.com/sms-consent`

---

## Twilio Submission Checklist

Before submitting to Twilio, verify:

**Website (this plan):**
- [ ] `/sms-consent` page loads publicly (no auth, no 404)
- [ ] Describes checkbox opt-in during booking
- [ ] Exact consent language is quoted
- [ ] STOP/HELP instructions present
- [ ] Frequency and rates disclosed
- [ ] "Consent not a condition of purchase" stated
- [ ] Privacy link works (`/legal/privacy`)
- [ ] Terms link works (`/legal/terms`)
- [ ] Carrier disclaimer included

**OptiQueue (Part 2 checklist):**
- [ ] Checkbox exists and is unchecked by default
- [ ] Consent language matches website exactly
- [ ] Consent stored with timestamp
- [ ] Screenshot taken for Twilio submission

---

## Why This Approach Gets Approved

Twilio reviewers check:
1. **Public opt-in URL exists** - `/sms-consent` page
2. **URL describes the mechanism** - "checkbox during booking"
3. **Mechanism actually exists** - OptiQueue checkbox + consent storage
4. **Disclosures are complete** - STOP/HELP, rates, frequency, privacy/terms
5. **Supporting evidence** - Screenshot of checkbox UI

This plan covers all five.
