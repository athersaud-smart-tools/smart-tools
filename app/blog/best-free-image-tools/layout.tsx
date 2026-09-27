import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Free Online Image Tools in 2026",
  description:
    "Learn about useful free online image tools for resizing, compression, color picking, QR codes, and everyday image tasks.",
  alternates: {
    canonical: "/blog/best-free-image-tools",
  },
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
