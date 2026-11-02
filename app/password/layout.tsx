import type { Metadata } from "next";

const title = "Password Generator Online";
const description = "Generate random passwords with the length and character types you choose, right in your browser. Includes tips for safer account habits.";
const canonical = "/password";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { type: "website", url: canonical, title, description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
