import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsappIcon, QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call, WhatsApp or get a free quote from ${business.brandName}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">Contact Us</h1>
      <p className="mt-3 text-[17.5px] text-text-dim">
        Speak to a real person, send photos on WhatsApp, or request a
        written quote — whichever is easiest for you.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={business.contact.phoneHref} variant="call" icon={<PhoneIcon className="h-5 w-5" />}>
          Call Now
        </Button>
        <Button href={business.contact.whatsappHref} variant="whatsapp" icon={<WhatsappIcon className="h-5 w-5" />}>
          WhatsApp Us
        </Button>
        <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
          Get Free Quote
        </Button>
      </div>

      <Card className="mt-10">
        <dl className="space-y-3 text-[15.5px]">
          <div className="flex gap-2">
            <dt className="w-28 shrink-0 font-medium text-text">Address</dt>
            <dd className="text-text-dim">
              {business.address.line1}, {business.address.city}, {business.address.state} {business.address.postalCode}
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-28 shrink-0 font-medium text-text">Phone</dt>
            <dd className="text-text-dim">{business.contact.phoneDisplay}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-28 shrink-0 font-medium text-text">WhatsApp</dt>
            <dd className="text-text-dim">{business.contact.whatsappDisplay}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-28 shrink-0 font-medium text-text">Email</dt>
            <dd className="text-text-dim">{business.contact.email}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-28 shrink-0 font-medium text-text">Hours</dt>
            <dd className="text-text-dim">{business.hours}</dd>
          </div>
        </dl>
      </Card>

      <p className="mt-6 text-sm text-text-dim">
        हिंदी • తెలుగు • English Support — let us know your preferred language
        when you call or message.
      </p>
    </div>
  );
}
