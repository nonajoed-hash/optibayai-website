

# Static SMS Consent Page - Final Implementation

## Overview
Create a static HTML page at `/sms-consent` that Twilio's crawler can read without JavaScript execution. This fixes Error 30509 by ensuring the disclosure content is in the raw HTML response.

---

## Current State (What's Missing)

| Item | Status |
|------|--------|
| `public/sms-consent/index.html` | Does NOT exist |
| `vercel.json` sms-consent rewrites | Missing |
| Footer uses React Router `<Link>` | Needs to be `<a>` tag |
| Hostname consistency | sitemap uses non-www |

---

## Files to Create

### `public/sms-consent/index.html`

Static HTML page with full disclosure content including:

**Enhanced compliance language (per your feedback):**
- Under "How to Opt In" section, add:
  - "The checkbox is unchecked by default and requires an affirmative user action."
  - "Consent can be revoked at any time by replying STOP."

**Consistent hostname:** All links use `https://www.optibayai.com/...`

**Content sections:**
| Section | Content |
|---------|---------|
| Program Info | OptiBay AI SMS Notifications, OptiBay AI LLC, joe@optibayai.com |
| Message Types | Confirmations, reminders, status updates, scheduling, two-way support. No marketing unless separately opted in. |
| How to Opt In | Checkbox during booking/intake + exact consent language + new compliance statements |
| Consent Terms | "Consent is not a condition of purchase" |
| Frequency | "Message frequency varies" |
| Rates | "Message and data rates may apply" |
| STOP/HELP | Reply STOP to cancel, HELP for help |
| Privacy/Terms | Links to `https://www.optibayai.com/legal/privacy` and `https://www.optibayai.com/legal/terms` |
| Data Handling | No selling data, see Privacy Policy |
| Carrier Disclaimer | Carriers not liable for delayed/undelivered messages |

---

## Files to Modify

### `vercel.json`

Add `/sms-consent` rewrites at the TOP (before catch-all):

```json
{
  "rewrites": [
    { "source": "/sms-consent", "destination": "/sms-consent/index.html" },
    { "source": "/sms-consent/(.*)", "destination": "/sms-consent/index.html" },
    { "source": "/pricing", "destination": "/" },
    { "source": "/features", "destination": "/" },
    { "source": "/mission", "destination": "/" },
    { "source": "/beta", "destination": "/" },
    { "source": "/about/(.*)", "destination": "/" },
    { "source": "/legal/(.*)", "destination": "/" },
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### `src/components/Layout.tsx`

Change footer "SMS Consent" link from React Router `<Link>` to regular `<a>` tag:

```tsx
// Line 274-276: Change from
<Link to="/sms-consent" className="...">SMS Consent</Link>

// To
<a href="/sms-consent" className="...">SMS Consent</a>
```

This ensures users see the same static HTML that Twilio's crawler sees.

### `public/sitemap.xml`

Update to use `www.optibayai.com` consistently and add the sms-consent page:

- Change all existing URLs from `https://optibayai.com/...` to `https://www.optibayai.com/...`
- Add new entry: `https://www.optibayai.com/sms-consent`

---

## Key Compliance Additions

The static page will include these two new statements (per your feedback):

**Under "How to Opt In" section:**

> The checkbox is unchecked by default and requires an affirmative user action to opt in.

> Consent can be revoked at any time by replying STOP to any message.

These strengthen the compliance language and make it harder for Twilio to claim "insufficient workflow."

---

## File Summary

| Action | File |
|--------|------|
| Create | `public/sms-consent/index.html` |
| Modify | `vercel.json` (+2 lines at top) |
| Modify | `src/components/Layout.tsx` (Link to a tag) |
| Modify | `public/sitemap.xml` (www + new entry) |

---

## Acceptance Tests

After deployment, run these to verify:

**PowerShell - Check raw HTML contains disclosure:**
```powershell
(Invoke-WebRequest -Uri "https://www.optibayai.com/sms-consent" -UseBasicParsing).Content | Select-String -Pattern "Reply STOP","Message frequency","Message and data rates","Consent is not a condition","unchecked by default"
```

**PowerShell - Check response size (should be >5KB, not ~1-3KB SPA shell):**
```powershell
(Invoke-WebRequest -Uri "https://www.optibayai.com/sms-consent" -UseBasicParsing).RawContentLength
```

**PowerShell - Check title is correct (NOT the SPA title):**
```powershell
(Invoke-WebRequest -Uri "https://www.optibayai.com/sms-consent" -UseBasicParsing).Content | Select-String -Pattern "SMS Consent - OptiBay AI"
```

---

## Production URL

Submit to Twilio: `https://www.optibayai.com/sms-consent`

---

## Why This Works

1. Static HTML in `/public` folder is served directly by Vercel
2. Rewrite rules ensure `/sms-consent` hits the static file before the SPA catch-all
3. Full disclosure content is in the raw HTML response (no JS execution needed)
4. Twilio's crawler will see the complete compliance text

