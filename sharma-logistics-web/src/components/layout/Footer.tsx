import Link from "next/link";
import { business, navigation } from "@/config/business";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="reversed" />
            <p className="mt-4 max-w-xs text-sm text-white/75">
              {business.supportingMessage}
            </p>
            <p className="mt-3 text-xs tracking-wide text-white/60">
              हिंदी • తెలుగు • English Support
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white/70">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>{business.address.line1}</li>
              <li>
                {business.address.city}, {business.address.state}{" "}
                {business.address.postalCode}
              </li>
              <li>
                <a href={business.contact.phoneHref} className="hover:underline">
                  {business.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.contact.email}`}
                  className="hover:underline"
                >
                  {business.contact.email}
                </a>
              </li>
              <li>{business.hours}</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white/70">
              Explore
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-white/70">
              Legal
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {navigation.footerLegal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/50">
              GST: {business.registrations.gst}
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {year} {business.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
