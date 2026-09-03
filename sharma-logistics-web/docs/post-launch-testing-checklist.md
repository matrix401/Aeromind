# Post-Launch Testing Checklist

Run this against the live production URL, not localhost — hosting,
DNS, and real network conditions can surface things a local build can't.

## Devices
- [ ] Mobile (real phone, not just a resized browser window) — check the
      bottom action bar doesn't overlap content, forms are usable with a
      thumb
- [ ] Tablet
- [ ] Desktop
- [ ] Slow network (browser DevTools "Slow 3G" throttling, or a real
      weak connection) — confirm the site is still usable, not just fast
      on a good connection

## Accessibility
- [ ] Full keyboard-only pass: Tab through the header, a quote form, and
      the footer — every stop should show a visible focus ring in a
      logical order (verified in dev via Playwright during Phase 13;
      re-verify by hand on the live site)
- [ ] Screen reader spot-check (VoiceOver/NVDA/TalkBack) on the homepage
      and one quote form — button/link labels should make sense out of
      context
- [ ] Re-run Lighthouse accessibility against the live URL — should
      still read 100 (Phase 13 baseline); investigate any regression

## Forms and lead flow
- [ ] Submit a real enquiry through `/quote/moving` (all 4 steps),
      `/quote/business-logistics`, and one `/lp/*` landing page —
      confirm each arrives at your configured lead destination
- [ ] Trigger each form's validation errors deliberately (empty
      required field, invalid phone number) — confirm the error message
      is specific and the field is identifiable
- [ ] Submit the honeypot field via browser devtools (set the hidden
      `website` field) — confirm it's silently rejected
- [ ] Submit 6+ requests rapidly — confirm the 6th is rate-limited (429)
- [ ] Call links (`tel:`) — confirm they open the phone dialer on mobile
- [ ] WhatsApp links — confirm they open WhatsApp with the number and
      any prefilled message intact

## Navigation and links
- [ ] Re-run a broken-link crawl against the live domain (the Phase 13
      approach: fetch every page, extract every internal `href`, confirm
      each resolves) — 0 broken links was the pre-launch baseline
- [ ] Browser back button after: completing a quote step, submitting a
      form, navigating between service pages — confirm no broken state
- [ ] Custom 404 page — visit a nonexistent URL, confirm it renders with
      full site chrome and working call/WhatsApp/home links

## SEO surfaces
- [ ] `/sitemap.xml` — loads, URLs use the real production domain (not
      `localhost:3000` — this only happens if `NEXT_PUBLIC_SITE_URL`
      wasn't set)
- [ ] `/robots.txt` — loads, references the correct sitemap URL
- [ ] View-source on the homepage and one dynamic page — confirm
      canonical tag, meta description, and JSON-LD are present and
      contain no literal `[VERIFY_...]` text
- [ ] Test structured data with Google's Rich Results Test on the
      homepage (Organization/LocalBusiness) and one FAQ-bearing page

## Security
- [ ] Check response headers (browser DevTools Network tab or
      `curl -I`) for `X-Content-Type-Options`, `X-Frame-Options`,
      `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`
- [ ] Confirm HTTPS is enforced (HTTP requests redirect to HTTPS)
- [ ] View page source / bundled JS — confirm no server-only env var
      (`RESEND_API_KEY`, `LEAD_WEBHOOK_URL`) appears anywhere client-side

## Images (once real photos are added)
- [ ] No layout shift when images load (Lighthouse CLS should stay ~0)
- [ ] Every image has real, descriptive `alt` text
- [ ] No broken image links
