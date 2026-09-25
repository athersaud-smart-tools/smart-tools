"use client";

import { useState } from "react";
import Link from "next/link";

export default function TextCaseConverter() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState("");

  const convert = (type: string) => {
    switch (type) {
      case "upper": return text.toUpperCase();
      case "lower": return text.toLowerCase();
      case "title": return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
      case "sentence": return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      case "camel": return text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase());
      case "snake": return text.toLowerCase().replace(/\s+/g, "_");
      case "kebab": return text.toLowerCase().replace(/\s+/g, "-");
      case "reverse": return text.split("").reverse().join("");
      default: return text;
    }
  };

  const copy = (result: string, label: string) => {
    navigator.clipboard.writeText(result);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const conversions = [
    { label: "UPPERCASE", type: "upper", example: "HELLO WORLD" },
    { label: "lowercase", type: "lower", example: "hello world" },
    { label: "Title Case", type: "title", example: "Hello World" },
    { label: "Sentence case", type: "sentence", example: "Hello world" },
    { label: "camelCase", type: "camel", example: "helloWorld" },
    { label: "snake_case", type: "snake", example: "hello_world" },
    { label: "kebab-case", type: "kebab", example: "hello-world" },
    { label: "esreveR", type: "reverse", example: "dlroW olleH" },
  ];

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container" style={{ maxWidth: 640 }}>
          <h1>📝 Text Case Converter</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Convert your text to any case format instantly!
          </p>

          <div style={{ marginBottom: "1.5rem" }}>
            <label className="field-label">Your Text</label>
            <textarea
              className="input-field"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your text here..."
              rows={4}
            />
          </div>

          <label className="field-label">Click any format to copy</label>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {conversions.map((conv) => {
              const result = text ? convert(conv.type) : conv.example;
              const isExample = !text;
              return (
                <div
                  key={conv.type}
                  style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--bg)", borderRadius: 10, padding: "0.75rem 1rem", border: "1.5px solid var(--border)", cursor: text ? "pointer" : "default" }}
                  onClick={() => text && copy(result, conv.label)}
                >
                  <span style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "0.75rem", color: "var(--ink2)", textTransform: "uppercase", minWidth: 100 }}>{conv.label}</span>
                  <span style={{ flex: 1, fontFamily: "monospace", fontSize: "0.875rem", color: isExample ? "var(--ink2)" : "var(--ink)", fontStyle: isExample ? "italic" : "normal" }}>{result}</span>
                  {text && (
                    <span style={{ background: copied === conv.label ? "var(--green)" : "var(--accent)", color: "#fff", borderRadius: 6, padding: "4px 10px", fontSize: "0.75rem", fontFamily: "Syne", fontWeight: 700, whiteSpace: "nowrap" }}>
                      {copied === conv.label ? "✅ Copied" : "Copy"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the Text Case Converter?</h2>
        <p>
          The text case converter instantly changes the capitalization of any text you enter,
          switching it between formats like UPPERCASE, lowercase, Title Case, and Sentence
          case.
        </p>

        <h2>How to Use the Text Case Converter</h2>
        <ol>
          <li>Type or paste your text into the box</li>
          <li>Select the case format you want</li>
          <li>The text updates instantly</li>
          <li>Copy the converted text to use wherever needed</li>
        </ol>

        <h2>Why Use a Text Case Converter</h2>
        <p>
          Manually retyping text to fix its capitalization is tedious and easy to get wrong,
          especially with longer passages. A text case converter changes the entire format
          instantly, saving time when preparing titles, headlines, or formatted documents.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Formatting titles and headlines into Title Case</li>
          <li>Converting text to Sentence case for readability</li>
          <li>Fixing text that was accidentally typed in all caps</li>
          <li>Preparing consistent formatting for documents or code</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>What’s the difference between Title Case and Sentence case?</h3>
        <p>
          Title Case capitalizes the first letter of most words, commonly used for headlines,
          while Sentence case only capitalizes the first letter of the sentence, similar to
          normal writing.
        </p>

        <h3>Can I convert very long blocks of text?</h3>
        <p>
          Yes, you can paste in paragraphs or entire documents and the tool will convert the
          case of all the text at once.
        </p>
      </div>
    </main>
  );
}
