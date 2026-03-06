

# Legal Pages Restructure — Implementation Plan

## Overview

Replace all placeholder legal pages with real legal documents. Convert `/legal/terms` into a hub page. Add Shop Terms and Passport Terms pages. 11 files total (7 new, 4 modified).

---

## New Files

### 1. `src/components/LegalPage.tsx`
Shared layout component. Props: `title`, `lastUpdated`, `description`, `path`, `children`. Wraps content in `Layout` + `SEO` + max-w-4xl prose container. All legal pages use this for consistency.

### 2. `src/legal/privacyContent.tsx`
Full Privacy Policy (15 sections). Includes:
- Definitions, changes policy, information collection (personal + non-personal + automatic)
- Cookies/tracking, how we use/share info, deletion of personal info, correction of errors
- Children's info, security, AI use, non-US notice
- California residents table (6-row HTML table)
- Third-party providers, information security, contact info
- Links to `/contact` and Google Analytics opt-out preserved

### 3. `src/legal/shopTermsContent.tsx`
Full Repair Shop TOS (20 sections) from the pasted text. Includes:
- Acceptance preamble (caps block with bullet conditions)
- Who may use, definitions, license, rules, prohibited uses
- IP/ownership, geographic restrictions, updates, third-party materials
- Term/termination, subscription fees, users/banned users
- Disclaimers + limitation of liability (caps blocks)
- Indemnification, export, assignment, severability, choice of law
- Mandatory arbitration (caps), limitation of time (caps), entire agreement, waiver, amendments

**Fix**: "Privacy Policy" definition incorrectly links to `/legal/terms` — render as Link to `/legal/privacy`

### 4. `src/legal/passportTermsContent.tsx`
Full Passport User TOS (23 sections). Same structural approach as shop terms. Passport-specific language throughout.

**Same fix**: Privacy Policy definition link corrected to `/legal/privacy`

### 5. `src/legal/betaAgreementContent.tsx`
Full Beta Testing Agreement from the signed PDF. Sections:
- Terms We Use (definitions including Beta Test Period, Confidential Information)
- What This Agreement Covers
- Disclaimers
- Feedback
- Limited Purpose
- Confidentiality (with 5 exceptions)
- Discount (free during beta, 60 days free, 50% off list price for one year)
- Signature block rendered as styled text (no actual signature data)

### 6. `src/pages/ShopTerms.tsx`
Uses `LegalPage` with title "Repair Shop Terms of Service", lastUpdated "March 1, 2026", path `/legal/terms/shop`. Renders `ShopTermsContent`.

### 7. `src/pages/PassportTerms.tsx`
Uses `LegalPage` with title "Passport Terms of Service", lastUpdated "March 1, 2026", path `/legal/terms/passport`. Renders `PassportTermsContent`.

---

## Modified Files

### 8. `src/pages/Terms.tsx`
Convert to hub page using `LegalPage` wrapper (no `lastUpdated` needed). Content:
- Title: "Terms of Service"
- Intro paragraph explaining product-specific terms
- Three cards using existing `Card` components:
  - **OptiBay for Repair Shops** → `/legal/terms/shop` — "Terms governing repair shops and businesses using the OptiBay platform."
  - **OptiBay Passport** → `/legal/terms/passport` — "Terms governing individual technicians and users of the OptiBay Passport platform."
  - **Beta Program** → `/legal/beta-agreement` — "Terms governing participation in the OptiBay Beta Program."
- Bottom line: "For questions about these agreements, please contact us through the [contact page](/contact)."

### 9. `src/pages/Privacy.tsx`
Replace placeholder with `LegalPage` wrapper + `PrivacyContent`. Title "Privacy Policy", lastUpdated "March 1, 2026", path `/legal/privacy`.

### 10. `src/pages/BetaAgreement.tsx`
Replace placeholder with `LegalPage` wrapper + `BetaAgreementContent`. Title "Beta Testing Agreement", lastUpdated "March 1, 2026", path `/legal/beta-agreement`.

### 11. `src/App.tsx`
Add two routes before the catch-all:
- `/legal/terms/shop` → `ShopTerms`
- `/legal/terms/passport` → `PassportTerms`

---

## Footer
Already links to `/legal/privacy`, `/legal/terms`, and `/legal/beta-agreement`. The hub page handles sub-navigation. No footer changes needed.

## SEO
Each page gets unique `title`, `description`, `path`, and `keywords` via the `SEO` component inside `LegalPage`. Canonical URLs set automatically.

## Content Rendering
Legal content files are React components (not plain text) to support:
- Internal `Link` components for cross-references
- HTML `table` for California data categories
- Uppercase `<p>` blocks for disclaimer/liability sections
- Semantic `h2`/`h3`/`ul`/`li` structure

## Key Fixes
- Shop TOS "Privacy Policy" definition: link corrected from `/legal/terms` → `/legal/privacy`
- Passport TOS "Privacy Policy" definition: same fix
- Beta Agreement references to TOS and Privacy Policy: linked to `/legal/terms` and `/legal/privacy` respectively

---

## File Summary

| Action | File |
|---|---|
| Create | `src/components/LegalPage.tsx` |
| Create | `src/legal/privacyContent.tsx` |
| Create | `src/legal/shopTermsContent.tsx` |
| Create | `src/legal/passportTermsContent.tsx` |
| Create | `src/legal/betaAgreementContent.tsx` |
| Create | `src/pages/ShopTerms.tsx` |
| Create | `src/pages/PassportTerms.tsx` |
| Modify | `src/pages/Terms.tsx` |
| Modify | `src/pages/Privacy.tsx` |
| Modify | `src/pages/BetaAgreement.tsx` |
| Modify | `src/App.tsx` |

11 files. No database or backend changes. No new dependencies.

