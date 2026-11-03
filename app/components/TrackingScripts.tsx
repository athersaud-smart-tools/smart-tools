"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Third-party scripts (Google Analytics, Google AdSense, Microsoft Clarity)
// are loaded from this client component so they can be withheld from pages
// where they do not belong. They are NOT loaded on the Privacy Policy or
// Terms pages. Note: withholding applies to the initial page load; scripts
// already loaded during the same session cannot be unloaded by client-side
// navigation.
const EXCLUDED_PATHS = ["/privacy-policy", "/terms"];

export default function TrackingScripts() {
  const pathname = usePathname();
  if (pathname && EXCLUDED_PATHS.includes(pathname)) {
    return null;
  }

  return (
    <>
      {/* Standard Google Analytics tag. */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KRMPNVW2R8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            region: ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "LI", "LV", "LT", "LU", "MT", "NL", "NO", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "CH", "GB"],
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', 'G-KRMPNVW2R8');
        `}
      </Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8430178179260712"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yo6pqwd7q7");
        `}
      </Script>
    </>
  );
}
