import type { Metadata } from "next";

const title = "Online Stopwatch — Free Lap Timer";
const description = "Use a simple free online stopwatch with lap timing from SmartEdgeTools on desktop or mobile.";
const canonical = "/stopwatch";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
