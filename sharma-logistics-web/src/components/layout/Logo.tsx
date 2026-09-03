import Link from "next/link";
import { business } from "@/config/business";

type LogoProps = {
  variant?: "default" | "reversed";
  className?: string;
};

/**
 * Approved brand mark: a packed box with one continuous tape seal.
 * See the Phase 2 brand-mark artifact for the full rationale and lockups.
 */
export function Logo({ variant = "default", className }: LogoProps) {
  const boxFill = variant === "reversed" ? "#FFFFFF" : "#123A61";
  const lidFill = variant === "reversed" ? "#5C9BCB" : "#2E6D9E";
  const wordFill = variant === "reversed" ? "#FFFFFF" : "#123A61";
  const taglineFill = variant === "reversed" ? "#F5943D" : "#F0761E";

  return (
    <Link
      href="/"
      aria-label={`${business.brandName} — home`}
      className={className}
    >
      <svg viewBox="0 0 600 160" className="h-10 w-auto sm:h-12" role="img" aria-hidden="true">
        <g transform="translate(20,20)">
          <polygon points="26,46 94,46 82,22 38,22" fill={lidFill} />
          <rect x="26" y="46" width="68" height="58" rx="8" fill={boxFill} />
          <rect x="54" y="22" width="12" height="82" fill="#F0761E" />
        </g>
        <text
          x="172"
          y="82"
          fontFamily="Poppins, sans-serif"
          fontWeight="700"
          fontSize="52"
          fill={wordFill}
        >
          SHARMA
        </text>
        <text
          x="174"
          y="112"
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
          fontSize="19"
          letterSpacing="3"
          fill={taglineFill}
        >
          LOGISTICS SOLUTIONS
        </text>
      </svg>
    </Link>
  );
}
