# Privacy Policy Update — Training Companion Disclosure

Small content-only update to the existing Privacy Policy. No new routes, pages, or navigation.

## Changes

### 1. `src/legal/privacyContent.tsx` — Update "App" definition
In Section 1 (Terms We Use), replace:
```
<li>"App" means the Optibay AI progressive web application.</li>
```
With:
```
<li>"App" means the Optibay AI progressive web application and any Optibay AI browser extension, including the Training Companion where applicable.</li>
```

### 2. `src/legal/privacyContent.tsx` — Add Training Companion subsection
Insert new `<h3>` subsection immediately after the existing Section 4 "Cookies and Other Tracking Technologies" paragraph and before the `<h2>5. How We Use and Share Your Information</h2>` heading.

Content: `<h3>OptiBay Training Companion Browser Extension</h3>` followed by the four paragraphs and permissions list provided by the user, including the escaped JSX text `{"<all_urls>"}`.

Section numbering is NOT changed — this stays a subsection under Section 4.

### 3. `src/pages/Privacy.tsx` — Update lastUpdated
Change `lastUpdated="March 1, 2026"` to `lastUpdated="June 30, 2026"`.

## File Summary

| File | Change |
|---|---|
| `src/legal/privacyContent.tsx` | Update App definition + add Training Companion `<h3>` subsection under Section 4 |
| `src/pages/Privacy.tsx` | Bump lastUpdated date |

2 files modified. No routing, layout, or dependency changes.