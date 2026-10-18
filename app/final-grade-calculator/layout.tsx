import type { Metadata } from "next";

const title = "Final Grade Calculator — Weighted Grade & Score Needed";
const description = "Calculate a weighted course grade or find the exam score needed to reach your target. Free final grade calculator with clear formulas and instant results.";
const canonical = "/final-grade-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
