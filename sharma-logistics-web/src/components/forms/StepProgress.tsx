export function StepProgress({ step, total }: { step: number; total: number }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-sm font-medium text-text-dim">
        Step {step} of {total}
      </p>
      <div className="flex gap-1.5" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={total}>
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i < step ? "bg-ink-2" : "bg-line"}`}
          />
        ))}
      </div>
    </div>
  );
}
