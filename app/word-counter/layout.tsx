import type { Metadata } from "next";

const title = "Word Counter — Count Words and Characters";
const description = "Count words, characters, sentences, paragraphs, and reading time as you type. Text is counted in your browser and isn't sent to a server.";
const canonical = "/word-counter";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
