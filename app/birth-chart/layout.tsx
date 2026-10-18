import type { Metadata } from "next";

const title = "Birth Chart Calculator — Free Natal Chart Online";
const description = "Explore your natal chart, planetary placements, and houses with the SmartEdgeTools birth chart calculator.";
const canonical = "/birth-chart";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
