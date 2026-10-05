import type { Metadata } from "next";

const title = "How Online Calculators Save Time";
const description =
  "Learn how online calculators save time, reduce manual work, and help with percentages, loans, BMI, age calculations, and everyday tasks.";
const canonical = "/blog/how-online-calculators-save-time";

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
