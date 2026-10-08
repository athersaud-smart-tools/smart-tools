import type { Metadata } from "next";

const title = "Privacy Policy";
const description = "Read the SmartEdgeTools privacy policy covering information, cookies, analytics, advertising, and third-party services.";
const canonical = "/privacy-policy";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
