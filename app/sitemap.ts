import type { MetadataRoute } from "next";
import { categories as conversionCategories, pairs as conversionPairs, pairPath } from "./lib/conversions";

const siteUrl = "https://smartedgetools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    // Main pages
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.4 },

    // Tools
    { path: "/age-calculator", changeFrequency: "monthly", priority: 0.9 },
    { path: "/days-between-dates", changeFrequency: "monthly", priority: 0.8 },
    { path: "/ai-rewrite", changeFrequency: "weekly", priority: 0.9 },
    { path: "/bmi-calculator", changeFrequency: "monthly", priority: 0.9 },
    { path: "/birth-chart", changeFrequency: "monthly", priority: 0.8 },
    { path: "/color-picker", changeFrequency: "monthly", priority: 0.8 },
    { path: "/currency-converter", changeFrequency: "daily", priority: 0.9 },
    { path: "/final-grade-calculator", changeFrequency: "monthly", priority: 0.8 },
    { path: "/gpa-calculator", changeFrequency: "monthly", priority: 0.8 },
    { path: "/image/compress", changeFrequency: "monthly", priority: 0.8 },
    { path: "/image/resize", changeFrequency: "monthly", priority: 0.8 },
    { path: "/loan-calculator", changeFrequency: "monthly", priority: 0.8 },
    { path: "/mortgage-calculator", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tip-calculator", changeFrequency: "monthly", priority: 0.8 },
    { path: "/json-formatter", changeFrequency: "monthly", priority: 0.8 },
    { path: "/password", changeFrequency: "monthly", priority: 0.8 },
    { path: "/pdf/merge", changeFrequency: "monthly", priority: 0.8 },
    { path: "/percentage-calculator", changeFrequency: "monthly", priority: 0.8 },
    { path: "/qr-code", changeFrequency: "monthly", priority: 0.8 },
    { path: "/random-number", changeFrequency: "monthly", priority: 0.7 },
    { path: "/stopwatch", changeFrequency: "monthly", priority: 0.7 },
    { path: "/text-case", changeFrequency: "monthly", priority: 0.8 },
    { path: "/typing-test", changeFrequency: "monthly", priority: 0.8 },
    { path: "/unit-converter", changeFrequency: "monthly", priority: 0.9 },
    { path: "/word-counter", changeFrequency: "monthly", priority: 0.8 },

    // Blog
    { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
    {
      path: "/blog/best-online-tools-2026",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog/how-online-calculators-save-time",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog/why-browser-tools-are-growing",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog/top-tools-for-students",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog/best-free-image-tools",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      path: "/blog/resize-compress-images-for-websites",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { path: "/blog/calculate-monthly-loan-payments", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/percentage-increase-decrease", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/compress-image-under-100-kb", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/exchange-rates-and-bank-rates", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/calculate-age-years-months-days", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/bmi-calculation-limits", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/merge-pdf-files-safely", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/convert-common-units", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/create-strong-password", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/format-json-validate", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/typing-speed-test-improve-wpm", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/calculate-final-grade-needed", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/how-to-calculate-weighted-grades", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/how-to-calculate-mortgage-payment", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/how-to-calculate-tip", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/how-many-days-between-two-dates", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/how-to-calculate-percent-error", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/calculate-gpa", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/generate-random-numbers", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/create-qr-code", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/use-color-picker-hex-rgb-hsl", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/use-stopwatch-laps", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/count-words-characters-reading-time", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/convert-text-case", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/improve-text-ai-safely", changeFrequency: "monthly", priority: 0.7 },
    { path: "/blog/understand-birth-chart", changeFrequency: "monthly", priority: 0.7 },
  ];

  // Pages whose content was materially updated on 2026-11-03 (expanded tool
  // guides for eight tools, plus the new GPA calculator and its guide).
  // Everything else carries the site's previous content update, 2026-11-01.
  const updatedPaths = new Set([
    "/ai-rewrite", "/color-picker", "/password", "/qr-code",
    "/random-number", "/stopwatch", "/text-case", "/typing-test",
    "/gpa-calculator", "/blog/calculate-gpa",
  ]);
  // Materially updated on 2026-11-06: expanded JSON Formatter and Word
  // Counter guides ahead of the AdSense review request.
  const updatedNov6 = new Set(["/json-formatter", "/word-counter"]);
  // Materially updated on 2026-11-15 (Batch 7): Birth Chart rebuilt with an
  // own-code calculator (was a third-party widget); its guide article updated.
  const updatedNov15 = new Set(["/birth-chart", "/blog/understand-birth-chart", "/tip-calculator", "/days-between-dates", "/mortgage-calculator", "/blog/how-to-calculate-weighted-grades", "/blog/calculate-final-grade-needed", "/final-grade-calculator", "/blog/how-to-calculate-mortgage-payment", "/blog/how-to-calculate-tip", "/blog/how-many-days-between-two-dates", "/blog/how-to-calculate-percent-error", "/blog/percentage-increase-decrease", "/bmi-calculator"]);

  const base = routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(updatedNov15.has(path) ? "2026-11-15" : updatedNov6.has(path) ? "2026-11-06" : updatedPaths.has(path) ? "2026-11-03" : "2026-11-01"),
    changeFrequency,
    priority,
  }));

  // Unit-converter expansion (Phase 0, built 2026-11-08): category hubs and
  // pair pages are generated from app/lib/conversions.ts so this list can
  // never drift from the pages that exist. NOTE: these URLs must only reach
  // production after the AdSense gate in the expansion plan is passed.
  const conversionRoutes: MetadataRoute.Sitemap = [
    ...conversionCategories.map((c) => ({
      url: `${siteUrl}/unit-converter/${c.id}`,
      lastModified: new Date("2026-11-08"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...conversionPairs.map((p) => ({
      url: `${siteUrl}${pairPath(p)}`,
      lastModified: new Date("2026-11-08"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...base, ...conversionRoutes];
}
