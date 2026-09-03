# Google Business Profile Checklist

This is guidance for setting up/optimizing the Google Business Profile
(GBP) itself — separate from the website, but the two reinforce each
other (matching NAP, cross-linking, and the profile is where the site's
real reviews will actually live).

## Setup
- [ ] Claim or create the listing for the exact legal business name
      (`[VERIFY_LEGAL_BUSINESS_NAME]`)
- [ ] Category: primary "Mover" or "Moving company" (Google's actual
      category taxonomy — pick the closest match), secondary categories
      for any logistics/transport services genuinely offered
- [ ] Address matching `src/config/business.ts` exactly (or "service
      area business" with no public address, if that's accurate)
- [ ] Phone number matching the website exactly — same number, same
      formatting, everywhere
- [ ] Website URL pointing to the production domain
- [ ] Business hours matching `[VERIFY_BUSINESS_HOURS]` once confirmed
- [ ] Service area set to match the real Hyderabad coverage (and any
      interstate reach, if GBP's service-area feature is used for that)

## Content
- [ ] Upload real photos — team, vehicles, packing in progress, completed
      moves (with customer permission) — these are exactly the same
      photos that fill `[INSERT_REAL_MOVE_PHOTO]` across the website;
      shoot once, use everywhere
- [ ] Write a business description using the approved brand promise
      ("Clear Price. Careful Moving. One Responsible Person.") — no
      invented claims (years in business, "India's No. 1", etc.), same
      truth policy as the website
- [ ] Add services matching the site's actual service pages, so GBP's
      own service list and the website's Moving Services /
      Business Logistics pages tell the same story

## Reviews
- [ ] Once real reviews exist, link the profile from the website's
      Reviews page (already wired — set `googleBusinessProfileUrl` in
      `src/config/business.ts` and the link appears automatically)
- [ ] Never purchase or fabricate reviews — the website's own policy
      already refuses to display anything but real, linked reviews

## Ongoing
- [ ] Post regularly using the Content & Marketing Playbook
      (`content-marketing-playbook.md`) — every real completed move is
      already structured to become a GBP post with almost no rewriting
- [ ] Respond to every review, positive or negative
- [ ] Keep hours/contact info in sync with the website — a mismatch
      actively hurts local ranking
