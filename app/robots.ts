export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://smart-tools-eta.vercel.app/sitemap.xml",
  };
}