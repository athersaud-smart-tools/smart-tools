import Link from "next/link";

export const metadata = {
  title: "Smart Tools - Free Online Tools for Everyone",
  description: "Free online tools — resize images, improve text with AI, generate QR codes, convert units, pick colors, count words, create passwords, test typing speed, and merge PDFs.",
};

const tools = [
  { href: "/ai-rewrite", icon: "🤖", title: "AI Text Improver", desc: "Rewrite and improve your text instantly using AI." },
  { href: "/image/resize", icon: "🖼️", title: "Image Resizer", desc: "Resize any image to any size in seconds." },
  { href: "/image/compress", icon: "⚡", title: "Image Compressor", desc: "Reduce image file size without losing quality." },
  { href: "/qr-code", icon: "📷", title: "QR Code Generator", desc: "Turn any text or link into a QR code instantly." },
  { href: "/password", icon: "🔐", title: "Password Generator", desc: "Generate strong and secure passwords instantly." },
  { href: "/word-counter", icon: "🔡", title: "Word Counter", desc: "Count words, characters, sentences and more." },
  { href: "/color-picker", icon: "🎨", title: "Color Picker", desc: "Pick any color and get HEX, RGB and HSL values." },
  { href: "/text-case", icon: "📝", title: "Text Case Converter", desc: "Convert text to uppercase, lowercase, title case and more." },
  { href: "/unit-converter", icon: "🔄", title: "Unit Converter", desc: "Convert length, weight, temperature, speed and more." },
  { href: "/typing-test", icon: "⌨️", title: "Typing Speed Test", desc: "Find out how fast you can type in 30 seconds." },
  { href: "/pdf/merge", icon: "📄", title: "PDF Merge", desc: "Combine multiple PDF files into one document." },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>

      <nav className="navbar">
        <a href="/" className="navbar-logo">🚀 SmartTools</a>
        <ul className="navbar-links">
          <li><a href="/ai-rewrite">AI Rewrite</a></li>
          <li><a href="/image/resize">Images</a></li>
          <li><a href="/qr-code">QR Code</a></li>
          <li><a href="/unit-converter">Converter</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      <div className="hero">
        <div className="badge">100% Free • No Sign Up • 11 Tools</div>
        <h1>Smart Tools for<br /><span className="accent-text">Everyday Use</span></h1>
        <p>Resize images, improve text with AI, convert units, generate QR codes and more — all for free.</p>
      </div>

      <div className="section">
        <h2 className="section-title">🔧 All Tools</h2>
        <div className="tools-grid">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="tool-card">
              <span className="tool-icon">{tool.icon}</span>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <a href="/about" style={{ color: "#888", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#888", textDecoration: "none" }}>Contact</a>
          <a href="/privacy-policy" style={{ color: "#888", textDecoration: "none" }}>Privacy Policy</a>
        </div>
        © 2026 <span>SmartTools</span> — Free tools for everyone
      </footer>

    </main>
  );
}
