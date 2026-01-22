

# Add legal@optibayai.com to Contact Page

## Overview
Add a third email address (`legal@optibayai.com`) to the "Prefer email?" section on the Contact page.

---

## File to Modify

### `src/pages/Contact.tsx`
**Location:** Lines 283-298 (the email links container)

**Change:**
Add a new `<a>` element for `legal@optibayai.com` following the same pattern as the existing email links.

**Updated Section:**
```jsx
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
  <a
    href="mailto:support@optibayai.com"
    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
  >
    <Mail className="h-4 w-4" />
    support@optibayai.com
  </a>
  <a
    href="mailto:privacy@optibayai.com"
    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
  >
    <Mail className="h-4 w-4" />
    privacy@optibayai.com
  </a>
  <a
    href="mailto:legal@optibayai.com"
    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
  >
    <Mail className="h-4 w-4" />
    legal@optibayai.com
  </a>
</div>
```

---

## Visual Result
The "Prefer email?" section will display three clickable email links:
- support@optibayai.com
- privacy@optibayai.com
- legal@optibayai.com

On mobile: stacked vertically
On desktop (sm+): displayed in a row with even spacing

---

## No Other Files Affected
This is a single-line addition to one file.

