import type { Metadata } from "next";
import { JsonLd, articleSchema, breadcrumbSchema } from "../../lib/jsonld";

const title = "A Practical Study Workflow for Online Tools";
const description =
  "A practical study workflow for checking calculations, formatting assignments, organizing PDFs, and using writing tools responsibly.";
const canonical = "/blog/top-tools-for-students";

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
