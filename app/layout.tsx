import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Tools - Free Online Image, PDF & Typing Tools",
  description:
    "Free online tools to resize images, compress files, merge PDFs, and test typing speed. Fast, secure, and easy to use.",
  keywords: [
    "image resizer",
    "image compressor",
    "pdf merge",
    "typing test",
    "online tools",
  ],
  verification: {
    google: "K_-YbyZLqsDANY55cqnQnxbI6K9jxu4qd7b1SK0ip84",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8430178179260712"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}