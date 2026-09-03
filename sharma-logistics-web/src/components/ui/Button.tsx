"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import clsx from "clsx";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

export type ButtonVariant = "primary" | "secondary" | "call" | "whatsapp";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-orange text-white hover:bg-orange-deep",
  secondary:
    "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-white",
  call: "bg-ink text-white hover:bg-ink/90",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp/90",
};

// call/whatsapp buttons self-report by default (call_click/whatsapp_click)
// since they're used everywhere across the site — pass analyticsEvent to
// override (e.g. a "Send Photos" WhatsApp button → send_photos_click).
const defaultEventByVariant: Partial<Record<ButtonVariant, AnalyticsEventName>> = {
  call: "call_click",
  whatsapp: "whatsapp_click",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 font-display text-base font-semibold transition-colors focus-visible:outline-3 focus-visible:outline-orange focus-visible:outline-offset-2";

type CommonProps = {
  variant?: ButtonVariant;
  icon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
  analyticsEvent?: AnalyticsEventName;
};

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
    href: string;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  };

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
    href?: undefined;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Every button carries a visible label alongside its icon — no icon-only
 * controls, per the accessibility rules in the design system. Link-style
 * buttons also self-report clicks for analytics (see defaultEventByVariant)
 * — a no-op until Phase 12's tracking is actually configured.
 */
export function Button({
  variant = "primary",
  icon,
  fullWidth,
  className,
  children,
  analyticsEvent,
  onClick,
  ...props
}: ButtonProps) {
  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    fullWidth && "w-full",
    className,
  );
  const eventName = analyticsEvent ?? defaultEventByVariant[variant];

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("tel:") || href.startsWith("mailto:");

    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
      if (eventName) trackEvent(eventName, { href });
      (onClick as ((e: MouseEvent<HTMLAnchorElement>) => void) | undefined)?.(event);
    }

    if (isExternal) {
      return (
        <a href={href} className={classes} onClick={handleClick} {...anchorProps}>
          {icon}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={handleClick} {...anchorProps}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  function handleButtonClick(event: MouseEvent<HTMLButtonElement>) {
    if (eventName) trackEvent(eventName);
    (onClick as ((e: MouseEvent<HTMLButtonElement>) => void) | undefined)?.(event);
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={handleButtonClick}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
