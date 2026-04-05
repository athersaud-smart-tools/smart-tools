import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Smart Tools",
  description: "Privacy Policy for Smart Tools website.",
};

export default function PrivacyPolicy() {
  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Home</Link>

        <div className="tool-container" style={{ maxWidth: 720 }}>
          <h1>🔒 Privacy Policy</h1>
          <p style={{ color: "var(--ink2)", fontSize: "0.85rem", marginBottom: "2rem" }}>Last updated: April 2026</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--ink)", lineHeight: 1.8 }}>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>1. Information We Collect</h3>
              <p>Smart Tools does not collect any personal information from its users. We do not require you to create an account or provide any personal details to use our tools.</p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>2. How We Use Your Information</h3>
              <p>Since we do not collect personal information, we do not use or share any personal data. Any text or files you upload to our tools are processed instantly and are never stored on our servers.</p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>3. Cookies</h3>
              <p>Smart Tools may use basic cookies to improve your experience on our website. These cookies do not contain any personal information and are used only to remember your preferences.</p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>4. Third Party Services</h3>
              <p>We use Google AdSense to display advertisements. Google may use cookies to show you relevant ads based on your browsing history. Please refer to Google's Privacy Policy for more information.</p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>5. Data Security</h3>
              <p>We take data security seriously. All files and text you process through our tools are handled securely and are never saved or shared with third parties.</p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>6. Children's Privacy</h3>
              <p>Smart Tools is safe for all ages. We do not knowingly collect any information from children under the age of 13.</p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>7. Changes to This Policy</h3>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.</p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>8. Contact Us</h3>
              <p>If you have any questions about this Privacy Policy, please contact us through our <Link href="/contact" style={{ color: "var(--accent)" }}>Contact page</Link>.</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
