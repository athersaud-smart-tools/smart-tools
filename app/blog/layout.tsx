import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Tools Blog",
  description:
    "Helpful guides, tutorials, and explanations about online tools, calculators, productivity, images, PDFs, and browser-based utilities.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
