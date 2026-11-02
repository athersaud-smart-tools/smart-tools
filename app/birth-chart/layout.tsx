import type { Metadata } from "next";

const title = "Birth Chart (Natal Chart) Calculator";
const description = "Generate a natal birth chart from your birth date, time, and place, and learn what the planets, signs, houses, and rising sign mean.";
const canonical = "/birth-chart";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
