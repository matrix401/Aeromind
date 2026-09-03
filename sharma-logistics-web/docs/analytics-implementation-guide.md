# Analytics Implementation Guide

Covers Phase 12 of the project brief: how tracking is wired up, what
each event means, and how a booked job can later be matched back to the
Google Ads campaign/keyword that produced it.

## Turning tracking on

Nothing loads until you set env vars — no third-party script fires on a
freshly cloned repo. In `.env.local`:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXX      # GA4, standalone
NEXT_PUBLIC_GTM_CONTAINER_ID=GTM-XXXXXXX     # GTM (takes priority over standalone GA4)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...     # Search Console meta tag
```

If both are set, GTM loads and is expected to fire GA4 itself (the
standard setup) — the app won't double-load gtag.js in that case. See
`src/components/analytics/AnalyticsScripts.tsx`.

## How events reach GA4/GTM

`src/lib/analytics.ts` exports `trackEvent(name, params)`. It pushes to
`window.dataLayer` (what GTM reads) and calls `window.gtag(...)` directly
when present (covers standalone GA4). It's a safe no-op with nothing
configured — every call site in the app fires unconditionally, no need to
guard with `if (analyticsEnabled)`.

Two ways events get wired up:

1. **Automatically** — the shared `Button` component fires `call_click`
   or `whatsapp_click` by default for `variant="call"` / `variant="whatsapp"`
   buttons, anywhere in the app. Pass `analyticsEvent="..."` to override
   (used for "Send Photos" WhatsApp buttons → `send_photos_click`, and the
   Track Move page's buttons → `tracking_search`).
2. **Explicitly** — form components call `trackEvent(...)` at the moments
   in the tracking plan (start, step complete, submit, error). Page
   templates that just need a view event render `<ViewTracker event="..." />`.

## Event reference

| Event | Fires when | Key params |
|---|---|---|
| `call_click` | Any `tel:` button clicked | `href` |
| `whatsapp_click` | Any WhatsApp button clicked (not overridden) | `href` |
| `send_photos_click` | A "Send Photos" WhatsApp CTA specifically | `href` |
| `quote_start` | Homepage quick-quote form submitted, **or** `/quote/moving` visited directly (not both, to avoid double-counting one journey), **or** a landing-page form mounts | `source` |
| `quote_step_complete` | Path A wizard step advances | `step` |
| `quote_submit` | Path A wizard or landing-page form submits successfully | `leadId`, `whatToMove`/`moveScope` |
| `quote_error` | Any quote/enquiry form fails (validation passed but API rejected, or network error) | `form`, `leadId`, `status`/`reason` |
| `survey_request` | Path A submission where the visitor chose a home or video survey | `leadId`, `quoteMethod` |
| `locality_view` | A draft locality page is viewed | `locality`, `region` |
| `route_view` | An interstate route page is viewed | `route`, `from`, `to` |
| `logistics_enquiry_start` | Path B (business logistics) form mounts | — |
| `logistics_enquiry_submit` | Path B form submits successfully | `leadId`, `loadType` |
| `tracking_search` | A visitor uses the Track Move page's call/WhatsApp buttons | `href` |

## Form attribution

Every quote/enquiry submission (`src/app/api/leads/route.ts`) carries an
`attribution` object captured from the page's own URL query string —
`src/lib/attribution.ts` reads standard Google Ads/UTM parameters:

- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` (commonly used
  for the matched keyword), `utm_content` (commonly used for ad
  variant/ad group), `gclid` (Google's own click identifier — the most
  reliable join key for offline conversion import)
- `landingPage` — the page path the form was actually submitted from

This is sent to whatever lead destination is configured (webhook or
email — see `src/lib/leads.ts`) alongside the lead itself, and every
successful submission gets a `leadId` (e.g. `SLS-ABC123`) generated
server-side and returned to the browser — this is the join key described
below.

## Matching booked jobs and revenue back to campaign/keyword data

There is no CRM or booking system wired up yet (no destination has been
configured — see `.env.example`). Once one exists, the offline-conversion
loop works like this:

1. **At lead time**: the lead record (in your CRM, spreadsheet, or
   webhook payload) already contains `leadId`, `gclid`, `utm_campaign`,
   `utm_term`/`utm_content`, and `landingPage` — captured automatically,
   nothing to re-enter.
2. **At booking time**: when a lead becomes a confirmed, priced job, that
   same `leadId` should be written back onto the booking record (or the
   booking record *is* the lead record, with status/price fields added).
   This is the only manual step — whoever converts a lead into a booking
   needs the system they're using to keep the `leadId`.
3. **Reporting revenue against ad spend**: with `leadId → gclid` already
   linked from step 1, upload booked jobs to Google Ads as [offline
   conversions](https://support.google.com/google-ads/answer/2998031)
   (conversion action + `gclid` + conversion value + conversion date), or
   to GA4 as a [measurement protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4)
   event carrying the same `leadId`/`gclid`. Either path lets Google Ads
   report actual booked revenue per campaign/ad group/keyword, not just
   form-submit counts.
4. **Call-based bookings**: a booking that started with `call_click`
   (no lead ID, since it's a direct phone call) can't be tied to a
   specific ad click without a call-tracking number per campaign — that's
   a separate, currently-unconfigured capability (see "Call tracking" in
   the Phase 12 requirements). Until a call-tracking provider is added,
   phone-originated bookings should be tracked as a proportion/estimate
   rather than 1:1 attributed.

## What's not done yet

- No call-tracking number swap (would need a provider like CallRail or a
  Twilio-backed number pool per campaign).
- No CRM/booking-system integration — `leadId` is generated and returned,
  but nothing currently stores "this lead became a ₹X booking."
- GA4/GTM/Ads container IDs are unset — analytics currently fires into a
  `dataLayer` that no tag manager is reading yet. Confirmed working via a
  live browser check (see the Phase 12 commit) — it just needs real IDs.
