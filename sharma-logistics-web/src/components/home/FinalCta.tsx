import { Button } from "@/components/ui/Button";
import { WhatsappIcon, PhoneIcon, QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

export function FinalCta() {
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 py-14 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-[28px]">
          Planning a Move? Understand the Price Before You Book.
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href="/quote/moving" variant="primary" icon={<QuoteIcon className="h-5 w-5" />}>
            Check Moving Cost
          </Button>
          <Button
            href={business.contact.whatsappHref}
            variant="whatsapp"
            icon={<WhatsappIcon className="h-5 w-5" />}
            analyticsEvent="send_photos_click"
          >
            Send Photos
          </Button>
          <Button
            href={business.contact.phoneHref}
            variant="secondary"
            icon={<PhoneIcon className="h-5 w-5" />}
            className="border-white text-white hover:bg-white hover:text-ink"
          >
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
