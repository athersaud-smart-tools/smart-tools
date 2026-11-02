import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Image Resizer — Resize Images Online",
  description: "Resize an image to exact pixel dimensions with an aspect-ratio lock. Processing happens in your browser and the result downloads as a JPEG.",
  alternates: { canonical: "/image/resize" },
  openGraph: { type: "website", url: "/image/resize", title: "Image Resizer — Resize Images Online", description: "Resize an image to exact pixel dimensions with an aspect-ratio lock. Processing happens in your browser and the result downloads as a JPEG.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SmartEdgeTools Image Resizer" }] },
  twitter: { card: "summary_large_image", title: "Image Resizer — Resize Images Online", description: "Resize an image to exact pixel dimensions with an aspect-ratio lock. Processing happens in your browser and the result downloads as a JPEG.", images: ["/opengraph-image"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
