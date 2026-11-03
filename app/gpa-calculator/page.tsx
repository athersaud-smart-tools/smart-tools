"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import ToolExtras from "../components/ToolExtras";

type Row = { course: string; grade: string; credits: string };
const inputStyle = { display: "grid", gap: "0.35rem" };

export const gradePoints: Record<string, number> = {
  "A+": 4.0, A: 4.0, "A-": 3.7,
  "B+": 3.3, B: 3.0, "B-": 2.7,
  "C+": 2.3, C: 2.0, "C-": 1.7,
  "D+": 1.3, D: 1.0, "D-": 0.7,
  F: 0.0,
};

const gradeOptions = Object.keys(gradePoints);

export default function GpaCalculator() {
  const [rows, setRows] = useState<Row[]>([
    { course: "", grade: "A", credits: "3" },
    { course: "", grade: "B", credits: "3" },
    { course: "", grade: "", credits: "" },
  ]);

  const result = useMemo(() => {
    const entered = rows.filter((row) => row.grade !== "" || row.credits.trim() !== "");
    if (entered.length === 0) return { error: "Choose a grade and enter credit hours for at least one course." };
    if (entered.some((row) => row.grade === "" || row.credits.trim() === "")) return { error: "Every entered course needs both a grade and its credit hours." };
    const values = entered.map((row) => ({ points: gradePoints[row.grade], credits: Number(row.credits) }));
    if (values.some(({ credits }) => !Number.isFinite(credits) || credits <= 0 || credits > 30)) return { error: "Credit hours must be greater than zero and no more than 30 per course." };
    const totalCredits = values.reduce((sum, row) => sum + row.credits, 0);
    const qualityPoints = values.reduce((sum, row) => sum + row.points * row.credits, 0);
    return { gpa: qualityPoints / totalCredits, totalCredits, qualityPoints };
  }, [rows]);

  const update = (index: number, patch: Partial<Row>) => setRows(rows.map((row, i) => (i === index ? { ...row, ...patch } : row)));

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container" style={{ maxWidth: "none" }}>
          <h1>GPA Calculator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.25rem", lineHeight: 1.7 }}>Enter each course&apos;s letter grade and credit hours to calculate your grade point average on the standard 4.0 scale. Courses with more credit hours count more heavily. Your entries are calculated in this browser and are not uploaded.</p>
          <h2 style={{ fontSize: "1.05rem", marginBottom: "0.75rem" }}>Courses, grades, and credit hours</h2>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {rows.map((row, index) => (
              <div key={index} style={{ display: "grid", gridTemplateColumns: "1.4fr 0.8fr 0.8fr auto", alignItems: "end", gap: "0.65rem" }}>
                <label style={inputStyle}><span className="field-label">Course {index + 1} (optional)</span><input aria-label={`Course ${index + 1} name`} className="input-field" type="text" placeholder="e.g. English" value={row.course} onChange={(event) => update(index, { course: event.target.value })} /></label>
                <label style={inputStyle}><span className="field-label">Grade</span><select aria-label={`Course ${index + 1} grade`} className="input-field" value={row.grade} onChange={(event) => update(index, { grade: event.target.value })}><option value="">Select</option>{gradeOptions.map((grade) => <option key={grade} value={grade}>{grade} ({gradePoints[grade].toFixed(1)})</option>)}</select></label>
                <label style={inputStyle}><span className="field-label">Credits</span><input aria-label={`Course ${index + 1} credit hours`} className="input-field" type="number" min="0.5" max="30" step="any" placeholder="e.g. 3" value={row.credits} onChange={(event) => update(index, { credits: event.target.value })} /></label>
                <button type="button" aria-label={`Remove course ${index + 1}`} disabled={rows.length <= 1} onClick={() => setRows(rows.filter((_, i) => i !== index))} style={{ padding: "0.65rem", border: "1px solid var(--border)", background: "white", borderRadius: 8, cursor: "pointer", color: "var(--ink2)" }}>Remove</button>
              </div>
            ))}
          </div>
          <button type="button" className="btn" style={{ marginTop: "0.8rem", background: "var(--bg)", color: "var(--ink)" }} onClick={() => setRows([...rows, { course: "", grade: "", credits: "" }])}>＋ Add course</button>
          <div aria-live="polite" className="result-box">{"error" in result ? <p role="alert">{result.error}</p> : <><strong style={{ fontSize: "1.5rem", color: "var(--accent)" }}>{result.gpa.toFixed(2)} GPA</strong><p>From {result.qualityPoints.toFixed(1)} quality points across {result.totalCredits} credit hours entered. This is the GPA for the courses listed here; a cumulative GPA also includes earlier terms, weighted the same way.</p></>}</div>
        </div>
      </div>
      <section className="mx-auto my-10 max-w-4xl space-y-5 px-6 leading-7 text-gray-700" aria-labelledby="gpa-guide">
        <h2 id="gpa-guide" className="text-2xl font-semibold text-gray-900">How to use the GPA calculator</h2>
        <p>Add one row per course. Choose the letter grade you earned (or expect to earn) and enter the course&apos;s credit hours from your timetable or transcript. Add rows for every course in the term, because leaving a course out changes the result. The calculator converts each grade to grade points on the standard 4.0 scale, multiplies by credit hours, and divides the total by the total credit hours.</p>
        <h3 className="text-lg font-semibold text-gray-900">Formula and worked example</h3>
        <p><strong>GPA</strong> = Σ(grade points × credit hours) ÷ Σ(credit hours). On this scale A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, C- = 1.7, D+ = 1.3, D = 1.0, D- = 0.7, and F = 0.0. An A+ is counted as 4.0, the same as an A, because this scale caps at 4.0.</p>
        <p>Example: English A for 3 credits (4.0 × 3 = 12.0 quality points), Mathematics B+ for 4 credits (3.3 × 4 = 13.2), History A- for 3 credits (3.7 × 3 = 11.1), and Biology C for 3 credits (2.0 × 3 = 6.0). The totals are 42.3 quality points across 13 credit hours, so GPA = 42.3 ÷ 13 = 3.25.</p>
        <h3 className="text-lg font-semibold text-gray-900">What this calculator does not know</h3>
        <p>Schools differ. Some do not use plus and minus grades, some weight honours or AP courses above 4.0 in a separate weighted GPA, some replace the grade of a repeated course, and pass/fail courses are usually excluded from GPA entirely. This calculator uses the unweighted 4.0 scale above, counts every course you enter, and does not apply any school&apos;s repeat, honours, or rounding policy. Use your official transcript as the final record, and use this result for planning. If you need the grade inside one course rather than the average across courses, use the <Link href="/final-grade-calculator" style={{ color: "var(--accent)" }}>final grade calculator</Link>; the full method is explained in <Link href="/blog/calculate-gpa" style={{ color: "var(--accent)" }}>how to calculate your GPA</Link>.</p>
        <h3 className="text-lg font-semibold text-gray-900">Frequently asked questions</h3>
        <div><h4 className="font-semibold">How is GPA calculated?</h4><p>Convert each letter grade to grade points, multiply by that course&apos;s credit hours, add those products together, and divide by the total credit hours. That weighting is why an A in a 4-credit course lifts your GPA more than an A in a 1-credit course.</p></div>
        <div><h4 className="font-semibold">Is an A+ worth more than an A?</h4><p>On the standard unweighted 4.0 scale used here, no: both are 4.0. Some schools use a 4.3 scale or a weighted scale where an A+ or an honours course counts for more; check your school&apos;s policy.</p></div>
        <div><h4 className="font-semibold">How do I calculate my cumulative GPA across terms?</h4><p>Enter every course from every term, not just the latest one. Do not average the GPAs of separate terms unless the terms have identical total credit hours, because a simple average ignores the weighting.</p></div>
        <div><h4 className="font-semibold">Should I include pass/fail or repeated courses?</h4><p>Pass/fail courses are normally excluded from GPA, so leave them out. Repeated-course rules vary by school: some count only the latest attempt, others count every attempt. Follow your school&apos;s rule for an official figure.</p></div>
        <div><h4 className="font-semibold">Are my grades uploaded?</h4><p>No. The calculation runs in this page in your browser. Avoid entering grades on a shared device if you do not want them left visible in its open page.</p></div>
      </section>
      <ToolExtras href="/gpa-calculator" />
    </main>
  );
}
