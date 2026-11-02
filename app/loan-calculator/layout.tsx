import type { Metadata } from "next";

const title = "Loan Calculator — Monthly Payments";
const description = "Estimate the monthly payment, total cost, and total interest on a fixed-rate loan. Includes the formula, a worked example, and what is excluded.";
const canonical = "/loan-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
