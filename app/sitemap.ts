import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smartedgetools.com";

  const routes = [
    "",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/blog",
    "/blog/best-online-tools-2026",
    "/blog/how-online-calculators-save-time",
    "/blog/why-browser-tools-are-growing",
    "/blog/top-tools-for-students",
    "/blog/best-free-image-tools",
    "/age-calculator",
    "/ai-rewrite",
    "/bmi-calculator",
    "/color-picker",
    "/currency-converter",
    "/image/compress",
    "/image/resize",
    "/loan-calculator",
    "/password",
    "/pdf/merge",
    "/percentage-calculator",
    "/qr-code",
    "/random-number",
    "/stopwatch",
    "/text-case",
    "/typing-test",
    "/unit-converter",
    "/word-counter",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
