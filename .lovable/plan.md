

# Update Pricing Page

## Changes (all in `src/pages/Pricing.tsx`)

### 1. Update Core price and add betaNote field (line 19)
Change `price: "$149/month"` to `price: "$349/month"` and add `betaNote: "Founding Beta: $249/month (locked 12 months) — first 25 shops"` to the Core plan object.

### 2. Render betaNote under the price (lines 87-91)
Add a conditional render of `plan.betaNote` as a styled `div` below the price `span`. This requires adding a TypeScript type annotation to the plan objects to allow the optional `betaNote` field.

### 3. Update FAQ — structured data (line 9)
Change the first FAQ answer from "We're currently in beta and finalizing..." to:
`"Core is $349/month. Founding Beta shops can lock in $249/month for 12 months (first 25 shops)."`

### 4. Update FAQ — rendered HTML (lines 125-128)
Update the hardcoded FAQ section to match the new answer text. Also update the question from "When will pricing be available?" to something like "What does Core cost?" since pricing is now available.

### Summary
- 4 surgical edits in one file
- No routing, layout, or other page changes
- Founding Beta note only appears on Core card

