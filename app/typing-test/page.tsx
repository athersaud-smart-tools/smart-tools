"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const sampleText = "The quick brown fox jumps over the lazy dog and the dog barked loudly at the fox running away";

export default function TypingTest() {
  const [input, setInput] = useState("");
  const [time, setTime] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWpm] = useState<number | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);

  useEffect(() => {
    let timer: any;
    if (isActive && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    } else if (time === 0 && isActive) {
      calculateResults();
      setIsActive(false);
    }
    return () => clearInterval(timer);
  }, [isActive, time, input]);

  const startTest = () => {
    setIsActive(true);
    setTime(30);
    setInput("");
    setWpm(null);
    setAccuracy(null);
  };

  const calculateResults = () => {
    const words = input.trim().split(/\s+/).filter(Boolean);
    const correctChars = input.split("").filter((c, i) => c === sampleText[i]).length;
    const acc = input.length > 0 ? Math.round((correctChars / input.length) * 100) : 0;
    setWpm(words.length * 2);
    setAccuracy(acc);
  };

  const progress = (input.length / sampleText.length) * 100;
  const timeColor = time <= 10 ? "var(--accent)" : "var(--ink)";

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container">
          <h1>⌨️ Typing Speed Test</h1>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ flex: 1, background: "var(--bg)", borderRadius: 12, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "Syne", color: timeColor }}>{time}s</div>
              <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Time Left</div>
            </div>
            <div style={{ flex: 1, background: "var(--bg)", borderRadius: 12, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "Syne", color: "var(--accent2)" }}>{wpm ?? "—"}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>WPM</div>
            </div>
            <div style={{ flex: 1, background: "var(--bg)", borderRadius: 12, padding: "1rem", textAlign: "center", border: "1.5px solid var(--border)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, fontFamily: "Syne", color: "var(--green)" }}>{accuracy !== null ? accuracy + "%" : "—"}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--ink2)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Accuracy</div>
            </div>
          </div>

          {/* Sample text */}
          <div style={{ marginBottom: "1rem" }}>
            <label className="field-label">Type This Text</label>
            <div className="result-box" style={{ fontSize: "1rem", lineHeight: 1.8, letterSpacing: "0.02em" }}>
              {sampleText.split("").map((char, i) => {
                let color = "var(--ink2)";
                if (i < input.length) color = input[i] === char ? "var(--green)" : "var(--accent)";
                return <span key={i} style={{ color }}>{char}</span>;
              })}
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ height: 4, background: "var(--border)", borderRadius: 2, marginBottom: "1rem", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${Math.min(progress, 100)}%`, background: "var(--accent)", borderRadius: 2, transition: "width 0.1s" }} />
          </div>

          {/* Input */}
          <div style={{ marginBottom: "1rem" }}>
            <label className="field-label">Your Input</label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={!isActive}
              className="input-field"
              rows={3}
              placeholder={isActive ? "Start typing..." : "Press Start Test to begin"}
            />
          </div>

          <button onClick={startTest} className="btn btn-primary">
            {isActive ? "🔄 Restart" : "▶ Start Test"}
          </button>

          {wpm !== null && (
            <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(26,140,91,0.08)", borderRadius: 10, textAlign: "center", border: "1.5px solid var(--green)" }}>
              <p style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "1.1rem", color: "var(--green)" }}>
                🎉 You typed {wpm} WPM with {accuracy}% accuracy!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the Typing Test?</h2>
        <p>
          The typing test measures how fast and accurately you can type by having you type a
          passage of text against the clock. At the end, you get your typing speed in words
          per minute (WPM) along with your accuracy percentage.
        </p>

        <h2>How to Use the Typing Test</h2>
        <ol>
          <li>Click start to begin the test</li>
          <li>Type the displayed text as quickly and accurately as you can</li>
          <li>The test ends automatically once you finish typing</li>
          <li>View your typing speed (WPM) and accuracy results</li>
        </ol>

        <h2>Why Take a Typing Test</h2>
        <p>
          Typing speed matters for schoolwork, jobs that involve a lot of computer use, and
          general productivity. Testing regularly helps you track improvement over time and
          identify areas, like accuracy or specific letter combinations, that need practice.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Practicing and improving typing speed for school or work</li>
          <li>Preparing for typing speed requirements on job applications</li>
          <li>Tracking typing progress over time</li>
          <li>Friendly typing speed competitions with friends</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>What is a good typing speed?</h3>
        <p>
          Average typing speed is generally around 40 WPM, while speeds of 60-80 WPM or
          higher are considered fast. Accuracy matters just as much as speed.
        </p>

        <h3>How is accuracy calculated?</h3>
        <p>
          Accuracy is calculated by comparing the characters you typed correctly against the
          total characters in the passage, shown as a percentage.
        </p>
      </div>
    </main>
  );
}
