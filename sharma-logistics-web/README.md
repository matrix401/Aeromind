# Sharma Logistics Solutions — website

Next.js 16 (App Router) + TypeScript + Tailwind CSS site for Sharma
Logistics Solutions ("Hyderabad's Transparent Moving Partner"). This
project is independent from `aeromind-web/` elsewhere in this repository
— a separate, unrelated business.

## Status

All 15 phases of the project brief are built: information architecture,
design system, technical foundation, homepage, the full quote/enquiry
flow with real lead delivery plumbing, 10 service pages, Hyderabad
location pages (6 regional hubs + 11 locality drafts), 12 interstate
route pages, 10 business-logistics pages, SEO (structured data, sitemap,
canonicals), 9 Google Ads landing pages, analytics/conversion tracking,
a performance/accessibility/QA pass (Lighthouse 95+/100/100/100 on the
homepage), and the real-move content system. 78 pages build cleanly.

**What's not done, deliberately:** no fabricated business facts. Every
phone number, price, policy detail, review, and completed-move photo is
either real (verified with the business owner) or an explicit
`[VERIFY_...]`/`[INSERT_...]` placeholder — see `docs/placeholder-report.md`
for the complete, current list and `docs/launch-checklist.md` for what
to resolve before going live.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run lint       # ESLint
npx tsc --noEmit   # Typecheck
npm run build      # Production build
```

## Where things live

- `src/config/business.ts` — the single source of truth for every NAP
  detail, phone/WhatsApp number, hours, and verified claim. Never
  hardcode a phone number, address, or claim anywhere else — read it
  from here.
- `src/app/(site)/` — the main site (full header/footer/nav chrome, via
  `(site)/layout.tsx`). `src/app/(landing)/` — Google Ads landing pages
  (minimal chrome, via `(landing)/layout.tsx`). Both share the same root
  `src/app/layout.tsx` document shell.
- `src/content/*.ts` — the data behind every dynamic page family:
  `services.ts`, `logistics.ts`, `regions.ts`, `localities.ts`,
  `routeDetails.ts`, `landingPages.ts`, `moves.ts`, `homepage.ts`. Adding
  a new service/route/region page is one new entry in the relevant file
  — the routing (`generateStaticParams`) handles the rest.
- `src/components/layout/`, `.../ui/`, `.../cards/`, `.../forms/`,
  `.../home/`, `.../services/`, `.../locations/`, `.../routes/`,
  `.../logistics/`, `.../landing/`, `.../analytics/`, `.../seo/` — the
  full component library, organized by what it's for.
- `src/lib/validation.ts` — every Zod schema (quote forms, business
  logistics, landing forms — all server-side validated, never trusting
  the client alone). `src/lib/leads.ts` — the lead-delivery adapter
  (webhook or email, honest failure when neither is configured).
  `src/lib/analytics.ts` — the event-tracking helper. `src/lib/seo.ts` —
  structured-data builders that skip unverified fields rather than
  emitting placeholder text.
- `src/app/api/leads/route.ts` — the one lead-intake endpoint every
  quote/enquiry form posts to.

## Environment variables

Copy `.env.example` to `.env.local`. Nothing is hardcoded — lead
delivery, analytics, and site URL all come from environment variables.
See `docs/lead-integration-guide.md` for how to turn on real lead
delivery.

## Documentation

Everything needed to take this to launch and beyond lives in `docs/`:

- `placeholder-report.md` — every remaining `[VERIFY_...]` claim, grouped
- `content-inventory.md` — every route, its type, and its index status
- `seo-checklist.md` / `seo-30-60-90-day-plan.md`
- `google-business-profile-checklist.md`
- `analytics-implementation-guide.md`
- `lead-integration-guide.md`
- `image-replacement-guide.md`
- `content-marketing-playbook.md`
- `launch-checklist.md` (deployment instructions included)
- `post-launch-testing-checklist.md`

## Non-negotiable content rule

Never replace a `[VERIFY_...]` placeholder with an invented value —
years in business, review counts, prices, certifications, testimonials,
etc. Only real, owner-confirmed facts go in `src/config/business.ts` and
the `content/*.ts` data files.
