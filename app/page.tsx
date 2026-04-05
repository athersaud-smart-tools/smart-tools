import Link from "next/link";

export const metadata = {
  title: "Smart Tools - Free Online Tools for Everyone",
  description:
    "Free tools to resize images, compress files, improve text with AI, test typing speed, and merge PDFs.",
};

const tools = [
  {
    href: "/ai-rewrite",
    icon: "🤖",
    title: "AI Text Improver",
    desc: "Rewrite and improve your text instantly using AI.",
    color: "#e85d2f",
  },
  {
    href: "/image/resize",
    icon: "🖼️",
    title: "Image Resizer",
    desc: "Resize any image to any size in seconds.",
    color: "#2f6ee8",
  },
  {
    href: "/image/compress",
    icon: "⚡",
    title: "Image Compressor",
    desc: "Reduce image file size without losing quality.",
    color: "#1a8c5b",
  },
  {
    href: "/typing-test",
    icon: "⌨️",
    title: "Typing Speed Test",
    desc: "Find out how fast you can type in 30 seconds.",
    color: "#8b5cf6",
  },
  {
    href: "/pdf/merge",
    icon: "📄",
    title: "PDF Merge",
    desc: "Combine multiple PDF files into one document.",
    color: "#e8852f",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          🚀 SmartTools
        </a>
        <ul className="navbar-links">
          <li><a href="/ai-rewrite">AI Rewrite</a></li>
          <li><a href="/image/resize">Images</a></li>
          <li><a href="/typing-test">Typing</a></li>
          <li><a href="/pdf/merge">PDF</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="badge">100% Free • No Sign Up</div>
        <h1>
          Smart Tools for<br />
          <span className="accent-text">Everyday Use</span>
        </h1>
        <p>
          Resize images, improve text with AI, test your typing speed, and merge PDFs — all for free.
        </p>
      </div>

      {/* TOOLS */}
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

      {/* FOOTER */}
      <footer className="footer">
        © 2026 <span>SmartTools</span> — Free tools for everyone
      </footer>

    </main>
  );
}
