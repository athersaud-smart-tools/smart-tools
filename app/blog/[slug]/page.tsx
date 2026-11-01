import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, articleSchema, breadcrumbSchema } from "../../lib/jsonld";
import { ArticleBody, newArticles } from "../new-articles";

const updatedDate = "2026-11-01";

export const dynamicParams = false;

export function generateStaticParams() {
  return newArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = newArticles.find((item) => item.slug === slug);
  if (!article) return {};
  const canonical = `/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical },
    openGraph: { type: "article", url: canonical, title: article.title, description: article.description },
  };
}

export default async function NewArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = newArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const canonical = `/blog/${article.slug}`;

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <article className="mx-auto max-w-3xl leading-8">
        <JsonLd data={{
          "@context": "https://schema.org",
          "@graph": [
            articleSchema({ title: article.title, description: article.description, path: canonical, dateModified: updatedDate }),
            breadcrumbSchema([{ name: "Tools", path: "/" }, { name: "Guides", path: "/blog" }, { name: article.title, path: canonical }]),
          ],
        }} />
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        }} />
        <Link href="/blog" className="mb-8 inline-block text-sm font-medium text-blue-600 hover:underline">← Back to Guides</Link>
        <header>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Practical guide</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">{article.title}</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">{article.intro}</p>
          <p className="mt-3 text-sm text-gray-500">By Ather Saud · Updated on November 1, 2026</p>
        </header>
        <div className="mt-10 space-y-2">
          <ArticleBody article={article} />
        </div>
      </article>
    </main>
  );
}
