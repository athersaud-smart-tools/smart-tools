import type { Metadata } from "next";

const title = "Contact Smart Tools";
const description = "Contact Smart Tools with questions, feedback, suggestions, or reports about the website and its online tools.";
const canonical = "/contact";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) { return children; }
