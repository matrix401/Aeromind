import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { QuickQuoteForm } from "@/components/home/QuickQuoteForm";
import { PhoneIcon, WhatsappIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

export function Hero() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <div>
            <h1 className="text-3xl font-bold text-ink sm:text-4xl lg:text-[42px] lg:leading-tight">
              Packers and Movers in Hyderabad &amp; Logistics Across India
            </h1>
            <p className="mt-4 max-w-xl text-[18px] text-text-dim">
              Move your home, office, vehicle or business goods safely with
              clear written pricing and one dedicated move coordinator.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                href="/moving-services"
                className="rounded-2xl border-2 border-ink bg-ink/5 p-5 transition-colors hover:bg-ink/10"
              >
                <p className="font-display text-lg font-semibold text-ink">I Want to Move</p>
                <p className="mt-1 text-[15px] text-text-dim">
                  Home • Office • Bike • Car • Household Goods
                </p>
              </Link>
              <Link
                href="/business-logistics"
                className="rounded-2xl border-2 border-line bg-paper p-5 transition-colors hover:border-ink"
              >
                <p className="font-display text-lg font-semibold text-ink">I Need Business Logistics</p>
                <p className="mt-1 text-[15px] text-text-dim">
                  Commercial Goods • Full Truck • Part Load • Warehousing
                </p>
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                href={business.contact.phoneHref}
                variant="call"
                icon={<PhoneIcon className="h-5 w-5" />}
              >
                Call and Get Help
              </Button>
              <Button
                href={business.contact.whatsappHref}
                variant="whatsapp"
                icon={<WhatsappIcon className="h-5 w-5" />}
              >
                Send Photos on WhatsApp
              </Button>
            </div>
          </div>

          <div>
            <QuickQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
