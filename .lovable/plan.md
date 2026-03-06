

# Legal Page Adjustments

Three small edits across two files.

## 1. Beta Agreement Discount Section (`src/legal/betaAgreementContent.tsx`, lines 60-67)

Replace the "Discount" heading and its content (specific 60-day/50% language) with:

```
<h2>Discount</h2>
<p>
  Participants in the OptiBay Beta Program will receive special subscription pricing following the Beta Test Period.
</p>
```

Remove the `<ul>` with the two specific bullet items.

## 2. Footer Support Section (`src/components/Layout.tsx`, lines 319-326)

Remove lines 320-326 (phone placeholder, company name, address placeholder). Keep only the email link. Final Support block:

```
<h3>Support</h3>
<ul>
  <li><a href="mailto:joe@optibayai.com">joe@optibayai.com</a></li>
</ul>
```

## File Summary

| File | Change |
|---|---|
| `src/legal/betaAgreementContent.tsx` | Replace discount section (lines 60-67) |
| `src/components/Layout.tsx` | Remove phone/address/company placeholders (lines 320-326) |

2 files modified. No new files, no backend changes.

