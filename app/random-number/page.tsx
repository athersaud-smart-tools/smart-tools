"use client";

import { useState } from "react";
import Link from "next/link";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [unique, setUnique] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const minN = parseInt(min);
    const maxN = parseInt(max);
    const countN = Math.min(parseInt(count), 100);
    if (isNaN(minN) || isNaN(maxN) || minN >= maxN) return;

    let result: number[] = [];
    if (unique) {
      const pool = Array.from({ length: maxN - minN + 1 }, (_, i) => i + minN);
      for (let i = 0; i < Math.min(countN, pool.length); i++) {
        const idx = Math.floor(Math.random() * pool.length);
        result.push(pool.splice(idx, 1)[0]);
      }
    } else {
      for (let i = 0; i < countN; i++) {
        result.push(Math.floor(Math.random() * (maxN - minN + 1)) + minN);
      }
    }
    setNumbers(result);
    setCopied(false);
  };

  const copy = () => {
    navigator.clipboard.writeText(numbers.join(", "));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>🎲 Random Number Generator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Generate random numbers instantly for games, lotteries, decisions and more!
          </p>

          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
            <div style={{ flex: 1 }}>
              <label className="field-label">Min Number</label>
              <input type="number" className="input-field" value={min} onChange={(e) => setMin(e.target.value)} />
            </div>
            <div style={{ flex: 1 }}>
              <label className="field-label">Max Number</label>
              <input type="number" className="input-field" value={max} onChange={(e) => setMax(e.target.value)} />
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label className="field-label">How Many Numbers? (max 100)</label>
            <input type="number" className="input-field" value={count} onChange={(e) => setCount(e.target.value)} min="1" max="100" />
          </div>

          <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.25rem", cursor: "pointer", fontSize: "0.9rem", color: "var(--ink)" }}>
            <input type="checkbox" checked={unique} onChange={() => setUnique(!unique)} style={{ accentColor: "var(--accent)" }} />
            No duplicate numbers (unique only)
          </label>

          <button className="btn btn-primary" onClick={generate}>
            🎲 Generate Numbers
          </button>

          {numbers.length > 0 && (
            <div style={{ marginTop: "1.5rem" }}>
              {numbers.length === 1 ? (
                <div style={{ textAlign: "center", padding: "2rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
                  <div style={{ fontSize: "5rem", fontWeight: 800, fontFamily: "Syne", color: "var(--accent)" }}>{numbers[0]}</div>
                </div>
              ) : (
                <div>
                  <label className="field-label">Generated Numbers ({numbers.length})</label>
                  <div className="result-box" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {numbers.map((n, i) => (
                      <span key={i} style={{ background: "var(--accent)", color: "#fff", borderRadius: 6, padding: "4px 10px", fontFamily: "Syne", fontWeight: 700, fontSize: "0.9rem" }}>{n}</span>
                    ))}
                  </div>
                </div>
              )}
              <button className="btn btn-success" onClick={copy}>
                {copied ? "✅ Copied!" : "📋 Copy All Numbers"}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
