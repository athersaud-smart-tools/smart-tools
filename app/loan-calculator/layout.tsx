import type { Metadata } from "next";

const title = "Loan Calculator — Estimate Monthly Payments";
const description = "Estimate loan payments, interest, and repayment amounts with the free SmartEdgeTools loan calculator.";
const canonical = "/loan-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
