"use client";

import { useState } from "react";
import Link from "next/link";

const currencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "PKR", name: "Pakistani Rupee" },
  { code: "INR", name: "Indian Rupee" },
  { code: "AED", name: "UAE Dirham" },
  { code: "SAR", name: "Saudi Riyal" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "KWD", name: "Kuwaiti Dinar" },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("PKR");
  const [result, setResult] = useState(null as string | null);
  const [rate, setRate] = useState(null as string | null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tryFetch = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  };

  const convert = async () => {
    if (!amount || isNaN(Number(amount))) return;
    setLoading(true);
    setError("");
    setResult(null);
    setRate(null);

    let exchangeRate: number | null = null;

    // API 1
    try {
      const data = await tryFetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.toLowerCase()}.json`);
      exchangeRate = data[from.toLowerCase()][to.toLowerCase()];
    } catch {}

    // API 2
    if (!exchangeRate) {
      try {
        const data = await tryFetch(`https://open.er-api.com/v6/latest/${from}`);
        exchangeRate = data.rates[to];
      } catch {}
    }

    // API 3
    if (!exchangeRate) {
      try {
        const data = await tryFetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        exchangeRate = data.rates[to];
      } catch {}
    }

    if (exchangeRate) {
      setResult((parseFloat(amount) * exchangeRate).toFixed(2));
      setRate(exchangeRate.toFixed(4));
    } else {
      setError("Could not get exchange rate. Please try again.");
    }

    setLoading(false);
  };

  const swap = () => { setFrom(to); setTo(from); setResult(null); setRate(null); };

  const popularPairs = [
    { from: "USD", to: "PKR" }, { from: "AED", to: "PKR" },
    { from: "SAR", to: "PKR" }, { from: "GBP", to: "USD" },
    { from: "USD", to: "EUR" }, { from: "USD", to: "INR" },
    { from: "KWD", to: "PKR" }, { from: "EUR", to: "GBP" },
  ];

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
            <input type="number" className="input-field" value={amount} onChange={(e) => { setAmount(e.target.value); setResult(null); }} placeholder="Enter amount..." onKeyDown={(e) => e.key === "Enter" && convert()} />
          </div>

          <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-end", marginBottom: "1.25rem" }}>
            <div style={{ flex: 1 }}>
              <label className="field-label">From</label>
              <select className="input-field" value={from} onChange={(e) => { setFrom(e.target.value); setResult(null); }}>
                {currencies.map((c) => <option key={c.code} value={c.code}>{c.code} — {c.name}</option>)}
              </select>
            </div>
            <button onClick={swap} style={{ padding: "0.75rem", borderRadius: 10, border: "1.5px solid var(--border)", background: "var(--bg)", cursor: "pointer", fontSize: "1.2rem" }}>⇄</button>
            <div style={{ flex: 1 }}>
              <label className="field-label">To</label>
              <select className="input-field" value={to} onChange={(e) => { setTo(e.target.value); setResult(null); }}>
                {currencies.map((c) => <option key={c.code} value={c.code}>{c.code} — {c.name}</option>)}
              </select>
            </div>
          </div>

          <button className="btn btn-primary" onClick={convert} disabled={!amount || loading} style={{ opacity: !amount ? 0.6 : 1 }}>
            {loading ? "Getting live rate..." : "💱 Convert Now"}
          </button>

          {loading && <div style={{ textAlign: "center", marginTop: "1rem", display: "flex", gap: 6, justifyContent: "center" }}><span className="loading-dot" /><span className="loading-dot" /><span className="loading-dot" /></div>}

          {result && (
            <div style={{ marginTop: "1.5rem", textAlign: "center", padding: "1.5rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--ink2)", marginBottom: "0.5rem" }}>{amount} {from} =</div>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "Syne", color: "var(--accent)" }}>{Number(result).toLocaleString()} {to}</div>
              {rate && <div style={{ fontSize: "0.75rem", color: "var(--ink2)", marginTop: "0.5rem" }}>1 {from} = {rate} {to} (live rate)</div>}
              <button onClick={() => navigator.clipboard.writeText(result)} style={{ marginTop: "0.75rem", padding: "0.4rem 1rem", borderRadius: 6, border: "none", background: "var(--green)", color: "#fff", fontFamily: "Syne", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer" }}>📋 Copy</button>
            </div>
          )}

          {error && <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(232,93,47,0.08)", borderRadius: 10, color: "var(--accent)", textAlign: "center", border: "1.5px solid var(--accent)" }}>⚠️ {error}</div>}

          <div style={{ marginTop: "1.5rem" }}>
            <label className="field-label">Popular Conversions</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              {popularPairs.map((pair) => (
                <button key={`${pair.from}-${pair.to}`} onClick={() => { setFrom(pair.from); setTo(pair.to); setResult(null); setRate(null); }}
                  style={{ padding: "0.5rem", borderRadius: 8, border: "1.5px solid", borderColor: from === pair.from && to === pair.to ? "var(--accent)" : "var(--border)", background: from === pair.from && to === pair.to ? "rgba(232,93,47,0.08)" : "var(--bg)", cursor: "pointer", fontSize: "0.8rem", fontFamily: "Syne", fontWeight: 700, color: from === pair.from && to === pair.to ? "var(--accent)" : "var(--ink2)" }}>
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
