import type { Metadata } from "next";

const title = "Tip Calculator — Tip, Total & Bill Split";
const description = "Work out the tip on any bill, the total with tip, and each person's share when splitting. Includes worked examples and guidance on tip percentages.";
const canonical = "/tip-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
