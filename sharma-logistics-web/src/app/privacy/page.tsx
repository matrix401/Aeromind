import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  // Draft content — kept out of search results until legally reviewed.
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <div className="mt-6 rounded-xl border-2 border-orange/40 bg-orange/5 p-4 text-sm text-text">
        <strong>Draft — pending legal review.</strong> This page describes, in
        plain language, what {business.brandName} plans to do with enquiry
        information. It has not yet been reviewed by a lawyer and must not be
        treated as final before launch.
      </div>

      <h1 className="mt-8 text-3xl font-bold text-ink">Privacy Policy</h1>
      <p className="mt-2 text-sm text-text-dim">Last updated: [VERIFY_LAST_UPDATED_DATE]</p>

      <div className="mt-8 space-y-8 text-[17px] leading-relaxed text-text">
        <section>
          <h2 className="text-xl font-semibold text-ink">What we collect</h2>
          <p className="mt-2">
            When you call, message us on WhatsApp, or submit a quote request on
            this website, we collect the details you provide — your name,
            phone number, email (if given), pickup and destination locations,
            moving date, and a description of what you want to move.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">How we use it</h2>
          <p className="mt-2">
            We use this information to prepare your quotation, coordinate your
            move, and contact you about your enquiry. We do not sell your
            phone number or contact details to third parties.
          </p>
          <p className="mt-2 text-text-dim">
            [VERIFY: full list of any third-party tools used to process leads
            — e.g. WhatsApp Business API, email provider, CRM — to be added
            once the lead-delivery destination in Phase 5 is finalised.]
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">Cookies and analytics</h2>
          <p className="mt-2 text-text-dim">
            [VERIFY: which analytics tools are enabled on the live site —
            Google Analytics, Google Tag Manager, call tracking, etc. — and
            describe their use here once Phase 12 is implemented.]
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">Your choices</h2>
          <p className="mt-2">
            You can ask us to delete your enquiry details at any time by
            contacting us at {business.contact.email}.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">Contact us</h2>
          <p className="mt-2">
            {business.legalName} · {business.address.line1},{" "}
            {business.address.city} · {business.contact.email} ·{" "}
            {business.contact.phoneDisplay}
          </p>
        </section>
      </div>
    </div>
  );
}
