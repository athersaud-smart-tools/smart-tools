import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
  alternates: {
    canonical: "/",
  },
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SN3JWWZ124"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SN3JWWZ124');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8430178179260712"
          crossOrigin="anonymous"
        />

        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "y06pqwd7q7");
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
