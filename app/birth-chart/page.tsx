import Link from "next/link";
import BirthChartCalculator from "../components/BirthChartCalculator";
import ToolExtras from "../components/ToolExtras";
import { JsonLd, webApplicationSchema } from "../lib/jsonld";

const faqs = [
  {
    question: "Why does my chart look different on another website?",
    answer:
      "Astrologers use different house systems (for example Placidus and Whole Sign) and different zodiac conventions (tropical or sidereal), so the same birth details can produce different charts. This calculator uses the tropical zodiac and reports the Sun, Moon, Ascendant, and Midheaven rather than a full house layout.",
  },
  {
    question: "Can a birth chart predict my future?",
    answer:
      "Astrology is a cultural and reflective tradition, not a science, and scientific studies have not shown that birth charts predict personality or events. Use the chart for interest and self-reflection, and do not base medical, financial, or legal decisions on it.",
  },
  {
    question: "Who calculates the chart, and is my birth data stored?",
    answer:
      "SmartEdgeTools calculates your chart with its own code, entirely inside your browser. Your birth date, time, and place are never sent to or stored on any server — closing the page erases them.",
  },
  {
    question: "What if I don't know my birth time?",
    answer:
      "You can still get your Sun sign, which depends on the date alone, and a Moon sign calculated for midday. The Moon changes sign about every two and a half days, so if it changed signs on your birth date, the midday result may differ from your exact one. The rising sign and Midheaven change roughly every two hours, so they are only shown when a birth time is provided.",
  },
  {
    question: "How accurate is this calculator?",
    answer:
      "It uses standard low-precision astronomy formulas: the Sun's position is accurate to about 0.01 degrees and the Moon's to a few tenths of a degree, which is enough to place each point in the correct sign. When a result falls within one degree of a sign boundary, the calculator flags it, because a small difference in birth time or method could move it into the neighbouring sign.",
  },
];

export default function BirthChartPage() {
  return (
    <main className="page-wrap">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            webApplicationSchema({
              name: "Birth Chart Calculator",
              path: "/birth-chart",
              description:
                "Calculate your Sun, Moon, and rising signs from your birth date, time, and place — computed in your browser by SmartEdgeTools.",
              category: "LifestyleApplication",
            }),
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ],
        }}
      />
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <section className="tool-container" style={{ maxWidth: 920 }}>
          <div className="badge" style={{ marginBottom: "1rem" }}>Astrology</div>
          <h1>Birth Chart Calculator</h1>
          <p style={{ color: "var(--ink2)", lineHeight: 1.7, margin: "0.75rem 0 1.5rem" }}>
            Enter your birth date, time, and place to find your Sun, Moon, and rising signs — calculated by our own
            code, right in your browser. Nothing you enter leaves this page.
          </p>
          <BirthChartCalculator />
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
        <p>
          Most people start with the &ldquo;Big Three&rdquo;. The <strong>Sun sign</strong> is the sign the Sun was in on
          your birth date — the one you already know from horoscope columns. The <strong>Moon sign</strong> is where the
          Moon was, which changes about every two and a half days. The <strong>rising sign</strong> (Ascendant) is the
          sign that was coming up over the eastern horizon at your birth moment, and it changes roughly every two
          hours, which is why it needs an accurate birth time and place.
        </p>

        <h3 className="text-lg font-semibold text-gray-900">A worked example</h3>
        <p>
          For someone born on <strong>15 June 1990 at 08:30 in London</strong>, this calculator gives: Sun in Gemini at
          24.0°, Moon in Pisces at 12.8°, a Leo rising sign at 7.9°, and the Midheaven in Aries at 17.0°. The June date
          alone fixes the Sun in Gemini. The Moon had entered Pisces earlier that week and stays there for about two
          and a half days. The rising sign is the time-sensitive part: at 08:30 in London the eastern horizon pointed
          into Leo, but a birth two hours earlier or later would have given Cancer or Virgo instead. London was on
          British Summer Time that morning (UTC+1), so the offset matters as much as the clock time — the calculator
          asks for the offset that applied at the birthplace on that date.
        </p>

        <h3 className="text-lg font-semibold text-gray-900">Why birth date, time, and place all matter</h3>
        <p>
          Your Sun sign depends mostly on the date. The Moon spends only about two and a half days in each sign, so on some
          dates its sign depends on the birth time. The Ascendant (rising sign) changes roughly every two hours, and house
          placements depend on both the exact time and the birthplace. If you do not know your birth time, treat the rising
          sign and house results as uncertain rather than exact.
        </p>

        <h3 className="text-lg font-semibold text-gray-900">How this calculator works</h3>
        <p>
          The calculator uses real astronomy, computed on your device. It converts your birth moment to a Julian day,
          works out the Sun&apos;s and Moon&apos;s positions along the ecliptic (the Sun&apos;s path across the sky) from
          standard orbital formulas, and — for the rising sign — finds which point of the ecliptic was exactly on the
          eastern horizon at your birthplace, using the local sidereal time (the Earth&apos;s rotation measured against
          the stars). The Sun&apos;s position is accurate to about a hundredth of a degree and the Moon&apos;s to a few
          tenths of a degree, which is comfortably enough to name the right sign. The honest exception is a result
          within one degree of a sign boundary: there, a few minutes&apos; difference in birth time, or a different
          calculation method, can flip the sign, and the calculator flags those results instead of pretending to be
          certain. It uses the tropical zodiac, the convention behind Western horoscopes, in which 0° Aries is fixed to
          the March equinox.
        </p>

        <h3 className="text-lg font-semibold text-gray-900">Terms you may see in a chart</h3>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Ascendant (rising sign):</strong> the zodiac sign on the eastern horizon at the moment of birth.</li>
          <li><strong>Midheaven:</strong> the point of the zodiac highest in the sky at birth, often linked to public life and career.</li>
          <li><strong>Aspects:</strong> the angles between planets, such as conjunctions and oppositions, which astrologers use to describe how themes interact.</li>
          <li><strong>Retrograde:</strong> a planet that appears to move backward from Earth&apos;s point of view. This is an optical effect, not a real reversal.</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-900">Frequently asked questions</h3>
        {faqs.map((f) => (
          <div key={f.question}>
            <h4 className="font-semibold">{f.question}</h4>
            <p>{f.answer}</p>
          </div>
        ))}
      </section>
      <ToolExtras href="/birth-chart" />
    </main>
  );
}
