import type { Metadata } from "next";

const title = "Unit Converter — Convert Length, Weight and More";
const description = "Convert common units including length, weight, and temperature quickly with the free SmartEdgeTools unit converter.";
const canonical = "/unit-converter";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
