"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { quickQuoteSchema } from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";
import { trackEvent } from "@/lib/analytics";

const whatToMoveOptions = [
  "House / home items",
  "Office",
  "Bike",
  "Car",
  "A few items only",
  "Storage",
];

const inputClasses =
  "min-h-12 w-full rounded-lg border border-line bg-paper px-3.5 text-[16px] text-text placeholder:text-text-dim focus-visible:outline-3 focus-visible:outline-orange focus-visible:outline-offset-1";
const labelClasses = "mb-1.5 block text-sm font-medium text-text";

/**
 * Client-side validated. Actual lead delivery (server action / webhook)
 * lands in Phase 5 — for now, a valid submission carries the visitor into
 * the Path A quote flow with these answers pre-filled.
 */
export function QuickQuoteForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = {
      movingFrom: String(formData.get("movingFrom") ?? ""),
      movingTo: String(formData.get("movingTo") ?? ""),
      whatToMove: String(formData.get("whatToMove") ?? ""),
      movingDate: String(formData.get("movingDate") ?? ""),
      mobile: String(formData.get("mobile") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const result = quickQuoteSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    trackEvent("quote_start", { whatToMove: result.data.whatToMove, source: "homepage_quick_quote" });
    const params = new URLSearchParams({
      from: result.data.movingFrom,
      to: result.data.movingTo,
      what: result.data.whatToMove,
      date: result.data.movingDate,
      mobile: result.data.mobile,
    });
    router.push(`/quote/moving?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-6">
      {/* Honeypot: hidden from real visitors, any bot that fills it gets rejected client-side. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="movingFrom" className={labelClasses}>Moving from</label>
          <input id="movingFrom" name="movingFrom" type="text" placeholder="e.g. Kukatpally, Hyderabad" className={inputClasses} />
          {errors.movingFrom && <p className="mt-1 text-sm text-err">{errors.movingFrom}</p>}
        </div>
        <div>
          <label htmlFor="movingTo" className={labelClasses}>Moving to</label>
          <input id="movingTo" name="movingTo" type="text" placeholder="e.g. Gachibowli, or another city" className={inputClasses} />
          {errors.movingTo && <p className="mt-1 text-sm text-err">{errors.movingTo}</p>}
        </div>
        <div>
          <label htmlFor="whatToMove" className={labelClasses}>What do you want to move?</label>
          <select id="whatToMove" name="whatToMove" defaultValue="" className={inputClasses}>
            <option value="" disabled>Choose one</option>
            {whatToMoveOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.whatToMove && <p className="mt-1 text-sm text-err">{errors.whatToMove}</p>}
        </div>
        <div>
          <label htmlFor="movingDate" className={labelClasses}>Moving date</label>
          <input id="movingDate" name="movingDate" type="date" className={inputClasses} />
          {errors.movingDate && <p className="mt-1 text-sm text-err">{errors.movingDate}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mobile" className={labelClasses}>Mobile number</label>
          <input id="mobile" name="mobile" type="tel" inputMode="numeric" placeholder="10-digit mobile number" className={inputClasses} />
          {errors.mobile && <p className="mt-1 text-sm text-err">{errors.mobile}</p>}
        </div>
      </div>

      <Button type="submit" variant="primary" fullWidth icon={<QuoteIcon className="h-5 w-5" />} className="mt-5">
        Check Moving Cost
      </Button>
      <p className="mt-3 text-center text-sm text-text-dim">
        Your number stays with {business.brandName}. No spam calls.
      </p>
    </form>
  );
}
