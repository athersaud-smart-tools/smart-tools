import type { MetadataRoute } from "next";

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
    { path: "/ai-rewrite", changeFrequency: "weekly", priority: 0.9 },
    { path: "/bmi-calculator", changeFrequency: "monthly", priority: 0.9 },
    { path: "/color-picker", changeFrequency: "monthly", priority: 0.8 },
    { path: "/currency-converter", changeFrequency: "daily", priority: 0.9 },
    { path: "/image/compress", changeFrequency: "monthly", priority: 0.8 },
    { path: "/image/resize", changeFrequency: "monthly", priority: 0.8 },
    { path: "/loan-calculator", changeFrequency: "monthly", priority: 0.8 },
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
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}
