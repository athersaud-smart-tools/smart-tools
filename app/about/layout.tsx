import type { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    type: "website",
    url: "/about",
    title: "About SmartEdgeTools",
    description:
      "Learn about SmartEdgeTools, a free online platform offering useful calculators, converters, generators, image tools, PDF tools, and productivity utilities.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "About SmartEdgeTools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SmartEdgeTools",
    description:
      "Learn about SmartEdgeTools and its free browser-based online utilities.",
    images: ["/opengraph-image"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
