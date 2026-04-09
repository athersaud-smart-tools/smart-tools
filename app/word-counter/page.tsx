"use client";

import { useState } from "react";
import Link from "next/link";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;
  const readTime = Math.max(1, Math.ceil(words / 200));

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container" style={{ maxWidth: 640 }}>
          <h1>🔡 Word Counter</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Count words, characters, sentences and more instantly!
          </p>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1.25rem" }}>
            {[
              { label: "Words", value: words, color: "var(--accent)" },
              { label: "Characters", value: chars, color: "var(--accent2)" },
              { label: "No Spaces", value: charsNoSpaces, color: "var(--green)" },
              { label: "Sentences", value: sentences, color: "#8b5cf6" },
              { label: "Paragraphs", value: paragraphs, color: "#e8852f" },
              { label: "Read Time", value: `${readTime} min`, color: "var(--ink2)" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "var(--bg)", borderRadius: 10, padding: "0.875rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, fontFamily: "Syne", color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div>
            <label className="field-label">Type or Paste Your Text</label>
            <textarea
              className="input-field"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Start typing or paste your text here..."
              rows={10}
            />
          </div>

          {text && (
            <button
              className="btn btn-primary"
              onClick={() => setText("")}
              style={{ marginTop: "0.75rem", background: "var(--ink2)" }}
            >
              🗑️ Clear Text
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
