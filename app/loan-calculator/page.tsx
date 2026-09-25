"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years) * 12;
    if (!p || !r || !n) return;

    const monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const interest = total - p;

    setResult({
      monthly: monthly.toFixed(2),
      total: total.toFixed(2),
      interest: interest.toFixed(2),
      percent: Math.round((interest / total) * 100),
    });
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>🏦 Loan Calculator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Calculate your monthly loan payment, total payment and interest instantly!
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <label className="field-label">Loan Amount ($)</label>
              <input type="number" className="input-field" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="10000" />
            </div>
            <div>
              <label className="field-label">Annual Interest Rate (%)</label>
              <input type="number" className="input-field" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="5.5" step="0.1" />
            </div>
            <div>
              <label className="field-label">Loan Term (Years)</label>
              <input type="number" className="input-field" value={years} onChange={(e) => setYears(e.target.value)} placeholder="5" />
            </div>
          </div>

          <button className="btn btn-primary" onClick={calculate} disabled={!amount || !rate || !years}>
            🏦 Calculate Loan
          </button>

          {result && (
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ textAlign: "center", padding: "1.25rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--ink2)", fontFamily: "Syne", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.4rem" }}>Monthly Payment</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "Syne", color: "var(--accent)" }}>${Number(result.monthly).toLocaleString()}</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: "Syne", color: "var(--green)" }}>${Number(result.total).toLocaleString()}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Total Payment</div>
                </div>
                <div style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800, fontFamily: "Syne", color: "#e8852f" }}>${Number(result.interest).toLocaleString()}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase" }}>Total Interest</div>
                </div>
              </div>

              {/* Interest bar */}
              <div>
                <label className="field-label">Principal vs Interest</label>
                <div style={{ height: 16, borderRadius: 8, overflow: "hidden", display: "flex" }}>
                  <div style={{ width: `${100 - result.percent}%`, background: "var(--green)" }} />
                  <div style={{ width: `${result.percent}%`, background: "var(--accent)" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", marginTop: "0.4rem" }}>
                  <span style={{ color: "var(--green)", fontWeight: 700 }}>Principal {100 - result.percent}%</span>
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>Interest {result.percent}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the Loan Calculator?</h2>
        <p>
          The loan calculator helps you estimate your monthly payment, total interest, and
          overall repayment cost for a loan based on the amount borrowed, interest rate, and
          repayment term. It’s useful for planning car loans, personal loans, or mortgages
          before committing to one.
        </p>

        <h2>How to Use the Loan Calculator</h2>
        <ol>
          <li>Enter the loan amount you want to borrow</li>
          <li>Enter the annual interest rate</li>
          <li>Enter the loan term (how long you’ll take to repay it)</li>
          <li>View your estimated monthly payment and total interest</li>
        </ol>

        <h2>Why Use a Loan Calculator</h2>
        <p>
          Loans can look very different depending on their interest rate and repayment term,
          even if the borrowed amount is the same. A loan calculator lets you compare
          different scenarios instantly, so you can see how a longer term or a lower rate
          changes what you’ll actually pay over time.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Comparing monthly payments across different loan offers</li>
          <li>Estimating total interest paid over the life of a loan</li>
          <li>Planning a budget before applying for a car loan or mortgage</li>
          <li>Understanding how changing the loan term affects payments</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>Does this calculator give an exact payment amount from my lender?</h3>
        <p>
          This tool provides an estimate based on the numbers you enter. Your actual loan
          terms, fees, and payment amount will be confirmed by your lender.
        </p>

        <h3>Why does a longer loan term mean more total interest?</h3>
        <p>
          A longer term spreads payments out, which usually lowers your monthly payment, but
          you end up paying interest for a longer period of time, increasing the total
          interest paid overall.
        </p>
      </div>
    </main>
  );
}
