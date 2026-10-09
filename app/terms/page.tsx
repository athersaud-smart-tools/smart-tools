import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the SmartEdgeTools Terms of Use covering website access, tools, content, disclaimers, third-party services, and acceptable use.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-blue-600 hover:underline">
          ← Back to SmartEdgeTools
        </Link>

        <article className="space-y-8">
          <header>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Terms of Use</h1>
            <p className="mt-4 leading-7 text-gray-600">
              These terms explain the basic rules for using SmartEdgeTools, its online utilities,
              guides, and related website services.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Acceptance and responsible use</h2>
            <p className="leading-7">
              By using SmartEdgeTools, you agree to use the website responsibly and lawfully. Do not
              interfere with the operation of the site, attempt unauthorized access, introduce malicious
              code, abuse automated requests, or use the service for unlawful purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Tools and results</h2>
            <p className="leading-7">
              SmartEdgeTools provides calculators, converters, generators, text utilities, image tools,
              PDF tools, and other browser-based utilities. Results are intended for general practical
              and informational use.
            </p>
            <p className="leading-7">
              Important results should be checked independently before being used for financial, health,
              legal, business, educational, or other consequential decisions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Financial tools</h2>
            <p className="leading-7">
              Financial calculators provide estimates based on the values entered by the user. They are
              not financial, investment, banking, accounting, or tax advice. Actual rates, fees, taxes,
              repayment amounts, exchange rates, and lender terms may differ.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Health-related tools</h2>
            <p className="leading-7">
              Health-related tools, including BMI calculations, are for general educational information.
              They are not a substitute for diagnosis, treatment, or advice from a qualified healthcare
              professional.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Website content</h2>
            <p className="leading-7">
              SmartEdgeTools publishes guides and explanations intended to help visitors understand
              digital tools and related topics. We aim for useful and accurate information, but content
              may become outdated or contain errors. Verify important information before relying on it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Intellectual property</h2>
            <p className="leading-7">
              Unless otherwise stated, original SmartEdgeTools text, branding, design, and other original
              materials belong to SmartEdgeTools or are used with permission. Do not copy, republish,
              sell, or redistribute substantial portions of the site&apos;s original content without permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Third-party services and external links</h2>
            <p className="leading-7">
              SmartEdgeTools may rely on third-party services for hosting, analytics, advertising, or
              functionality and may link to external websites. Those services have their own policies,
              terms, availability, and security practices.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Availability and changes</h2>
            <p className="leading-7">
              We aim to keep the website useful and available, but cannot guarantee that every page,
              feature, or tool will always be available or error-free. Features may be updated, changed,
              temporarily unavailable, or removed as SmartEdgeTools develops.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Limitation of liability</h2>
            <p className="leading-7">
              To the extent permitted by applicable law, SmartEdgeTools is not responsible for losses or
              damages resulting from reliance on calculations, information, tools, content, interruptions,
              or third-party services provided through or linked from the website.
            </p>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Questions</h2>
            <p className="mt-2 leading-7 text-gray-700">
              Questions about these terms can be sent through the{" "}
              <Link href="/contact" className="font-medium text-blue-600 hover:underline">SmartEdgeTools Contact page</Link>.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
