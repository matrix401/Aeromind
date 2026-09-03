# SEO Checklist

## Done (verify live once deployed)
- [x] Unique title + meta description per indexable page
- [x] One H1 per page, semantic heading hierarchy
- [x] Descriptive internal links (no "click here")
- [x] Breadcrumbs on every content page, with `BreadcrumbList` JSON-LD
      emitted automatically by the shared `Breadcrumbs` component
- [x] `FAQPage` JSON-LD emitted automatically by the shared `FaqAccordion`
      component, wherever it's used
- [x] `Service` JSON-LD on service/logistics/route pages
- [x] `Organization` + `MovingCompany` (LocalBusiness) JSON-LD site-wide —
      fields with unverified data are omitted entirely, never emitted as
      literal placeholder text (see `src/lib/seo.ts` → `isVerified()`)
- [x] Canonical URLs on all 18 indexable page templates
- [x] `sitemap.xml` (48 URLs, auto-generated) and `robots.txt`
- [x] Open Graph + Twitter Card metadata defaults (root layout)
- [x] Clean, readable URLs throughout
- [x] Custom, accessible 404 page (both a full-chrome and minimal variant)
- [x] `noindex` on thin/duplicative pages (draft localities, `/lp/*`,
      `/privacy`, `/terms`) — see content-inventory.md
- [x] No fabricated `AggregateRating` or review markup anywhere
- [x] Descriptive `alt` text pattern established for all image
      components (`RealMoveCard`, packing-proof cards) — actual `alt`
      text depends on real photos being supplied

## Pending owner action
- [ ] **Set `NEXT_PUBLIC_SITE_URL`** in production env vars — sitemap,
      robots.txt, canonical URLs and Open Graph all resolve against this;
      currently falls back to `http://localhost:3000`
- [ ] **Google Search Console**: verify the property, submit
      `/sitemap.xml`, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (see
      `.env.example`) — see `google-business-profile-checklist.md` for
      the related GBP setup
- [ ] Supply the real Google Business Profile URL
      (`business.googleBusinessProfileUrl`) — this both fixes the
      Reviews page's link and lets `hasMap` populate in LocalBusiness
      structured data
- [ ] Confirm NAP (name/address/phone) matches exactly across the
      website, Google Business Profile, and any other directory listing
      — consistency across all three is a real local-SEO ranking factor
- [ ] Real pricing data (see `placeholder-report.md`) — price content is
      currently placeholder-only, which limits how competitive service
      pages can be for commercial-intent keywords
- [ ] Real photos to replace every `[INSERT_REAL_MOVE_PHOTO]` — see
      `image-replacement-guide.md`
- [ ] Decide whether to flip any of the 11 draft locality pages to
      published/indexed once real per-locality evidence exists (local
      price factors, access notes, a completed move from that specific
      area) — see `content-inventory.md`

## Recommended next 30/60/90 days
See `seo-30-60-90-day-plan.md`.
