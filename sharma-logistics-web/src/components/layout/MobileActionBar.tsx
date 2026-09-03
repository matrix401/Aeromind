import { business, navigation } from "@/config/business";
import { PhoneIcon, WhatsappIcon, QuoteIcon } from "@/components/ui/icons";

/**
 * Permanent bottom action bar — always on screen on mobile, never inside a
 * menu. Three equal, thumb-sized targets: Call, WhatsApp, Get Quote.
 */
export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-3 border-t border-line bg-ink text-white lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={business.contact.phoneHref}
        className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-semibold"
      >
        <PhoneIcon className="h-5 w-5" />
        Call Now
      </a>
      <a
        href={business.contact.whatsappHref}
        className="flex min-h-14 flex-col items-center justify-center gap-0.5 border-x border-white/15 bg-whatsapp text-xs font-semibold"
      >
        <WhatsappIcon className="h-5 w-5" />
        WhatsApp
      </a>
      <a
        href={navigation.quoteCta.href}
        className="flex min-h-14 flex-col items-center justify-center gap-0.5 bg-orange text-xs font-semibold"
      >
        <QuoteIcon className="h-5 w-5" />
        Get Quote
      </a>
    </nav>
  );
}
