import type { Metadata } from "next";

const title = "Typing Speed Test — Check Your WPM";
const description = "Take a 30-second typing test to estimate your words per minute and accuracy, and see exactly how the score is calculated.";
const canonical = "/typing-test";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
