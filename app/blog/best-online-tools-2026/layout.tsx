import type { Metadata } from "next";
import { JsonLd, articleSchema, breadcrumbSchema } from "../../lib/jsonld";

const title = "Choosing an Online Tool for the Task";
const description =
  "A task-based guide to comparing online calculators, converters, image utilities, PDF tools, and writing tools by workflow, data handling, and limitations.";
const canonical = "/blog/best-online-tools-2026";

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

// dateModified matches the visible "Updated October 9, 2026" line on the page.
// datePublished is intentionally omitted: the original publication date is not recorded in the repository.
const dateModified = "2026-10-09";

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
