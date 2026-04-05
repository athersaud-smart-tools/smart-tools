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
    </main>
  );
}
