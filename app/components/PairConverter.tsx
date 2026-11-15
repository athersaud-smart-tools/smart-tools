"use client";

import { useState } from "react";
import Link from "next/link";
import { convertValue, formatNumber, type UnitDef } from "@/app/lib/conversions";

// Pre-set converter for a single pair page: the visitor types a value in the
// from-unit and sees the to-unit result instantly. The reverse direction is
// one tap away on the linked reverse pair page.
export default function PairConverter({
  categoryId,
  from,
  to,
  reversePath,
}: {
  categoryId: string;
  from: UnitDef;
  to: UnitDef;
  reversePath?: string;
}) {
  const [input, setInput] = useState("1");
  const value = parseFloat(input);
  const result = Number.isFinite(value) ? convertValue(categoryId, from.id, to.id, value) : NaN;

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <label className="field-label" htmlFor="pair-input">
          {from.name} ({from.symbol})
        </label>
        <input
          id="pair-input"
          type="number"
          className="input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter value..."
        />
      </div>
      <div style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "1rem", color: "var(--accent)" }}>⬇️</div>
      <div
        style={{
          background: "var(--bg)",
          borderRadius: 12,
          padding: "1.25rem",
          textAlign: "center",
          border: "1.5px solid var(--accent)",
        }}
        aria-live="polite"
      >
        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--ink2)",
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: "0.4rem",
          }}
        >
          Result in {to.plural}
        </div>
        <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "var(--font-syne)", color: "var(--accent)" }}>
          {Number.isFinite(result) ? formatNumber(result) : "—"}
        </div>
        <div style={{ fontSize: "0.9rem", color: "var(--ink2)" }}>
          {to.name} ({to.symbol})
        </div>
      </div>
      {reversePath && (
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          <Link href={reversePath} style={{ color: "var(--accent)", fontWeight: 600 }}>
            ⇄ Convert {to.plural.toLowerCase()} to {from.plural.toLowerCase()} instead
          </Link>
        </p>
      )}
    </div>
  );
}
