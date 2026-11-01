import type { Metadata } from "next";
import { JsonLd, articleSchema, breadcrumbSchema } from "../../lib/jsonld";

const title = "How to Resize and Compress Images for Websites";
const description =
  "A practical guide to choosing image dimensions, file formats, and compression settings for websites, forms, email, and social media.";
const canonical = "/blog/resize-compress-images-for-websites";

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

// dateModified matches the visible "Updated on November 1, 2026" line on the page.
// datePublished is intentionally omitted: the original publication date is not recorded in the repository.
const dateModified = "2026-11-01";

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            articleSchema({ title, description, path: canonical, dateModified }),
            breadcrumbSchema([
              { name: "Tools", path: "/" },
              { name: "Guides", path: "/blog" },
              { name: title, path: canonical },
            ]),
          ],
        }}
      />
      {children}
    </>
  );
}
