import type { Metadata } from "next";

const title = "Mortgage Calculator — Monthly Payment & Total Interest";
const description = "Estimate a monthly mortgage payment from home price, down payment, rate, and term, with property tax and insurance included. Formula and worked examples explained.";
const canonical = "/mortgage-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
