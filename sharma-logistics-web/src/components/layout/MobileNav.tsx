"use client";

import { useState } from "react";
import Link from "next/link";
import { business, navigation } from "@/config/business";
import { MenuIcon, CloseIcon, PhoneIcon } from "@/components/ui/icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-ink text-ink"
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {open ? (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-surface pb-28"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 py-4">
            {navigation.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="min-h-12 rounded-lg px-3 py-3 text-lg font-medium text-text hover:bg-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-line px-4 py-4">
            <a
              href={business.contact.phoneHref}
              className="flex min-h-12 items-center gap-3 rounded-lg px-3 py-3 text-lg font-semibold text-ink"
            >
              <PhoneIcon className="h-5 w-5" />
              {business.contact.phoneDisplay}
            </a>
            <p className="px-3 text-sm text-text-dim">
              Your number stays with Sharma Logistics Solutions. No spam calls.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
