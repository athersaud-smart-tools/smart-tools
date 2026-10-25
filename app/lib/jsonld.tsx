// Small helpers for page-level structured data (JSON-LD).
// All values here describe things that are visible on the page or true of the site.

export const SITE_URL = "https://smartedgetools.com";
const ORG = { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "SmartEdgeTools", url: SITE_URL };

export function JsonLd({ data }: { data: object }) {
  // Escape "<" so content can never close the script tag early.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function webApplicationSchema(tool: { name: string; path: string; description: string; category: string }) {
  return {
    "@type": "WebApplication",
    name: tool.name,
    url: `${SITE_URL}${tool.path}`,
    description: tool.description,
    applicationCategory: tool.category,
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    inLanguage: "en",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: ORG,
  };
}

export function articleSchema(article: { title: string; description: string; path: string; dateModified: string }) {
  const url = `${SITE_URL}${article.path}`;
  return {
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE_URL}/opengraph-image`,
    inLanguage: "en",
    dateModified: article.dateModified,
    author: { "@type": "Organization", name: "SmartEdgeTools", url: SITE_URL },
    publisher: ORG,
  };
}
