import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Smart Tools privacy policy to understand how information, cookies, advertising, and third-party services may be handled.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-4 leading-7 text-gray-600">
              This Privacy Policy explains how Smart Tools handles information
              and describes the use of cookies, advertising services, and
              third-party services on this website.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Information you provide
            </h2>

            <p className="leading-7">
              Some parts of the website may allow visitors to voluntarily
              provide information, such as when contacting Smart Tools.
              Information provided through a contact method may be used to
              respond to the visitor's request.
            </p>

            <p className="leading-7">
              We do not ask visitors to create an account simply to use the
              general online tools available on the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Cookies and similar technologies
            </h2>

            <p className="leading-7">
              Smart Tools may use cookies or similar technologies to support
              website functionality, understand how the website is used, or
              support advertising and other third-party services.
            </p>

            <p className="leading-7">
              Cookies are small files that websites can store in a visitor's
              browser. Visitors can manage or disable cookies through their
              browser settings, although some website features may not work as
              expected if cookies are disabled.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Advertising
            </h2>

            <p className="leading-7">
              Smart Tools may display advertisements provided by third-party
              advertising companies, including Google AdSense if the website
              is approved and advertising is enabled.
            </p>

            <p className="leading-7">
              Third-party advertising providers may use cookies or similar
              technologies to provide, measure, personalize, or improve
              advertising. Their handling of information is governed by their
              own privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Google advertising services
            </h2>

            <p className="leading-7">
              If Google advertising services are used on Smart Tools, Google
              and its advertising partners may use cookies or similar
              technologies in connection with advertisements shown on the
              website.
            </p>

            <p className="leading-7">
              Visitors can learn more about Google's advertising practices and
              available controls through Google's own privacy and advertising
              resources.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Website analytics and technical information
            </h2>

            <p className="leading-7">
              Website hosting and technical services may process information
              associated with requests made to the website, such as technical
              information needed to deliver pages and protect the service.
            </p>

            <p className="leading-7">
              If analytics services are enabled on the website, those services
              may collect information about website usage, such as pages
              visited, approximate location, device information, browser
              information, and other usage statistics according to the
              provider's own policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              How information may be used
            </h2>

            <p className="leading-7">
              Information may be used to operate and maintain the website,
              respond to inquiries, improve tools and content, understand
              website usage, maintain security, and support advertising or
              other services that are enabled on the website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Third-party services and links
            </h2>

            <p className="leading-7">
              Smart Tools may contain links to websites or services operated
              by third parties. We are not responsible for the privacy
              practices or content of external websites.
            </p>

            <p className="leading-7">
              Visitors should review the privacy policies of third-party
              websites before providing personal information to them.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Children's privacy
            </h2>

            <p className="leading-7">
              Smart Tools is intended to provide general online utilities and
              informational content. We do not knowingly request personal
              information from children for the purpose of creating accounts
              or profiles.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">
              Changes to this Privacy Policy
            </h2>

            <p className="leading-7">
              This Privacy Policy may be updated when the website's features,
              services, advertising, or data practices change. Any updated
              version will be published on this page.
            </p>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Questions about privacy
            </h2>

            <p className="mt-2 leading-7 text-gray-700">
              If you have a question about this Privacy Policy or how Smart
              Tools handles information, please visit our contact page.
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