"use client";

import { useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { movingQuoteSchema, movingQuoteStepSchemas } from "@/lib/validation";
import { readAttributionFromSearchParams } from "@/lib/attribution";
import { movingQuoteWhatsappMessage, buildWhatsappLink } from "@/lib/whatsapp";
import { RadioCardGroup } from "@/components/forms/RadioCardGroup";
import { StepProgress } from "@/components/forms/StepProgress";
import { Button } from "@/components/ui/Button";
import { QuoteResultState } from "@/components/forms/QuoteResultState";
import { business } from "@/config/business";

const TOTAL_STEPS = 4;

type FormState = {
  moveScope: string;
  pickupLocation: string;
  destination: string;
  movingDate: string;
  whatToMove: string;
  quoteMethod: string;
  name: string;
  mobile: string;
  contactPreference: string;
  language: string;
  consent: boolean;
};

export function MovingQuoteWizard() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [values, setValues] = useState<FormState>({
    moveScope: "",
    pickupLocation: searchParams.get("from") ?? "",
    destination: searchParams.get("to") ?? "",
    movingDate: searchParams.get("date") ?? "",
    whatToMove: "",
    quoteMethod: "",
    name: "",
    mobile: searchParams.get("mobile") ?? "",
    contactPreference: "call",
    language: "english",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<{
    leadId?: string;
    coordinatorName?: string;
    responseTime?: string;
    message?: string;
  }>({});

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validateStep(currentStep: number): boolean {
    const schema = movingQuoteStepSchemas[currentStep as 1 | 2 | 3 | 4];
    const parsed = schema.safeParse(values);
    if (parsed.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    setErrors(fieldErrors);
    return false;
  }

  function goNext() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit() {
    if (!validateStep(4)) return;

    const parsed = movingQuoteSchema.safeParse({ ...values, website: "" });
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "moving",
          data: parsed.data,
          attribution: {
            ...readAttributionFromSearchParams(searchParams),
            landingPage: typeof window !== "undefined" ? window.location.pathname : undefined,
          },
        }),
      });
      const body = await response.json();

      if (!response.ok || !body.ok) {
        setResult({ leadId: body.leadId, message: body.error ?? "Something went wrong. Please try again." });
        setStatus("error");
        return;
      }

      setResult({
        leadId: body.leadId,
        coordinatorName: body.coordinatorName,
        responseTime: body.responseTime,
      });
      setStatus("success");
    } catch {
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
        contactMethod={values.contactPreference === "whatsapp" ? "WhatsApp" : "phone call"}
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
    <div className="rounded-2xl border border-line bg-surface p-5 shadow-sm sm:p-6">
      <StepProgress step={step} total={TOTAL_STEPS} />

      {step === 1 ? (
        <div className="space-y-5">
          <RadioCardGroup
            name="moveScope"
            legend="Is this move local or interstate?"
            columns={2}
            options={[
              { value: "local", label: "Local", description: "Within Hyderabad" },
              { value: "interstate", label: "Interstate", description: "To another city" },
            ]}
            value={values.moveScope}
            onChange={(v) => update("moveScope", v)}
            error={errors.moveScope}
          />
          <Field label="Pickup locality or pincode" error={errors.pickupLocation}>
            <input
              type="text"
              value={values.pickupLocation}
              onChange={(e) => update("pickupLocation", e.target.value)}
              className={inputClasses}
              placeholder="e.g. Kukatpally, 500072"
            />
          </Field>
          <Field label="Destination" error={errors.destination}>
            <input
              type="text"
              value={values.destination}
              onChange={(e) => update("destination", e.target.value)}
              className={inputClasses}
              placeholder="e.g. Gachibowli, or another city"
            />
          </Field>
          <Field label="Moving date" error={errors.movingDate}>
            <input
              type="date"
              value={values.movingDate}
              onChange={(e) => update("movingDate", e.target.value)}
              className={inputClasses}
            />
          </Field>
        </div>
      ) : null}

      {step === 2 ? (
        <RadioCardGroup
          name="whatToMove"
          legend="What do you want to move?"
          columns={2}
          options={[
            { value: "house", label: "House size" },
            { value: "office", label: "Office" },
            { value: "bike", label: "Bike" },
            { value: "car", label: "Car" },
            { value: "few-items", label: "Few items" },
            { value: "storage", label: "Storage" },
            { value: "packing-only", label: "Packing only" },
          ]}
          value={values.whatToMove}
          onChange={(v) => update("whatToMove", v)}
          error={errors.whatToMove}
        />
      ) : null}

      {step === 3 ? (
        <RadioCardGroup
          name="quoteMethod"
          legend="How would you like to get your quote?"
          options={[
            { value: "inventory", label: "Simple inventory", description: "List what you're moving yourself" },
            { value: "whatsapp-photos", label: "Send WhatsApp photos", description: "6-10 room photos or a short video" },
            { value: "video-survey", label: "Book a video survey", description: "A short video call with our team" },
            { value: "home-survey", label: "Request a home survey", description: "Someone visits and inspects in person" },
            { value: "call-me", label: "I don't know — please call me" },
          ]}
          value={values.quoteMethod}
          onChange={(v) => update("quoteMethod", v)}
          error={errors.quoteMethod}
        />
      ) : null}

      {step === 4 ? (
        <div className="space-y-5">
          <Field label="Your name" error={errors.name}>
            <input
              type="text"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClasses}
            />
          </Field>
          <Field label="Mobile number" error={errors.mobile}>
            <input
              type="tel"
              inputMode="numeric"
              value={values.mobile}
              onChange={(e) => update("mobile", e.target.value)}
              className={inputClasses}
              placeholder="10-digit mobile number"
            />
          </Field>
          <RadioCardGroup
            name="contactPreference"
            legend="How should we contact you?"
            columns={2}
            options={[
              { value: "call", label: "Call me" },
              { value: "whatsapp", label: "WhatsApp me" },
            ]}
            value={values.contactPreference}
            onChange={(v) => update("contactPreference", v)}
            error={errors.contactPreference}
          />
          <RadioCardGroup
            name="language"
            legend="Preferred language"
            columns={2}
            options={[
              { value: "hindi", label: "Hindi" },
              { value: "telugu", label: "Telugu" },
              { value: "english", label: "English" },
            ]}
            value={values.language}
            onChange={(v) => update("language", v)}
            error={errors.language}
          />
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
              <a href="/privacy" className="text-ink-2 hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.consent ? <p className="text-sm text-err">{errors.consent}</p> : null}
        </div>
      ) : null}

      <div className="mt-7 flex items-center justify-between gap-3">
        {step > 1 ? (
          <Button type="button" variant="secondary" onClick={goBack}>
            Back
          </Button>
        ) : (
          <span />
        )}
        {step < TOTAL_STEPS ? (
          <Button type="button" variant="primary" onClick={goNext}>
            Continue
          </Button>
        ) : (
          <Button type="button" variant="primary" onClick={handleSubmit}>
            Submit request
          </Button>
        )}
      </div>

      <p className="mt-4 text-center text-sm">
        <a
          href={buildWhatsappLink(
            movingQuoteWhatsappMessage({
              leadId: "not yet submitted",
              pickupLocation: values.pickupLocation || "-",
              destination: values.destination || "-",
              whatToMove: values.whatToMove || "-",
            }),
          )}
          className="text-ink-2 hover:underline"
        >
          Prefer to just send photos on WhatsApp instead? →
        </a>
      </p>
    </div>
  );
}

const inputClasses =
  "min-h-12 w-full rounded-lg border border-line bg-paper px-3.5 text-[16px] text-text placeholder:text-text-dim focus-visible:outline-3 focus-visible:outline-orange focus-visible:outline-offset-1";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
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
