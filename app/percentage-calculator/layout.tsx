import type { Metadata } from "next";

const title = "Percentage Calculator Online";
const description = "Calculate percentages, percentage increases, decreases, and common percentage problems quickly with the free SmartEdgeTools calculator.";
const canonical = "/percentage-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
