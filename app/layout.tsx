import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import Script from "next/script";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const siteUrl = "https://smartedgetools.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SmartEdgeTools — Free Online Tools for Everyday Tasks",
    template: "%s | SmartEdgeTools",
  },
  description:
    "Use free online calculators, converters, generators, text tools, image tools, PDF tools, and productivity utilities. Fast, simple, and no signup required.",
  applicationName: "SmartEdgeTools",
  generator: "Next.js",
  authors: [{ name: "SmartEdgeTools" }],
  creator: "SmartEdgeTools",
  publisher: "SmartEdgeTools",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SmartEdgeTools",
    title: "SmartEdgeTools — Free Online Tools for Everyday Tasks",
    description:
      "Free calculators, converters, generators, image tools, PDF tools, text utilities, and more. No signup required.",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SmartEdgeTools — Free Online Tools for Everyday Tasks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartEdgeTools — Free Online Tools",
    description:
      "Free online tools for calculations, conversions, text, images, PDFs, and everyday tasks.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "K_-YbyZLqsDANY55cqnQnxbI6K9jxu4qd7b1SK0ip84",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "SmartEdgeTools",
      description:
        "Free online calculators, converters, generators, text tools, image tools, PDF tools, and productivity utilities.",
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "SmartEdgeTools",
      url: siteUrl,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} ${syne.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Standard Google Analytics tag, loaded in head on every page. */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ELZ9V0DN5R"
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
            gtag('config', 'G-ELZ9V0DN5R');
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
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
