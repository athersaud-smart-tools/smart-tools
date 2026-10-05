import type { Metadata } from "next";

const title = "BMI Calculator — Body Mass Index";
const description = "Calculate BMI from height and weight with the free SmartEdgeTools BMI calculator and learn what the result means.";
const canonical = "/bmi-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
