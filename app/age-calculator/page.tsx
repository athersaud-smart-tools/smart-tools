"use client";

import { useState } from "react";
import Link from "next/link";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    if (!dob) return;
    const birth = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }

    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;

    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < today) nextBirthday.setFullYear(today.getFullYear() + 1);
    const daysToNext = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

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
            Calculate your exact age in years, months, days, weeks and hours!
          </p>

          <div style={{ marginBottom: "1.25rem" }}>
            <label className="field-label">Your Date of Birth</label>
            <input type="date" className="input-field" value={dob} onChange={(e) => setDob(e.target.value)} max={new Date().toISOString().split("T")[0]} />
          </div>

          <button className="btn btn-primary" onClick={calculate} disabled={!dob}>
            🎂 Calculate My Age
          </button>

          {result && (
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ textAlign: "center", padding: "1.25rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)", marginBottom: "1rem" }}>
                <div style={{ fontSize: "1rem", color: "var(--ink2)", marginBottom: "0.4rem" }}>You are exactly</div>
                <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "1.5rem", color: "var(--accent)" }}>
                  {result.years} years, {result.months} months & {result.days} days old
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1rem" }}>
                {stats.map((s) => (
                  <div key={s.label} style={{ background: "var(--bg)", borderRadius: 10, padding: "0.875rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, fontFamily: "Syne", color: s.color }}>{s.value}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "1rem", background: "rgba(26,140,91,0.08)", borderRadius: 10, textAlign: "center", border: "1.5px solid var(--green)" }}>
                <p style={{ fontFamily: "Syne", fontWeight: 700, color: "var(--green)" }}>
                  🎉 Your next birthday is in {result.daysToNext} days!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is an Age Calculator?</h2>
        <p>
          An age calculator works out exactly how old you are (or how old someone else is)
          based on a date of birth. Instead of counting years by hand, it instantly gives you
          your age in years, months, and days, plus fun extras like how many days are left
          until your next birthday.
        </p>

        <h2>How to Use the Age Calculator</h2>
        <ol>
          <li>Enter the date of birth you want to calculate</li>
          <li>Click calculate</li>
          <li>Instantly see the exact age in years, months, and days</li>
          <li>Check how many days remain until the next birthday</li>
        </ol>

        <h2>Why Use an Online Age Calculator</h2>
        <p>
          Calculating age manually means accounting for leap years, different month lengths,
          and whether a birthday has already passed this year — it’s easy to make a small
          mistake. An online age calculator does this instantly and accurately, which is
          useful for filling out forms, checking eligibility requirements, or just settling
          a birthday debate with a friend.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Filling out job applications or school enrollment forms</li>
          <li>Checking age eligibility for events, sports, or services</li>
          <li>Planning birthday celebrations</li>
          <li>Satisfying simple curiosity about exact age in days</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>Does the calculator account for leap years?</h3>
        <p>
          Yes. The calculator automatically accounts for leap years so your age in days and
          months is accurate.
        </p>

        <h3>Can I calculate someone else’s age, not just mine?</h3>
        <p>
          Yes. You can enter any date of birth to calculate the current age for anyone,
          including pets, historical figures, or upcoming due dates.
        </p>
      </div>
    </main>
  );
}
