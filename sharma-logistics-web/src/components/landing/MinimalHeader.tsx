import { Logo } from "@/components/layout/Logo";
import { PhoneIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

/**
 * Deliberately minimal — no full site navigation. Paid-traffic visitors
 * should see the offer, not a menu of everything else the site does.
 */
export function MinimalHeader() {
  return (
    <header className="border-b border-line bg-surface">
      <div className="mx-auto flex h-[72px] max-w-3xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <a
          href={business.contact.phoneHref}
          className="flex items-center gap-2 text-[15.5px] font-semibold text-ink"
        >
          <PhoneIcon className="h-5 w-5" />
          <span className="hidden sm:inline">{business.contact.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
