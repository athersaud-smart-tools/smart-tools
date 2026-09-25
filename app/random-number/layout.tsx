import type { Metadata } from "next";
export const metadata: Metadata = { title: "Random Number Generator — Generate Random Numbers", description: "Generate random numbers within a chosen range using the free SmartEdgeTools random number generator.", alternates: { canonical: "/random-number" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
