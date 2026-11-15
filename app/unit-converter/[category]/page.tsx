import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, breadcrumbSchema } from "@/app/lib/jsonld";
import {
  categories,
  formatNumber,
  getCategory,
  getUnit,
  pairPath,
  pairsForCategory,
} from "@/app/lib/conversions";

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = getCategory(category);
  if (!data) return {};
  const title = `${data.name} Converter — All ${data.name} Conversions`;
  const description = `Convert ${data.name.toLowerCase()} units with exact factors: pick a pair for an instant converter with formula, conversion table and examples. Free, no sign-up.`;
  const canonical = `/unit-converter/${data.id}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categoryId } = await params;
  const category = getCategory(categoryId);
  if (!category) notFound();

  const categoryPairs = pairsForCategory(categoryId);
  const baseUnit = category.units.find((u) => u.id === category.baseUnitId);
  const canonical = `/unit-converter/${category.id}`;

  return (
    <main className="page-wrap">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Tools", path: "/" },
              { name: "Unit Converter", path: "/unit-converter" },
              { name: category.name, path: canonical },
            ]),
          ],
        }}
      />
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <Link href="/unit-converter" className="btn-back">← Back to Unit Converter</Link>
        <div className="tool-container" style={{ maxWidth: "100%" }}>
          <h1>🔄 {category.name} Converter</h1>
          <p style={{ color: "var(--ink2)", lineHeight: 1.6 }}>{category.intro}</p>
        </div>
      </div>

      <section className="mx-auto my-12 max-w-4xl space-y-5 px-6 leading-7 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">{category.name} conversions</h2>
          <p className="mt-1">Each pair has its own converter with the exact formula, a conversion table and worked examples:</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {categoryPairs.map((p) => {
              const f = getUnit(category, p.from);
              const t = getUnit(category, p.to);
              if (!f || !t) return null;
              return (
                <li key={pairPath(p)} className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                  <Link href={pairPath(p)} className="text-blue-600 hover:underline">
                    {f.plural} to {t.plural} ({f.symbol} → {t.symbol})
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">The units in this category</h3>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="border border-gray-200 bg-gray-50 px-3 py-2">Unit</th>
                  <th className="border border-gray-200 bg-gray-50 px-3 py-2">Symbol</th>
                  {category.id !== "temperature" && baseUnit && (
                    <th className="border border-gray-200 bg-gray-50 px-3 py-2">In {baseUnit.plural.toLowerCase()}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {category.units.map((u) => (
                  <tr key={u.id}>
                    <td className="border border-gray-200 px-3 py-2">{u.name}</td>
                    <td className="border border-gray-200 px-3 py-2">{u.symbol}</td>
                    {category.id !== "temperature" && baseUnit && (
                      <td className="border border-gray-200 px-3 py-2">
                        1 {u.symbol} = {formatNumber(u.toBase)} {baseUnit.symbol}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {category.units.map((u) => (
            <p key={u.id} className="mt-3">
              <strong>{u.name} ({u.symbol}):</strong> {u.definition}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Good to know</h3>
          <p className="mt-1">{category.note}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Common mistakes and things to check</h3>
          <p className="mt-1">{category.mistakes}</p>
        </div>

        <p>
          For every other category in one place, use the{" "}
          <Link href="/unit-converter" className="text-blue-600 hover:underline">general unit converter</Link>.
        </p>

        <p className="border-t border-gray-200 pt-3 text-sm text-gray-500">
          Conversion factors follow the exact international definitions (NIST SP 811). Results are rounded for display; review important outputs before relying on them.
        </p>
      </section>
    </main>
  );
}
