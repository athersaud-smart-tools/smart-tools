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
  },
  twitter: {
    card: "summary",
    title: "SmartEdgeTools — Free Online Tools",
    description:
      "Free online tools for calculations, conversions, text, images, PDFs, and everyday tasks.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8430178179260712"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
