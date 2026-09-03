# Content Inventory

Full list of every route in the site as of the last build (78 pages).
Generated against the actual `next build` route output and
`src/app/sitemap.ts` — not a plan, the real current state.

## Indexed pages (in `/sitemap.xml`, 48 URLs)

| Route | Type | Source |
|---|---|---|
| `/` | Homepage | `(site)/page.tsx` |
| `/moving-services` | Door 1 hub | static |
| `/moving-services/[10 slugs]` | Service pages | `content/services.ts` |
| `/business-logistics` | Door 2 hub | static |
| `/business-logistics/[10 slugs]` | Logistics pages | `content/logistics.ts` |
| `/charges` | Price guidance | static |
| `/locations` | Coverage hub | static |
| `/locations/[6 region slugs]` | Regional hub pages | `content/regions.ts` |
| `/routes` | Interstate routes hub | static |
| `/routes/[12 slugs]` | Route pages | `content/routeDetails.ts` |
| `/reviews` | Reviews (honest empty state) | static |
| `/track-move` | Track Move helper | static |
| `/about` | About | static |
| `/contact` | Contact | static |
| `/quote/moving` | Path A quote wizard | static |
| `/quote/business-logistics` | Path B enquiry form | static |

## Noindexed pages (real content, deliberately excluded from search)

| Route | Why |
|---|---|
| `/locations/[11 locality slugs]` (Kukatpally, Medchal, Sanath Nagar, Alwal, Kompally, Bowenpally, Jeedimetla, Balanagar, Miyapur, Gachibowli, Kondapur) | Honest "coverage confirmed on request" drafts — no verified per-locality evidence yet. Flip `published`/move out of `draftLocalities` once real local content exists. |
| `/privacy`, `/terms` | Draft, banner-flagged "pending legal review" |
| `/lp/[9 slugs]` | Google Ads landing pages — duplicative of the real service/locality pages by design, never meant to compete with them in organic search |
| `/_not-found` (both the root and `(site)` variants) | Standard |

## System routes (not pages)
- `/sitemap.xml`, `/robots.txt` — generated (`src/app/sitemap.ts`, `robots.ts`)
- `/api/leads` — POST-only lead intake endpoint, not a page

## Page templates (one component, many pages)
- `ServicePageTemplate` → all 10 `/moving-services/*` pages
- `LogisticsPageTemplate` → all 10 `/business-logistics/*` pages
- `RoutePageTemplate` → all 12 `/routes/*` pages
- `RegionHubTemplate` → all 6 `/locations/*` region pages
- `LocalityDraftTemplate` → all 11 draft locality pages
- `LandingPageTemplate` → all 9 `/lp/*` pages

Adding a new service/route/region/logistics page going forward means
adding one entry to the relevant `content/*.ts` file — the template and
routing already handle it via `generateStaticParams`.

## Not yet built (beyond this brief's initial scope)
The brief's Phase 6-9 lists were "initial pages" — these are the ones
actually built. Anything mentioned only in the original brief's broader
vision (e.g. additional locality pages beyond the first 11, additional
interstate routes beyond the 12 covered) is a natural next step, not a
gap in what was delivered.
