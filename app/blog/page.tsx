import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Guides on Online Tools & Calculators",
  description:
    "Practical guides and explanations about online calculators, converters, image tools, PDF tools, writing utilities, and browser-based productivity.",
  alternates: { canonical: "/blog" },
};

const articles = [
  {
    href: "/blog/best-online-tools-2026",
    title: "Best Free Online Tools in 2026",
    excerpt:
      "A practical guide to choosing browser-based calculators, converters, image utilities, QR tools, and other everyday tools.",
  },
  {
    href: "/blog/how-online-calculators-save-time",
    title: "How Online Calculators Save Time",
    excerpt:
      "See where calculators are useful, how they reduce repetitive work, and what to check before trusting a result.",
  },
  {
    href: "/blog/why-browser-tools-are-growing",
    title: "Why Browser-Based Tools Are Growing",
    excerpt:
      "A closer look at convenience, device compatibility, privacy considerations, and the trade-offs of web tools.",
  },
  {
    href: "/blog/top-tools-for-students",
    title: "Top Online Tools for Students in 2026",
    excerpt:
      "Practical ways students can use calculators, converters, word counters, PDFs, and writing utilities without adding unnecessary software.",
  },
  {
    href: "/blog/best-free-image-tools",
    title: "Best Free Online Image Tools in 2026",
    excerpt:
      "How to choose image resizing, compression, color, and QR tools for common digital tasks.",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-blue-600 hover:underline">
          ← Back to SmartEdgeTools
        </Link>

        <header>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">SmartEdgeTools Guides</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Practical guides that explain how online tools work, when they are useful, and what to
            consider before relying on their results.
          </p>
        </header>

        <div className="mt-10 space-y-6">
          {articles.map((article) => (
            <article key={article.href} className="rounded-xl border border-gray-200 p-6 hover:border-blue-200 hover:bg-blue-50/40">
              <h2 className="text-xl font-semibold text-gray-900">
                <Link href={article.href} className="hover:text-blue-600 hover:underline">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-2 leading-7 text-gray-600">{article.excerpt}</p>
              <Link href={article.href} className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline">
                Read the guide →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
