# Remaining Placeholders — Claims Requiring Owner Verification

Generated directly from the codebase (`grep -r "\[VERIFY_\|\[INSERT_\|\[ASSIGNED_"`),
not from memory — this is the complete, accurate list as of the last
build. **158 occurrences of 58 distinct placeholders.** Nothing behind
these markers has been invented; see the truth policy in the original
project brief and in `src/config/business.ts`.

Every item below traces back to a numbered question in the Phase 0
business-truth checklist. Answering that checklist (or telling me
"proceed with placeholders" for specific items you genuinely don't have
yet) is what closes these out — search the codebase for the exact
bracketed token to find every place it needs to change; most are
centralized in `src/config/business.ts` or one `content/*.ts` file.

## Core business identity (`src/config/business.ts`)
- `[VERIFY_LEGAL_BUSINESS_NAME]`
- `[VERIFY_HYDERABAD_ADDRESS]`, `[VERIFY_LOCALITY]`, `[VERIFY_PINCODE]`
- `[VERIFY_STAFFED_BRANCHES]`
- `[VERIFY_PHONE_NUMBER]`, `[VERIFY_WHATSAPP_NUMBER]`, `[VERIFY_EMAIL_ADDRESS]`
- `[VERIFY_BUSINESS_HOURS]`
- `[VERIFY_GST_NUMBER]`, `[VERIFY_UDYAM_OR_OTHER_REGISTRATION]`
- `[VERIFY_YEARS_IN_OPERATION]`, `[VERIFY_COMPLETED_MOVES_COUNT]`
- `[VERIFY_GOOGLE_BUSINESS_PROFILE_LINK]`
- `[VERIFY_INSTAGRAM_URL]`, `[VERIFY_FACEBOOK_URL]`, `[VERIFY_YOUTUBE_URL]`
- `[VERIFY_RESPONSE_TIME]` (quotation response time)
- `[VERIFY_CLAIMS_RESOLUTION_PROCESS]`
- `[VERIFY_EXISTING_WEBSITE_URL_IF_ANY]`
- `[VERIFY_LEAD_DESTINATION_EMAIL_CRM_OR_SHEET]`
- `[ASSIGNED_COORDINATOR]`, `[CALL_OR_WHATSAPP]` — shown in the quote
  success state until a real coordinator-assignment process exists

## Pricing (all price-band and Charges-page content)
- `[VERIFY_PRICE_RANGE]`, `[VERIFY_PRICE_RANGE_LOCAL]`,
  `[VERIFY_PRICE_RANGE_INTERSTATE]`, `[VERIFY_PRICE_RANGE_VEHICLE]`,
  `[VERIFY_PRICE_RANGE_LOGISTICS]`, `[VERIFY_PRICE_RANGE_STORAGE]`,
  `[VERIFY_PRICE_RANGE_SMALL_MOVE]`
- `[VERIFY_PRICE_CHANGE_POLICY]`
- `[VERIFY_INCLUDED_EXCLUDED_SERVICES]`, `[VERIFY_OPTIONAL_CHARGES]`
- `[VERIFY_ADVANCE_PAYMENT_POLICY]`, `[VERIFY_PAYMENT_TERMS]`
- `[VERIFY_MINIMUM_ORDER_POLICY]`

**This is the single highest-value item to close.** Real pricing data
from ~30 past jobs (as the original brief requested) turns every
`[VERIFY_PRICE_RANGE_*]` into an actual number band across the
homepage, Charges page, and every service/route page at once.

## Policy — household moving
- `[VERIFY_PACKING_INCLUSION_POLICY]`, `[VERIFY_UNPACKING_POLICY]`
- `[VERIFY_INSURANCE_POLICY]`
- `[VERIFY_SHARED_VS_DEDICATED_POLICY]`
- `[VERIFY_TRACKING_CAPABILITY]`
- `[VERIFY_RESCHEDULING_POLICY]`, `[VERIFY_ADVANCE_NOTICE_POLICY]`
- `[VERIFY_DELIVERY_TIME_RANGE]` (per interstate route)
- `[VERIFY_INTERSTATE_DOCUMENTATION_REQUIREMENTS]`
- `[VERIFY_VEHICLE_DOCUMENTATION_REQUIREMENTS]`, `[VERIFY_CARRIER_TYPE_AVAILABILITY]`
- `[VERIFY_MINIMUM_STORAGE_PERIOD]`, `[VERIFY_STORAGE_ACCESS_POLICY]`,
  `[VERIFY_STORAGE_FACILITY_DETAILS]`

## Policy — business logistics
- `[VERIFY_GST_INVOICE_AVAILABILITY]`
- `[VERIFY_LOGISTICS_DOCUMENTATION_REQUIREMENTS]`
- `[VERIFY_VEHICLE_FLEET_OPTIONS]`, `[VERIFY_LOAD_CAPACITY_OPTIONS]`
- `[VERIFY_PROOF_OF_DELIVERY_PROCESS]`
- `[VERIFY_REGULAR_CONTRACT_AVAILABILITY]`, `[VERIFY_ACCOUNT_MANAGER_AVAILABILITY]`

## Legal pages
- `[VERIFY_LAST_UPDATED_DATE]` on Privacy and Terms — both pages are
  additionally banner-flagged "draft, pending legal review" and
  `noindex`ed until reviewed

## Content proof
- `[INSERT_REAL_MOVE_PHOTO]` — every packing-proof image, service/route/
  region "recent move" slot, homepage Recent Moves section
- `[INSERT_REAL_REVIEW]` — every review slot; currently all render an
  honest "not yet published" state rather than a fabricated testimonial

## What's already real
Everything not listed above is either genuinely static (page structure,
process descriptions that don't depend on unverified specifics) or
pulls from the single `src/config/business.ts` / `content/*.ts` source
— so verifying a fact once updates every page that uses it.
