import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Smart Tools",
  description:
    "Contact Smart Tools with questions, feedback, suggestions, or reports about the website and its online tools.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Smart Tools
        </Link>

        <article className="space-y-8">
          <header>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Contact Smart Tools
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              We welcome questions, feedback, suggestions, and reports about
              problems with the website or its tools.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              How can we help?
            </h2>

            <p className="leading-7">
              If you find a problem with a calculator, converter, document
              utility, image tool, article, or another part of Smart Tools,
              please let us know. Helpful feedback allows us to improve the
              website and make the tools easier to use.
            </p>

            <p className="leading-7">
              You can also contact us with suggestions for new tools or topics
              that you would like to see covered in future articles.
            </p>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Contact information
            </h2>

            <p className="mt-3 leading-7 text-gray-700">
              Please use the contact method provided by Smart Tools for your
              inquiry. When contacting us about a technical problem, include
              the name of the tool and a short explanation of what happened.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              What to include in a technical report
            </h2>

            <p className="leading-7">
              If you are reporting a problem, the following information can
              help us understand the issue:
            </p>

            <ul className="list-disc space-y-2 pl-6 leading-7">
              <li>The name of the tool or page.</li>
              <li>What you were trying to do.</li>
              <li>What happened instead.</li>
              <li>Any error message that appeared.</li>
              <li>The device or browser you were using, if relevant.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Suggestions and feedback
            </h2>

            <p className="leading-7">
              We are continuously improving Smart Tools. If there is a useful
              calculator, converter, generator, document feature, image tool,
              or productivity utility you would like us to consider, send us
              your suggestion.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Other useful pages
            </h2>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/about"
                className="font-medium text-blue-600 hover:underline"
              >
                About Smart Tools →
              </Link>

              <Link
                href="/privacy-policy"
                className="font-medium text-blue-600 hover:underline"
              >
                Privacy Policy →
              </Link>

              <Link
                href="/terms"
                className="font-medium text-blue-600 hover:underline"
              >
                Terms of Use →
              </Link>

              <Link
                href="/blog"
                className="font-medium text-blue-600 hover:underline"
              >
                Read the Blog →
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}