import type { Metadata } from "next";

const title = "PDF Merge Tool — Combine Files Free";
const description = "Combine selected PDF pages into one document in your browser. No account is required; large files may be limited by device memory.";
const canonical = "/pdf/merge";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "merge pdf",
    "combine pdf",
    "pdf merger online",
    "merge pdf files free",
    "online pdf merge",
    "pdf combine tool",
    "merge documents online",
    "pdf merge online tool",
    "combine pdf files",
    "merge pdf free no watermark",
  ],
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
