import clsx from "clsx";

export type RadioCardOption = { value: string; label: string; description?: string };

export function RadioCardGroup({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  columns = 1,
}: {
  name: string;
  legend: string;
  options: RadioCardOption[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  columns?: 1 | 2;
}) {
  return (
    <fieldset>
      <legend className="mb-3 text-[15.5px] font-medium text-text">{legend}</legend>
      <div className={clsx("grid gap-3", columns === 2 && "sm:grid-cols-2")}>
        {options.map((option) => {
          const checked = value === option.value;
          return (
            <label
              key={option.value}
              className={clsx(
                "flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-colors",
                checked ? "border-ink bg-ink/5" : "border-line bg-surface hover:border-ink/40",
              )}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={() => onChange(option.value)}
                className="h-5 w-5 shrink-0 accent-ink"
              />
              <span>
                <span className="block font-medium text-text">{option.label}</span>
                {option.description ? (
                  <span className="block text-sm text-text-dim">{option.description}</span>
                ) : null}
              </span>
            </label>
          );
        })}
      </div>
      {error ? <p className="mt-2 text-sm text-err">{error}</p> : null}
    </fieldset>
  );
}
