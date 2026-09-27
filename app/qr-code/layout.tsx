import type { Metadata } from "next";

const title = "QR Code Generator Online";
const description = "Create QR codes online from text or links with the free SmartEdgeTools QR code generator.";
const canonical = "/qr-code";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
