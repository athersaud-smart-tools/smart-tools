"use client";

import Link from "next/link";
import ToolGuide from "@/app/components/ToolGuide";
import TipCalculatorTool from "@/app/components/TipCalculatorTool";

export default function TipCalculator() {
  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container">
          <TipCalculatorTool
            heading="h1"
            intro={
              <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                Work out the tip, the total with tip, and exactly what each person pays when you split the bill.
              </p>
            }
          />
        </div>
      </div>
      <ToolGuide guide="tip" />
    </main>
  );
}
