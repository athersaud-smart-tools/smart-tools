import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Age Calculator — Calculate Your Exact Age",
  description: "Calculate your exact age in years, months, days, weeks, and hours with the free SmartEdgeTools age calculator.",
  alternates: { canonical: "/age-calculator" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
