"use client";

import { useState } from "react";
import Link from "next/link";

export default function BMICalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h) return;

    let result: number;
    if (unit === "metric") {
      const hm = h / 100;
      result = w / (hm * hm);
    } else {
      result = (703 * w) / (h * h);
    }
    setBmi(parseFloat(result.toFixed(1)));
  };

  const getCategory = () => {
    if (!bmi) return null;
    if (bmi < 18.5) return { label: "Underweight", color: "#2f6ee8" };
    if (bmi < 25) return { label: "Normal weight", color: "var(--green)" };
    if (bmi < 30) return { label: "Overweight", color: "#e8a52f" };
    return { label: "Obese", color: "var(--accent)" };
  };

  const category = getCategory();
  const bmiPercent = bmi ? Math.min(100, ((bmi - 10) / 30) * 100) : 0;

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>⚖️ BMI Calculator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Calculate your Body Mass Index instantly and find out your health category!
          </p>

          {/* Unit toggle */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
            {(["metric", "imperial"] as const).map((u) => (
              <button
                key={u}
                onClick={() => { setUnit(u); setBmi(null); setWeight(""); setHeight(""); }}
                style={{ flex: 1, padding: "0.6rem", borderRadius: 8, border: "1.5px solid", borderColor: unit === u ? "var(--accent)" : "var(--border)", background: unit === u ? "var(--accent)" : "var(--bg)", color: unit === u ? "#fff" : "var(--ink)", fontFamily: "Syne", fontWeight: 700, fontSize: "0.875rem", cursor: "pointer" }}
              >
                {u === "metric" ? "Metric (kg/cm)" : "Imperial (lb/in)"}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ flex: 1 }}>
              <label className="field-label">Weight ({unit === "metric" ? "kg" : "lbs"})</label>
              <input type="number" className="input-field" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={unit === "metric" ? "70" : "154"} />
            </div>
            <div style={{ flex: 1 }}>
              <label className="field-label">Height ({unit === "metric" ? "cm" : "inches"})</label>
              <input type="number" className="input-field" value={height} onChange={(e) => setHeight(e.target.value)} placeholder={unit === "metric" ? "175" : "69"} />
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculate} disabled={!weight || !height}>
            ⚖️ Calculate BMI
          </button>

          {bmi && category && (
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ textAlign: "center", padding: "1.5rem", background: "var(--bg)", borderRadius: 12, border: `1.5px solid ${category.color}`, marginBottom: "1rem" }}>
                <div style={{ fontSize: "3rem", fontWeight: 800, fontFamily: "Syne", color: category.color }}>{bmi}</div>
                <div style={{ fontSize: "1.1rem", fontWeight: 700, fontFamily: "Syne", color: category.color }}>{category.label}</div>
              </div>

              {/* BMI scale */}
              <label className="field-label">BMI Scale</label>
              <div style={{ height: 12, borderRadius: 6, background: "linear-gradient(to right, #2f6ee8, #1a8c5b, #e8a52f, #e85d2f)", marginBottom: "0.4rem", position: "relative" }}>
                <div style={{ position: "absolute", top: -4, left: `${bmiPercent}%`, width: 20, height: 20, borderRadius: "50%", background: "#fff", border: `3px solid ${category.color}`, transform: "translateX(-50%)" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--ink2)" }}>
                <span>Underweight</span><span>Normal</span><span>Overweight</span><span>Obese</span>
              </div>

              <div style={{ marginTop: "1rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                {[
                  { label: "Underweight", range: "< 18.5", color: "#2f6ee8" },
                  { label: "Normal", range: "18.5 - 24.9", color: "var(--green)" },
                  { label: "Overweight", range: "25 - 29.9", color: "#e8a52f" },
                  { label: "Obese", range: "≥ 30", color: "var(--accent)" },
                ].map((item) => (
                  <div key={item.label} style={{ background: "var(--bg)", borderRadius: 8, padding: "0.6rem 0.75rem", border: "1.5px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: item.color }}>{item.label}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--ink2)" }}>{item.range}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
