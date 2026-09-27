import type { Metadata } from "next";

const title = "Image Compressor — Compress Images Online";
const description = "Compress JPG, PNG, and other images online to reduce file size with the free SmartEdgeTools image compressor.";
const canonical = "/image/compress";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
