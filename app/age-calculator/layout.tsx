import type { Metadata } from "next";

const title = "Age Calculator — Calculate Your Exact Age";
const description = "Calculate your exact age in years, months, days, weeks, and hours with the free SmartEdgeTools age calculator.";
const canonical = "/age-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
