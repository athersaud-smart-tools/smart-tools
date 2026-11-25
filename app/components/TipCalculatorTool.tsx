"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const PRESETS = [10, 15, 18, 20, 25];

/** The Tip Calculator form and results, shared by the standalone tool page
 *  (/tip-calculator) and the tip guide article (/blog/how-to-calculate-tip).
 *  `heading` picks the heading level so the article keeps a single H1. */
export default function TipCalculatorTool({ heading = "h2", intro }: { heading?: "h1" | "h2"; intro?: ReactNode }) {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState("18");
  const [people, setPeople] = useState("1");
  const [error, setError] = useState("");

  const billN = parseFloat(bill);
  const tipN = parseFloat(tipPercent);
  const peopleN = Math.round(parseFloat(people));
  const valid =
    Number.isFinite(billN) && billN > 0 &&
    Number.isFinite(tipN) && tipN >= 0 && tipN <= 100 &&
    Number.isFinite(peopleN) && peopleN >= 1;

  const tipAmount = valid ? (billN * tipN) / 100 : 0;
  const total = valid ? billN + tipAmount : 0;

  const calculate = () => {
    if (!valid) {
      setError("Enter a bill above zero, a tip percentage between 0 and 100, and at least one person.");
      return;
    }
    setError("");
  };

  const money = (v: number) => `$${v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const Heading = heading;

  return (
    <>
      <Heading style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem", color: "var(--ink)", letterSpacing: "-0.02em" }}>🧾 Tip Calculator</Heading>
      {intro}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.25rem" }}>
        <div>
          <label className="field-label">Bill Amount ($)</label>
          <input type="number" min="0.01" step="0.01" className="input-field" value={bill} onChange={(e) => setBill(e.target.value)} placeholder="86.40" />
        </div>
        <div>
          <label className="field-label">Tip Percentage (%)</label>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
            {PRESETS.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setTipPercent(String(p))}
                className="btn"
                style={{
                  padding: "0.4rem 0.9rem",
                  borderRadius: 999,
                  border: "1.5px solid var(--border)",
                  background: tipPercent === String(p) ? "var(--accent)" : "var(--bg)",
                  color: tipPercent === String(p) ? "#fff" : "inherit",
                  fontWeight: 700,
                }}
              >
                {p}%
              </button>
            ))}
          </div>
          <input type="number" min="0" max="100" step="0.5" className="input-field" value={tipPercent} onChange={(e) => setTipPercent(e.target.value)} placeholder="18" />
        </div>
        <div>
          <label className="field-label">Split Between (people)</label>
          <input type="number" min="1" step="1" className="input-field" value={people} onChange={(e) => setPeople(e.target.value)} placeholder="1" />
        </div>
      </div>

      <button className="btn btn-primary" onClick={calculate} disabled={!bill || tipPercent === "" || !people}>
        🧾 Calculate Tip
      </button>

      {error && <p role="alert" style={{ marginTop: "1rem", color: "var(--accent)" }}>{error}</p>}

      {valid && !error && (
        <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div style={{ textAlign: "center", padding: "1.25rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
            <div style={{ fontSize: "0.8rem", color: "var(--ink2)", fontFamily: "var(--font-syne)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.4rem" }}>
              {peopleN > 1 ? "Each Person Pays" : "Total With Tip"}
            </div>
            <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--accent)" }}>
              {money(total / peopleN)}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--green)" }}>{money(tipAmount)}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Tip Amount</div>
            </div>
            <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "#e8852f" }}>{money(total)}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Total Bill</div>
            </div>
          </div>
          {peopleN > 1 && (
            <p style={{ textAlign: "center", color: "var(--ink2)", fontSize: "0.9rem", margin: 0 }}>
              That is {money(tipAmount / peopleN)} of tip per person, on a {money(billN / peopleN)} share of the bill each.
            </p>
          )}
        </div>
      )}
    </>
  );
}
