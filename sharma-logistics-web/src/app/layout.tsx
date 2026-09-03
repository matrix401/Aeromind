import type { Metadata } from "next";
import { Poppins, Work_Sans } from "next/font/google";
import { business } from "@/config/business";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { SITE_URL, organizationJsonLd, localBusinessJsonLd, isVerified } from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.brandName} | Packers and Movers Hyderabad`,
    template: `%s | ${business.brandName}`,
  },
  description: business.supportingMessage,
  openGraph: {
    siteName: business.brandName,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
  ...(isVerified(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION)
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

/**
 * True root layout — just the document shell, fonts and site-wide
 * structured data. Full site chrome (header/footer/mobile bar) lives in
 * (site)/layout.tsx; Google Ads landing pages under (landing) get their
 * own minimal chrome instead, per the Phase 11 requirement to keep
 * landing-page navigation minimal.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-text">
        <AnalyticsScripts />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        {children}
      </body>
    </html>
  );
}
