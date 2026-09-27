import type { Metadata } from "next";

const title = "Random Number Generator — Generate Random Numbers";
const description = "Generate random numbers within a chosen range using the free SmartEdgeTools random number generator.";
const canonical = "/random-number";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
