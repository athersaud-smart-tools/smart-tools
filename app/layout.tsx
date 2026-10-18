import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import TrackingScripts from "./components/TrackingScripts";

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
  keywords: [
    "free online tools",
    "online calculators",
    "unit converter",
    "currency converter",
    "image compressor",
    "image resizer",
    "PDF tools",
    "word counter",
    "password generator",
    "QR code generator",
    "typing test",
    "AI text improver",
  ],
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
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
        <TrackingScripts />
      </body>
    </html>
  );
}
