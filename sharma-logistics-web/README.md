# Sharma Logistics Solutions — website

Next.js (App Router) + TypeScript + Tailwind CSS site for Sharma Logistics
Solutions ("Hyderabad's Transparent Moving Partner"). This project is
independent from `aeromind-web/` elsewhere in this repository — a separate,
unrelated business.

## Status

Phase 3 of the project brief (Technical Foundation) is complete: global
layout, header, mobile nav, permanent mobile bottom action bar, footer, and
the core reusable component library. `src/app/page.tsx` is currently a
labeled component-preview scaffold, not the real homepage — that's built in
Phase 4.

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
  detail, phone/WhatsApp number, hours, and verified claim. All of it is
  `[VERIFY_...]` placeholders until the business owner confirms real values.
  Never hardcode a phone number, address, or claim anywhere else — read it
  from here.
- `src/components/layout/` — Header, Footer, MobileNav, MobileActionBar.
- `src/components/ui/` — Button, Card, Breadcrumbs, FaqAccordion, icons.
- `src/components/cards/` — ServiceCard, LocalityCard, RouteCard,
  ReviewCard, RealMoveCard.
- `src/components/forms/` — QuoteResultState (empty/loading/error/success).
- `src/lib/validation.ts` — Zod schemas (Indian mobile number, honeypot
  spam trap, quick-quote form) that the Phase 5 quote flows build on.
- `src/lib/types.ts` — shared content shapes for services, localities,
  routes, reviews, and completed-move case studies.

## Environment variables

Copy `.env.example` to `.env.local`. Nothing is hardcoded — lead delivery,
analytics, and the WhatsApp number all come from environment variables or
`src/config/business.ts`.

## Non-negotiable content rule

Never replace a `[VERIFY_...]` placeholder with an invented value —
years in business, review counts, prices, certifications, etc. Only real,
owner-confirmed facts go in `src/config/business.ts` and the content data
files added in later phases.
