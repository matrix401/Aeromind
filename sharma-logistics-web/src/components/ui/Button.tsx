import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export type ButtonVariant = "primary" | "secondary" | "call" | "whatsapp";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-orange text-white hover:bg-orange-deep",
  secondary:
    "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-white",
  call: "bg-ink text-white hover:bg-ink/90",
  whatsapp: "bg-whatsapp text-white hover:bg-whatsapp/90",
};

const baseClasses =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 font-display text-base font-semibold transition-colors focus-visible:outline-3 focus-visible:outline-orange focus-visible:outline-offset-2";

type CommonProps = {
  variant?: ButtonVariant;
  icon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Every button carries a visible label alongside its icon — no icon-only
 * controls, per the accessibility rules in the design system.
 */
export function Button({
  variant = "primary",
  icon,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    fullWidth && "w-full",
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("tel:") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {icon}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {icon}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
