"use client";

import { useState } from "react";
import Link from "next/link";
import ToolGuide from "@/app/components/ToolGuide";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  totalHours: number;
  daysToNext: number;
};

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);

  const calculate = () => {
    if (!dob) return;
    const today = new Date();
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const [birthYear, birthMonth, birthDay] = dob.split("-").map(Number);
    const birth = new Date(birthYear, birthMonth - 1, birthDay);
    if (!Number.isFinite(birth.getTime()) || birth.getFullYear() !== birthYear || birth.getMonth() !== birthMonth - 1 || birth.getDate() !== birthDay || birth > todayDate) return;

    const wholeMonthsAtMost = (monthsToAdd: number) => {
      const targetMonth = birth.getMonth() + monthsToAdd;
      const targetYear = birth.getFullYear() + Math.floor(targetMonth / 12);
      const normalizedMonth = ((targetMonth % 12) + 12) % 12;
      const targetDay = Math.min(birth.getDate(), new Date(targetYear, normalizedMonth + 1, 0).getDate());
      return new Date(targetYear, normalizedMonth, targetDay);
    };
    let calendarMonths = (todayDate.getFullYear() - birth.getFullYear()) * 12 + todayDate.getMonth() - birth.getMonth();
    if (wholeMonthsAtMost(calendarMonths) > todayDate) calendarMonths--;
    const years = Math.floor(calendarMonths / 12);
    const months = calendarMonths % 12;
    const elapsedFromLastMonth = wholeMonthsAtMost(calendarMonths);
    const days = Math.floor((Date.UTC(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()) - Date.UTC(elapsedFromLastMonth.getFullYear(), elapsedFromLastMonth.getMonth(), elapsedFromLastMonth.getDate())) / (1000 * 60 * 60 * 24));

    const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const birthUtc = Date.UTC(birth.getFullYear(), birth.getMonth(), birth.getDate());
    const totalDays = Math.floor((todayUtc - birthUtc) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;

    const birthdayDayThisYear = Math.min(birth.getDate(), new Date(today.getFullYear(), birth.getMonth() + 1, 0).getDate());
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birthdayDayThisYear);
    if (nextBirthday < todayDate) nextBirthday.setFullYear(today.getFullYear() + 1);
    const daysToNext = Math.round((Date.UTC(nextBirthday.getFullYear(), nextBirthday.getMonth(), nextBirthday.getDate()) - todayUtc) / (1000 * 60 * 60 * 24));

    setResult({ years, months, days, totalDays, totalWeeks, totalMonths, totalHours, daysToNext });
  };

  const stats = result ? [
    { label: "Years", value: result.years, color: "var(--accent)" },
    { label: "Months", value: result.months, color: "var(--accent2)" },
    { label: "Days", value: result.days, color: "var(--green)" },
    { label: "Total Days", value: result.totalDays.toLocaleString(), color: "#8b5cf6" },
    { label: "Total Weeks", value: result.totalWeeks.toLocaleString(), color: "#e8852f" },
    { label: "Total Hours", value: result.totalHours.toLocaleString(), color: "var(--ink2)" },
  ] : [];

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>🎂 Age Calculator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Calculate calendar age in years, months and days, with a separate total-day count.
          </p>

          <div style={{ marginBottom: "1.25rem" }}>
            <label className="field-label">Your Date of Birth</label>
            <input type="date" className="input-field" value={dob} onChange={(e) => setDob(e.target.value)} max={`${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`} />
          </div>

          <button className="btn btn-primary" onClick={calculate} disabled={!dob}>
            🎂 Calculate My Age
          </button>

          {result && (
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ textAlign: "center", padding: "1.25rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)", marginBottom: "1rem" }}>
                <div style={{ fontSize: "1rem", color: "var(--ink2)", marginBottom: "0.4rem" }}>Calendar age</div>
                <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.5rem", color: "var(--accent)" }}>
                  {result.years} years, {result.months} months & {result.days} days old
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1rem" }}>
                {stats.map((s) => (
                  <div key={s.label} style={{ background: "var(--bg)", borderRadius: 10, padding: "0.875rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "1rem", background: "rgba(26,140,91,0.08)", borderRadius: 10, textAlign: "center", border: "1.5px solid var(--green)" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "var(--green)" }}>
                  🎉 Your next birthday is in {result.daysToNext} days!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToolGuide guide="age" />

    </main>
  );
}
