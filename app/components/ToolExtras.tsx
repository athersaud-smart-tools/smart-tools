import Link from "next/link";
import { guideTitles, toolRelations, tools } from "../lib/tools";
import { JsonLd, breadcrumbSchema, webApplicationSchema } from "../lib/jsonld";

// Renders (1) page-level structured data for a tool page and (2) links to related
// tools and guides, so tool pages connect to each other instead of only to the site menu.
export default function ToolExtras({ href }: { href: string }) {
  const tool = tools.find((item) => item.href === href);
  const relations = toolRelations[href];
  if (!tool || !relations) return null;

  const relatedTools = relations.related
    .map((path) => tools.find((item) => item.href === path))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const guides = (relations.guides ?? []).filter((path) => guideTitles[path]);

  const graph = [
    ...(relations.embedded
      ? []
      : [webApplicationSchema({ name: tool.title, path: href, description: tool.desc, category: relations.schemaCategory })]),
    breadcrumbSchema([
      { name: "Tools", path: "/" },
      { name: tool.title, path: href },
    ]),
  ];

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />
      {(relatedTools.length > 0 || guides.length > 0) && (
        <nav aria-label="Related tools and guides" className="mx-auto my-10 max-w-4xl space-y-6 px-6 leading-7 text-gray-700">
          {relatedTools.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Related tools</h2>
              <ul className="mt-2 space-y-1">
                {relatedTools.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="font-medium text-blue-600 hover:underline">{item.title}</Link>
                    <span className="text-gray-600"> — {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {guides.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Related guides</h2>
              <ul className="mt-2 space-y-1">
                {guides.map((path) => (
                  <li key={path}>
                    <Link href={path} className="font-medium text-blue-600 hover:underline">{guideTitles[path]}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      )}
    </>
  );
}
