import type { Metadata } from "next";

const title = "Contact SmartEdgeTools";
const description = "Contact SmartEdgeTools about technical problems, feedback, suggestions, content questions, or other website issues.";
const canonical = "/contact";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
