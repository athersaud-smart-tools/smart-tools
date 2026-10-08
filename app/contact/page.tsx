import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SmartEdgeTools",
  description:
    "Contact SmartEdgeTools about technical problems, suggestions, feedback, content questions, or other website issues.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-blue-600 hover:underline">
          ← Back to SmartEdgeTools
        </Link>

        <article className="space-y-8">
          <header>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Contact SmartEdgeTools</h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              We welcome useful feedback, technical reports, suggestions for new tools, and questions
              about the information published on SmartEdgeTools.
            </p>
          </header>

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-2xl font-semibold text-gray-900">Contact support</h2>
            <p className="mt-3 leading-7 text-gray-700">
              For website support and general inquiries, email our support team at{" "}
              <a
                href="mailto:support@smartedgetools.com"
                className="font-semibold text-blue-600 hover:underline"
              >
                support@smartedgetools.com
              </a>.
            </p>
            <p className="mt-3 leading-7 text-gray-700">
              When reporting a problem, include the page or tool name and a short description of what
              happened. Screenshots or the exact error message can also be helpful.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Technical problems</h2>
            <p className="leading-7">
              If a calculator, converter, image utility, PDF tool, or another feature does not work as
              expected, tell us what you entered, what you expected to happen, and what happened instead.
              If the issue depends on a particular browser or device, include that information as well.
            </p>
            <ul className="list-disc space-y-2 pl-6 leading-7">
              <li>Name of the tool or page</li>
              <li>What you were trying to do</li>
              <li>What happened instead</li>
              <li>Any error message shown</li>
              <li>Browser or device details when relevant</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Suggestions and feedback</h2>
            <p className="leading-7">
              If there is a calculator, converter, generator, image feature, PDF feature, or productivity
              utility you would find useful, send us the idea. Feedback also helps us identify pages that
              need clearer explanations or improvements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Other useful pages</h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/about" className="font-medium text-blue-600 hover:underline">About SmartEdgeTools →</Link>
              <Link href="/privacy-policy" className="font-medium text-blue-600 hover:underline">Privacy Policy →</Link>
              <Link href="/terms" className="font-medium text-blue-600 hover:underline">Terms of Use →</Link>
              <Link href="/blog" className="font-medium text-blue-600 hover:underline">Read the Guides →</Link>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
