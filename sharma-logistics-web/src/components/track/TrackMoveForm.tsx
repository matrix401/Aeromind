"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsappIcon } from "@/components/ui/icons";
import { business } from "@/config/business";
import { buildWhatsappLink } from "@/lib/whatsapp";

/**
 * No live tracking backend exists yet — this is an honest lookup-free
 * helper that hands your reference number straight to a coordinator via
 * call or a prefilled WhatsApp message, rather than faking a status
 * lookup. Replace with a real tracking API once Phase 12's capability is
 * confirmed and built.
 */
export function TrackMoveForm() {
  const [reference, setReference] = useState("");

  const whatsappMessage = reference.trim()
    ? `Hi Sharma Logistics, can you share a status update for my move? Reference: ${reference.trim()}`
    : "Hi Sharma Logistics, can you share a status update for my move?";

  return (
    <div>
      <label className="mb-1.5 block text-[15.5px] font-medium text-text">
        Your reference number (optional)
        <input
          type="text"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder="e.g. SLS-ABC123"
          className="mt-1.5 min-h-12 w-full rounded-lg border border-line bg-paper px-3.5 text-[16px] text-text placeholder:text-text-dim focus-visible:outline-3 focus-visible:outline-orange focus-visible:outline-offset-1"
        />
      </label>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          href={buildWhatsappLink(whatsappMessage)}
          variant="whatsapp"
          icon={<WhatsappIcon className="h-5 w-5" />}
        >
          WhatsApp for a Status Update
        </Button>
        <Button href={business.contact.phoneHref} variant="call" icon={<PhoneIcon className="h-5 w-5" />}>
          Call for a Status Update
        </Button>
      </div>
    </div>
  );
}
