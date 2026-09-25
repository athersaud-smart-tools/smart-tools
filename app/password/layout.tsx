import type { Metadata } from "next";
export const metadata: Metadata = { title: "Password Generator — Create Strong Passwords", description: "Generate strong random passwords with customizable options using the free SmartEdgeTools password generator.", alternates: { canonical: "/password" } };
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
