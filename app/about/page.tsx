import Link from "next/link";

export const metadata = {
  title: "About Us - Smart Tools",
  description: "Learn about Smart Tools — free online tools for everyone.",
};

export default function About() {
  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Home</Link>

        <div className="tool-container" style={{ maxWidth: 720 }}>
          <h1>👋 About Smart Tools</h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "var(--ink)", lineHeight: 1.8 }}>

            <div style={{ background: "var(--bg)", borderRadius: 12, padding: "1.5rem", border: "1.5px solid var(--border)" }}>
              <p style={{ fontSize: "1.1rem" }}>
                Smart Tools is a free collection of everyday online tools designed to help people work faster and smarter — without paying anything.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>🚀 Our Mission</h3>
              <p>We believe that powerful tools should be free and accessible to everyone. Whether you need to resize an image, improve your writing with AI, test your typing speed, or merge PDF files — we have got you covered, completely free.</p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>🛠️ Our Tools</h3>
              <p>We currently offer the following free tools:</p>
              <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <li>🤖 AI Text Improver — rewrite and improve your text instantly</li>
                <li>🖼️ Image Resizer — resize any image to any size</li>
                <li>⚡ Image Compressor — reduce image file size</li>
                <li>⌨️ Typing Speed Test — find out how fast you type</li>
                <li>📄 PDF Merge — combine multiple PDFs into one</li>
              </ul>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>💡 Why Free?</h3>
              <p>We keep our tools free by showing non-intrusive advertisements. This allows us to cover our costs while keeping all tools completely free for our users.</p>
            </div>

            <div>
              <h3 style={{ marginBottom: "0.5rem" }}>📬 Get In Touch</h3>
              <p>Have a suggestion for a new tool or found a bug? We would love to hear from you! Visit our <Link href="/contact" style={{ color: "var(--accent)" }}>Contact page</Link> to get in touch.</p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
