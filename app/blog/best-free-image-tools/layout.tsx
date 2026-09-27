import type { Metadata } from "next";

const title = "Best Free Online Image Tools in 2026";
const description =
  "Learn about useful free online image tools for resizing, compression, color picking, QR codes, and everyday image tasks.";
const canonical = "/blog/best-free-image-tools";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "article",
    url: canonical,
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `https://smartedgetools.com${canonical}`,
  mainEntityOfPage: `https://smartedgetools.com${canonical}`,
  publisher: {
    "@type": "Organization",
    name: "SmartEdgeTools",
    url: "https://smartedgetools.com",
  },
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}
