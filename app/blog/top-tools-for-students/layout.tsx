import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Online Tools for Students in 2026",
  description:
    "Discover useful online calculators, word counters, writing tools, PDF tools, and productivity utilities for students in 2026.",
  alternates: {
    canonical: "/blog/top-tools-for-students",
  },
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
