import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Smart Tools",
  description:
    "Contact Smart Tools with questions, feedback, suggestions, or reports about the website and its online tools.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
