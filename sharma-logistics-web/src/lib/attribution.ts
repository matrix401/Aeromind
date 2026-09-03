const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export type Attribution = {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  landingPage?: string;
};

/**
 * Reads UTM parameters and Google's click id from a URL's search params so
 * a lead can later be matched back to the campaign/keyword/ad that brought
 * the visitor in — see the Phase 12 analytics guide for how this ties to
 * offline conversion import.
 */
export function readAttributionFromSearchParams(
  searchParams: URLSearchParams,
): Attribution {
  const attribution: Attribution = {};
  for (const key of UTM_KEYS) {
    const value = searchParams.get(key);
    if (value) {
      const camelKey = key.replace(/_([a-z])/g, (_, c: string) => c.toUpperCase()) as
        | "utmSource"
        | "utmMedium"
        | "utmCampaign"
        | "utmTerm"
        | "utmContent";
      attribution[camelKey] = value;
    }
  }
  const gclid = searchParams.get("gclid");
  if (gclid) attribution.gclid = gclid;
  return attribution;
}
