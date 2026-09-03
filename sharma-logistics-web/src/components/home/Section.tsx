import type { ReactNode } from "react";
import clsx from "clsx";

export function Section({
  children,
  alt,
  className,
}: {
  children: ReactNode;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section className={clsx("border-b border-line", alt ? "bg-paper" : "bg-surface", className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-2 font-display text-sm font-semibold uppercase tracking-wide text-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold text-ink sm:text-[28px]">{title}</h2>
      {lede ? <p className="mt-3 text-[16.5px] text-text-dim">{lede}</p> : null}
    </div>
  );
}
