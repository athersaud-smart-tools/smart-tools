"use client";

import { useState } from "react";
import Link from "next/link";
import ToolGuide from "@/app/components/ToolGuide";

export default function RandomNumberGenerator() {
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [count, setCount] = useState("1");
  const [unique, setUnique] = useState(false);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const generate = () => {
    const minN = Number(min);
    const maxN = Number(max);
    const countN = Number(count);
    setError("");
    if (!Number.isSafeInteger(minN) || !Number.isSafeInteger(maxN) || minN > maxN) {
      setError("Enter whole numbers within the safe integer range, with the minimum no greater than the maximum.");
      return;
    }
    if (!Number.isInteger(countN) || countN < 1 || countN > 100) {
      setError("Choose a quantity from 1 to 100.");
      return;
    }
    const range = BigInt(maxN) - BigInt(minN) + 1n;
    if (unique && BigInt(countN) > range) {
      setError("The range does not contain enough distinct numbers for that quantity.");
      return;
    }

    const randomBelow = (limit: bigint) => {
      const bitLength = limit.toString(2).length;
      const byteLength = Math.ceil(bitLength / 8);
      const excessBits = byteLength * 8 - bitLength;
      const bytes = new Uint8Array(byteLength);
      let value: bigint;
      do {
        window.crypto.getRandomValues(bytes);
        if (excessBits) bytes[0] &= 0xff >> excessBits;
        value = 0n;
        for (const byte of bytes) value = (value << 8n) | BigInt(byte);
      } while (value >= limit);
      return value;
    };

    const result: number[] = [];
    if (unique) {
      const chosen = new Set<bigint>();
      for (let j = range - BigInt(countN); j < range; j++) {
        const candidate = randomBelow(j + 1n);
        chosen.add(chosen.has(candidate) ? j : candidate);
      }
      result.push(...Array.from(chosen, (offset) => Number(BigInt(minN) + offset)));
    } else {
      for (let i = 0; i < countN; i++) {
        result.push(Number(BigInt(minN) + randomBelow(range)));
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
            Generate numbers for games, classroom activities, and everyday decisions.
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

          {error && <p role="alert" style={{ color: "#a93200", marginBottom: "1rem" }}>{error}</p>}
          <button className="btn btn-primary" onClick={generate}>
            🎲 Generate Numbers
          </button>

          {numbers.length > 0 && (
            <div style={{ marginTop: "1.5rem" }}>
              {numbers.length === 1 ? (
                <div style={{ textAlign: "center", padding: "2rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
                  <div style={{ fontSize: "5rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--accent)" }}>{numbers[0]}</div>
                </div>
              ) : (
                <div>
                  <label className="field-label">Generated Numbers ({numbers.length})</label>
                  <div className="result-box" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {numbers.map((n, i) => (
                      <span key={i} style={{ background: "var(--accent)", color: "#fff", borderRadius: 6, padding: "4px 10px", fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.9rem" }}>{n}</span>
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
      <ToolGuide guide="random" />

    </main>
  );
}
