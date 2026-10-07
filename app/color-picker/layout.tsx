import type { Metadata } from "next";

const title = "Color Picker — Get HEX, RGB and HSL Codes Online";
const description =
  "Pick any color online and get HEX, RGB, and HSL values instantly with the free SmartEdgeTools color picker. No signup, just copy and use.";
const canonical = "/color-picker";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    url: canonical,
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
