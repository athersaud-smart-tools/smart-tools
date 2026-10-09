import type { Metadata } from "next";

const title = "Age Calculator — Years, Months & Days";
const description = "Calculate calendar age in years, months, and days, with total days, weeks, and estimated hours.";
const canonical = "/age-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
