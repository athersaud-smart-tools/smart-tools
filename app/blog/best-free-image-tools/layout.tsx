import type { Metadata } from "next";

const title = "Choosing the Right Image Tool for the Job";
const description =
  "Compare image resizing, JPEG compression, color selection, and QR creation by output, quality, and privacy needs.";
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
