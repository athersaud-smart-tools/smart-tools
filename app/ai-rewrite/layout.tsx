import type { Metadata } from "next";

const title = "AI Text Improver — Rewrite and Improve Text";
const description = "Improve, rewrite, and polish text with the SmartEdgeTools AI text improver for clearer and more natural writing.";
const canonical = "/ai-rewrite";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
