"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

/**
 * Fires a page-view-shaped analytics event once on mount — for use inside
 * otherwise-server-rendered templates (locality/route pages) that just
 * need to report a view, nothing interactive.
 */
export function ViewTracker({
  event,
  params,
}: {
  event: AnalyticsEventName;
  params?: Record<string, string | number | boolean | undefined>;
}) {
  useEffect(() => {
    trackEvent(event, params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
