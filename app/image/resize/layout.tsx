import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Image Resizer — Resize Images Online",
  description: "Resize images online to the dimensions you need with the free SmartEdgeTools image resizer.",
  alternates: { canonical: "/image/resize" },
  openGraph: { type: "website", url: "/image/resize", title: "Image Resizer — Resize Images Online", description: "Resize images online to the dimensions you need with the free SmartEdgeTools image resizer.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SmartEdgeTools Image Resizer" }] },
  twitter: { card: "summary_large_image", title: "Image Resizer — Resize Images Online", description: "Resize images online to the dimensions you need with the free SmartEdgeTools image resizer.", images: ["/opengraph-image"] },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
