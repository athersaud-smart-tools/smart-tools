import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Free Online Tools in 2026",
  description:
    "Discover useful free online tools for calculations, conversions, image tasks, writing, productivity, and everyday digital work.",
  alternates: {
    canonical: "/blog/best-online-tools-2026",
  },
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
