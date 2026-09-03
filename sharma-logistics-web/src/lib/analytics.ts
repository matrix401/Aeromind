/**
 * Thin, safe wrapper around GA4/GTM's dataLayer. A no-op when neither
 * NEXT_PUBLIC_GA_MEASUREMENT_ID nor NEXT_PUBLIC_GTM_CONTAINER_ID is
 * configured (see AnalyticsScripts) or when called during SSR — every
 * call site can fire events unconditionally without guarding for that.
 *
 * Event names match the Phase 12 tracking plan exactly:
 * call_click, whatsapp_click, quote_start, quote_step_complete,
 * quote_submit, quote_error, send_photos_click, survey_request,
 * locality_view, route_view, logistics_enquiry_start,
 * logistics_enquiry_submit, tracking_search.
 */

export type AnalyticsEventName =
  | "call_click"
  | "whatsapp_click"
  | "quote_start"
  | "quote_step_complete"
  | "quote_submit"
  | "quote_error"
  | "send_photos_click"
  | "survey_request"
  | "locality_view"
  | "route_view"
  | "logistics_enquiry_start"
  | "logistics_enquiry_submit"
  | "tracking_search";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined),
  );

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...cleanParams });

  // Also fire directly through gtag.js when GA4 is loaded without GTM.
  window.gtag?.("event", name, cleanParams);
}
