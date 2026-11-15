"use client";

import { useState } from "react";
import {
  CITY_PRESETS,
  SIGNS,
  computeBirthChart,
  type BirthChartResult,
  type Placement,
} from "../lib/astro";

const labelStyle: React.CSSProperties = { display: "grid", gap: "0.35rem", fontSize: "0.9rem", fontWeight: 600 };
const noteStyle: React.CSSProperties = { color: "var(--ink2)", fontSize: "0.8rem", lineHeight: 1.6 };

function PlacementCard({ title, icon, p, blurb }: { title: string; icon: string; p: Placement; blurb: string }) {
  return (
    <div style={{ border: "1px solid var(--line, #e5e0d8)", borderRadius: 12, padding: "1rem", background: "var(--card, #fff)" }}>
      <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--ink2)" }}>
        {icon} {title}
      </div>
      <div style={{ fontSize: "1.35rem", fontWeight: 700, margin: "0.3rem 0 0.15rem" }}>
        {p.symbol} {p.sign} · {p.degreeInSign.toFixed(1)}°
      </div>
      <div style={{ color: "var(--ink2)", fontSize: "0.9rem", lineHeight: 1.55 }}>
        {p.element} sign — {p.keywords}. {blurb}
      </div>
      {p.nearCusp && (
        <div style={{ marginTop: "0.5rem", fontSize: "0.82rem", color: "#9a6a00", background: "#fdf3d7", borderRadius: 8, padding: "0.45rem 0.6rem", lineHeight: 1.5 }}>
          Close to the edge of {p.sign} — a small difference in birth time or method could place this in the neighbouring sign.
        </div>
      )}
    </div>
  );
}

function ChartWheel({ result }: { result: BirthChartResult }) {
  const size = 320;
  const c = size / 2;
  const rOuter = 150;
  const rSign = 128;
  const rPoint = 100;
  const ascLon = result.rising?.longitude ?? 0;
  // Wheel position: Ascendant at the left (9 o'clock), zodiac running counter-clockwise.
  const pos = (lon: number, r: number) => {
    const a = ((180 - (lon - ascLon)) * Math.PI) / 180;
    return { x: c + r * Math.cos(a), y: c - r * Math.sin(a) };
  };
  const points: { label: string; lon: number; color: string }[] = [
    { label: "☉", lon: result.sun.longitude, color: "#d97706" },
    { label: "☽", lon: result.moon.longitude, color: "#475569" },
  ];
  if (result.rising) points.push({ label: "Asc", lon: result.rising.longitude, color: "#7c3aed" });
  if (result.midheaven) points.push({ label: "MC", lon: result.midheaven.longitude, color: "#0e7490" });
  return (
    <svg viewBox={`0 0 ${size} ${size}`} role="img" aria-label="Birth chart wheel" style={{ width: "100%", maxWidth: 340, display: "block", margin: "0 auto" }}>
      <circle cx={c} cy={c} r={rOuter} fill="none" stroke="var(--ink2, #999)" strokeWidth="1" />
      <circle cx={c} cy={c} r={rPoint + 22} fill="none" stroke="var(--line, #e5e0d8)" strokeWidth="1" />
      {SIGNS.map((s, i) => {
        const mid = i * 30 + 15;
        const p = pos(mid, rSign);
        const edge = pos(i * 30, rOuter);
        const edge2 = pos(i * 30, rPoint + 22);
        return (
          <g key={s.name}>
            <line x1={edge.x} y1={edge.y} x2={edge2.x} y2={edge2.y} stroke="var(--line, #e5e0d8)" strokeWidth="1" />
            <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize="15" fill="var(--ink2, #666)">
              {s.symbol}
            </text>
          </g>
        );
      })}
      {points.map((pt) => {
        const p = pos(pt.lon, rPoint);
        return (
          <g key={pt.label}>
            <circle cx={p.x} cy={p.y} r="11" fill={pt.color} />
            <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fontSize={pt.label.length > 1 ? "8.5" : "12"} fill="#fff" fontWeight="700">
              {pt.label}
            </text>
          </g>
        );
      })}
      <text x={c} y={c} textAnchor="middle" dominantBaseline="middle" fontSize="11" fill="var(--ink2, #666)">
        {result.rising ? "Ascendant at left" : "0° Aries at left"}
      </text>
    </svg>
  );
}

export default function BirthChartCalculator() {
  const [date, setDate] = useState("");
  const [timeKnown, setTimeKnown] = useState(true);
  const [time, setTime] = useState("12:00");
  const [cityIndex, setCityIndex] = useState<string>("0"); // New York preset
  const [lat, setLat] = useState("40.7128");
  const [lon, setLon] = useState("-74.0060");
  const [offset, setOffset] = useState("-5");
  const [error, setError] = useState("");
  const [result, setResult] = useState<BirthChartResult | null>(null);

  const applyCity = (value: string) => {
    setCityIndex(value);
    if (value === "custom") return;
    const city = CITY_PRESETS[Number(value)];
    if (city) {
      setLat(String(city.lat));
      setLon(String(city.lon));
      setOffset(String(city.utcOffset));
    }
  };

  const calculate = () => {
    setError("");
    setResult(null);
    if (!date) {
      setError("Please choose your birth date.");
      return;
    }
    const [y, m, d] = date.split("-").map(Number);
    if (!y || y < 1900 || y > 2100) {
      setError("Please enter a birth year between 1900 and 2100.");
      return;
    }
    const latN = Number(lat);
    const lonN = Number(lon);
    const offN = Number(offset);
    if (Number.isNaN(latN) || latN < -89 || latN > 89) {
      setError("Latitude must be between -89 and 89.");
      return;
    }
    if (Number.isNaN(lonN) || lonN < -180 || lonN > 180) {
      setError("Longitude must be between -180 and 180.");
      return;
    }
    if (Number.isNaN(offN) || offN < -12 || offN > 14) {
      setError("UTC offset must be between -12 and +14 hours.");
      return;
    }
    let hour: number | null = null;
    let minute = 0;
    if (timeKnown) {
      const parts = time.split(":").map(Number);
      hour = parts[0] ?? 12;
      minute = parts[1] ?? 0;
    }
    setResult(
      computeBirthChart({
        year: y,
        month: m,
        day: d,
        hour,
        minute,
        utcOffsetHours: offN,
        latitude: latN,
        longitude: lonN,
      }),
    );
  };

  return (
    <div>
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        <label style={labelStyle}>
          Birth date
          <input type="date" className="input-field" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label style={labelStyle}>
          Birthplace
          <select className="input-field" value={cityIndex} onChange={(e) => applyCity(e.target.value)}>
            {CITY_PRESETS.map((city, i) => (
              <option key={city.name} value={String(i)}>
                {city.name}
              </option>
            ))}
            <option value="custom">Custom location…</option>
          </select>
        </label>
        <label style={labelStyle}>
          Birth time
          <input
            type="time"
            className="input-field"
            value={time}
            disabled={!timeKnown}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
      </div>

      <label style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "0.75rem", fontSize: "0.9rem" }}>
        <input type="checkbox" checked={!timeKnown} onChange={(e) => setTimeKnown(!e.target.checked)} />
        I don&apos;t know my birth time (rising sign and Midheaven need it)
      </label>

      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", marginTop: "1rem" }}>
        <label style={labelStyle}>
          Latitude
          <input type="number" step="0.0001" className="input-field" value={lat} onChange={(e) => setLat(e.target.value)} />
        </label>
        <label style={labelStyle}>
          Longitude
          <input type="number" step="0.0001" className="input-field" value={lon} onChange={(e) => setLon(e.target.value)} />
        </label>
        <label style={labelStyle}>
          UTC offset at birth
          <input type="number" step="0.25" className="input-field" value={offset} onChange={(e) => setOffset(e.target.value)} />
        </label>
      </div>
      <p style={{ ...noteStyle, marginTop: "0.5rem" }}>
        Choosing a birthplace fills in its coordinates and standard-time offset. If daylight saving time was in
        effect when you were born, increase the offset by 1 (for example, New York in summer is UTC−4, not −5).
        You can also type any town&apos;s coordinates directly.
      </p>

      <button className="btn btn-primary" onClick={calculate} style={{ marginTop: "1rem" }}>
        🌟 Calculate My Birth Chart
      </button>

      {error && (
        <p role="alert" style={{ marginTop: "1rem", color: "#b3261e", fontWeight: 600 }}>
          {error}
        </p>
      )}

      {result && (
        <div style={{ marginTop: "1.5rem" }}>
          <ChartWheel result={result} />
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", marginTop: "1rem" }}>
            <PlacementCard title="Sun sign" icon="☉" p={result.sun} blurb="The Sun sign is set by your birth date and is the core identity in astrology." />
            <PlacementCard title="Moon sign" icon="☽" p={result.moon} blurb="The Moon changes sign about every 2½ days and is linked to feelings and instincts." />
            {result.rising ? (
              <PlacementCard title="Rising sign (Ascendant)" icon="↑" p={result.rising} blurb="The sign rising in the east at your birth moment; it needs an accurate birth time and place." />
            ) : (
              <div style={{ border: "1px dashed var(--line, #ddd)", borderRadius: 12, padding: "1rem" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--ink2)" }}>↑ Rising sign</div>
                <p style={{ color: "var(--ink2)", lineHeight: 1.6, marginTop: "0.4rem" }}>
                  Add your birth time to reveal the rising sign and Midheaven — they change roughly every two hours.
                  Without a time, the Moon sign above is calculated for midday and can differ near a sign change.
                </p>
              </div>
            )}
            {result.midheaven && (
              <PlacementCard title="Midheaven (MC)" icon="⬆" p={result.midheaven} blurb="The highest zodiac point at your birth, linked in astrology to career and public life." />
            )}
          </div>
          <p style={{ ...noteStyle, marginTop: "1rem" }}>
            Calculated entirely in your browser by SmartEdgeTools — your birth details are never sent to or stored
            on any server. Positions use standard low-precision astronomy formulas (Sun accurate to about 0.01°,
            Moon to a few tenths of a degree), which is enough to place each point in its sign.
          </p>
        </div>
      )}
    </div>
  );
}
