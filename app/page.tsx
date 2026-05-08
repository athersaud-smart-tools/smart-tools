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
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="/" className="navbar-logo">Smart<span>Tools</span></a>
        <ul className="navbar-links">
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div className="hero-content">
          <h1>
            Free Online Tools for Everyday Tasks
          </h1>
          <p>
            Smart Tools offers free calculators, converters, generators,
            and productivity tools. No signup required. Fast and easy to use.
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

      {/* SEO CONTENT (VERY IMPORTANT FOR ADSENSE) */}
      <div className="section" style={{ maxWidth: "900px", margin: "auto" }}>
        <h2>Why Use Smart Tools?</h2>
        <p>
          Smart Tools is a collection of free online utilities designed to help
          users perform everyday tasks quickly and efficiently. Whether you need
          a calculator, converter, or generator, our tools are built to be fast,
          simple, and reliable.
        </p>

        <p>
          Our platform is perfect for students, developers, and professionals
          who need quick solutions without downloading software or creating
          accounts.
        </p>

        <h3>Popular Uses</h3>
        <ul>
          <li>Calculate percentages and loans</li>
          <li>Convert currencies and units</li>
          <li>Generate secure passwords</li>
          <li>Edit and process text instantly</li>
        </ul>
      </div>

      {/* TOOLS */}
      <div className="section">
        <h2>All Tools</h2>

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

        <div className="tools-grid">
          {filtered.map((tool) => (
            <Link key={tool.href} href={tool.href} className="tool-card">
              <div className="tool-icon-wrap">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* BLOG PREVIEW (VERY IMPORTANT) */}
      <div className="section" style={{ maxWidth: "900px", margin: "auto" }}>
        <h2>Latest Articles</h2>

        <ul>
          <li><a href="/blog">Best Free Online Tools in 2026</a></li>
          <li><a href="/blog">How to Use Online Calculators Efficiently</a></li>
          <li><a href="/blog">Top Productivity Tools for everyone</a></li>
        </ul>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms">Terms</a>
        </div>
        © 2026 SmartTools — Free tools for everyone

{/* ABOUT SECTION */}
<section
  style={{
    maxWidth: "1000px",
    margin: "60px auto",
    padding: "20px",
    lineHeight: "1.8",
  }}
>
  <h2>About Smart Tools</h2>

  <p>
    Smart Tools is a free online platform that provides useful browser-based
    utilities for students, professionals, creators, and everyday users.
  </p>

  <p>
    Our goal is to make online tools simple, fast, and accessible without
    requiring downloads or account registration.
  </p>

  <p>
    Users can access calculators, generators, image tools, PDF tools, and
    productivity resources instantly from any device.
  </p>

  <h2>Why Use Smart Tools?</h2>

  <ul>
    <li>Free online tools</li>
    <li>No sign-up required</li>
    <li>Fast and responsive design</li>
    <li>Works on desktop and mobile devices</li>
    <li>Easy-to-use interface</li>
  </ul>

  <h2>Frequently Asked Questions</h2>

  <h3>Are Smart Tools free?</h3>

  <p>
    Yes. All tools on Smart Tools are free to use.
  </p>

  <h3>Do I need to create an account?</h3>

  <p>
    No. Most tools work instantly without registration.
  </p>

  <h3>Can I use Smart Tools on mobile devices?</h3>

  <p>
    Yes. Smart Tools is designed to work on smartphones, tablets, and desktop
    computers.
  </p>
</section>

      </footer>

    </main>
  );
}