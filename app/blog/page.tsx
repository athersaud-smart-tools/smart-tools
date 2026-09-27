import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Guides on Online Tools & Calculators",
  description:
    "Helpful guides and articles about online tools, calculators, converters, and everyday productivity from SmartEdgeTools.",
  alternates: { canonical: "/blog" },
};

const articles = [
  {
    href: "/blog/best-online-tools-2026",
    title: "Best Free Online Tools in 2026",
    excerpt:
      "Discover the most useful free online tools for productivity, calculations, image editing, and more.",
  },
  {
    href: "/blog/how-online-calculators-save-time",
    title: "How Online Calculators Save Time",
    excerpt:
      "Learn how calculators improve productivity and speed up daily tasks.",
  },
  {
    href: "/blog/why-browser-tools-are-growing",
    title: "Why Browser-Based Tools Are Growing",
    excerpt:
      "Explore why users prefer online tools instead of installing software.",
  },
  {
    href: "/blog/top-tools-for-students",
    title: "Top Online Tools for Students in 2026",
    excerpt:
      "Best tools students can use for studying, assignments, and productivity.",
  },
  {
    href: "/blog/best-free-image-tools",
    title: "Best Free Online Image Tools in 2026",
    excerpt: "Learn about image resizers, compressors, and design tools online.",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Smart Tools
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Smart Tools Blog
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Helpful guides, tutorials, and explanations about online tools,
          calculators, and productivity resources.
        </p>

        <div className="mt-10 space-y-6">
          {articles.map((a) => (
            <article
              key={a.href}
              className="rounded-xl border border-gray-200 p-6 hover:border-blue-200 hover:bg-blue-50/40"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                <Link href={a.href} className="hover:text-blue-600 hover:underline">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-2 leading-7 text-gray-600">{a.excerpt}</p>
              <Link
                href={a.href}
                className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}