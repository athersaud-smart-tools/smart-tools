import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Smart Tools Terms of Use covering website access, online tools, content, disclaimers, third-party services, and acceptable use.",
};

export default function TermsPage() {
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
              Terms of Use
            </h1>

            <p className="mt-4 leading-7 text-gray-600">
              These Terms of Use explain the basic rules for using the Smart
              Tools website and its online tools, content, and services.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Acceptance of these terms
            </h2>

            <p className="leading-7">
              By accessing or using Smart Tools, you agree to use the website
              responsibly and in accordance with these Terms of Use. If you do
              not agree with these terms, please do not use the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Use of the website
            </h2>

            <p className="leading-7">
              Smart Tools provides online utilities and informational content
              for general personal, educational, professional, and everyday
              use.
            </p>

            <p className="leading-7">
              You agree not to misuse the website, interfere with its
              operation, attempt to gain unauthorized access, introduce
              malicious code, or use the service for unlawful purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Online tools and results
            </h2>

            <p className="leading-7">
              Smart Tools provides calculators, converters, generators,
              document utilities, image utilities, and other online tools.
              Results produced by these tools are provided for general
              informational and practical purposes.
            </p>

            <p className="leading-7">
              Users should review important results independently before
              relying on them for decisions involving money, health, legal
              matters, business, education, or other important situations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Financial information
            </h2>

            <p className="leading-7">
              Financial calculators and related information on Smart Tools are
              provided for general educational and estimation purposes only.
              They are not financial, investment, banking, accounting, or tax
              advice.
            </p>

            <p className="leading-7">
              Actual loan costs, interest rates, payments, exchange rates,
              fees, taxes, and other financial figures may differ from results
              produced by an online calculator.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Health-related tools
            </h2>

            <p className="leading-7">
              Health-related tools, including BMI or similar calculators, are
              provided for general educational purposes only.
            </p>

            <p className="leading-7">
              These tools are not a substitute for professional medical advice,
              diagnosis, or treatment. Consult a qualified healthcare
              professional for questions about your health.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Content and articles
            </h2>

            <p className="leading-7">
              Smart Tools publishes articles, guides, explanations, and other
              informational content intended to help visitors understand
              online tools and related topics.
            </p>

            <p className="leading-7">
              Although reasonable care is taken when preparing content,
              information may become outdated or contain errors. Important
              information should be independently verified before being relied
              upon.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Intellectual property
            </h2>

            <p className="leading-7">
              Unless otherwise stated, the website's original text, design,
              branding, and other original materials belong to Smart Tools or
              are used with appropriate permission.
            </p>

            <p className="leading-7">
              You may not copy, reproduce, republish, sell, or redistribute
              substantial portions of the website's original content without
              appropriate permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Third-party services
            </h2>

            <p className="leading-7">
              Smart Tools may use third-party services for hosting, analytics,
              advertising, functionality, or other website operations.
            </p>

            <p className="leading-7">
              Third-party services may have their own terms, policies, and
              conditions. Users are responsible for reviewing those policies
              when using external services or links.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              External websites
            </h2>

            <p className="leading-7">
              Smart Tools may provide links to external websites. We do not
              control those websites and are not responsible for their
              availability, content, security, or privacy practices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Availability of the service
            </h2>

            <p className="leading-7">
              We aim to keep Smart Tools available and useful, but we cannot
              guarantee that every page, tool, feature, or service will always
              be available or error-free.
            </p>

            <p className="leading-7">
              Features may be changed, updated, temporarily unavailable, or
              removed as the website develops.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Limitation of liability
            </h2>

            <p className="leading-7">
              To the extent permitted by applicable law, Smart Tools is not
              responsible for losses or damages resulting from reliance on
              information, calculations, tools, content, interruptions, or
              third-party services provided through or linked from the
              website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Changes to these terms
            </h2>

            <p className="leading-7">
              These Terms of Use may be updated as the website, tools, and
              services change. Updated terms will be published on this page.
            </p>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Questions
            </h2>

            <p className="mt-2 leading-7 text-gray-700">
              If you have questions about these Terms of Use, please visit the
              Smart Tools contact page.
            </p>

            <Link
              href="/contact"
              className="mt-4 inline-block font-medium text-blue-600 hover:underline"
            >
              Contact Smart Tools →
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}