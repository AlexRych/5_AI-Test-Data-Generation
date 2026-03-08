## Chapter 1 – Customer Order Dataset
Prompt used: "GGenerate 15 customer orders with fields: orderId, customerName, status (Pending, Shipped, Cancelled), and totalAmount. Return as JSON array."
Observations:
- Values are realistic but totals sometimes inconsistent.
- Status distribution is roughly balanced.
- Useful as a baseline for Chapter 2 refinement.

## Chapter 2 – Data Variety and Extended Schema
Prompt used:
  "Generate 30 customer orders with an expanded status list, boundary totals, a few intentionally invalid rows flagged as isValid=false, and include email, phoneNumber, and items array fields."
Observations:
  - Added new statuses to mirror production states.
  - Introduced 3 invalid rows for validation testing.
  - Totals include edge boundaries (0, 9999, -12).
  - Each record now includes contact details and an items array.
  - The file stays schema-consistent for valid rows and clearly marks invalid ones.

  ## Chapter 3 – Data Masking and Validation
Prompt used:
"Mask customerName, email, and phoneNumber while keeping orderId, status, totalAmount, and items intact.
Preserve types and structure."
Checks performed:
- All masked fields preserve type and basic format.
- No record lost required keys.
- items arrays are intact with expected fields.
- Validation confirmed schema consistency.

INSIGHTS:
Generated data is described as synthetic but realistic because it is artificially created (not taken from real people or systems) while still looking and behaving like real production data. This balance is useful for development and testing.

## Chapter 4 – Integrating AI-Generated Data into Validation Workflows
Summary
- Dataset: customer-orders-chapter-3-masked.json
- Total records: 30
- Round-trip checks (using isValid): pass: 28, fail: 2
- Schema checks (detected issues): pass: 28, fail: 2

Failures (by record)
Expected failures (marked isValid: false):
  - orderId 1029 — missing email (required field absent)
  - orderId 1030 — type mismatches: status is numeric (404), totalAmount is a string, items[].quantity is a string
Unexpected issues:
  - None found — all records with schema issues are already isValid: false

Common failure causes observed
- issing required fields (e.g., email)
- Field type mismatches (numeric vs string for status, totalAmount, quantity)
- (No occurrences in this file) negative totalAmount or empty items flagged as failures here

## Chapter 5 – AI Data Quality Report
Validation source: Playwright | Postman
Total records tested: 30
Passed: 28
Failed: 2
Pass rate: 93.33 %
Common issues:
- missing required field: email (1)
- `status` type mismatch (numeric vs expected string) (1)
- `totalAmount` type mismatch (string vs expected number) (1)
- `items[].quantity` type mismatch (string vs expected number) (1)
Observations:
- Masking preserved structure in 100 % of valid rows.
- Failures are single-occurrence edge cases; they highlight areas for prompt refinement.
Next steps:
- Tighten prompt instructions for numeric fields and explicit types.
- Enforce required fields (email) in generation prompt.
- Add a pre-validation step to catch schema mismatches before sending data to the API.
