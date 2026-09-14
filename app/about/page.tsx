import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Smart Tools",
  description:
    "Learn about Smart Tools, a free online platform offering useful calculators, converters, generators, image tools, PDF tools, and productivity utilities.",
};

export default function AboutPage() {
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
              About Smart Tools
            </h1>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Smart Tools is a free online platform created to make everyday
              digital tasks easier, faster, and more accessible.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              What is Smart Tools?
            </h2>

            <p className="leading-7">
              Smart Tools brings together a collection of practical
              browser-based utilities that people can use for common
              calculations, conversions, document tasks, image tasks, writing
              tasks, and productivity needs.
            </p>

            <p className="leading-7">
              Our goal is simple: provide useful tools that are easy to
              understand and quick to use without making visitors download
              unnecessary software or create an account just to perform a
              simple task.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              What can you find here?
            </h2>

            <p className="leading-7">
              Smart Tools includes different types of online utilities for
              students, professionals, creators, and everyday users.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">
                  Calculators
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Tools for percentages, age calculations, loans, BMI, and
                  other everyday calculations.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">
                  Converters
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Conversion tools designed to help users quickly work with
                  common values and measurements.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">
                  Image and Document Tools
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Browser-based utilities for common image and document
                  tasks.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">
                  Productivity Tools
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Simple utilities designed to help users complete everyday
                  digital tasks more efficiently.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Who is Smart Tools for?
            </h2>

            <p className="leading-7">
              The website is designed for anyone who needs a quick and
              straightforward online utility. Students can use calculators and
              productivity resources, professionals can use conversion and
              document tools, and everyday users can use simple utilities for
              tasks they encounter online.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our approach
            </h2>

            <p className="leading-7">
              We aim to keep Smart Tools simple. Each tool should have a clear
              purpose, an understandable interface, and information that helps
              visitors understand what the tool does and how to use it.
            </p>

            <p className="leading-7">
              We also publish helpful guides and articles covering online
              tools, productivity, calculators, browser-based utilities, and
              related topics. These articles are intended to provide useful
              information rather than simply direct visitors to a tool.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Free and accessible
            </h2>

            <p className="leading-7">
              Smart Tools is designed around convenient browser-based access.
              Our aim is to make useful utilities available on computers,
              tablets, and mobile devices without unnecessary complexity.
            </p>
          </section>

          <section className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Explore Smart Tools
            </h2>

            <p className="mt-2 leading-7 text-gray-700">
              Ready to use a tool? Visit the homepage to explore the available
              calculators, converters, generators, and other utilities.
            </p>

            <Link
              href="/"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
            >
              Explore All Tools
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}