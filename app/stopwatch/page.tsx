"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<any>(null);

  const start = () => {
    setRunning(true);
    intervalRef.current = setInterval(() => setTime((t) => t + 10), 10);
  };

  const pause = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
  };

  const lap = () => setLaps((prev) => [...prev, time]);

  const format = (ms: number) => {
    const m = Math.floor(ms / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const cs = Math.floor((ms % 1000) / 10);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}.${String(cs).padStart(2, "0")}`;
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 480, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <h1>⏱️ Stopwatch</h1>

          {/* Timer display */}
          <div style={{ textAlign: "center", padding: "2rem 1rem", background: "var(--ink)", borderRadius: 16, marginBottom: "1.5rem" }}>
            <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: "3.5rem", color: running ? "#4ade80" : "#fff", letterSpacing: "0.05em", fontVariantNumeric: "tabular-nums" }}>
              {format(time)}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {!running ? (
              <button className="btn btn-primary" onClick={start} style={{ flex: 2 }}>
                ▶ {time === 0 ? "Start" : "Resume"}
              </button>
            ) : (
              <button className="btn btn-primary" onClick={pause} style={{ flex: 2, background: "#e8a52f" }}>
                ⏸ Pause
              </button>
            )}
            <button
              className="btn"
              onClick={lap}
              disabled={!running}
              style={{ flex: 1, background: "var(--bg)", color: "var(--ink)", border: "1.5px solid var(--border)", opacity: !running ? 0.5 : 1 }}
            >
              🏁 Lap
            </button>
            <button
              className="btn"
              onClick={reset}
              style={{ flex: 1, background: "var(--bg)", color: "var(--ink)", border: "1.5px solid var(--border)" }}
            >
              ↺ Reset
            </button>
          </div>

          {/* Laps */}
          {laps.length > 0 && (
            <div>
              <label className="field-label">Laps ({laps.length})</label>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", maxHeight: 200, overflowY: "auto" }}>
                {[...laps].reverse().map((lap, i) => {
                  const lapNum = laps.length - i;
                  const lapTime = lapNum > 1 ? lap - laps[lapNum - 2] : lap;
                  return (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0.875rem", background: "var(--bg)", borderRadius: 8, border: "1.5px solid var(--border)" }}>
                      <span style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "0.85rem", color: "var(--ink2)" }}>Lap {lapNum}</span>
                      <span style={{ fontFamily: "monospace", fontSize: "0.9rem", color: "var(--ink)" }}>{format(lapTime)}</span>
                      <span style={{ fontFamily: "monospace", fontSize: "0.9rem", color: "var(--accent)" }}>{format(lap)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
