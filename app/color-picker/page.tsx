"use client";

import { useState } from "react";
import Link from "next/link";

export default function ColorPicker() {
  const [color, setColor] = useState("#e85d2f");
  const [copied, setCopied] = useState("");

  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const hexToHsl = (hex: string) => {
    let { r, g, b } = hexToRgb(hex);
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
  };

  const { r, g, b } = hexToRgb(color);
  const { h, s, l } = hexToHsl(color);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const colorFormats = [
    { label: "HEX", value: color.toUpperCase() },
    { label: "RGB", value: `rgb(${r}, ${g}, ${b})` },
    { label: "HSL", value: `hsl(${h}, ${s}%, ${l}%)` },
  ];

  const shades = [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8].map((factor) => {
    const nr = Math.min(255, Math.round(r * factor));
    const ng = Math.min(255, Math.round(g * factor));
    const nb = Math.min(255, Math.round(b * factor));
    return `rgb(${nr}, ${ng}, ${nb})`;
  });

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container">
          <h1>🎨 Color Picker</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Pick any color and get its HEX, RGB and HSL values instantly!
          </p>

          {/* Big color preview */}
          <div style={{ width: "100%", height: 140, borderRadius: 12, background: color, marginBottom: "1rem", border: "1.5px solid var(--border)", transition: "background 0.1s" }} />

          {/* Color input */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{ width: 60, height: 48, border: "none", borderRadius: 8, cursor: "pointer", background: "none" }}
            />
            <div style={{ flex: 1 }}>
              <label className="field-label">Enter HEX Code</label>
              <input
                type="text"
                className="input-field"
                value={color.toUpperCase()}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) setColor(val);
                }}
                style={{ fontFamily: "monospace" }}
              />
            </div>
          </div>

          {/* Color formats */}
          <label className="field-label">Color Formats</label>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {colorFormats.map((fmt) => (
              <div key={fmt.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--bg)", borderRadius: 10, padding: "0.75rem 1rem", border: "1.5px solid var(--border)" }}>
                <span style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "0.75rem", color: "var(--ink2)", textTransform: "uppercase", minWidth: 36 }}>{fmt.label}</span>
                <span style={{ flex: 1, fontFamily: "monospace", fontSize: "0.9rem" }}>{fmt.value}</span>
                <button
                  onClick={() => copy(fmt.value, fmt.label)}
                  style={{ background: copied === fmt.label ? "var(--green)" : "var(--accent)", color: "#fff", border: "none", borderRadius: 6, padding: "4px 10px", fontSize: "0.75rem", cursor: "pointer", fontFamily: "Syne", fontWeight: 700 }}
                >
                  {copied === fmt.label ? "✅" : "Copy"}
                </button>
              </div>
            ))}
          </div>

          {/* Shades */}
          <label className="field-label">Color Shades</label>
          <div style={{ display: "flex", gap: 6, borderRadius: 10, overflow: "hidden" }}>
            {shades.map((shade, i) => (
              <div
                key={i}
                onClick={() => copy(shade, shade)}
                style={{ flex: 1, height: 48, background: shade, cursor: "pointer", transition: "transform 0.1s" }}
                title={shade}
              />
            ))}
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--ink2)", marginTop: "0.4rem" }}>Click any shade to copy it</p>
        </div>
      </div>

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the Color Picker Tool?</h2>
        <p>
          The color picker tool lets you choose, preview, and copy colors in formats like
          HEX and RGB. It also shows related shades of your chosen color, which is handy for
          building color palettes for websites, designs, or art projects.
        </p>

        <h2>How to Use the Color Picker</h2>
        <ol>
          <li>Pick a color using the color selector</li>
          <li>View the color’s HEX and RGB codes instantly</li>
          <li>Browse related shades generated from your chosen color</li>
          <li>Click any shade to copy its code to your clipboard</li>
        </ol>

        <h2>Why Use an Online Color Picker</h2>
        <p>
          Designers, developers, and hobbyists often need exact color codes rather than just
          a visual match. An online color picker removes the guesswork by giving you precise,
          copy-ready codes you can paste directly into design software, CSS, or image editors.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Finding the exact HEX code for a website’s color scheme</li>
          <li>Building a matching color palette from a single starting color</li>
          <li>Matching colors for logos, graphics, or presentations</li>
          <li>Exploring shades and tints for design inspiration</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>What’s the difference between HEX and RGB?</h3>
        <p>
          HEX codes represent colors using a six-character combination of letters and
          numbers (like #FF4D00), while RGB represents the same color using red, green, and
          blue values. Both describe the same colors, just in different formats used by
          different tools.
        </p>

        <h3>Can I use these colors for both web and print design?</h3>
        <p>
          HEX and RGB codes are designed for digital use, such as websites and screens. For
          print design, colors are typically converted to CMYK by your design software.
        </p>
      </div>
    </main>
  );
}
