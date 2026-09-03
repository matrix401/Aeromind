# Launch Checklist

## Must-do before going live
- [ ] Fill in real values in `src/config/business.ts` — at minimum:
      phone, WhatsApp, address, hours. A site that launches with
      `[VERIFY_PHONE_NUMBER]` visibly on every page is worse than not
      launching yet.
- [ ] Configure lead delivery (`lead-integration-guide.md`) — without
      this, every quote submission shows the honest error/fallback state
      instead of succeeding
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the real production domain
- [ ] Decide on real pricing data, or explicitly accept that price
      sections show `[VERIFY_PRICE_RANGE_*]` at launch (defensible short
      term, since the site never fabricates a number — but worth a
      deliberate decision, not an oversight)
- [ ] Legal review of `/privacy` and `/terms` — both are currently
      banner-flagged draft and `noindex`ed specifically so they can't be
      mistaken for reviewed policy
- [ ] Point the domain's DNS at the hosting platform; confirm HTTPS is
      active (the app already sends an HSTS header assuming HTTPS)

## Deployment
This is a standard Next.js 16 App Router project — no special
infrastructure required.

**Recommended: Vercel** (zero-config for Next.js):
1. Import the repo, set the root directory to `sharma-logistics-web/`
2. Add all env vars from `.env.example` in the project's Environment
   Variables settings
3. Deploy — `next build` runs automatically

**Alternative: any Node host** (Railway, Render, a VPS, etc.):
```bash
npm install
npm run build
npm run start   # serves on $PORT, default 3000
```
Set the same env vars via the platform's mechanism. No database, no
external services required beyond whatever lead-delivery destination
you configure.

## Redirect map
None needed. This is a new site with no prior published URLs to
preserve — `aeromind-web/` elsewhere in this repository is a separate,
unrelated project. If a previous Sharma Logistics website existed
outside this repo (`business.legacySiteUrl`, currently
`[VERIFY_EXISTING_WEBSITE_URL_IF_ANY]`), its URL structure would need
to be supplied before any redirect plan could be written — none has
been.

## After deploying, before announcing
- [ ] Run through `post-launch-testing-checklist.md` against the live
      production URL (not just localhost)
- [ ] Submit `/sitemap.xml` in Google Search Console
- [ ] Verify Search Console ownership (`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`)
- [ ] Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` / `NEXT_PUBLIC_GTM_CONTAINER_ID`
      if analytics should be live from day one
- [ ] Complete `google-business-profile-checklist.md`
