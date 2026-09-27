import type { Metadata } from "next";

const title = "Currency Converter — Convert World Currencies";
const description = "Convert major world currencies with SmartEdgeTools. Choose your currencies, enter an amount, and get an exchange-rate calculation quickly.";
const canonical = "/currency-converter";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
