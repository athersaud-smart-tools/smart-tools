import type { Metadata } from "next";

const title = "Blog — Guides on Online Tools & Calculators";
const description =
  "Practical guides and explanations about online calculators, converters, image tools, PDF tools, writing utilities, and browser-based productivity.";
const canonical = "/blog";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
