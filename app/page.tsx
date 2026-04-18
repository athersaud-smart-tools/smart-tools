"use client";

import Link from "next/link";
import { useState } from "react";

const tools = [
  { href: "/ai-rewrite", icon: "🤖", title: "AI Text Improver", desc: "Rewrite text instantly using AI.", category: "AI" },
  { href: "/currency-converter", icon: "💱", title: "Currency Converter", desc: "Live exchange rates worldwide.", category: "Finance" },
  { href: "/bmi-calculator", icon: "⚖️", title: "BMI Calculator", desc: "Check your Body Mass Index.", category: "Health" },
  { href: "/age-calculator", icon: "🎂", title: "Age Calculator", desc: "Your exact age in every unit.", category: "Calculator" },
  { href: "/loan-calculator", icon: "🏦", title: "Loan Calculator", desc: "Monthly payments and interest.", category: "Finance" },
  { href: "/percentage-calculator", icon: "%", title: "Percentage Calculator", desc: "Calculate any percentage fast.", category: "Calculator" },
  { href: "/random-number", icon: "🎲", title: "Random Number", desc: "Generate random numbers.", category: "Calculator" },
  { href: "/image/resize", icon: "🖼️", title: "Image Resizer", desc: "Resize images to any size.", category: "Image" },
  { href: "/image/compress", icon: "⚡", title: "Image Compressor", desc: "Reduce image file size.", category: "Image" },
  { href: "/qr-code", icon: "📷", title: "QR Code Generator", desc: "Create QR codes instantly.", category: "Generator" },
  { href: "/password", icon: "🔐", title: "Password Generator", desc: "Strong secure passwords.", category: "Generator" },
  { href: "/word-counter", icon: "🔡", title: "Word Counter", desc: "Count words and characters.", category: "Text" },
  { href: "/color-picker", icon: "🎨", title: "Color Picker", desc: "Pick colors, get HEX & RGB.", category: "Design" },
  { href: "/text-case", icon: "📝", title: "Case Converter", desc: "UPPER, lower, Title case.", category: "Text" },
  { href: "/unit-converter", icon: "🔄", title: "Unit Converter", desc: "Length, weight, temperature.", category: "Calculator" },
  { href: "/stopwatch", icon: "⏱️", title: "Stopwatch", desc: "Stopwatch with lap timer.", category: "Tools" },
  { href: "/typing-test", icon: "⌨️", title: "Typing Speed Test", desc: "How fast do you type?", category: "Tools" },
  { href: "/pdf/merge", icon: "📄", title: "PDF Merge", desc: "Combine PDFs into one file.", category: "PDF" },
];

const categories = ["All", "AI", "Finance", "Health", "Calculator", "Image", "Generator", "Text", "Design", "PDF", "Tools"];

export default function Home() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = tools.filter((t) => {
    const matchCat = active === "All" || t.category === active;
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="/" className="navbar-logo">Smart<span>Tools</span></a>
        <ul className="navbar-links">
          <li><a href="/currency-converter">Currency</a></li>
          <li><a href="/bmi-calculator">BMI</a></li>
          <li><a href="/qr-code">QR Code</a></li>
          <li><a href="/pdf/merge">PDF</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="badge">18 Free Tools • No Sign Up Required</div>
          <h1>
            The Smartest Free<br />
            <span className="accent-text">Online Tools</span>
          </h1>
          <p>
            Currency converter, BMI calculator, AI writer, QR codes and more.<br />
            All free. All instant. No account needed.
          </p>
          {/* Search */}
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats-bar">
        {[
          { num: "18", label: "Free Tools" },
          { num: "0", label: "Sign Ups" },
          { num: "100%", label: "Free Forever" },
          { num: "⚡", label: "Instant Results" },
        ].map((s) => (
          <div key={s.label} className="stat-item">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* TOOLS */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">All Tools</h2>
          <span className="section-tag">{filtered.length} tools</span>
        </div>

        {/* Category pills */}
        <div className="category-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="tools-grid">
          {filtered.map((tool) => (
            <Link key={tool.href} href={tool.href} className="tool-card">
              <div className="tool-icon-wrap">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
              <span className="tool-card-arrow">↗</span>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem", color: "var(--ink2)" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔍</div>
            <p>No tools found. Try a different search!</p>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        © 2026 <span>SmartTools</span> — Free tools for everyone
      </footer>

    </main>
  );
}
