import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsappIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 py-24 text-center sm:px-6">
      <p className="font-display text-sm font-semibold uppercase tracking-wide text-orange">
        404
      </p>
      <h1 className="text-3xl font-bold text-ink sm:text-4xl">
        We couldn&apos;t find that page
      </h1>
      <p className="max-w-md text-[17px] text-text-dim">
        The page you&apos;re looking for may have moved. You can go back to the
        homepage, or speak to us directly and we&apos;ll help with what you need.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary">
          Go to homepage
        </Button>
        <Button
          href={business.contact.phoneHref}
          variant="call"
          icon={<PhoneIcon className="h-5 w-5" />}
        >
          Call us
        </Button>
        <Button
          href={business.contact.whatsappHref}
          variant="whatsapp"
          icon={<WhatsappIcon className="h-5 w-5" />}
        >
          WhatsApp us
        </Button>
      </div>
    </div>
  );
}
