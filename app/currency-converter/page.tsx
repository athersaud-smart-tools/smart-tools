"use client";

import { useState } from "react";
import Link from "next/link";

const currencies = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "PKR", name: "Pakistani Rupee", symbol: "₨" },
  { code: "INR", name: "Indian Rupee", symbol: "₹" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
  { code: "SAR", name: "Saudi Riyal", symbol: "﷼" },
  { code: "CAD", name: "Canadian Dollar", symbol: "CA$" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
  { code: "TRY", name: "Turkish Lira", symbol: "₺" },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const convert = async () => {
    if (!amount || isNaN(Number(amount))) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
      const data = await res.json();
      if (data.rates && data.rates[to] !== undefined) {
        setResult(data.rates[to].toFixed(2));
      } else {
        setError("Could not get rate. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>💱 Currency Converter</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Convert between world currencies with live exchange rates — completely free!
          </p>

          <div style={{ marginBottom: "1rem" }}>
            <label className="field-label">Amount</label>
            <input
              type="number"
              className="input-field"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>

          <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-end", marginBottom: "1.25rem" }}>
            <div style={{ flex: 1 }}>
              <label className="field-label">From</label>
              <select className="input-field" value={from} onChange={(e) => setFrom(e.target.value)}>
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
                ))}
              </select>
            </div>

            <button
              onClick={swap}
              style={{ padding: "0.75rem", borderRadius: 10, border: "1.5px solid var(--border)", background: "var(--bg)", cursor: "pointer", fontSize: "1.2rem", marginBottom: "0" }}
            >
              ⇄
            </button>

            <div style={{ flex: 1 }}>
              <label className="field-label">To</label>
              <select className="input-field" value={to} onChange={(e) => setTo(e.target.value)}>
                {currencies.map((c) => (
                  <option key={c.code} value={c.code}>{c.code} — {c.name}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            className="btn btn-primary"
            onClick={convert}
            disabled={!amount || loading}
            style={{ opacity: !amount ? 0.6 : 1 }}
          >
            {loading ? "Converting..." : "💱 Convert Now"}
          </button>

          {loading && (
            <div style={{ textAlign: "center", marginTop: "1rem", display: "flex", gap: 6, justifyContent: "center" }}>
              <span className="loading-dot" />
              <span className="loading-dot" />
              <span className="loading-dot" />
            </div>
          )}

          {result && (
            <div style={{ marginTop: "1.5rem", textAlign: "center", padding: "1.5rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--ink2)", marginBottom: "0.5rem" }}>
                {amount} {from} =
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "Syne", color: "var(--accent)" }}>
                {result} {to}
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--ink2)", marginTop: "0.5rem" }}>
                Live rate from frankfurter.app
              </div>
            </div>
          )}

          {error && (
            <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(232,93,47,0.08)", borderRadius: 10, color: "var(--accent)", textAlign: "center", border: "1.5px solid var(--accent)" }}>
              {error}
            </div>
          )}

          {/* Popular pairs */}
          <div style={{ marginTop: "1.5rem" }}>
            <label className="field-label">Popular Conversions</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              {[
                { from: "USD", to: "PKR" }, { from: "USD", to: "EUR" },
                { from: "GBP", to: "USD" }, { from: "AED", to: "PKR" },
                { from: "SAR", to: "PKR" }, { from: "EUR", to: "GBP" },
              ].map((pair) => (
                <button
                  key={`${pair.from}-${pair.to}`}
                  onClick={() => { setFrom(pair.from); setTo(pair.to); setResult(null); }}
                  style={{ padding: "0.5rem", borderRadius: 8, border: "1.5px solid var(--border)", background: "var(--bg)", cursor: "pointer", fontSize: "0.8rem", fontFamily: "Syne", fontWeight: 700, color: "var(--ink2)" }}
                >
                  {pair.from} → {pair.to}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
