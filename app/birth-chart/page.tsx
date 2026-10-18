"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function BirthChartPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.src = "https://app.astroway.info/widget.js";
    script.async = true;
    container.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, []);

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <section className="tool-container" style={{ maxWidth: 920 }}>
          <div className="badge" style={{ marginBottom: "1rem" }}>Astrology</div>
          <h1>Birth Chart Calculator</h1>
          <p style={{ color: "var(--ink2)", lineHeight: 1.7, margin: "0.75rem 0 1.5rem" }}>
            Enter your birth date, time, and place to explore your natal chart, planetary placements, and houses.
          </p>

          <div
            ref={containerRef}
            data-astroway-widget="natal"
            data-lang="en"
            data-theme="light"
            style={{ minHeight: 640, width: "100%" }}
          />

          <p style={{ color: "var(--ink2)", fontSize: "0.8rem", lineHeight: 1.6, marginTop: "1rem" }}>
            The chart is provided by{" "}
            <a href="https://app.astroway.info" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)" }}>
              AstroWay
            </a>. AstroWay says birth details entered in the widget stay in the visitor&apos;s browser and are not sent to its server. The chart is displayed in an embedded widget on this page.
          </p>
        </section>
      </div>
    </main>
  );
}
