# Recommended SEO Actions — Next 30 / 60 / 90 Days

Written against the site as actually built, not generic SEO advice —
each item names the real gap it closes.

## First 30 days
1. **Close the pricing placeholders.** Real price bands
   (`[VERIFY_PRICE_RANGE_*]`) are the single biggest lever — they turn
   every service and Charges-page section from "call to find out" into
   actual ranked, snippet-eligible content.
2. **Submit `/sitemap.xml` to Search Console** and watch indexing status
   for the 48 currently-indexable URLs; fix any "discovered, not
   indexed" pages by checking for thin content first.
3. **Set up Google Business Profile** fully (`google-business-profile-checklist.md`)
   — for a local-intent business like this, GBP visibility often
   outweighs organic ranking in the first weeks.
4. **Get the first 3-5 real moves logged** in `src/content/moves.ts`
   with `permissionStatus: "granted"` — this is what turns the
   homepage's and every service page's honest empty state into real
   proof, which matters for both conversion and (via the resulting
   content) for search.

## 30-60 days
5. **Expand locality coverage where evidence exists.** Any of the 11
   draft locality pages can flip from `noindex` to a real, indexed page
   the moment you have genuine local specifics for that area (a
   completed move there, real access/parking notes, a local review) —
   see the `published` flag in `content/localities.ts`. Don't flip a
   page without real content; a thin flip undoes the anti-doorway-page
   work already done.
6. **Start the content system.** With real moves flowing in, use
   `content-marketing-playbook.md` to turn 2-3 of them into: a GBP post,
   an Instagram/Facebook post, and one written case study per month.
7. **Monitor Search Console query data** for which service/route pages
   are getting impressions but low CTR — that's a signal to revise the
   meta description (each page's `metaDescription` field lives in the
   relevant `content/*.ts` file).

## 60-90 days
8. **Add remaining interstate routes** beyond the 12 already built, if
   real demand data (Search Console queries, actual enquiry volume)
   shows a route worth a dedicated page — same `RoutePageTemplate`
   pattern, just a new entry in `content/routeDetails.ts`.
9. **Review draft-vs-published locality pages again** — by 90 days
   there should be enough completed moves to back several more with
   real evidence.
10. **Reassess landing pages** (`/lp/*`) against actual Google Ads
    performance — the current 9 are a starting set; add more per
    campaign as ad spend proves out specific service/locality
    combinations worth a dedicated page.
11. **Revisit the price-range placeholders' precision** — early real
    pricing data (first 30 jobs) can now be replaced with a larger,
    more statistically real sample if pricing has evolved.
