import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SmartEdgeTools",
  description:
    "Learn about SmartEdgeTools, a free online platform for practical calculators, converters, text, image, PDF, and productivity tools.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-blue-600 hover:underline">
          ← Back to SmartEdgeTools
        </Link>

        <article className="space-y-8">
          <header>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">About SmartEdgeTools</h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              SmartEdgeTools is a free collection of practical browser-based utilities built to make
              common digital tasks simpler, faster, and easier to understand.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">What is SmartEdgeTools?</h2>
            <p className="leading-7">
              SmartEdgeTools brings useful everyday tools together in one place. Visitors can calculate,
              convert, write, resize or compress images, work with PDFs, generate useful values, and
              complete other small tasks directly in a web browser.
            </p>
            <p className="leading-7">
              The site is designed around a simple idea: when a task can be completed with a focused
              browser tool, users should not have to install a large application or create an account just
              to get a quick result.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">What you can do here</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Calculators</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Calculate percentages, age, BMI, loan estimates, and other everyday figures.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Converters</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Convert currencies, units, and other common values without installing software.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Image and PDF tools</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Handle common image and document tasks such as resizing, compression, and PDF merging.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">Text and productivity</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Use focused utilities for writing, text handling, passwords, QR codes, timing, and more.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">How we approach the tools</h2>
            <p className="leading-7">
              Each tool is intended to have a clear purpose and a straightforward workflow. Where a
              result needs context, the page explains what the calculation or conversion means, how to
              use the tool, and what limitations users should keep in mind.
            </p>
            <p className="leading-7">
              SmartEdgeTools also publishes practical guides about online utilities and digital tasks.
              These guides are designed to explain when a tool is useful, how to use it effectively, and
              what users should consider before relying on a result.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Our content and correction approach</h2>
            <p className="leading-7">
              Our guides focus on practical tasks that visitors can try for themselves, such as checking a
              percentage calculation, preparing an image for an upload, or combining PDF files. We aim to
              explain the steps, relevant assumptions, and common limitations rather than simply listing tools.
            </p>
            <p className="leading-7">
              Tool results can depend on the values entered, browser behavior, or data supplied by an external
              service. We encourage visitors to check important results and to tell us when an explanation,
              example, or feature appears incorrect. Feedback helps us identify what needs to be reviewed or
              clarified; it does not mean every page has been independently certified by a specialist.
            </p>
            <p className="leading-7">
              To report a possible error or suggest an improvement, please use our{" "}
              <Link href="/contact" className="font-medium text-blue-600 hover:underline">Contact page</Link>.
              Include the page address and, where possible, the steps that led to the issue.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Important limitations</h2>
            <p className="leading-7">
              SmartEdgeTools provides general-purpose tools and information. Results from financial,
              health, or other decision-related tools should be treated as estimates or general
              information rather than professional advice. Review important results independently and
              consult an appropriate professional when necessary.
            </p>
          </section>

          <section className="rounded-xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Explore SmartEdgeTools</h2>
            <p className="mt-2 leading-7 text-gray-700">
              Browse the available tools or read the guides to learn more about practical browser-based
              utilities.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Link href="/" className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
                Explore All Tools
              </Link>
              <Link href="/blog" className="rounded-lg border border-blue-200 bg-white px-5 py-3 font-medium text-blue-700 hover:bg-blue-50">
                Read the Guides
              </Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
