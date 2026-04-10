"use client";

import { useState } from "react";
import Link from "next/link";

const categories = {
  Length: {
    units: ["Meter", "Kilometer", "Mile", "Yard", "Foot", "Inch", "Centimeter", "Millimeter"],
    toBase: { Meter: 1, Kilometer: 1000, Mile: 1609.34, Yard: 0.9144, Foot: 0.3048, Inch: 0.0254, Centimeter: 0.01, Millimeter: 0.001 },
  },
  Weight: {
    units: ["Kilogram", "Gram", "Pound", "Ounce", "Ton"],
    toBase: { Kilogram: 1, Gram: 0.001, Pound: 0.453592, Ounce: 0.0283495, Ton: 1000 },
  },
  Temperature: {
    units: ["Celsius", "Fahrenheit", "Kelvin"],
    toBase: {},
  },
  Speed: {
    units: ["km/h", "mph", "m/s", "knot"],
    toBase: { "km/h": 1, "mph": 1.60934, "m/s": 3.6, "knot": 1.852 },
  },
  Area: {
    units: ["Square Meter", "Square Kilometer", "Square Mile", "Square Foot", "Acre", "Hectare"],
    toBase: { "Square Meter": 1, "Square Kilometer": 1e6, "Square Mile": 2.59e6, "Square Foot": 0.092903, "Acre": 4046.86, "Hectare": 10000 },
  },
};

type CategoryKey = keyof typeof categories;

export default function UnitConverter() {
  const [category, setCategory] = useState<CategoryKey>("Length");
  const [fromUnit, setFromUnit] = useState("Meter");
  const [toUnit, setToUnit] = useState("Kilometer");
  const [input, setInput] = useState("");

  const convert = () => {
    const val = parseFloat(input);
    if (isNaN(val)) return "";

    if (category === "Temperature") {
      if (fromUnit === "Celsius" && toUnit === "Fahrenheit") return ((val * 9) / 5 + 32).toFixed(4);
      if (fromUnit === "Celsius" && toUnit === "Kelvin") return (val + 273.15).toFixed(4);
      if (fromUnit === "Fahrenheit" && toUnit === "Celsius") return (((val - 32) * 5) / 9).toFixed(4);
      if (fromUnit === "Fahrenheit" && toUnit === "Kelvin") return (((val - 32) * 5) / 9 + 273.15).toFixed(4);
      if (fromUnit === "Kelvin" && toUnit === "Celsius") return (val - 273.15).toFixed(4);
      if (fromUnit === "Kelvin" && toUnit === "Fahrenheit") return (((val - 273.15) * 9) / 5 + 32).toFixed(4);
      return val.toFixed(4);
    }

    const toBase = categories[category].toBase as Record<string, number>;
    const inBase = val * (toBase[fromUnit] || 1);
    return (inBase / (toBase[toUnit] || 1)).toFixed(6).replace(/\.?0+$/, "");
  };

  const handleCategoryChange = (cat: CategoryKey) => {
    setCategory(cat);
    setFromUnit(categories[cat].units[0]);
    setToUnit(categories[cat].units[1]);
    setInput("");
  };

  const result = convert();

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container">
          <h1>🔄 Unit Converter</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Convert between units of length, weight, temperature and more!
          </p>

          {/* Category selector */}
          <div style={{ marginBottom: "1.25rem" }}>
            <label className="field-label">Category</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {Object.keys(categories).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat as CategoryKey)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: 8,
                    border: "1.5px solid",
                    borderColor: category === cat ? "var(--accent)" : "var(--border)",
                    background: category === cat ? "var(--accent)" : "var(--bg)",
                    color: category === cat ? "#fff" : "var(--ink)",
                    fontFamily: "Syne",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* From */}
          <div style={{ marginBottom: "1rem" }}>
            <label className="field-label">From</label>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <input
                type="number"
                className="input-field"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter value..."
                style={{ flex: 1 }}
              />
              <select
                className="input-field"
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                style={{ flex: 1 }}
              >
                {categories[category].units.map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ textAlign: "center", fontSize: "1.5rem", marginBottom: "1rem", color: "var(--accent)" }}>⬇️</div>

          {/* To */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label className="field-label">To</label>
            <select
              className="input-field"
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
            >
              {categories[category].units.map((u) => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </div>

          {/* Result */}
          {result && (
            <div style={{ background: "var(--bg)", borderRadius: 12, padding: "1.25rem", textAlign: "center", border: "1.5px solid var(--accent)" }}>
              <div style={{ fontSize: "0.8rem", color: "var(--ink2)", fontFamily: "Syne", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.4rem" }}>Result</div>
              <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "Syne", color: "var(--accent)" }}>{result}</div>
              <div style={{ fontSize: "0.9rem", color: "var(--ink2)" }}>{toUnit}</div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
