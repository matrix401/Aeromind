"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { businessLogisticsQuoteSchema } from "@/lib/validation";
import { readAttributionFromSearchParams } from "@/lib/attribution";
import { RadioCardGroup } from "@/components/forms/RadioCardGroup";
import { Button } from "@/components/ui/Button";
import { QuoteResultState } from "@/components/forms/QuoteResultState";
import { QuoteIcon } from "@/components/ui/icons";
import { business } from "@/config/business";
import { trackEvent } from "@/lib/analytics";

type FormState = {
  pickupCity: string;
  destinationCity: string;
  goodsType: string;
  approxWeight: string;
  weightUnknown: boolean;
  numberOfPackages: string;
  loadType: string;
  pickupDate: string;
  loadingRequired: boolean;
  unloadingRequired: boolean;
  gstInvoiceRequired: boolean;
  name: string;
  businessName: string;
  mobile: string;
  consent: boolean;
};

const initialState: FormState = {
  pickupCity: "Hyderabad",
  destinationCity: "",
  goodsType: "",
  approxWeight: "",
  weightUnknown: false,
  numberOfPackages: "",
  loadType: "",
  pickupDate: "",
  loadingRequired: false,
  unloadingRequired: false,
  gstInvoiceRequired: false,
  name: "",
  businessName: "",
  mobile: "",
  consent: false,
};

export function BusinessLogisticsQuoteForm() {
  const searchParams = useSearchParams();
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<{ coordinatorName?: string; responseTime?: string; message?: string }>({});

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  useEffect(() => {
    trackEvent("logistics_enquiry_start");
  }, []);

  async function handleSubmit() {
    const approxWeight = values.weightUnknown ? "Not sure — will share a photo" : values.approxWeight;
    const parsed = businessLogisticsQuoteSchema.safeParse({ ...values, approxWeight, website: "" });
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
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
          formType: "business-logistics",
          data: parsed.data,
          attribution: {
            ...readAttributionFromSearchParams(searchParams),
            landingPage: typeof window !== "undefined" ? window.location.pathname : undefined,
          },
        }),
      });
      const body = await response.json();

      if (!response.ok || !body.ok) {
        trackEvent("quote_error", { form: "business-logistics", leadId: body.leadId, status: response.status });
        setResult({ message: body.error ?? "Something went wrong. Please try again." });
        setStatus("error");
        return;
      }

      trackEvent("logistics_enquiry_submit", { leadId: body.leadId, loadType: values.loadType });
      setResult({ coordinatorName: body.coordinatorName, responseTime: body.responseTime });
      setStatus("success");
    } catch {
      trackEvent("quote_error", { form: "business-logistics", reason: "network" });
      setResult({ message: "Something went wrong. Please check your connection and try again." });
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <QuoteResultState
        status="success"
        coordinatorName={result.coordinatorName}
        responseTime={result.responseTime}
        contactMethod="phone call"
      />
    );
  }
  if (status === "error") {
    return (
      <QuoteResultState
        status="error"
        message={result.message ?? "Something went wrong. Please try again."}
        onRetry={() => setStatus("idle")}
      />
    );
  }
  if (status === "loading") {
    return <QuoteResultState status="loading" />;
  }

  return (
    <div className="space-y-6 rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Pickup city" error={errors.pickupCity}>
          <input type="text" value={values.pickupCity} onChange={(e) => update("pickupCity", e.target.value)} className={inputClasses} />
        </Field>
        <Field label="Destination city" error={errors.destinationCity}>
          <input type="text" value={values.destinationCity} onChange={(e) => update("destinationCity", e.target.value)} className={inputClasses} placeholder="e.g. Chennai" />
        </Field>
      </div>

      <Field label="Type of goods" error={errors.goodsType}>
        <input type="text" value={values.goodsType} onChange={(e) => update("goodsType", e.target.value)} className={inputClasses} placeholder="e.g. Packaged electronics, textiles, machinery parts" />
      </Field>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Approximate weight" error={errors.approxWeight}>
          <input
            type="text"
            value={values.weightUnknown ? "" : values.approxWeight}
            onChange={(e) => update("approxWeight", e.target.value)}
            disabled={values.weightUnknown}
            className={`${inputClasses} disabled:bg-line/40 disabled:text-text-dim`}
            placeholder="e.g. 500 kg"
          />
          <label className="mt-2 flex items-center gap-2 text-sm text-text-dim">
            <input
              type="checkbox"
              checked={values.weightUnknown}
              onChange={(e) => update("weightUnknown", e.target.checked)}
              className="h-4 w-4 accent-ink"
            />
            I don&apos;t know the weight — let me send a photo
          </label>
        </Field>
        <Field label="Number of packages" error={errors.numberOfPackages}>
          <input type="text" value={values.numberOfPackages} onChange={(e) => update("numberOfPackages", e.target.value)} className={inputClasses} />
        </Field>
      </div>

      <RadioCardGroup
        name="loadType"
        legend="Full truck or part load?"
        columns={2}
        options={[
          { value: "full-truck", label: "Full truck" },
          { value: "part-load", label: "Part load" },
        ]}
        value={values.loadType}
        onChange={(v) => update("loadType", v)}
        error={errors.loadType}
      />

      <Field label="Pickup date" error={errors.pickupDate}>
        <input type="date" value={values.pickupDate} onChange={(e) => update("pickupDate", e.target.value)} className={inputClasses} />
      </Field>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Checkbox label="Loading required" checked={values.loadingRequired} onChange={(v) => update("loadingRequired", v)} />
        <Checkbox label="Unloading required" checked={values.unloadingRequired} onChange={(v) => update("unloadingRequired", v)} />
        <Checkbox label="GST invoice required" checked={values.gstInvoiceRequired} onChange={(v) => update("gstInvoiceRequired", v)} />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Your name" error={errors.name}>
          <input type="text" value={values.name} onChange={(e) => update("name", e.target.value)} className={inputClasses} />
        </Field>
        <Field label="Business name" error={errors.businessName}>
          <input type="text" value={values.businessName} onChange={(e) => update("businessName", e.target.value)} className={inputClasses} />
        </Field>
      </div>

      <Field label="Mobile number" error={errors.mobile}>
        <input type="tel" inputMode="numeric" value={values.mobile} onChange={(e) => update("mobile", e.target.value)} className={inputClasses} placeholder="10-digit mobile number" />
      </Field>

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={values.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-1 h-5 w-5 shrink-0 accent-ink"
        />
        <span className="text-sm text-text-dim">
          I agree that {business.brandName} can contact me about this enquiry by
          call or WhatsApp. See our{" "}
          <a href="/privacy" className="text-ink-2 hover:underline">Privacy Policy</a>.
        </span>
      </label>
      {errors.consent ? <p className="text-sm text-err">{errors.consent}</p> : null}

      <Button type="button" variant="primary" fullWidth icon={<QuoteIcon className="h-5 w-5" />} onClick={handleSubmit}>
        Submit enquiry
      </Button>
    </div>
  );
}

const inputClasses =
  "min-h-12 w-full rounded-lg border border-line bg-paper px-3.5 text-[16px] text-text placeholder:text-text-dim focus-visible:outline-3 focus-visible:outline-orange focus-visible:outline-offset-1";

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-[15.5px] font-medium text-text">
        {label}
        <div className="mt-1.5">{children}</div>
      </label>
      {error ? <p className="mt-1 text-sm text-err">{error}</p> : null}
    </div>
  );
}

function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex min-h-12 items-center gap-2.5 rounded-xl border border-line bg-paper px-3.5">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="h-5 w-5 shrink-0 accent-ink" />
      <span className="text-[15px] text-text">{label}</span>
    </label>
  );
}
