import type { Metadata } from "next";

const title = "Terms of Use";
const description = "Read the Smart Tools Terms of Use covering website access, online tools, content, disclaimers, third-party services, and acceptable use.";
const canonical = "/terms";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) { return children; }
