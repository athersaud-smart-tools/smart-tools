import type { Metadata } from "next";

const title = "GPA Calculator — 4.0 Scale, Credits & Grade Points";
const description = "Calculate your GPA on the standard 4.0 scale from letter grades and credit hours. Free GPA calculator with grade points, worked examples, and instant results.";
const canonical = "/gpa-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
