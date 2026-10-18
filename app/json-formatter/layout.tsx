import type { Metadata } from "next";

const title = "JSON Formatter & Validator — Free Online JSON Beautifier";
const description = "Format, beautify, minify, and validate JSON online. Get readable syntax errors and process your JSON locally in your browser with this free tool.";
const canonical = "/json-formatter";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
