"use client";

import { useState } from "react";
import Link from "next/link";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = "";
    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    if (!chars) { alert("Please select at least one option!"); return; }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
    setCopied(false);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrength = () => {
    let score = 0;
    if (useUpper) score++;
    if (useLower) score++;
    if (useNumbers) score++;
    if (useSymbols) score++;
    if (length >= 16) score++;
    if (score <= 2) return { label: "Weak", color: "var(--accent)" };
    if (score <= 3) return { label: "Medium", color: "#e8a52f" };
    return { label: "Strong", color: "var(--green)" };
  };

  const strength = getStrength();

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container">
          <h1>🔐 Password Generator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Generate a strong, secure password instantly!
          </p>

          <div style={{ marginBottom: "1.25rem" }}>
            <label className="field-label">Password Length: {length}</label>
            <input
              type="range"
              min="8" max="32" step="1"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--accent)" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--ink2)" }}>
              <span>8</span><span>32</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.25rem" }}>
            {[
              { label: "Uppercase (A-Z)", value: useUpper, setter: setUseUpper },
              { label: "Lowercase (a-z)", value: useLower, setter: setUseLower },
              { label: "Numbers (0-9)", value: useNumbers, setter: setUseNumbers },
              { label: "Symbols (!@#$)", value: useSymbols, setter: setUseSymbols },
            ].map((opt) => (
              <label key={opt.label} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: "0.875rem", color: "var(--ink)", background: "var(--bg)", padding: "0.6rem 0.75rem", borderRadius: 8, border: "1.5px solid var(--border)" }}>
                <input
                  type="checkbox"
                  checked={opt.value}
                  onChange={() => opt.setter(!opt.value)}
                  style={{ accentColor: "var(--accent)" }}
                />
                {opt.label}
              </label>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "0.5rem" }}>
            <label className="field-label" style={{ margin: 0 }}>Strength:</label>
            <span style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "0.85rem", color: strength.color }}>{strength.label}</span>
          </div>

          <button className="btn btn-primary" onClick={generate}>
            🔐 Generate Password
          </button>

          {password && (
            <div style={{ marginTop: "1.5rem" }}>
              <label className="field-label">Your Password</label>
              <div className="result-box" style={{ fontFamily: "monospace", fontSize: "1.1rem", letterSpacing: "0.05em", wordBreak: "break-all" }}>
                {password}
              </div>
              <button className="btn btn-success" onClick={copyPassword}>
                {copied ? "✅ Copied!" : "📋 Copy Password"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the Password Generator?</h2>
        <p>
          The password generator creates strong, random passwords made up of a mix of
          letters, numbers, and symbols. Strong passwords make it much harder for anyone to
          guess or break into your accounts.
        </p>

        <h2>How to Use the Password Generator</h2>
        <ol>
          <li>Choose your desired password length</li>
          <li>Select which character types to include (uppercase, numbers, symbols, etc.)</li>
          <li>Generate a new password</li>
          <li>Copy it and use it for your account</li>
        </ol>

        <h2>Why Use a Password Generator</h2>
        <p>
          Passwords like “123456” or a pet’s name are easy for attackers to guess. A password
          generator creates random combinations that are extremely difficult to crack, which
          significantly improves your account security compared to passwords you might come
          up with yourself.
        </p>

        <h2>Tips for Strong Passwords</h2>
        <ul>
          <li>Use at least 12-16 characters when the account allows it</li>
          <li>Include a mix of uppercase, lowercase, numbers, and symbols</li>
          <li>Never reuse the same password across multiple accounts</li>
          <li>Store passwords in a password manager rather than memorizing them all</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>Is it safe to use a randomly generated password?</h3>
        <p>
          Yes, in fact random passwords are generally safer than ones you create yourself,
          since they don’t rely on predictable patterns or personal information.
        </p>

        <h3>Should I use the same generated password for every account?</h3>
        <p>
          No. Using a unique password for each account limits the damage if one account is
          ever compromised, since attackers can’t reuse that password on your other accounts.
        </p>
      </div>
    </main>
  );
}
