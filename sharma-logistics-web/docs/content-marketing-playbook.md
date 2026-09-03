# Content & Marketing Playbook

Phase 14 of the project brief. Two things: how one real-move record
becomes content everywhere it's needed, and ten fill-in templates for
the recurring content types the brief calls for.

## The real-move data model

Every genuinely completed, customer-approved move is one entry in
`src/content/moves.ts` (`realMoves: RealMove[]`, typed in
`src/lib/types.ts`). It starts empty and stays empty until a move
actually happened and the customer's permission to publish is on
record — see the non-negotiable truth policy notes in that file.

Adding one entry with `permissionStatus: "granted"` and the right
`appearsOn` / `relatedServiceSlug` / `relatedLocalitySlug` /
`relatedRouteSlug` values makes it show up automatically on:

- the homepage Recent Moves section (`appearsOn: ["homepage"]`)
- its matching service page (`relatedServiceSlug`)
- its matching region/locality hub (`relatedLocalitySlug`)
- its matching interstate route page (`relatedRouteSlug`)

No other code changes needed — `getMovesFor()` in `content/moves.ts` is
the one filter every page template calls.

### Field → channel mapping

| RealMove field | Website | Google Business Profile post | Instagram / Facebook | YouTube Shorts | Written case study |
|---|---|---|---|---|---|
| `id` | internal reference only | — | — | — | reference in the article slug |
| `serviceType`, `pickupLocality`, `destination` | card header | "We just completed a [serviceType] move from [pickupLocality] to [destination]" | caption opener | on-screen title card | article H1 |
| `date` | card meta | post date context | caption | — | article dateline |
| `sizeOrLoad`, `vehicle`, `crewSize`, `durationHours` | card stats | one-liner stat | caption stat row | on-screen stat overlay | "The job" section |
| `priceBand` | card | omit unless the customer approved sharing it | omit | omit | "What it cost" section |
| `packingMaterials` | (feeds Packing Proof template) | — | carousel slide 2-3 | b-roll of packing | "How we packed it" section |
| `challenges` / `resolution` | not shown on the compact card — this is the story | the post's actual narrative | caption body | the video's narrative arc | "The challenge" / "How we handled it" sections |
| `customerReview` | card quote | closing line | caption closer | on-screen quote card | pull-quote |
| `googleReviewLink` | card link | link in comments | link in bio/caption | link in description | citation link |
| `images` | card photo(s) | post image(s) | carousel | thumbnail + b-roll | article images |
| `videoUrl` | — | — | Reel/video post | the Short itself | embedded video |

The `challenges`/`resolution` pair is the most valuable field for
marketing and the least visible on the website — it's the actual story
("the lift was out of service, so we carried the wardrobe down six
flights and re-padded it at the base" beats "moved a wardrobe"). Write
it in full sentences, not a checkbox.

## Content templates

Fill-in-the-blank structures for the ten recurring content types. Each
maps to a `RealMove` entry where noted, and each — like everything else
in this project — gets published with real specifics, never a
`[VERIFY_...]` placeholder left in place.

### 1. Real Move
Source: one `RealMove` entry directly. Format: "[Service] from
[pickupLocality] to [destination], [date]. The job: [1-2 sentences from
sizeOrLoad/vehicle/crewSize]. The challenge: [challenges]. What we did:
[resolution]. [customerReview, if given]."

### 2. Packing Proof
Source: `packingMaterials` across several `RealMove` entries for the
same item type. Format: "[Item] → [material] + [method], because
[reason specific to that item's fragility/shape]." One per item; see
the homepage's Packing Proof section for the current generic version
this should eventually replace with photographed evidence.

### 3. Price Explained
Source: several `RealMove` `priceBand` + the price variables list
(`content/homepage.ts` → `priceVariables`). Format: "A [size] local
move typically lands in [range] once you account for [2-3 variables
that actually moved the price on a real job], for example [one
anonymized real example]."

### 4. Customer Voice
Source: `customerReview` + `googleReviewLink`. Format: direct quote,
attributed by first name + area only (never full identifying details
without explicit consent beyond the review itself), linked to the
independent source. Never edit a quote's meaning, only trim length.

### 5. Moving Checklist
Not tied to a single `RealMove`. Format: a dated countdown (4 weeks
before → moving day → 1 week after), each item a single actionable
line. Pull the "how it works" steps already on each service page as
the backbone, expand with what a customer should personally prepare.

### 6. Insurance Explained
Format: what protection is actually offered (fill in once
`[VERIFY_INSURANCE_POLICY]` is answered), what it covers, what it
doesn't, how a claim is filed, how long resolution takes
(`[VERIFY_CLAIMS_RESOLUTION_PROCESS]`). Never publish this template
with invented coverage terms.

### 7. Shared versus Dedicated Truck
Format: a two-column comparison — cost, timeline flexibility, exclusive
handling — filled in once `[VERIFY_SHARED_VS_DEDICATED_POLICY]` is
answered. Use one real `RealMove` example of each if available.

### 8. Hyderabad Apartment Lift Planning
Format: practical guidance by building type (independent house, low-rise
without lift, high-rise with lift, gated community with restricted
loading hours) — what to check before moving day, how it affects
pricing (link to the Charges page's price-variables list), one real
example of a lift-access challenge from `challenges`/`resolution` if on
file.

### 9. Avoiding Hidden Charges
Format: the site's own written-price-clarity commitment, restated as
customer-facing advice — "ask for X in writing," "confirm Y before
packing starts" — each point traceable to an actual policy on the
Charges/Terms pages, not a generic listicle.

### 10. Business Logistics Case Study
Source: a `RealMove`-shaped record for a commercial shipment (same
fields apply — goods type instead of household items, load capacity
instead of house size). Format: goods type + route + load → the
challenge (documentation, timing, handling) → the resolution →
measurable outcome if the customer shares one (on-time delivery,
damage-free arrival) → link to the relevant Business Logistics service
page.

## What's not done yet

No real move has been logged — `realMoves` is an empty array. This
playbook and the wiring in the page templates are ready; the first
completed, customer-approved job is the only missing input.
