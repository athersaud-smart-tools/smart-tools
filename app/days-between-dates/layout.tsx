import type { Metadata } from "next";

const title = "Days Between Dates Calculator";
const description = "Count the exact days between two dates, with a weeks breakdown and a calendar years/months/days result. Handles leap years correctly.";
const canonical = "/days-between-dates";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
