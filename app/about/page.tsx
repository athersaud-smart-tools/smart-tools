import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
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
              I’m Ather Saud, and I run SmartEdgeTools. I built it because many online calculators and
              converters are cluttered, ask you to sign up, or give you a number without explaining it.
              I wanted a small set of tools that open quickly, work in the browser, and explain what a
              result means and where it can be wrong.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">What is SmartEdgeTools?</h2>
            <p className="leading-7">
              The site is mainly for students and everyday users who need to get a task done: checking a
              percentage, estimating a loan payment, resizing an image, merging a PDF, or working with
              text and other common values. I want each page to make the task clear and give enough
              context to check the result.
            </p>
            <p className="leading-7">
              Most tools are available without an account or a software installation. The site brings
              focused calculators, converters, image and PDF utilities, and text and productivity tools
              together so visitors can move from a question to a result without a complicated setup.
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
              I build each tool around its specific task. Calculators apply formulas to the values entered;
              unit conversion uses the selected units and conversion rules; text utilities work on the text
              entered on the page. Image resizing and compression use browser image and canvas features,
              and PDF Merge reads selected PDF files in the browser and combines their pages. Those file
              operations are processed in the browser by the tool code and are not uploaded to the site.
            </p>
            <p className="leading-7">
              Some tools rely on outside services. The Currency Converter requests exchange-rate data
              from its available exchange-rate APIs, then uses the returned rate to estimate a conversion.
              The AI Text Improver sends text submitted to the tool through the site’s rewrite endpoint to
              OpenRouter and an available language model. Its output can change meaning, so it should be
              reviewed against the original before use. The privacy policy describes these data flows in
              more detail.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">How I check the tools and guides</h2>
            <p className="leading-7">
              I check a tool against the behavior its page describes, including the inputs it accepts and
              the result it displays. For formula-based tools, that means checking sample calculations
              against the stated method. For browser file tools, it means checking that the chosen file
              can be processed and that the output can be previewed or downloaded. External services can
              change or become unavailable, so results that depend on them may not always be returned.
            </p>
            <p className="leading-7">
              Guides explain the current behavior and limitations of the related tools. When you find an
              incorrect result, unclear instruction, or outdated explanation, please report the page and
              what happened. I can then review the specific issue and correct it when needed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Corrections and tool notes</h2>
            <p className="leading-7">
              Tool explanations describe the features and limits available on each page. Some results depend on
              third-party services, while other operations happen in your browser; the relevant page explains
              which applies. If you find a calculation issue, outdated explanation, or accessibility problem,
              please send the page address and details through the <Link href="/contact" className="text-blue-600 hover:underline">Contact page</Link> or email <a className="text-blue-600 hover:underline" href="mailto:support@smartedgetools.com">support@smartedgetools.com</a>.
            </p>
            <p className="leading-7">
              SmartEdgeTools is published under the site name. We do not claim that these general-purpose tools
              replace professional advice, formal assessments, or independent verification for consequential decisions.
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
