import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { TrackMoveForm } from "@/components/track/TrackMoveForm";

export const metadata: Metadata = {
  title: "Track Your Move",
  description: "Check the status of your move or shipment with Sharma Logistics Solutions.",
};

export default function TrackMovePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Track Move" }]} />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">Track Your Move</h1>
      <p className="mt-3 text-[17.5px] text-text-dim">
        [VERIFY_TRACKING_CAPABILITY] — today, the fastest way to check your
        move&apos;s status is your reference number and a call or WhatsApp
        message to your coordinator.
      </p>

      <Card className="mt-8">
        <TrackMoveForm />
      </Card>

      <p className="mt-6 text-sm text-text-dim">
        Your reference number (e.g. SLS-XXXXXXX) was shown after you
        submitted your quote request, and is also sent to you by your move
        coordinator.
      </p>
    </div>
  );
}
