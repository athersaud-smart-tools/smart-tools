import type { Metadata } from "next";

const title = "Privacy Policy";
const description = "Read the Smart Tools privacy policy to understand how information, cookies, advertising, analytics, and third-party services may be handled.";
const canonical = "/privacy-policy";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) { return children; }
