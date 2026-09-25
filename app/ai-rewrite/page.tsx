"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRewrite = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setOutput("");
    try {
      const res = await fetch("/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await res.json();
      if (!res.ok) { alert("Error: " + data.error); return; }
      setOutput(data.result);
    } catch (err) {
      console.error("Frontend error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container">
          <h1>🤖 AI Text Improver</h1>

          <div style={{ marginBottom: "1rem" }}>
            <label className="field-label">Your Text</label>
            <textarea
              className="input-field"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type or paste your text here..."
              rows={5}
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={handleRewrite}
            disabled={loading || !inputText.trim()}
            style={{ opacity: loading || !inputText.trim() ? 0.6 : 1 }}
          >
            {loading ? "Improving..." : "✨ Improve Text"}
          </button>

          {loading && (
            <div style={{ textAlign: "center", marginTop: "1rem", display: "flex", gap: 6, justifyContent: "center" }}>
              <span className="loading-dot" />
              <span className="loading-dot" />
              <span className="loading-dot" />
            </div>
          )}

          {output && (
            <div style={{ marginTop: "1.5rem" }}>
              <label className="field-label">Improved Result</label>
              <div className="result-box">{output}</div>
              <button
                className="btn btn-success"
                onClick={() => navigator.clipboard.writeText(output)}
              >
                📋 Copy Result
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the AI Rewrite Tool?</h2>
        <p>
          The AI Rewrite tool takes a piece of text you already have and rewrites it so it
          reads differently while keeping the same meaning. It’s useful for improving
          clarity, changing tone, fixing awkward phrasing, or simply getting a fresh way to
          say the same thing.
        </p>

        <h2>How to Use the AI Rewrite Tool</h2>
        <ol>
          <li>Paste or type the text you want rewritten into the box</li>
          <li>Click the rewrite button</li>
          <li>Review the new version</li>
          <li>Copy the result to use wherever you need it</li>
        </ol>

        <h2>Why Use an AI Rewriter</h2>
        <p>
          Whether you’re a student polishing an essay, a professional refining an email, or
          a content creator looking to avoid repetitive phrasing, a rewriting tool saves time
          compared to manually reworking every sentence. It can help make writing sound
          clearer, more natural, or more professional in seconds.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Improving emails and messages before sending</li>
          <li>Rewording sentences that feel clunky or repetitive</li>
          <li>Getting a different phrasing for social media captions or descriptions</li>
          <li>Simplifying complex or wordy paragraphs</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>Will the rewritten text mean the same thing as my original?</h3>
        <p>
          Yes, the goal is to preserve your original meaning while changing the wording and
          structure. Always give it a quick read to make sure it matches what you intended.
        </p>

        <h3>Is there a limit to how much text I can rewrite at once?</h3>
        <p>
          The tool works best with shorter passages like paragraphs or short articles. For
          very long documents, try rewriting section by section for the best results.
        </p>
      </div>
    </main>
  );
}
