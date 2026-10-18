"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const consentRegions = [
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IS", "IE", "IT", "LI", "LV", "LT", "LU", "MT", "NL", "NO", "PL",
  "PT", "RO", "SK", "SI", "ES", "SE", "CH", "GB",
];

export default function TrackingScripts() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/privacy-policy") return;

    const windowWithTracking = window as Window & { __smartEdgeTrackingLoaded?: boolean };
    if (windowWithTracking.__smartEdgeTrackingLoaded) return;
    windowWithTracking.__smartEdgeTrackingLoaded = true;

    const consentBootstrap = document.createElement("script");
    consentBootstrap.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('consent', 'default', {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
        region: ${JSON.stringify(consentRegions)},
        wait_for_update: 500
      });
      gtag('js', new Date());
      gtag('config', 'G-ELZ9V0DN5R');
    `;
    document.head.appendChild(consentBootstrap);

    const analyticsScript = document.createElement("script");
    analyticsScript.id = "google-analytics-script";
    analyticsScript.async = true;
    analyticsScript.src = "https://www.googletagmanager.com/gtag/js?id=G-ELZ9V0DN5R";
    document.head.appendChild(analyticsScript);

    const adsScript = document.createElement("script");
    adsScript.id = "google-adsense-script";
    adsScript.async = true;
    adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8430178179260712";
    adsScript.crossOrigin = "anonymous";
    document.head.appendChild(adsScript);

    const clarityBootstrap = document.createElement("script");
    clarityBootstrap.textContent = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "yo6pqwd7q7");
    `;
    document.head.appendChild(clarityBootstrap);
  }, [pathname]);

  return null;
}
