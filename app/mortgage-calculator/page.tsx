"use client";

import { useState } from "react";
import Link from "next/link";
import ToolGuide from "@/app/components/ToolGuide";

type MortgageResult = {
  loanAmount: string;
  monthlyPI: string;
  monthlyTax: string;
  monthlyInsurance: string;
  totalMonthly: string;
  totalInterest: string;
  totalPI: string;
  downPct: number;
};

export default function MortgageCalculator() {
  const [price, setPrice] = useState("");
  const [down, setDown] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("30");
  const [tax, setTax] = useState("");
  const [insurance, setInsurance] = useState("");
  const [result, setResult] = useState<MortgageResult | null>(null);
  const [error, setError] = useState("");

  const money = (v: number) => v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const calculate = () => {
    const homePrice = parseFloat(price);
    const downPayment = parseFloat(down || "0");
    const annualRate = parseFloat(rate) / 100;
    const termYears = parseFloat(years);
    const annualTax = parseFloat(tax || "0");
    const annualInsurance = parseFloat(insurance || "0");

    if (
      !Number.isFinite(homePrice) || homePrice <= 0 ||
      !Number.isFinite(downPayment) || downPayment < 0 || downPayment >= homePrice ||
      !Number.isFinite(annualRate) || annualRate < 0 ||
      !Number.isFinite(termYears) || termYears <= 0 ||
      !Number.isFinite(annualTax) || annualTax < 0 ||
      !Number.isFinite(annualInsurance) || annualInsurance < 0
    ) {
      setError("Enter a home price above zero, a down payment smaller than the price, a non-negative rate, and a term above zero. Tax and insurance are optional but cannot be negative.");
      setResult(null);
      return;
    }
    setError("");

    const principal = homePrice - downPayment;
    const r = annualRate / 12;
    const n = Math.round(termYears * 12);
    const monthlyPI = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const monthlyTax = annualTax / 12;
    const monthlyInsurance = annualInsurance / 12;
    const totalPI = monthlyPI * n;

    setResult({
      loanAmount: money(principal),
      monthlyPI: money(monthlyPI),
      monthlyTax: money(monthlyTax),
      monthlyInsurance: money(monthlyInsurance),
      totalMonthly: money(monthlyPI + monthlyTax + monthlyInsurance),
      totalInterest: money(totalPI - principal),
      totalPI: money(totalPI),
      downPct: Math.round((downPayment / homePrice) * 100),
    });
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>🏠 Mortgage Calculator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Estimate your monthly mortgage payment — principal and interest, plus property tax and home
            insurance — and see the total interest over the life of the loan.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <label className="field-label">Home Price ($)</label>
              <input type="number" min="0.01" className="input-field" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="350000" />
            </div>
            <div>
              <label className="field-label">Down Payment ($)</label>
              <input type="number" min="0" className="input-field" value={down} onChange={(e) => setDown(e.target.value)} placeholder="70000" />
            </div>
            <div>
              <label className="field-label">Annual Interest Rate (%)</label>
              <input type="number" min="0" step="0.05" className="input-field" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="6.5" />
            </div>
            <div>
              <label className="field-label">Loan Term (Years)</label>
              <input type="number" min="0.1" step="1" className="input-field" value={years} onChange={(e) => setYears(e.target.value)} placeholder="30" />
            </div>
            <div>
              <label className="field-label">Property Tax per Year ($) — optional</label>
              <input type="number" min="0" className="input-field" value={tax} onChange={(e) => setTax(e.target.value)} placeholder="4200" />
            </div>
            <div>
              <label className="field-label">Home Insurance per Year ($) — optional</label>
              <input type="number" min="0" className="input-field" value={insurance} onChange={(e) => setInsurance(e.target.value)} placeholder="1800" />
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculate} disabled={!price || rate === "" || !years}>
            🏠 Calculate Mortgage
          </button>

          {error && <p role="alert" style={{ marginTop: "1rem", color: "var(--accent)" }}>{error}</p>}

          {result && (
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ textAlign: "center", padding: "1.25rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--ink2)", fontFamily: "var(--font-syne)", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.4rem" }}>Total Monthly Payment</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--accent)" }}>${result.totalMonthly}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--ink2)", marginTop: "0.35rem" }}>
                  Loan amount ${result.loanAmount} after a {result.downPct}% down payment
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--green)" }}>${result.monthlyPI}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Principal & Interest / mo</div>
                </div>
                <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "#e8852f" }}>${result.totalInterest}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Total Interest</div>
                </div>
                <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, fontFamily: "var(--font-syne)" }}>${result.monthlyTax}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Tax / mo</div>
                </div>
                <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: 800, fontFamily: "var(--font-syne)" }}>${result.monthlyInsurance}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Insurance / mo</div>
                </div>
              </div>

              <p style={{ textAlign: "center", color: "var(--ink2)", fontSize: "0.9rem", margin: 0 }}>
                Total of all principal & interest payments: ${result.totalPI}. Estimate only — not a lender quote or financial advice.
              </p>
            </div>
          )}
        </div>
      </div>
      <ToolGuide guide="mortgage" />
    </main>
  );
}
