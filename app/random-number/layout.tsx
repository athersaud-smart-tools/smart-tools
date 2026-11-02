import type { Metadata } from "next";

const title = "Random Number Generator Online";
const description = "Generate up to 100 random numbers in a range you choose, with an option to avoid duplicates. Uses your browser's secure random generator.";
const canonical = "/random-number";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
