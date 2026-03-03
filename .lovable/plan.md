

# Complete Pricing and Beta Messaging Update

## Overview

Implement the full closed beta restructure across 3 files, incorporating all previously approved changes plus the latest wording refinement. This is a single implementation pass — no prior changes were applied.

---

## 1. Pricing Page (`src/pages/Pricing.tsx`)

### A. Core plan object (lines 19-20)
- Keep `price: "$349/month"`
- **Remove** `betaNote` field entirely (delete line 20)

### B. Remove betaNote rendering (lines 92-96)
Delete the `{plan.betaNote && (...)}` block since no plans will have betaNote.

### C. CTA button (line 114)
Change `"Start Free Trial"` to `"Apply for Closed Beta"`

### D. Add Closed Beta section (after line 123, before the FAQ block)
New section using existing card styling:
- **Header:** "Closed Beta -- Founding Repair Shops"
- **Bullet list:**
  - Free access during the Beta Test Period
  - 60 days completely free after public launch
  - 50% off the public list price in effect at the time of public launch for 12 months
  - After the 12-month discount period, standard public pricing then in effect will apply
- **Note:** "Closed Beta participation is limited and subject to approval."

### E. FAQ structured data (lines 8-11)
Replace all three entries:
- Q1: "What does Core cost?" -- `"Core is $349/month after public launch, billed monthly. Pricing subject to change. Closed Beta participants receive free access during beta, 60 days free after launch, and 50% off the public list price in effect at the time of public launch for 12 months."`
- Q2: "What do Closed Beta participants receive?" -- `"Free access during the beta period, 60 days free after public launch, then 50% off the public list price in effect at the time of public launch for 12 months. After that, standard pricing applies."`
- Q3: Keep "Can I change plans later?" as-is

### F. Hardcoded FAQ HTML (lines 130-147)
- Update Q1 heading to "What does Core cost?" and answer to match structured data above
- Replace the "Is there a free trial?" / "14-day free trial" Q&A with the new Q2 about Closed Beta participants
- Keep Q3 as-is

---

## 2. Beta Page (`src/pages/Beta.tsx`)

### A. SEO keywords (line 13)
Replace `"founding member pricing"` with `"closed beta program"`

### B. Benefit card (lines 40-45)
- Change title from `"Founding Pricing"` to `"Beta Benefits"`
- Change description from `"Lock in exclusive discounts as a founding customer"` to `"Free access during beta with exclusive post-launch pricing"`

### C. Benefits list (lines 100-110)
Replace old benefits with:
- Free access to OptiBay during the entire Beta Test Period
- 60 days completely free after public launch
- 50% off the public list price in effect at the time of public launch for 12 months following the free period
- Complete done-for-you setup (keep existing text)
- Hands-on help (keep existing text)
- Direct access to the founder (keep)
- Early access to Core improvements (keep)
- Priority access to Catalyst and Enterprise (keep)

**Remove:** "First 2 months free and the next 10 months at 50% off" and "Your rate is locked in for life and will never increase."

---

## 3. Beta Agreement (`src/pages/BetaAgreement.tsx`)

### Section 8 (lines 78-82)
Replace vague "special pricing" with:

"Closed Beta participants receive free access during the Beta Test Period, 60 days free after public launch, and 50% off the public list price in effect at the time of public launch for 12 months. After the 12-month discount period, standard public pricing then in effect will apply."

**No hardcoded dollar amount** in the agreement -- this is the key legal safeguard.

---

## Key Legal Safeguards

| Where | Price reference |
|---|---|
| Pricing card display | `$349/month` (marketing -- easy to update) |
| FAQ, Closed Beta section, Beta page, Agreement | "public list price in effect at the time of public launch" (flexible) |

## Outdated Language Being Removed

- `$249/month (locked 12 months)` -- Pricing betaNote
- `Start Free Trial` -- CTA
- `14-day free trial` -- FAQ
- `First 2 months free and the next 10 months at 50% off` -- Beta benefits
- `Your rate is locked in for life` -- Beta benefits
- `Founding Pricing` / `founding member pricing` -- Beta card/SEO
- `special pricing` (vague) -- BetaAgreement

## File Summary

| File | Action |
|---|---|
| `src/pages/Pricing.tsx` | Remove betaNote, update CTA, add Closed Beta section, rewrite FAQ |
| `src/pages/Beta.tsx` | Update benefit card, SEO keywords, benefits list |
| `src/pages/BetaAgreement.tsx` | Update Section 8 with precise legal language |

3 files modified. No new files. No routing or layout changes.

