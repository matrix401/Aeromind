import Link from "next/link";
import { business, navigation } from "@/config/business";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, QuoteIcon } from "@/components/ui/icons";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navigation.main.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15.5px] font-medium text-text hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone number stays visible in the header on every viewport — never hidden inside a menu. */}
        <div className="flex items-center gap-3">
          <a
            href={business.contact.phoneHref}
            className="hidden items-center gap-2 text-[15.5px] font-semibold text-ink md:flex"
          >
            <PhoneIcon className="h-5 w-5" />
            {business.contact.phoneDisplay}
          </a>
          <Button
            href={navigation.quoteCta.href}
            variant="primary"
            icon={<QuoteIcon className="h-5 w-5" />}
            className="hidden sm:inline-flex"
          >
            {navigation.quoteCta.label}
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
