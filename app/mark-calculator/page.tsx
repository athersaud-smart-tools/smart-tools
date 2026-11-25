"use client";

import { useState } from "react";
import Link from "next/link";
import ToolGuide from "@/app/components/ToolGuide";

function gradeFor(percentage: number): { letter: string; label: string } {
  if (percentage >= 90) return { letter: "A+", label: "Outstanding" };
  if (percentage >= 80) return { letter: "A", label: "Excellent" };
  if (percentage >= 70) return { letter: "B", label: "Very good" };
  if (percentage >= 60) return { letter: "C", label: "Good" };
  if (percentage >= 50) return { letter: "D", label: "Pass" };
  return { letter: "F", label: "Fail" };
}

export default function MarkCalculator() {
  const [obtained, setObtained] = useState("");
  const [total, setTotal] = useState("");
  const [error, setError] = useState("");

  const obtainedN = parseFloat(obtained);
  const totalN = parseFloat(total);
  const valid =
    Number.isFinite(obtainedN) && obtainedN >= 0 &&
    Number.isFinite(totalN) && totalN > 0 &&
    obtainedN <= totalN;

  const percentage = valid ? (obtainedN / totalN) * 100 : 0;
  const grade = gradeFor(percentage);
  const lost = valid ? totalN - obtainedN : 0;

  const calculate = () => {
    if (!Number.isFinite(obtainedN) || obtainedN < 0 || !Number.isFinite(totalN) || totalN <= 0) {
      setError("Enter the marks you scored and a total above zero.");
      return;
    }
    if (obtainedN > totalN) {
      setError("The marks you scored cannot be more than the total marks. Check both numbers and try again.");
      return;
    }
    setError("");
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>✅ Mark Calculator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Turn exam marks into a percentage and a grade. Enter the marks you scored and the total marks — for one paper or a whole board exam.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <label className="field-label">Marks Obtained</label>
              <input type="number" min="0" step="0.5" className="input-field" value={obtained} onChange={(e) => setObtained(e.target.value)} placeholder="432" />
            </div>
            <div>
              <label className="field-label">Total Marks</label>
              <input type="number" min="0.01" step="0.5" className="input-field" value={total} onChange={(e) => setTotal(e.target.value)} placeholder="500" />
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculate} disabled={!obtained || !total}>
            ✅ Calculate My Percentage
          </button>

          {error && <p role="alert" style={{ marginTop: "1rem", color: "var(--accent)" }}>{error}</p>}

          {valid && !error && (
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ textAlign: "center", padding: "1.25rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--ink2)", fontFamily: "var(--font-syne)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.4rem" }}>
                  Your Percentage
                </div>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--accent)" }}>
                  {percentage.toFixed(2)}%
                </div>
                <div style={{ marginTop: "0.4rem", fontWeight: 700 }}>
                  Grade {grade.letter} — {grade.label}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--green)" }}>{obtainedN} / {totalN}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Marks Scored</div>
                </div>
                <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "#e8852f" }}>{lost}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Marks Lost</div>
                </div>
              </div>
              <p style={{ textAlign: "center", color: "var(--ink2)", fontSize: "0.9rem", margin: 0 }}>
                {obtainedN} out of {totalN} is {percentage.toFixed(2)}%. Grade boundaries vary by school and board — check yours before treating the grade as official.
              </p>
            </div>
          )}
        </div>
      </div>
      <ToolGuide guide="mark" />
    </main>
  );
}
