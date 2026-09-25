import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency Converter — Convert World Currencies",
  description: "Convert major world currencies with SmartEdgeTools. Choose your currencies, enter an amount, and get an exchange-rate calculation quickly.",
  alternates: { canonical: "/currency-converter" },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
