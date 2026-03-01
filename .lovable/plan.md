

# Twilio Toll-Free Verification Support Update

## Overview

Update SMS consent pages, legal pages, and footer across 6 files to strengthen Twilio compliance, remove credibility-undermining language, and add business identity.

---

## 1. Update React SMS Consent Page

**File:** `src/pages/SmsConsent.tsx`

- Add explicit line near top after h1: **"Transactional service messages only. No marketing or promotional texts."**
- Replace `{new Date().toLocaleDateString()}` with fixed string `"March 1, 2026"`
- Rewrite "How to Opt In" to include two methods:
  - In-app checkbox (unchecked by default, affirmative action)
  - Text **START** or **UNSTOP** to the toll-free number
- Add "Two-Way Messaging" section
- Add "Supported Keywords" section (STOP/STOPALL/UNSUBSCRIBE/END/QUIT, HELP/INFO, START/UNSTOP)
- Update toll-free number fallback: show "Available upon request" if env var is missing
- Update Quick Reference to include START keyword

---

## 2. Update Static HTML SMS Consent Page

**File:** `public/sms-consent/index.html`

Mirror all React page changes:
- Add "Transactional service messages only" line near top
- Update date to "March 1, 2026"
- Replace "OptiQueue" references with "OptiBay" / "the OptiBay platform"
- Add START/UNSTOP opt-in method
- Add Two-Way Messaging section
- Add Supported Keywords section
- Update Quick Reference

---

## 3. Remove Placeholder Disclaimers

**File:** `src/pages/Privacy.tsx` -- Remove lines 68-73 (the placeholder note div)

**File:** `src/pages/Terms.tsx` -- Remove lines 77-82 (the placeholder note div)

**File:** `src/pages/BetaAgreement.tsx` -- Remove lines 92-97 (the placeholder note div)

---

## 4. Add Support Block to Footer

**File:** `src/components/Layout.tsx`

Add a "Support" column in the footer grid (adjust to 6-col) with:
- Email: joe@optibayai.com
- Phone: (replace with your number)
- OptiBay AI LLC
- Address: (replace with your address)

Uses plain "(replace)" labels instead of "XXX" formatting to avoid appearing unfinished.

---

## File Summary

| Action | File |
|--------|------|
| Modify | `src/pages/SmsConsent.tsx` |
| Modify | `public/sms-consent/index.html` |
| Modify | `src/pages/Privacy.tsx` |
| Modify | `src/pages/Terms.tsx` |
| Modify | `src/pages/BetaAgreement.tsx` |
| Modify | `src/components/Layout.tsx` |

No new files. No routing changes. No backend changes.

