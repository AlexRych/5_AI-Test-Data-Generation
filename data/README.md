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