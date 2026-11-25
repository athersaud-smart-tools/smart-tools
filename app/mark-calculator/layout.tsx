import type { Metadata } from "next";

const title = "Mark Calculator — Exam Percentage & Grade";
const description = "Turn exam marks into a percentage and a grade: enter the marks you scored and the total marks, get your percentage, grade, and marks lost — with worked examples for board exams.";
const canonical = "/mark-calculator";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
