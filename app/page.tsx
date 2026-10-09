"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const tools = [
  { href: "/ai-rewrite", icon: "🤖", title: "AI Text Improver", desc: "Improve clarity, tone, and readability with AI.", category: "AI" },
  { href: "/currency-converter", icon: "💱", title: "Currency Converter", desc: "Convert currencies quickly with current rates.", category: "Finance" },
  { href: "/bmi-calculator", icon: "⚖️", title: "BMI Calculator", desc: "Calculate Body Mass Index from height and weight.", category: "Health" },
  { href: "/age-calculator", icon: "🎂", title: "Age Calculator", desc: "Calculate your exact age from your date of birth.", category: "Calculator" },
  { href: "/loan-calculator", icon: "🏦", title: "Loan Calculator", desc: "Estimate monthly payments, interest, and total cost.", category: "Finance" },
  { href: "/percentage-calculator", icon: "%", title: "Percentage Calculator", desc: "Calculate percentages, increases, decreases, and more.", category: "Calculator" },
  { href: "/random-number", icon: "🎲", title: "Random Number Generator", desc: "Generate random numbers within your chosen range.", category: "Calculator" },
  { href: "/image/resize", icon: "🖼️", title: "Image Resizer", desc: "Resize images to the dimensions you need.", category: "Image" },
  { href: "/image/compress", icon: "⚡", title: "Image Compressor", desc: "Reduce image file size for easier sharing and faster pages.", category: "Image" },
  { href: "/qr-code", icon: "📷", title: "QR Code Generator", desc: "Create QR codes for links, text, and useful information.", category: "Generator" },
  { href: "/password", icon: "🔐", title: "Password Generator", desc: "Generate strong random passwords for your accounts.", category: "Generator" },
  { href: "/word-counter", icon: "🔡", title: "Word Counter", desc: "Count words, characters, and text length instantly.", category: "Text" },
  { href: "/color-picker", icon: "🎨", title: "Color Picker", desc: "Pick a color and get useful HEX and RGB values.", category: "Design" },
  { href: "/text-case", icon: "📝", title: "Case Converter", desc: "Convert text to upper, lower, title, and other cases.", category: "Text" },
  { href: "/unit-converter", icon: "🔄", title: "Unit Converter", desc: "Convert common length, weight, temperature, and other units.", category: "Calculator" },
  { href: "/stopwatch", icon: "⏱️", title: "Stopwatch", desc: "Use a simple stopwatch with lap timing.", category: "Tools" },
  { href: "/typing-test", icon: "⌨️", title: "Typing Speed Test", desc: "Measure typing speed and accuracy in your browser.", category: "Tools" },
  { href: "/pdf/merge", icon: "📄", title: "PDF Merge", desc: "Combine multiple PDF files into one document.", category: "PDF" },
];

const categories = ["All", "AI", "Finance", "Health", "Calculator", "Image", "Generator", "Text", "Design", "PDF", "Tools"];

const articles = [
  { href: "/blog/best-online-tools-2026", title: "Best Online Tools in 2026", desc: "A practical guide to useful browser-based tools." },
  { href: "/blog/how-online-calculators-save-time", title: "How Online Calculators Save Time", desc: "Learn how simple calculators can make everyday tasks easier." },
  { href: "/blog/best-free-image-tools", title: "Best Free Image Tools", desc: "Helpful ways to resize and compress images online." },
  { href: "/blog/resize-compress-images-for-websites", title: "How to Resize and Compress Images", desc: "Learn about image dimensions, formats, compression, and quality checks." },
];

export default function Home() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchCat = active === "All" || tool.category === active;
      const matchSearch = !query || `${tool.title} ${tool.desc} ${tool.category}`.toLowerCase().includes(query);
      return matchCat && matchSearch;
    });
  }, [active, search]);

  useEffect(() => {
    if (!search.trim()) return;
    const timer = window.setTimeout(() => {
      document.getElementById("all-tools-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 700);
    return () => window.clearTimeout(timer);
  }, [search]);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <nav className="navbar" aria-label="Main navigation">
        <Link href="/" className="navbar-logo" aria-label="SmartEdgeTools home">
          Smart<span>EdgeTools</span>
        </Link>
        <ul className="navbar-links">
          <li><Link href="/">Tools</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-content">
          <div className="badge">Free online tools</div>
          <h1>Simple tools for everyday tasks.</h1>
          <p>
            Calculate, convert, create, edit, and organize online with SmartEdgeTools.
            Fast browser-based utilities with no unnecessary signup.
          </p>
          <div className="search-wrap">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              aria-label="Search online tools"
              className="search-input"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      <div className="stats-bar" aria-label="SmartEdgeTools highlights">
        <div className="stat-item"><div className="stat-label">Useful online tools</div></div>
        <div className="stat-item"><div className="stat-label">Free to use</div></div>
        <div className="stat-item"><div className="stat-label">Browser access</div></div>
      </div>

      <section className="section" style={{ maxWidth: "980px" }}>
        <div className="section-header">
          <div>
            <h2 className="section-title">Free online tools for work and life</h2>
            <p style={{ color: "var(--ink2)", marginTop: "0.45rem", lineHeight: 1.7 }}>
              SmartEdgeTools brings practical calculators, converters, generators, text tools, image tools, PDF utilities, and productivity resources together in one place.
            </p>
          </div>
        </div>
        <div className="tools-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))" }}>
          <Link href="/age-calculator" className="tool-card"><div className="tool-icon-wrap">🎂</div><h3>Calculators</h3><p>Age, percentage, loan, BMI, and everyday calculations.</p></Link>
          <Link href="/currency-converter" className="tool-card"><div className="tool-icon-wrap">💱</div><h3>Converters</h3><p>Convert currencies, units, and common measurements.</p></Link>
          <Link href="/image/resize" className="tool-card"><div className="tool-icon-wrap">🖼️</div><h3>Image & PDF Tools</h3><p>Resize, compress, and combine files in your browser.</p></Link>
          <Link href="/word-counter" className="tool-card"><div className="tool-icon-wrap">✍️</div><h3>Text & Productivity</h3><p>Count words, improve text, test typing, and more.</p></Link>
        </div>
      </section>

      <section id="all-tools-section" className="section" aria-labelledby="all-tools-heading" style={{ scrollMarginTop: "24px" }}>
        <div className="section-header">
          <h2 id="all-tools-heading" className="section-title">Explore all tools</h2>
          <span className="section-tag">Browse and explore</span>
        </div>
        <div className="category-pills" aria-label="Tool categories">
          {categories.map((cat) => (
            <button key={cat} type="button" className={`pill ${active === cat ? "active" : ""}`} onClick={() => setActive(cat)} aria-pressed={active === cat}>
              {cat}
            </button>
          ))}
        </div>
        <div className="tools-grid">
          {filtered.map((tool) => (
            <Link key={tool.href} href={tool.href} className="tool-card">
              <div className="tool-icon-wrap">{tool.icon}</div>
              <span className="tool-card-arrow" aria-hidden="true">↗</span>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <p style={{ color: "var(--ink2)", padding: "2rem 0" }}>No tools matched your search. Try another word or category.</p>}
      </section>

      <section className="section" style={{ maxWidth: "980px" }}>
        <div className="section-header">
          <div>
            <h2 className="section-title">Helpful guides</h2>
            <p style={{ color: "var(--ink2)", marginTop: "0.4rem" }}>Learn how to get more from everyday online tools.</p>
          </div>
          <Link href="/blog" style={{ color: "var(--accent)", fontWeight: 700, textDecoration: "none" }}>View all articles →</Link>
        </div>
        <div className="tools-grid">
          {articles.map((article) => (
            <Link key={article.href} href={article.href} className="tool-card">
              <h3>{article.title}</h3>
              <p>{article.desc}</p>
              <div style={{ marginTop: "1rem", color: "var(--accent)", fontWeight: 700, fontSize: "0.8rem" }}>Read guide →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" style={{ maxWidth: "900px" }}>
        <h2 className="section-title">Why use SmartEdgeTools?</h2>
        <div style={{ marginTop: "1rem", display: "grid", gap: "1rem" }}>
          <p style={{ color: "var(--ink2)", lineHeight: 1.8 }}><strong>Easy to use:</strong> Each tool is designed around a clear task, so you can get started without learning complicated software.</p>
          <p style={{ color: "var(--ink2)", lineHeight: 1.8 }}><strong>Browser based:</strong> Many tasks can be completed directly in your browser without installing a desktop program.</p>
          <p style={{ color: "var(--ink2)", lineHeight: 1.8 }}><strong>Useful across devices:</strong> The website is designed for desktop, tablet, and mobile screens.</p>
          <p style={{ color: "var(--ink2)", lineHeight: 1.8 }}><strong>Practical information:</strong> Our blog provides guides that explain common calculations, conversions, image tasks, and online-tool workflows.</p>
        </div>
      </section>

      <section className="section" style={{ maxWidth: "900px" }} aria-labelledby="home-faq-heading">
        <h2 id="home-faq-heading" className="section-title">Frequently asked questions</h2>
        <div style={{ marginTop: "1.25rem", display: "grid", gap: "1.25rem" }}>
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: "0.35rem" }}>Are SmartEdgeTools free to use?</h3>
            <p style={{ color: "var(--ink2)", lineHeight: 1.8 }}>The tools are provided for general use without requiring an account. Some features may depend on third-party services or availability.</p>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: "0.35rem" }}>How do I find the right tool?</h3>
            <p style={{ color: "var(--ink2)", lineHeight: 1.8 }}>Use the search box or choose a category, then open a tool and follow the instructions on its page.</p>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: "0.35rem" }}>Are results always exact?</h3>
            <p style={{ color: "var(--ink2)", lineHeight: 1.8 }}>Results depend on the information you enter and the tool's method. Check important financial, health, or other consequential results independently.</p>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: "0.35rem" }}>Are my files and text private?</h3>
            <p style={{ color: "var(--ink2)", lineHeight: 1.8 }}>Data handling can differ between tools. Read the tool instructions and our <Link href="/privacy-policy" style={{ color: "var(--accent)", textDecoration: "underline" }}>Privacy Policy</Link> before entering sensitive information.</p>
          </div>
          <div>
            <h3 style={{ fontWeight: 700, marginBottom: "0.35rem" }}>How can I report a problem?</h3>
            <p style={{ color: "var(--ink2)", lineHeight: 1.8 }}>Visit our <Link href="/contact" style={{ color: "var(--accent)", textDecoration: "underline" }}>Contact page</Link> and tell us which tool you used and what happened.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div className="footer-links" style={{ flexWrap: "wrap" }}>
            <Link href="/">Tools</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <p style={{ color: "#777", lineHeight: 1.7 }}>© 2026 SmartEdgeTools. Free online tools for everyday tasks.</p>
        </div>
      </footer>
    </main>
  );
}
