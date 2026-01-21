

# Contact Us Page - Final Implementation Plan

## Overview
Create a clean, professional Contact page at `/contact` with validated form, visible compliance emails, and proper navigation integration.

---

## Files to Create

### 1. `src/pages/Contact.tsx` (New File)

**Page Structure:**
- `Layout` wrapper with `SEO` component
- Page title: "Contact OptiBay AI" (gradient styling)
- Intro text as specified
- Contact form with validation
- Email display section
- Privacy notice with link

**Form Fields (react-hook-form + zod):**

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Full Name | text | Yes | 1-100 chars, trimmed |
| Email | email | Yes | valid email, max 255 |
| Company/Shop | text | No | max 200 chars |
| Subject | select dropdown | Yes | predefined options |
| Message | textarea | Yes | 1-2000 chars |

**Subject Options:**
- General Question
- Technical Support
- Billing
- Privacy or Data Request
- Other

**Honeypot Field (Spam Prevention):**
- Hidden field, validated manually outside zod schema
- If filled, silently reject submission
- Keeps zod schema focused on user-facing fields

**Form Behavior (Production-Safe):**
- Client-side validation with error messages
- `disabled={isSubmitting}` on ALL inputs, select, and button
- Loading spinner during submission
- On success: Show success state with message (NO form.reset() since UI swaps to success panel)
- Ready for backend wiring (marked with TODO comment)

**Security Comment (Required):**
```typescript
// SECURITY NOTE:
// - No PII is stored client-side
// - TODO_BACKEND_WIRING: When wiring backend, implement:
//   - Rate limiting (e.g., 5 submissions per IP per hour)
//   - CAPTCHA or WAF rule for bot protection
//   - Server-side validation matching client schema
```

**Email Display Section:**
```text
privacy@optibayai.com
support@optibayai.com
```

**Privacy Notice:**
> By submitting this form, you acknowledge that OptiBay AI may collect and process the information you provide for the purpose of responding to your inquiry, in accordance with our [Privacy Policy](/legal/privacy).

---

## Files to Modify

### 2. `src/App.tsx`
- Import `Contact` from `./pages/Contact`
- Add route: `<Route path="/contact" element={<Contact />} />`

### 3. `src/components/Layout.tsx` (Footer Only)
- Add "Contact" link in the Company section
- Links to `/contact`

### 4. `src/components/MobileMenu.tsx`
- Add Contact NavLink in the mobile navigation list

### 5. `public/sitemap.xml`
- Add entry using exact domain format: `https://optibayai.com/contact`
- Priority: 0.7

---

## Files NOT Modified

### `vercel.json`
Already has catch-all rewrite. No changes needed.

---

## Technical Details

### Validation Schema (User-Facing Fields Only)
```typescript
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(200).optional(),
  subject: z.enum([
    "General Question",
    "Technical Support", 
    "Billing",
    "Privacy or Data Request",
    "Other"
  ], { required_error: "Please select a subject" }),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message too long")
});
```

### Form Submit Handler
```typescript
const onSubmit = async (data: FormData) => {
  // Manual honeypot check (not in zod schema)
  const honeypot = document.getElementById('website') as HTMLInputElement;
  if (honeypot?.value) return; // Silent reject
  
  setIsSubmitting(true);
  
  // SECURITY NOTE:
  // - No PII is stored client-side
  // - TODO_BACKEND_WIRING: When wiring backend, implement:
  //   - Rate limiting (e.g., 5 submissions per IP per hour)
  //   - CAPTCHA or WAF rule for bot protection
  //   - Server-side validation matching client schema
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  setIsSuccess(true);
  toast.success("Message sent successfully!");
  setIsSubmitting(false);
  // Note: No form.reset() - UI swaps to success panel
};
```

### Input Disable Pattern
```jsx
<Input 
  {...field} 
  disabled={isSubmitting}
  placeholder="Your name" 
/>

<Select 
  onValueChange={field.onChange}
  disabled={isSubmitting}
>
  ...
</Select>

<Textarea 
  {...field}
  disabled={isSubmitting}
  rows={5}
/>

<Button type="submit" disabled={isSubmitting}>
  {isSubmitting ? <Loader2 className="animate-spin" /> : "Send Message"}
</Button>
```

---

## Design Specifications

**Layout:**
- Container: max-w-2xl for form area
- Section padding: py-16/py-24 (matching other pages)
- Mobile: full-width with standard padding

**Colors:**
- Title: gradient from primary to accent
- Labels: text-foreground
- Descriptions: text-muted-foreground
- Email section: subtle card/border styling

**Accessibility:**
- All fields have labels
- Error messages linked via aria
- 44px minimum tap targets
- Keyboard navigable
- Inputs disabled during submission

---

## Sitemap Entry (Exact Format)
```xml
<url>
  <loc>https://optibayai.com/contact</loc>
  <priority>0.7</priority>
</url>
```

---

## Verification Checklist

- [x] `/legal/privacy` route exists (confirmed)
- [x] vercel.json has catch-all rewrite (confirmed)
- [x] Sitemap uses `https://optibayai.com` format (confirmed)
- [ ] Form validation works
- [ ] Inputs disabled during submission
- [ ] Mobile responsive
- [ ] Success state displays correctly
- [ ] Privacy notice links work
- [ ] Emails are visible
- [ ] No console.log in code
- [ ] Security comment included

