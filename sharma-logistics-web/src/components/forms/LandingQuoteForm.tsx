"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { landingQuoteSchema } from "@/lib/validation";
import { readAttributionFromSearchParams } from "@/lib/attribution";
import { Button } from "@/components/ui/Button";
import { QuoteResultState } from "@/components/forms/QuoteResultState";
import { QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";

/**
 * Deliberately short — name, mobile, one optional detail field. Every
 * extra field on a paid-traffic landing page costs conversions.
 */
export function LandingQuoteForm({ detailsLabel }: { detailsLabel: string }) {
  const searchParams = useSearchParams();
  const [values, setValues] = useState({ name: "", mobile: "", details: "", consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<{ coordinatorName?: string; responseTime?: string; message?: string }>({});

  async function handleSubmit() {
    const parsed = landingQuoteSchema.safeParse({ ...values, website: "" });
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) fieldErrors[String(issue.path[0])] = issue.message;
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "landing",
          data: parsed.data,
          attribution: {
            ...readAttributionFromSearchParams(searchParams),
            landingPage: typeof window !== "undefined" ? window.location.pathname : undefined,
          },
        }),
      });
      const body = await response.json();
      if (!response.ok || !body.ok) {
        setResult({ message: body.error ?? "Something went wrong. Please try again." });
        setStatus("error");
        return;
      }
      setResult({ coordinatorName: body.coordinatorName, responseTime: body.responseTime });
      setStatus("success");
    } catch {
      setResult({ message: "Something went wrong. Please check your connection and try again." });
      setStatus("error");
    }
  }

  if (status === "success") {
    return <QuoteResultState status="success" coordinatorName={result.coordinatorName} responseTime={result.responseTime} contactMethod="phone call" />;
  }
  if (status === "error") {
    return <QuoteResultState status="error" message={result.message ?? "Something went wrong. Please try again."} onRetry={() => setStatus("idle")} />;
  }
  if (status === "loading") {
    return <QuoteResultState status="loading" />;
  }

  return (
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-6">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-[15.5px] font-medium text-text">Your name</label>
          <input
            type="text"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className={inputClasses}
          />
          {errors.name && <p className="mt-1 text-sm text-err">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-[15.5px] font-medium text-text">Mobile number</label>
          <input
            type="tel"
            inputMode="numeric"
            value={values.mobile}
            onChange={(e) => setValues((v) => ({ ...v, mobile: e.target.value }))}
            className={inputClasses}
            placeholder="10-digit mobile number"
          />
          {errors.mobile && <p className="mt-1 text-sm text-err">{errors.mobile}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-[15.5px] font-medium text-text">{detailsLabel}</label>
          <input
            type="text"
            value={values.details}
            onChange={(e) => setValues((v) => ({ ...v, details: e.target.value }))}
            className={inputClasses}
          />
        </div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => setValues((v) => ({ ...v, consent: e.target.checked }))}
            className="mt-1 h-5 w-5 shrink-0 accent-ink"
          />
          <span className="text-sm text-text-dim">
            I agree that {business.brandName} can contact me about this enquiry. See our{" "}
            <a href="/privacy" className="text-ink-2 hover:underline">Privacy Policy</a>.
          </span>
        </label>
        {errors.consent && <p className="text-sm text-err">{errors.consent}</p>}
      </div>
      <Button type="button" variant="primary" fullWidth icon={<QuoteIcon className="h-5 w-5" />} onClick={handleSubmit} className="mt-5">
        Get Free Quote
      </Button>
    </div>
  );
}

const inputClasses =
  "min-h-12 w-full rounded-lg border border-line bg-paper px-3.5 text-[16px] text-text placeholder:text-text-dim focus-visible:outline-3 focus-visible:outline-orange focus-visible:outline-offset-1";
