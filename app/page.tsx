"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const tools = [
  { href: "/ai-rewrite", icon: "🤖", title: "AI Text Improver", desc: "Improve clarity, tone, and readability with AI.", category: "AI" },
  { href: "/currency-converter", icon: "💱", title: "Currency Converter", desc: "Convert currencies quickly with current rates.", category: "Finance" },
  { href: "/bmi-calculator", icon: "⚖️", title: "BMI Calculator", desc: "Calculate Body Mass Index from height and weight.", category: "Health" },
  { href: "/birth-chart", icon: "🌙", title: "Birth Chart Calculator", desc: "Explore your natal chart, planetary placements, and houses.", category: "Astrology" },
  { href: "/age-calculator", icon: "🎂", title: "Age Calculator", desc: "Calculate years, months, and days from a birth date.", category: "Calculator" },
  { href: "/loan-calculator", icon: "🏦", title: "Loan Calculator", desc: "Estimate monthly payments, interest, and total cost.", category: "Finance" },
  { href: "/final-grade-calculator", icon: "🎓", title: "Final Grade Calculator", desc: "Calculate a weighted grade or find the score needed on your final.", category: "Calculator" },
  { href: "/percentage-calculator", icon: "%", title: "Percentage Calculator", desc: "Calculate percentages, increases, decreases, and more.", category: "Calculator" },
  { href: "/random-number", icon: "🎲", title: "Random Number Generator", desc: "Generate random numbers within your chosen range.", category: "Calculator" },
  { href: "/image/resize", icon: "🖼️", title: "Image Resizer", desc: "Resize images to the dimensions you need.", category: "Image" },
  { href: "/image/compress", icon: "⚡", title: "Image Compressor", desc: "Reduce image file size for easier sharing and faster pages.", category: "Image" },
  { href: "/qr-code", icon: "📷", title: "QR Code Generator", desc: "Create QR codes for links, text, and useful information.", category: "Generator" },
  { href: "/password", icon: "🔐", title: "Password Generator", desc: "Generate strong random passwords for your accounts.", category: "Generator" },
  { href: "/word-counter", icon: "🔡", title: "Word Counter", desc: "Count words, characters, and text length instantly.", category: "Text" },
  { href: "/color-picker", icon: "🎨", title: "Color Picker", desc: "Pick a color and get useful HEX and RGB values.", category: "Design" },
  { href: "/text-case", icon: "📝", title: "Case Converter", desc: "Convert text to upper, lower, title, and other cases.", category: "Text" },
  { href: "/json-formatter", icon: "{ }", title: "JSON Formatter & Validator", desc: "Format, minify, and validate JSON in your browser.", category: "Developer" },
  { href: "/unit-converter", icon: "🔄", title: "Unit Converter", desc: "Convert common length, weight, temperature, and other units.", category: "Calculator" },
  { href: "/stopwatch", icon: "⏱️", title: "Stopwatch", desc: "Use a simple stopwatch with lap timing.", category: "Tools" },
  { href: "/typing-test", icon: "⌨️", title: "Typing Speed Test", desc: "Measure typing speed and accuracy in your browser.", category: "Tools" },
  { href: "/pdf/merge", icon: "📄", title: "PDF Merge", desc: "Combine multiple PDF files into one document.", category: "PDF" },
];

const categories = ["All", "AI", "Finance", "Health", "Astrology", "Calculator", "Developer", "Image", "Generator", "Text", "Design", "PDF", "Tools"];

const articles = [
  { href: "/blog/best-online-tools-2026", title: "Choosing an Online Tool for the Task", desc: "Compare tool workflows, data handling, and limitations before choosing." },
  { href: "/blog/how-online-calculators-save-time", title: "How Online Calculators Save Time", desc: "Learn how simple calculators can make everyday tasks easier." },
  { href: "/blog/best-free-image-tools", title: "Choosing the Right Image Tool", desc: "When to resize, compress, choose a color, or create a QR code." },
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

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <nav className="navbar" aria-label="Main navigation">
        <Link href="/" className="navbar-logo" aria-label="SmartEdgeTools home">
          <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
            <defs>
              <linearGradient id="brand-mark-gradient" x1="5" y1="35" x2="35" y2="5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c43b00" />
                <stop offset="1" stopColor="#ff783f" />
              </linearGradient>
            </defs>
            <rect x="1" y="1" width="38" height="38" rx="12" fill="#171615" />
            <path d="M11 12.5 20 7l9 5.5v10L20 28l-9-5.5v-10Z" fill="url(#brand-mark-gradient)" />
            <path d="m17 19 3-8 3 8h-2l-1 4-1-4h-2Z" fill="#fff" />
            <path d="m20 28 9-5.5v5L20 33l-9-5.5v-5L20 28Z" fill="#2878e8" />
          </svg>
          <span className="navbar-wordmark"><span>Smart</span>EdgeTools</span>
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
        <div className="stat-item"><div className="stat-num">21+</div><div className="stat-label">Useful tools</div></div>
        <div className="stat-item"><div className="stat-num">Free</div><div className="stat-label">To use</div></div>
        <div className="stat-item"><div className="stat-num">No app</div><div className="stat-label">Browser access</div></div>
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
          <Link href="/age-calculator" className="tool-card"><div className="tool-icon-wrap">🎂</div><h3>Calculators</h3><p>Age, percentage, final grade, loan, BMI, and everyday calculations.</p></Link>
          <Link href="/currency-converter" className="tool-card"><div className="tool-icon-wrap">💱</div><h3>Converters</h3><p>Convert currencies, units, and common measurements.</p></Link>
          <Link href="/image/resize" className="tool-card"><div className="tool-icon-wrap">🖼️</div><h3>Image & PDF Tools</h3><p>Resize, compress, and combine files in your browser.</p></Link>
          <Link href="/word-counter" className="tool-card"><div className="tool-icon-wrap">✍️</div><h3>Text & Productivity</h3><p>Count words, improve text, test typing, and more.</p></Link>
          <Link href="/json-formatter" className="tool-card"><div className="tool-icon-wrap">{ }</div><h3>Developer tools</h3><p>Format and validate JSON data directly in your browser.</p></Link>
        </div>
      </section>

      <section className="section" aria-labelledby="all-tools-heading">
        <div className="section-header">
          <h2 id="all-tools-heading" className="section-title">Explore all tools</h2>
          <span className="section-tag">{filtered.length} available</span>
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

      <section className="section" style={{ maxWidth: "980px" }} aria-labelledby="tool-examples-heading">
        <h2 id="tool-examples-heading" className="section-title">Examples you can check</h2>
        <p style={{ color: "var(--ink2)", marginTop: "0.45rem", lineHeight: 1.7 }}>
          A useful result should be explainable. These examples show the kind of calculation or file operation each tool performs.
        </p>
        <div className="tools-grid" style={{ marginTop: "1rem" }}>
          <Link href="/percentage-calculator" className="tool-card"><h3>Percentage example</h3><p>20% of 500 is 100. The calculator also handles percentage change, adding a percentage, and subtracting a percentage.</p></Link>
          <Link href="/bmi-calculator" className="tool-card"><h3>BMI example</h3><p>At 70 kg and 175 cm, BMI is 22.9. BMI is a screening measure, not a diagnosis.</p></Link>
          <Link href="/image/resize" className="tool-card"><h3>Image output</h3><p>The resizer exports a JPEG from a browser canvas. Keep the original if you need transparency or another format.</p></Link>
          <Link href="/pdf/merge" className="tool-card"><h3>PDF handling</h3><p>The merge tool copies pages from selected PDFs in the browser and creates a new file in the order you selected them.</p></Link>
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
