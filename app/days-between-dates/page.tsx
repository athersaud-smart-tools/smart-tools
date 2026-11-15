"use client";

import { useState } from "react";
import Link from "next/link";
import ToolGuide from "@/app/components/ToolGuide";

type DaysResult = {
  days: number;
  weeks: number;
  remDays: number;
  years: number;
  months: number;
  calDays: number;
  swapped: boolean;
};

function parseDate(value: string): { y: number; m: number; d: number } | null {
  const parts = value.split("-").map(Number);
  if (parts.length !== 3 || parts.some((n) => !Number.isFinite(n))) return null;
  return { y: parts[0], m: parts[1], d: parts[2] };
}

function addMonths(date: { y: number; m: number; d: number }, months: number) {
  const total = date.y * 12 + (date.m - 1) + months;
  const y = Math.floor(total / 12);
  const m = (total % 12) + 1;
  // Clamp the day to the target month's length (e.g. Jan 31 + 1 month -> Feb 28/29).
  const lastDay = new Date(Date.UTC(y, m, 0)).getUTCDate();
  return { y, m, d: Math.min(date.d, lastDay) };
}

function toUtcMs(date: { y: number; m: number; d: number }): number {
  return Date.UTC(date.y, date.m - 1, date.d);
}

export default function DaysBetweenDates() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [includeEnd, setIncludeEnd] = useState(false);
  const [result, setResult] = useState<DaysResult | null>(null);
  const [error, setError] = useState("");

  const calculate = () => {
    const a = parseDate(start);
    const b = parseDate(end);
    if (!a || !b) {
      setError("Choose both a start date and an end date.");
      setResult(null);
      return;
    }
    setError("");
    let from = a;
    let to = b;
    let swapped = false;
    if (toUtcMs(b) < toUtcMs(a)) {
      from = b;
      to = a;
      swapped = true;
    }
    // "Include end date" counts both endpoints: measure to the day AFTER the
    // end date, so the total and the calendar breakdown stay consistent.
    const effMs = includeEnd ? toUtcMs(to) + 86400000 : toUtcMs(to);
    const days = Math.round((effMs - toUtcMs(from)) / 86400000);

    // Calendar breakdown: whole years, then whole months, then remaining days.
    let years = 0;
    while (toUtcMs(addMonths(from, (years + 1) * 12)) <= effMs) years++;
    let cursor = addMonths(from, years * 12);
    let months = 0;
    while (toUtcMs(addMonths(cursor, months + 1)) <= effMs) months++;
    cursor = addMonths(cursor, months);
    const calDays = Math.round((effMs - toUtcMs(cursor)) / 86400000);

    setResult({
      days,
      weeks: Math.floor(days / 7),
      remDays: days % 7,
      years,
      months,
      calDays,
      swapped,
    });
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>📅 Days Between Dates</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Count the exact number of days between two dates — with a weeks breakdown and a calendar
            years, months, and days result. Leap years are handled correctly.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <label className="field-label">Start Date</label>
              <input type="date" className="input-field" value={start} onChange={(e) => setStart(e.target.value)} />
            </div>
            <div>
              <label className="field-label">End Date</label>
              <input type="date" className="input-field" value={end} onChange={(e) => setEnd(e.target.value)} />
            </div>
            <label style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.95rem" }}>
              <input type="checkbox" checked={includeEnd} onChange={(e) => setIncludeEnd(e.target.checked)} />
              Include the end date in the count (+1 day)
            </label>
          </div>

          <button className="btn btn-primary" onClick={calculate} disabled={!start || !end}>
            📅 Count the Days
          </button>

          {error && <p role="alert" style={{ marginTop: "1rem", color: "var(--accent)" }}>{error}</p>}

          {result && (
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ textAlign: "center", padding: "1.25rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--ink2)", fontFamily: "var(--font-syne)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.4rem" }}>Total Days</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--accent)" }}>
                  {result.days.toLocaleString()}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "1.15rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--green)" }}>
                    {result.weeks} wk {result.remDays} d
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Weeks + Days</div>
                </div>
                <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "1.15rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "#e8852f" }}>
                    {result.years > 0 ? `${result.years} y ` : ""}{result.months} mo {result.calDays} d
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Calendar Breakdown</div>
                </div>
              </div>
              {result.swapped && (
                <p style={{ textAlign: "center", color: "var(--ink2)", fontSize: "0.9rem", margin: 0 }}>
                  The end date was earlier than the start date, so the dates were swapped — the count is the distance between them.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
      <ToolGuide guide="days-between" />
    </main>
  );
}
