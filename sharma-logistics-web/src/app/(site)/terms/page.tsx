import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />

      <div className="mt-6 rounded-xl border-2 border-orange/40 bg-orange/5 p-4 text-sm text-text">
        <strong>Draft — pending legal review.</strong> These terms are a
        starting structure only. Pricing, cancellation, and liability clauses
        must be confirmed against {business.brandName}&apos;s actual policies
        before this page goes live.
      </div>

      <h1 className="mt-8 text-3xl font-bold text-ink">Terms of Service</h1>
      <p className="mt-2 text-sm text-text-dim">Last updated: [VERIFY_LAST_UPDATED_DATE]</p>

      <div className="mt-8 space-y-8 text-[17px] leading-relaxed text-text">
        <section>
          <h2 className="text-xl font-semibold text-ink">Quotations</h2>
          <p className="mt-2 text-text-dim">
            [VERIFY: how a written quotation is issued, what it is based on
            (survey, photos, or self-declared inventory), and the conditions
            under which the final price can change from the quoted amount.]
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">Payment terms</h2>
          <p className="mt-2 text-text-dim">
            [VERIFY: advance amount, payment stages, accepted payment methods,
            and GST invoicing.]
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">Damage and claims</h2>
          <p className="mt-2 text-text-dim">
            [VERIFY: {business.claimsResolutionProcess} — the actual
            claims-resolution process, and what protection, if any, is
            included or offered as an add-on.]
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-ink">Cancellations and rescheduling</h2>
          <p className="mt-2 text-text-dim">
            [VERIFY: notice period required and any charges that apply.]
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
