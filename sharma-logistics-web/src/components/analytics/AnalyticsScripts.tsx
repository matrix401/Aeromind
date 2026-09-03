import Script from "next/script";
import { isVerified } from "@/lib/seo";

/**
 * Loads Google Tag Manager and/or GA4 only when their env vars are set —
 * see .env.example. Renders nothing (no third-party requests at all)
 * until the owner supplies real container/measurement IDs.
 */
export function AnalyticsScripts() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <>
      {isVerified(gtmId) ? (
        <>
          <Script id="gtm-init" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}

      {isVerified(gaId) && !isVerified(gtmId) ? (
        <>
          {/* Only loaded standalone when GTM isn't handling GA4 itself. */}
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaId}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}
