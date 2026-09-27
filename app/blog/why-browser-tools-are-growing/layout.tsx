import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Browser-Based Tools Are Growing in Popularity",
  description:
    "Explore why browser-based tools are growing, including convenience, cross-device access, fast setup, and lower storage requirements.",
  alternates: {
    canonical: "/blog/why-browser-tools-are-growing",
  },
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
