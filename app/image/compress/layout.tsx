import type { Metadata } from "next";

const title = "Image Compressor — Compress Images Online";
const description = "Compress an image in your browser, compare the original and JPEG file sizes, and download the result. Choose a quality setting while keeping the original unchanged.";
const canonical = "/image/compress";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
