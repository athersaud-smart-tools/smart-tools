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

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the Word Counter?</h2>
        <p>
          The word counter instantly counts the number of words, characters, and often
          sentences or paragraphs in any text you type or paste in. It’s a simple way to
          check if your writing meets a required length.
        </p>

        <h2>How to Use the Word Counter</h2>
        <ol>
          <li>Type or paste your text into the box</li>
          <li>The word and character counts update automatically as you type</li>
          <li>Check your totals against any length requirement</li>
          <li>Clear the text to start a new count</li>
        </ol>

        <h2>Why Use a Word Counter</h2>
        <p>
          Many assignments, articles, and applications have strict word or character limits.
          Manually counting words is slow and error-prone, especially in longer pieces of
          writing. A word counter gives you an instant, accurate count so you can edit your
          text to fit the requirement.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Checking essay or assignment word count requirements</li>
          <li>Staying within character limits for social media posts</li>
          <li>Tracking word counts while writing articles or blog posts</li>
          <li>Meeting character limits for meta descriptions or headlines</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>Does the word counter count numbers and symbols?</h3>
        <p>
          Numbers are typically counted as words when separated by spaces, while the
          character count includes all characters, including numbers, punctuation, and
          spaces.
        </p>

        <h3>Can I count words in a very long document?</h3>
        <p>
          Yes, you can paste in long passages or entire documents and the tool will count the
          total words and characters instantly.
        </p>
      </div>
    </main>
  );
}
