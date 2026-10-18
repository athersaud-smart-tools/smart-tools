"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Row = { score: string; weight: string };
const inputStyle = { display: "grid", gap: "0.35rem" };

export default function FinalGradeCalculator() {
  const [mode, setMode] = useState<"weighted" | "needed">("weighted");
  const [rows, setRows] = useState<Row[]>([{ score: "", weight: "" }, { score: "", weight: "" }]);
  const [current, setCurrent] = useState("");
  const [remainingWeight, setRemainingWeight] = useState("");
  const [target, setTarget] = useState("");

  const weighted = useMemo(() => {
    const entered = rows.filter((row) => row.score.trim() !== "" || row.weight.trim() !== "");
    if (entered.length === 0 || entered.some((row) => row.score.trim() === "" || row.weight.trim() === "")) return { error: "Enter both a score and weight for at least one category." };
    const values = entered.map((row) => ({ score: Number(row.score), weight: Number(row.weight) }));
    if (values.some(({ score, weight }) => !Number.isFinite(score) || score < 0 || score > 100 || !Number.isFinite(weight) || weight <= 0)) return { error: "Scores must be from 0 to 100, and each entered category needs a weight greater than zero." };
    const totalWeight = values.reduce((sum, row) => sum + row.weight, 0);
    if (totalWeight <= 0) return { error: "The total weight must be greater than zero." };
    const grade = values.reduce((sum, row) => sum + row.score * row.weight, 0) / totalWeight;
    return { grade, totalWeight };
  }, [rows]);

  const needed = useMemo(() => {
    if (current.trim() === "" || remainingWeight.trim() === "" || target.trim() === "") return null;
    const c = Number(current), w = Number(remainingWeight) / 100, t = Number(target);
    if (![c, w, t].every(Number.isFinite) || c < 0 || c > 100 || t < 0 || t > 100 || w <= 0 || w > 1) return { error: "Enter grades from 0 to 100 and a remaining exam weight greater than 0 and no more than 100%." };
    return { score: (t - c * (1 - w)) / w };
  }, [current, remainingWeight, target]);

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container" style={{ maxWidth: "none" }}>
          <h1>Final Grade Calculator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.25rem", lineHeight: 1.7 }}>Calculate a weighted course grade, or find the score you need on a remaining exam to reach your target. Your entries are calculated in this browser.</p>
          <div className="category-pills" aria-label="Calculator mode">
            <button type="button" className={`pill ${mode === "weighted" ? "active" : ""}`} aria-pressed={mode === "weighted"} onClick={() => setMode("weighted")}>Weighted grade</button>
            <button type="button" className={`pill ${mode === "needed" ? "active" : ""}`} aria-pressed={mode === "needed"} onClick={() => setMode("needed")}>Score needed on final</button>
          </div>
          {mode === "weighted" ? <>
            <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Scores and category weights</h2>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {rows.map((row, index) => <div key={index} style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", alignItems: "end", gap: "0.65rem" }}>
                <label style={inputStyle}><span className="field-label">Category {index + 1} score (%)</span><input aria-label={`Category ${index + 1} score`} className="input-field" type="number" min="0" max="100" step="any" placeholder="e.g. 88" value={row.score} onChange={(event) => setRows(rows.map((item, i) => i === index ? { ...item, score: event.target.value } : item))} /></label>
                <label style={inputStyle}><span className="field-label">Weight (%)</span><input aria-label={`Category ${index + 1} weight`} className="input-field" type="number" min="0.01" step="any" placeholder="e.g. 25" value={row.weight} onChange={(event) => setRows(rows.map((item, i) => i === index ? { ...item, weight: event.target.value } : item))} /></label>
                <button type="button" aria-label={`Remove category ${index + 1}`} disabled={rows.length <= 1} onClick={() => setRows(rows.filter((_, i) => i !== index))} style={{ padding: "0.65rem", border: "1px solid var(--border)", background: "white", borderRadius: 8, cursor: "pointer", color: "var(--ink2)" }}>Remove</button>
              </div>)}
            </div>
            <button type="button" className="btn" style={{ marginTop: "0.8rem", background: "var(--bg)", color: "var(--ink)" }} onClick={() => setRows([...rows, { score: "", weight: "" }])}>＋ Add category</button>
            <div aria-live="polite" className="result-box">{"error" in weighted ? <p role="alert">{weighted.error}</p> : <><strong style={{ fontSize: "1.5rem", color: "var(--accent)" }}>{weighted.grade.toFixed(2)}%</strong><p>Across {weighted.totalWeight.toFixed(2)}% of the course weight entered. If your entered weights do not add to 100%, the result is normalized across the categories you supplied.</p></>}</div>
          </> : <>
            <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Find your required exam score</h2>
            <div style={{ display: "grid", gap: "0.85rem" }}>
              <label style={inputStyle}><span className="field-label">Current grade before the exam (%)</span><input className="input-field" type="number" min="0" max="100" step="any" placeholder="e.g. 82" value={current} onChange={(event) => setCurrent(event.target.value)} /></label>
              <label style={inputStyle}><span className="field-label">Remaining exam weight (%)</span><input className="input-field" type="number" min="0.01" max="100" step="any" placeholder="e.g. 30" value={remainingWeight} onChange={(event) => setRemainingWeight(event.target.value)} /></label>
              <label style={inputStyle}><span className="field-label">Target overall grade (%)</span><input className="input-field" type="number" min="0" max="100" step="any" placeholder="e.g. 90" value={target} onChange={(event) => setTarget(event.target.value)} /></label>
            </div>
            <div aria-live="polite" className="result-box">{needed === null ? <p>Enter all three values to see the required score.</p> : "error" in needed ? <p role="alert">{needed.error}</p> : needed.score > 100 ? <p>You would need {needed.score.toFixed(2)}% on the remaining work, which is above 100%. That target is not reachable with these inputs.</p> : needed.score <= 0 ? <p>You have already met the target based on these inputs. The required score is {needed.score.toFixed(2)}% or less.</p> : <><strong style={{ fontSize: "1.5rem", color: "var(--accent)" }}>{needed.score.toFixed(2)}%</strong><p>That is the score needed on the remaining exam to reach your target.</p></>}</div>
          </>}
        </div>
      </div>
      <section className="mx-auto my-10 max-w-4xl space-y-5 px-6 leading-7 text-gray-700" aria-labelledby="grade-guide">
        <h2 id="grade-guide" className="text-2xl font-semibold text-gray-900">How to use the final grade calculator</h2>
        <p>Choose <strong>Weighted grade</strong> to combine scores from course categories, or choose <strong>Score needed on final</strong> to plan for an exam or other remaining coursework. Enter percentages as shown in your syllabus or gradebook.</p>
        <ol style={{ listStyle: "decimal", paddingLeft: "1.5rem" }}><li>Add each category score and its course weight, then add rows as needed.</li><li>For a target calculation, enter your current grade, the fraction of the course still remaining, and your desired overall grade.</li><li>Read the result and compare the assumptions with your instructor’s grading policy.</li></ol>
        <h3 className="text-lg font-semibold text-gray-900">Formulas and examples</h3>
        <p><strong>Weighted grade</strong> = Σ(score × weight) ÷ Σ(weight). For example, 88% on work weighted 40% and 92% on work weighted 60% gives (88 × 40 + 92 × 60) ÷ 100 = 90.4%.</p>
        <p><strong>Required remaining score</strong> = (target − current × (1 − remaining weight)) ÷ remaining weight. If your current grade is 82%, the final is worth 30%, and your target is 85%, you need (85 − 82 × 0.70) ÷ 0.30 = 92%.</p>
        <p>The calculator treats all scores and weights as percentages and assumes the current grade represents completed work only. It does not know your school’s rounding, dropped-score, extra-credit, or letter-grade rules. For the general percentage math, try the <Link href="/percentage-calculator" style={{ color: "var(--accent)" }}>percentage calculator</Link>; for study resources, see <Link href="/blog/top-tools-for-students" style={{ color: "var(--accent)" }}>our student tools guide</Link>.</p>
        <h3 className="text-lg font-semibold text-gray-900">Frequently asked questions</h3>
        <div><h4 className="font-semibold">How do I calculate my weighted grade?</h4><p>Multiply each category percentage by its weight, add those products, and divide by the total weight entered. The result uses the entered categories and does not assume missing categories have a zero.</p></div>
        <div><h4 className="font-semibold">What grade do I need on my final exam?</h4><p>Enter your current grade, the final’s percentage of the total course grade, and your target. The calculator solves for the exam percentage required to reach that target.</p></div>
        <div><h4 className="font-semibold">Why does the required score exceed 100%?</h4><p>With the current grade and exam weight, the target would require more than full marks on the remaining work. Ask your instructor whether additional coursework or a different grading rule applies.</p></div>
        <div><h4 className="font-semibold">Does the calculator determine my letter grade or GPA?</h4><p>No. Schools use different grading scales and policies. This tool reports percentage results only; check your syllabus for letter-grade boundaries and GPA conversions.</p></div>
        <div><h4 className="font-semibold">Are my grades uploaded?</h4><p>The calculations run in this page in your browser. Do not use a shared device if you do not want your entries left in its open page.</p></div>
      </section>
    </main>
  );
}
