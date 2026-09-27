import type { Metadata } from "next";

const title = "Case Converter — Upper & Lower";
const description = "Convert text between uppercase, lowercase, title case, and other common formats with the free SmartEdgeTools case converter.";
const canonical = "/text-case";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
