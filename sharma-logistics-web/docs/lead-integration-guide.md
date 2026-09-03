# Lead Integration Guide

How to turn on real lead delivery — currently no destination is
configured, so every quote submission returns an honest error with a
call/WhatsApp fallback rather than a fake success (see
`src/lib/leads.ts` and the truth policy notes there).

## Choose one destination

The adapter (`deliverLead()` in `src/lib/leads.ts`) tries a webhook
first, then email, in that order — configuring either is enough.

### Option A — Webhook (recommended if you use a CRM, Zapier, or Make)
Set `LEAD_WEBHOOK_URL` in `.env.local` (or your hosting platform's env
vars) to an endpoint that accepts a `POST` with this JSON body:

```json
{
  "leadId": "SLS-ABC123",
  "formType": "moving" | "business-logistics" | "landing" | "quick-quote",
  "submittedAt": "2026-01-01T12:00:00.000Z",
  "data": { /* the full validated form payload — see src/lib/validation.ts for each formType's shape */ },
  "attribution": {
    "utmSource": "...", "utmMedium": "...", "utmCampaign": "...",
    "utmTerm": "...", "utmContent": "...", "gclid": "...",
    "landingPage": "/quote/moving"
  }
}
```

A `2xx` response is treated as success. Anything else (including no
response / a network error) is treated as a failed delivery, and the
visitor sees the honest error state with a call/WhatsApp fallback.

Common receivers: a Zapier/Make "Catch Webhook" trigger feeding a
spreadsheet or CRM, a serverless function, or a CRM's native webhook
intake if it has one.

### Option B — Email via Resend
Set `RESEND_API_KEY`, `LEAD_EMAIL_TO`, and `LEAD_EMAIL_FROM`. No SDK
dependency is added — the adapter calls Resend's REST API directly.
`LEAD_EMAIL_FROM` must be a verified sending domain/address in your
Resend account.

## What's already handled for you
- **Validation**: every submission is re-validated server-side with Zod
  (never trusts client-side validation alone) — see
  `src/app/api/leads/route.ts`
- **Spam protection**: a honeypot field plus an in-memory rate limiter
  (5 requests / 10 minutes per IP) — see `src/lib/rate-limit.ts` for its
  documented single-instance limitation and how to swap in a shared
  store (e.g. Upstash Redis) if you deploy to a multi-instance
  serverless platform
- **Attribution**: UTM parameters and `gclid` are captured automatically
  from the page URL and included with every lead — see
  `analytics-implementation-guide.md` for how this later ties booked
  jobs back to campaign/keyword revenue reporting
- **Consent**: every form requires an explicit checkbox before
  submission, linking to the Privacy Policy

## After configuring
1. Submit a real test enquiry through `/quote/moving`,
   `/quote/business-logistics`, and one `/lp/*` landing page.
2. Confirm the lead actually arrives at your chosen destination.
3. Confirm the visitor sees the real success state (not the error
   fallback) — if they still see an error after configuring a
   destination, check your webhook/Resend credentials first.

## Coordinator assignment
`[ASSIGNED_COORDINATOR]` and `[VERIFIED_RESPONSE_TIME]` currently show
as literal placeholders in the success state and in
`business.quotationResponseTime`. There is no coordinator-assignment
logic — this is a manual/CRM-side process today. If you want a real
name or rotation shown automatically, that requires a decision on how
coordinators are assigned (round robin, by area, by service type) before
it can be built.
