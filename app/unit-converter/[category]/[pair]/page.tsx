import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PairConverter from "@/app/components/PairConverter";
import { JsonLd, breadcrumbSchema, webApplicationSchema } from "@/app/lib/jsonld";
import {
  convertValue,
  formatNumber,
  getCategory,
  getPair,
  getUnit,
  pairFormula,
  pairPath,
  pairs,
  relatedPairs,
  type PairDef,
} from "@/app/lib/conversions";

export const dynamicParams = false;

export function generateStaticParams() {
  return pairs.map((p) => ({ category: p.category, pair: p.slug }));
}

function load(categoryId: string, slug: string) {
  const category = getCategory(categoryId);
  const pair = getPair(categoryId, slug);
  if (!category || !pair) return null;
  const from = getUnit(category, pair.from);
  const to = getUnit(category, pair.to);
  if (!from || !to) return null;
  return { category, pair, from, to };
}

function titleOf(pair: PairDef, fromName: string, toName: string, fromSym: string, toSym: string) {
  return `Convert ${fromName} to ${toName} (${fromSym} to ${toSym})`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; pair: string }>;
}): Promise<Metadata> {
  const { category, pair } = await params;
  const data = load(category, pair);
  if (!data) return {};
  const { from, to } = data;
  const title = titleOf(data.pair, from.name, to.name, from.symbol, to.symbol);
  const oneResult = formatNumber(convertValue(category, from.id, to.id, 1));
  const description = `Convert ${from.plural.toLowerCase()} to ${to.plural.toLowerCase()} instantly. 1 ${from.symbol} = ${oneResult} ${to.symbol}. Formula, conversion table, worked examples and FAQs.`;
  const canonical = pairPath(data.pair);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}

export default async function PairPage({
  params,
}: {
  params: Promise<{ category: string; pair: string }>;
}) {
  const { category: categoryId, pair: slug } = await params;
  const data = load(categoryId, slug);
  if (!data) notFound();
  const { category, pair, from, to } = data;

  const path = pairPath(pair);
  const title = titleOf(pair, from.name, to.name, from.symbol, to.symbol);
  const formula = pairFormula(categoryId, from, to);
  const exampleResult = convertValue(categoryId, from.id, to.id, pair.example);
  const reverse = pairs.find(
    (p) => p.category === pair.category && p.from === pair.to && p.to === pair.from
  );
  const related = relatedPairs(pair);
  const quickValues = pair.values.slice(0, 6);
  const oneResult = convertValue(categoryId, from.id, to.id, 1);

  const faqs = [
    pair.faq,
    {
      q: `How do I convert ${from.plural.toLowerCase()} to ${to.plural.toLowerCase()}?`,
      a:
        categoryId === "temperature"
          ? `Use the formula ${formula}. Temperature scales start at different zero points, so the offset in the formula matters as much as the scaling. This page's converter applies the formula exactly.`
          : `Use the formula: ${formula}. The factor comes from the exact definitions of both units, so the result is not a rounded estimate. Enter any value in the converter above and it applies the same formula instantly.`,
    },
    {
      q: `What is ${formatNumber(pair.example)} ${from.plural.toLowerCase()} in ${to.plural.toLowerCase()}?`,
      a: `${formatNumber(pair.example)} ${from.symbol} = ${formatNumber(exampleResult)} ${to.symbol}. You can check it with the formula (${formula}) or read it from the conversion table on this page.`,
    },
    {
      q: `How do I convert ${to.plural.toLowerCase()} back to ${from.plural.toLowerCase()}?`,
      a: reverse
        ? `Use the reverse converter on this site — Convert ${to.name} to ${from.name} — which applies the exact inverse operation. As a check, 1 ${to.symbol} converts back to ${formatNumber(convertValue(categoryId, to.id, from.id, 1))} ${from.symbol}.`
        : `Apply the inverse operation: 1 ${to.symbol} = ${formatNumber(convertValue(categoryId, to.id, from.id, 1))} ${from.symbol}.`,
    },
  ];

  return (
    <main className="page-wrap">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webApplicationSchema({
              name: title,
              path,
              description: `Free online converter for ${from.plural.toLowerCase()} to ${to.plural.toLowerCase()}, with formula, table and examples.`,
              category: "UtilitiesApplication",
            }),
            breadcrumbSchema([
              { name: "Tools", path: "/" },
              { name: "Unit Converter", path: "/unit-converter" },
              { name: category.name, path: `/unit-converter/${category.id}` },
              { name: `${from.name} to ${to.name}`, path },
            ]),
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }}
      />

      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: "0.85rem", marginBottom: "1rem", color: "var(--ink2)" }}>
          <Link href="/unit-converter">Unit Converter</Link> {" / "}
          <Link href={`/unit-converter/${category.id}`}>{category.name}</Link> {" / "}
          <span>{from.name} to {to.name}</span>
        </nav>
        <div className="tool-container">
          <h1>
            🔄 {from.name} to {to.name} Converter
          </h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Convert {from.plural.toLowerCase()} to {to.plural.toLowerCase()} instantly.{" "}
            <strong>
              1 {from.symbol} = {formatNumber(oneResult)} {to.symbol}
            </strong>
            . Free, no sign-up, and the answer is calculated in your browser.
          </p>
          <PairConverter
            categoryId={categoryId}
            from={from}
            to={to}
            reversePath={reverse ? pairPath(reverse) : undefined}
          />
        </div>
      </div>

      <section className="mx-auto my-12 max-w-4xl space-y-5 px-6 leading-7 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Why people convert {from.plural.toLowerCase()} to {to.plural.toLowerCase()}</h2>
          <p className="mt-1">{pair.useCase}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Quick answers</h3>
          <p className="mt-1">
            The conversions people look up most for this pair, calculated with the exact factor:
          </p>
          <ul className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {quickValues.map((v) => (
              <li key={v} className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-center">
                {formatNumber(v)} {from.symbol} = <strong>{formatNumber(convertValue(categoryId, from.id, to.id, v))} {to.symbol}</strong>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Formula and worked example</h3>
          <p className="mt-1">
            <strong>Formula:</strong> {formula}.
          </p>
          <p className="mt-2">
            <strong>Example:</strong> convert {formatNumber(pair.example)} {from.plural.toLowerCase()} to {to.plural.toLowerCase()}:{" "}
            {formatNumber(pair.example)} {from.symbol} = <strong>{formatNumber(exampleResult)} {to.symbol}</strong>.{" "}
            {categoryId === "temperature"
              ? "Notice the offset in the formula: temperature conversion is never a plain multiplication, because the two scales start from different zero points."
              : "The same factor works for any value, large or small, because both units are defined from the same base unit — the result only needs rounding for display, and this converter keeps up to six decimal places."}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">About the {from.name.toLowerCase()}</h3>
          <p className="mt-1">{from.definition}</p>
          <p className="mt-2">{from.usage}</p>
          {from.caution && <p className="mt-2"><strong>Watch out:</strong> {from.caution}</p>}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">About the {to.name.toLowerCase()}</h3>
          <p className="mt-1">{to.definition}</p>
          <p className="mt-2">{to.usage}</p>
          {to.caution && <p className="mt-2"><strong>Watch out:</strong> {to.caution}</p>}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {from.name} to {to.name} conversion table
          </h3>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="border border-gray-200 bg-gray-50 px-3 py-2">{from.plural} ({from.symbol})</th>
                  <th className="border border-gray-200 bg-gray-50 px-3 py-2">{to.plural} ({to.symbol})</th>
                </tr>
              </thead>
              <tbody>
                {pair.values.map((v) => (
                  <tr key={v}>
                    <td className="border border-gray-200 px-3 py-2">{formatNumber(v)} {from.symbol}</td>
                    <td className="border border-gray-200 px-3 py-2">{formatNumber(convertValue(categoryId, from.id, to.id, v))} {to.symbol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Common mistakes and things to check</h3>
          <p className="mt-1">{pair.mistake}</p>
          <p className="mt-2">{category.mistakes}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Frequently asked questions</h3>
          {faqs.map(({ q, a }) => (
            <div key={q} className="mt-3">
              <h4 className="font-semibold text-gray-900">{q}</h4>
              <p>{a}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Related conversions</h3>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {related.map((p) => {
              const c = getCategory(p.category);
              const f = c ? getUnit(c, p.from) : undefined;
              const t = c ? getUnit(c, p.to) : undefined;
              if (!f || !t) return null;
              return (
                <li key={pairPath(p)}>
                  <Link href={pairPath(p)} className="text-blue-600 hover:underline">
                    Convert {f.plural.toLowerCase()} to {t.plural.toLowerCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-3">
            See all <Link href={`/unit-converter/${category.id}`} className="text-blue-600 hover:underline">{category.name.toLowerCase()} conversions</Link> or
            use the <Link href="/unit-converter" className="text-blue-600 hover:underline">general unit converter</Link> for every category.
          </p>
        </div>

        <p className="border-t border-gray-200 pt-3 text-sm text-gray-500">
          Conversion factors on this page follow the exact international definitions (NIST SP 811). Results are rounded for display; review important outputs before relying on them for engineering, medical or legal use.
        </p>
      </section>
    </main>
  );
}
