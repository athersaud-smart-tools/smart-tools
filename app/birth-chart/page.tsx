"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import ToolExtras from "../components/ToolExtras";

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

      <section className="mx-auto my-10 max-w-4xl space-y-5 px-6 leading-7 text-gray-700" aria-labelledby="birth-chart-guide">
        <h2 id="birth-chart-guide" className="text-2xl font-semibold text-gray-900">How to read a natal chart</h2>
        <p>
          A natal chart, also called a birth chart, is a diagram of where the Sun, Moon, and planets appeared in the sky
          from a specific place at the moment of birth. Astrologers read it using three building blocks:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Planets and luminaries</strong> (the Sun, Moon, and planets) are the &ldquo;what&rdquo;: each represents a theme such as identity, emotion, or communication.</li>
          <li><strong>Zodiac signs</strong> are the &ldquo;how&rdquo;: the sign a planet sits in describes the style in which that theme is expressed.</li>
          <li><strong>Houses</strong> are the &ldquo;where&rdquo;: the chart is divided into twelve houses, each linked to an area of life such as home, work, or relationships.</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900">Why birth date, time, and place all matter</h3>
        <p>
          Your Sun sign depends mostly on the date. The Moon spends only about two and a half days in each sign, so on some
          dates its sign depends on the birth time. The Ascendant (rising sign) changes roughly every two hours, and house
          placements depend on both the exact time and the birthplace. If you do not know your birth time, treat the rising
          sign and house results as uncertain rather than exact.
        </p>

        <h3 className="text-lg font-semibold text-gray-900">Terms you may see in a chart</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Ascendant (rising sign):</strong> the zodiac sign on the eastern horizon at the moment of birth.</li>
          <li><strong>Midheaven:</strong> the point of the zodiac highest in the sky at birth, often linked to public life and career.</li>
          <li><strong>Aspects:</strong> the angles between planets, such as conjunctions and oppositions, which astrologers use to describe how themes interact.</li>
          <li><strong>Retrograde:</strong> a planet that appears to move backward from Earth&apos;s point of view. This is an optical effect, not a real reversal.</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900">Frequently asked questions</h3>
        <div>
          <h4 className="font-semibold">Why does my chart look different on another website?</h4>
          <p>Astrologers use different house systems (for example Placidus and Whole Sign) and different zodiac conventions (tropical or sidereal), so the same birth details can produce different charts.</p>
        </div>
        <div>
          <h4 className="font-semibold">Can a birth chart predict my future?</h4>
          <p>Astrology is a cultural and reflective tradition, not a science, and scientific studies have not shown that birth charts predict personality or events. Use the chart for interest and self-reflection, and do not base medical, financial, or legal decisions on it.</p>
        </div>
        <div>
          <h4 className="font-semibold">Who provides the chart calculation?</h4>
          <p>The chart is generated by an embedded widget from AstroWay, a third-party service, rather than by SmartEdgeTools code. If the widget does not load, check your connection or try again later.</p>
        </div>
      </section>
      <ToolExtras href="/birth-chart" />
    </main>
  );
}
