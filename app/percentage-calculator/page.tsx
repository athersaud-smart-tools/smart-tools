"use client";

import { useState } from "react";
import Link from "next/link";

export default function PercentageCalculator() {
  const [mode, setMode] = useState(0);
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const modes = [
    { label: "X% of Y", desc: "What is 20% of 500?" },
    { label: "X is what % of Y", desc: "15 is what % of 60?" },
    { label: "% increase/decrease", desc: "From 80 to 100 = ?%" },
    { label: "Add % to number", desc: "100 + 20% = ?" },
    { label: "Subtract % from number", desc: "100 - 20% = ?" },
  ];

  const calculate = () => {
    const x = parseFloat(a);
    const y = parseFloat(b);
    if (isNaN(x) || isNaN(y)) return;
    let res = 0;
    switch (mode) {
      case 0: res = (x / 100) * y; break;
      case 1: res = (x / y) * 100; break;
      case 2: res = ((y - x) / x) * 100; break;
      case 3: res = x + (x * y) / 100; break;
      case 4: res = x - (x * y) / 100; break;
    }
    setResult(parseFloat(res.toFixed(4)).toString());
  };

  const labels = [
    ["Percentage (%)", "Of Number"],
    ["Number (X)", "Total (Y)"],
    ["From", "To"],
    ["Number", "Percentage (%)"],
    ["Number", "Percentage (%)"],
  ];

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>% Percentage Calculator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Calculate percentages instantly — find percentage of a number, percentage increase, and more!
          </p>

          {/* Mode selector */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label className="field-label">What do you want to calculate?</label>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {modes.map((m, i) => (
                <button
                  key={i}
                  onClick={() => { setMode(i); setResult(null); setA(""); setB(""); }}
                  style={{ padding: "0.75rem 1rem", borderRadius: 8, border: "1.5px solid", textAlign: "left", borderColor: mode === i ? "var(--accent)" : "var(--border)", background: mode === i ? "rgba(232,93,47,0.06)" : "var(--bg)", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  <span style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "0.875rem", color: mode === i ? "var(--accent)" : "var(--ink)" }}>{m.label}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--ink2)" }}>{m.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ flex: 1 }}>
              <label className="field-label">{labels[mode][0]}</label>
              <input type="number" className="input-field" value={a} onChange={(e) => setA(e.target.value)} placeholder="0" />
            </div>
            <div style={{ flex: 1 }}>
              <label className="field-label">{labels[mode][1]}</label>
              <input type="number" className="input-field" value={b} onChange={(e) => setB(e.target.value)} placeholder="0" />
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculate} disabled={!a || !b}>
            Calculate
          </button>

          {result !== null && (
            <div style={{ marginTop: "1.5rem", textAlign: "center", padding: "1.5rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--ink2)", marginBottom: "0.5rem" }}>Result</div>
              <div style={{ fontSize: "3rem", fontWeight: 800, fontFamily: "Syne", color: "var(--accent)" }}>
                {result}{mode === 1 || mode === 2 ? "%" : ""}
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(result)}
                style={{ marginTop: "0.75rem", padding: "0.4rem 1rem", borderRadius: 6, border: "none", background: "var(--green)", color: "#fff", fontFamily: "Syne", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer" }}
              >
                📋 Copy
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the Percentage Calculator?</h2>
        <p>
          The percentage calculator helps you quickly work out percentages, such as finding
          what percent one number is of another, calculating a percentage increase or
          decrease, or figuring out a discount amount.
        </p>

        <h2>How to Use the Percentage Calculator</h2>
        <ol>
          <li>Choose the type of percentage calculation you need</li>
          <li>Enter the numbers involved</li>
          <li>Click calculate</li>
          <li>View the result instantly</li>
        </ol>

        <h2>Why Use a Percentage Calculator</h2>
        <p>
          Percentage math shows up constantly in everyday life — discounts while shopping,
          tips at restaurants, grades in school, or interest on savings. A percentage
          calculator removes the risk of manual math errors and gives you accurate results
          in seconds.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Calculating a discount or sale price while shopping</li>
          <li>Working out a tip amount at a restaurant</li>
          <li>Figuring out grade percentages from test scores</li>
          <li>Calculating percentage increase or decrease between two numbers</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>How do I calculate a percentage increase?</h3>
        <p>
          A percentage increase is found by subtracting the original number from the new
          number, dividing that by the original number, and multiplying by 100. The
          calculator does this automatically when you select that option.
        </p>

        <h3>Can I use this to calculate a discount price?</h3>
        <p>
          Yes, you can use it to figure out the discount amount as well as the final price
          after the discount is applied.
        </p>
      </div>
    </main>
  );
}
