import type { Metadata } from "next";
export const metadata: Metadata = { title: "BMI Calculator — Calculate Body Mass Index", description: "Calculate BMI from height and weight with the free SmartEdgeTools BMI calculator and learn what the result means.", alternates: { canonical: "/bmi-calculator" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
