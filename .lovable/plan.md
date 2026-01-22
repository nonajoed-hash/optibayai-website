

# Contact Form Backend - Option C (Database + Email Notification)

## Overview
Wire the contact form to save submissions in a database table AND send an email notification to support@optibayai.com using the existing Resend integration.

---

## Database Changes

### New Table: `contact_submissions`

```sql
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  read_at TIMESTAMPTZ,
  responded_at TIMESTAMPTZ
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Block all public access (admin-only table)
CREATE POLICY "Block anonymous access to contact submissions"
  ON public.contact_submissions
  AS RESTRICTIVE
  FOR ALL
  TO public
  USING (false)
  WITH CHECK (false);

-- Allow admins to view
CREATE POLICY "Admins can view contact submissions"
  ON public.contact_submissions
  FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Allow admins to update (mark as read/responded)
CREATE POLICY "Admins can update contact submissions"
  ON public.contact_submissions
  FOR UPDATE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
```

---

## Edge Function

### New File: `supabase/functions/submit-contact/index.ts`

**Responsibilities:**
1. Validate incoming data (server-side validation matching client schema)
2. Rate limiting check (reuse existing `beta_signup_rate_limit` pattern or create `contact_rate_limit`)
3. Insert into `contact_submissions` table
4. Send notification email via Resend to support@optibayai.com
5. Return success/error response

**Email Template:**
- From: `OptiBay AI Contact <no-reply@mail.optibayai.com>`
- To: `support@optibayai.com`
- Subject: `[Contact Form] {subject} from {name}`
- Body: Name, email, company, subject, message, timestamp

**Rate Limiting:**
- 5 submissions per IP per hour (same pattern as beta signups)
- Reuse or create dedicated rate limit table

---

## Config Changes

### `supabase/config.toml`
Add function config:
```toml
[functions.submit-contact]
verify_jwt = false
```

### `src/config/backend.ts`
Add endpoint constant:
```typescript
CONTACT_SUBMIT_ENDPOINT: string
```

---

## Frontend Changes

### `src/pages/Contact.tsx`

**Update `onSubmit` handler:**
1. Remove simulated delay
2. POST to edge function endpoint
3. Handle success/error responses
4. Keep honeypot check
5. Add proper error handling with user-friendly messages

**Error Handling:**
- 429 (rate limit): "Too many requests. Please try again later."
- 400 (validation): "Please check your information and try again."
- 500 (server error): "Something went wrong. Please email us directly."

---

## Secrets Required

All secrets already exist:
- `RESEND_API_KEY` - Already configured
- `SUPABASE_URL` - Already configured
- `SUPABASE_SERVICE_ROLE_KEY` - Already configured

No new secrets needed.

---

## File Summary

| Action | File |
|--------|------|
| Create | `supabase/functions/submit-contact/index.ts` |
| Modify | `supabase/config.toml` (add function config) |
| Modify | `src/config/backend.ts` (add endpoint) |
| Modify | `src/pages/Contact.tsx` (wire to backend) |
| Create | Database migration for `contact_submissions` table |

---

## Rate Limiting Strategy

**Option A:** Reuse `beta_signup_rate_limit` table (rename to generic `form_rate_limit`)
**Option B:** Create separate `contact_rate_limit` table (recommended for clarity)

I recommend Option B - separate table keeps concerns isolated.

---

## Email Notification Format

```text
Subject: [Contact Form] Technical Support from John Smith

New contact form submission:

Name: John Smith
Email: john@example.com
Company: Acme Corp
Subject: Technical Support
Message:
---
I'm having trouble with the scheduling feature...
---

Submitted: January 22, 2026 at 3:45 PM UTC
```

---

## Security Checklist

- [x] Server-side validation matching client schema
- [x] Rate limiting (5/hour per IP)
- [x] RLS policies blocking public access
- [x] Admin-only read/update access
- [x] No PII logged
- [x] CORS headers configured
- [x] Honeypot check (client-side, kept as-is)

---

## About the "Prefer email?" Section

**Recommendation: Keep it.**

Both serve valid purposes:
- **Form**: Structured, trackable, you get notified, stored for reference
- **Direct links**: User controls their inbox, has sent-folder record, better for sensitive legal/privacy matters

The section gives users choice and builds trust by showing real contact addresses.

