import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the SmartEdgeTools privacy policy covering information, cookies, analytics, advertising, and third-party services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="mb-8 inline-block text-sm font-medium text-blue-600 hover:underline">
          ← Back to SmartEdgeTools
        </Link>

        <article className="space-y-8">
          <header>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
            <p className="mt-4 leading-7 text-gray-600">
              This policy explains how SmartEdgeTools may handle information when you use the website,
              including cookies, analytics, advertising, and information you voluntarily provide.
            </p>
            <p className="mt-2 text-sm text-gray-500">Last updated: November 1, 2026</p>
          </header>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Information you provide</h2>
            <p className="leading-7">
              Most SmartEdgeTools utilities can be used without creating an account. If you contact us,
              the information you choose to provide may be used to understand and respond to your request.
            </p>
            <p className="leading-7">
              Some tools work entirely in your browser, including PDF merging, image resizing, image compression,
              text counting, case conversion, and basic calculations. The AI Text Improver sends text you submit
              to our server and to OpenRouter and an available language model to produce a rewrite. The Currency
              Converter requests exchange-rate data from third-party providers. Do not enter confidential or
              sensitive information into tools unless you are comfortable with those data flows.
            </p>
            <p className="leading-7">
              The AI Text Improver sends the text you submit to the site&apos;s rewrite endpoint. That endpoint
              forwards the text to OpenRouter and an available language model to produce the requested
              rewrite. The site code does not save that text to local storage. Image resizing, image
              compression, and PDF merging use browser APIs to process the selected files; those tool
              operations do not upload the file contents to the site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Information processed by the website</h2>
            <p className="leading-7">
              Hosting, security, analytics, and other technical services may process information associated
              with requests to the website, such as browser, device, network, and diagnostic information.
              This information may be used to operate, secure, troubleshoot, and improve the service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Browser-based tools</h2>
            <p className="leading-7">
              Where a tool processes information locally in your browser, the data used for that operation
              may remain on your device rather than being uploaded to SmartEdgeTools. Tool behavior can vary,
              so do not enter sensitive or confidential information unless you understand how the specific
              tool handles it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Cookies and analytics</h2>
            <p className="leading-7">
              The site loads Google Analytics (measurement ID G-KRMPNVW2R8), Microsoft Clarity, and the
              Google AdSense script on every page, including this Privacy Policy page. These third-party services
              may process information about site visits and interactions and may use cookies or similar
              technologies. The site code does not read or write browser local storage or set first-party
              cookies for the tools. Google consent mode is initialized with analytics and advertising
              storage denied by default for listed European regions, but the site does not provide a
              visitor-facing consent banner or controls in its current code. Third-party services may still
              process technical request data as described by their own policies.
            </p>
            <p className="leading-7">
              You can manage cookies through your browser settings. Blocking them may affect third-party
              service features or measurement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Advertising</h2>
            <p className="leading-7">
              SmartEdgeTools may display advertising from third-party providers, including Google AdSense
              if the site is approved and advertising is enabled. Advertising providers may use cookies or
              similar technologies in accordance with their own policies.
            </p>
            <p className="leading-7">
              Third-party vendors, including Google, may use cookies to serve ads based on a visitor&apos;s
              visits to this site or other sites. Learn about Google&apos;s advertising technologies in the{" "}
              <a className="text-blue-600 hover:underline" href="https://policies.google.com/technologies/ads">Google advertising technologies policy</a>{" "}
              and review available ad settings at{" "}
              <a className="text-blue-600 hover:underline" href="https://www.google.com/settings/ads">Google Ads Settings</a>.
            </p>
            <p className="leading-7">
              If personalized ads are served to visitors in the EEA, UK, or Switzerland, Google requires
              publishers to use a Google-certified consent management platform integrated with the IAB
              Transparency and Consent Framework. Consent choices and available controls depend on the
              advertising settings and the visitor&apos;s location.
            </p>
            <p className="leading-7">
              For information about Google&apos;s advertising practices and available controls, review Google&apos;s
              own privacy and advertising resources.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Third-party services and links</h2>
            <p className="leading-7">
              SmartEdgeTools may use third-party services for hosting, analytics, advertising, or website
              functionality. The website may also link to external sites. Those services and sites have
              their own privacy practices and terms, which we do not control.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Children&apos;s privacy</h2>
            <p className="leading-7">
              SmartEdgeTools is a general-purpose website and does not intentionally request personal
              information from children. If you believe a child has provided personal information to us,
              please contact us so the situation can be reviewed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Changes to this policy</h2>
            <p className="leading-7">
              This policy may be updated when the website, tools, analytics, advertising, or other services
              change. The updated version will be published on this page.
            </p>
          </section>

          <section className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Questions about privacy</h2>
            <p className="mt-2 leading-7 text-gray-700">
              If you have a privacy question or request, email{" "}
              <a href="mailto:support@smartedgetools.com" className="font-medium text-blue-600 hover:underline">support@smartedgetools.com</a>{" "}
              or use the <Link href="/contact" className="font-medium text-blue-600 hover:underline">Contact page</Link>.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
