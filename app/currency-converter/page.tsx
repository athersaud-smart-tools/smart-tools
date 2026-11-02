"use client";

import { useState } from "react";
import Link from "next/link";
import ToolGuide from "@/app/components/ToolGuide";

const currencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
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
  { code: "BDT", name: "Bangladeshi Taka" },
  { code: "EGP", name: "Egyptian Pound" },
  { code: "MYR", name: "Malaysian Ringgit" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "KRW", name: "South Korean Won" },
  { code: "ZAR", name: "South African Rand" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "QAR", name: "Qatari Riyal" },
  { code: "OMR", name: "Omani Rial" },
  { code: "BHD", name: "Bahraini Dinar" },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [result, setResult] = useState(null as string | null);
  const [rate, setRate] = useState(null as number | null);
  const [rateProvider, setRateProvider] = useState("");
  const [rateTiming, setRateTiming] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tryFetch = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed");
    return res.json();
  };

  const fetchedAt = () => new Date().toISOString();

  const convert = async () => {
    if (amount.trim() === "" || !Number.isFinite(Number(amount))) {
      setError("Enter a valid finite amount to convert.");
      setResult(null);
      return;
    }
    setLoading(true);
    setError("");
    setResult(null);
    setRate(null);
    setRateProvider("");
    setRateTiming("");

    let exchangeRate: number | null = null;
    let provider = "";
    let timing = "";

    // API 1
    try {
      const data = await tryFetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.toLowerCase()}.json`);
      const candidate = Number(data[from.toLowerCase()]?.[to.toLowerCase()]);
      if (Number.isFinite(candidate) && candidate > 0) {
        exchangeRate = candidate;
        provider = "Fawaz Ahmed Currency API (via jsDelivr)";
        timing = data.date
          ? `Provider date: ${data.date}. The API returned a date but no timestamp; rate fetched at ${fetchedAt()}.`
          : `The API returned no timestamp; rate fetched at ${fetchedAt()}.`;
      }
    } catch {}

    // API 2
    if (!exchangeRate) {
      try {
        const data = await tryFetch(`https://open.er-api.com/v6/latest/${from}`);
        const candidate = Number(data.rates?.[to]);
        if (Number.isFinite(candidate) && candidate > 0) {
          exchangeRate = candidate;
          provider = "ExchangeRate-API (open.er-api.com)";
          timing = data.time_last_update_utc
            ? `Provider timestamp: ${data.time_last_update_utc}`
            : `The API returned no timestamp; rate fetched at ${fetchedAt()}.`;
        }
      } catch {}
    }

    // API 3
    if (!exchangeRate) {
      try {
        const data = await tryFetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
        const candidate = Number(data.rates?.[to]);
        if (Number.isFinite(candidate) && candidate > 0) {
          exchangeRate = candidate;
          provider = "ExchangeRate-API (v4)";
          timing = Number.isFinite(data.time_last_updated)
            ? `Provider timestamp: ${new Date(data.time_last_updated * 1000).toISOString()}`
            : data.date
              ? `Provider date: ${data.date}. The API returned no timestamp; rate fetched at ${fetchedAt()}.`
              : `The API returned no timestamp; rate fetched at ${fetchedAt()}.`;
        }
      } catch {}
    }

    if (exchangeRate) {
      const converted = Number(amount) * exchangeRate;
      if (Number.isFinite(converted)) {
        setResult(converted.toFixed(2));
        setRate(exchangeRate);
        setRateProvider(provider);
        setRateTiming(timing);
      } else {
        setError("The converted amount is too large to display. Enter a smaller amount.");
      }
    } else {
      setError("Could not get exchange rate. Please try again.");
    }

    setLoading(false);
  };

  const swap = () => { setFrom(to); setTo(from); setResult(null); setRate(null); setRateProvider(""); setRateTiming(""); };

  const formatAmount = (value: number) => value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const popularPairs = [
    { from: "USD", to: "EUR" }, { from: "EUR", to: "USD" },
    { from: "GBP", to: "USD" }, { from: "USD", to: "GBP" },
    { from: "USD", to: "INR" }, { from: "USD", to: "CAD" },
    { from: "EUR", to: "GBP" }, { from: "USD", to: "JPY" },
  ];

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>💱 Currency Converter</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Estimate conversions using the latest rate available from an exchange-rate provider. The quote may differ from a bank or card rate.
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
            {loading ? "Getting latest rate..." : "💱 Convert Now"}
          </button>

          {loading && <div style={{ textAlign: "center", marginTop: "1rem", display: "flex", gap: 6, justifyContent: "center" }}><span className="loading-dot" /><span className="loading-dot" /><span className="loading-dot" /></div>}

          {result && (
            <div style={{ marginTop: "1.5rem", textAlign: "center", padding: "1.5rem", background: "var(--bg)", borderRadius: 12, border: "1.5px solid var(--accent)" }}>
              <div style={{ fontSize: "0.85rem", color: "var(--ink2)", marginBottom: "0.5rem" }}>{amount} {from} =</div>
              <div style={{ fontSize: "2.5rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--accent)" }}>{Number(result).toLocaleString()} {to}</div>
              {rate !== null && <>
                <div style={{ fontSize: "0.85rem", color: "var(--ink2)", marginTop: "0.5rem" }}>Rate: 1 {from} = {formatAmount(rate)} {to}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--ink2)", marginTop: "0.35rem" }}>Source: {rateProvider}</div>
                <div style={{ fontSize: "0.75rem", color: "var(--ink2)", marginTop: "0.2rem" }}>{rateTiming}</div>
                <div style={{ overflowX: "auto", marginTop: "1rem" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", textAlign: "left" }}>
                    <caption style={{ textAlign: "left", fontWeight: 700, paddingBottom: "0.4rem" }}>Common amounts at this rate</caption>
                    <thead><tr><th style={{ padding: "0.4rem", borderBottom: "1px solid var(--border)" }}>{from}</th><th style={{ padding: "0.4rem", borderBottom: "1px solid var(--border)" }}>{to}</th></tr></thead>
                    <tbody>{[1, 10, 100, 1000, 10000].map((commonAmount) => <tr key={commonAmount}>
                      <td style={{ padding: "0.4rem", borderBottom: "1px solid var(--border)" }}>{commonAmount.toLocaleString()}</td>
                      <td style={{ padding: "0.4rem", borderBottom: "1px solid var(--border)" }}>{formatAmount(commonAmount * rate)}</td>
                    </tr>)}</tbody>
                  </table>
                </div>
              </>}
              <button onClick={() => navigator.clipboard.writeText(result)} style={{ marginTop: "0.75rem", padding: "0.4rem 1rem", borderRadius: 6, border: "none", background: "var(--green)", color: "#fff", fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer" }}>📋 Copy</button>
            </div>
          )}

          {error && <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(232,93,47,0.08)", borderRadius: 10, color: "var(--accent)", textAlign: "center", border: "1.5px solid var(--accent)" }}>⚠️ {error}</div>}

          <div style={{ marginTop: "1.5rem" }}>
            <label className="field-label">Popular Conversions</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              {popularPairs.map((pair) => (
                <button key={`${pair.from}-${pair.to}`} onClick={() => { setFrom(pair.from); setTo(pair.to); setResult(null); setRate(null); }}
                  style={{ padding: "0.5rem", borderRadius: 8, border: "1.5px solid", borderColor: from === pair.from && to === pair.to ? "var(--accent)" : "var(--border)", background: from === pair.from && to === pair.to ? "rgba(232,93,47,0.08)" : "var(--bg)", cursor: "pointer", fontSize: "0.8rem", fontFamily: "var(--font-syne)", fontWeight: 700, color: from === pair.from && to === pair.to ? "var(--accent)" : "var(--ink2)" }}>
                  {pair.from} → {pair.to}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToolGuide guide="currency" />

    </main>
  );
}
