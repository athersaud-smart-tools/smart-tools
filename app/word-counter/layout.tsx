import type { Metadata } from "next";

const title = "Word Counter — Count Words and Characters";
const description = "Count words, characters, and text quickly with the free SmartEdgeTools online word counter.";
const canonical = "/word-counter";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
