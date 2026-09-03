import type { ReactNode } from "react";
import { MinimalHeader } from "@/components/landing/MinimalHeader";
import { MinimalFooter } from "@/components/landing/MinimalFooter";
import { MobileActionBar } from "@/components/layout/MobileActionBar";

/**
 * Minimal chrome for Google Ads landing pages (Phase 11) — logo + phone
 * only in the header, no main site navigation, so paid-traffic visitors
 * see the offer instead of a menu. The mobile action bar stays: it's
 * conversion UI (Call/WhatsApp/Quote), not site navigation.
 */
export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MinimalHeader />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <MinimalFooter />
      <MobileActionBar />
    </>
  );
}
