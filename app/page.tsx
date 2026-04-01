export const metadata = {
  title: "Free Online Tools - Image Resize, Compress & Typing Test",
  description:
    "Use free online tools to resize images, compress files, and test typing speed. Fast, simple, and secure tools for everyday use.",
};

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* HERO SECTION */}
      <div className="text-center py-16 px-6 bg-white shadow">
        <h1 className="text-4xl font-bold mb-4">
          🚀 Smart Tools for Everyday Use
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Free online tools to resize images, compress files, and improve productivity.
        </p>
      </div>

      {/* TOOLS SECTION */}
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          🔧 Popular Tools
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <Link href="/image/resize">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
              <h3 className="text-lg font-bold mb-2">🖼️ Image Resizer</h3>
              <p className="text-gray-600 text-sm">
                Resize images quickly with perfect dimensions.
              </p>
            </div>
          </Link>

          <Link href="/image/compress">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
              <h3 className="text-lg font-bold mb-2">🖼️ Image Compressor</h3>
              <p className="text-gray-600 text-sm">
                Reduce image file size without losing quality.
              </p>
            </div>
          </Link>

          <Link href="/typing-test">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
              <h3 className="text-lg font-bold mb-2">⌨️ Typing Test</h3>
              <p className="text-gray-600 text-sm">
                Check your typing speed and improve your skills.
              </p>
            </div>
          </Link>

          <Link href="/pdf/merge">
  <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer">
    <h3 className="text-lg font-bold mb-2">📄 PDF Merge</h3>
    <p className="text-gray-600 text-sm">
      Combine multiple PDF files into one document.
    </p>
  </div>
</Link>

        </div>
      </div>

      {/* FOOTER */}
      <div className="text-center py-6 text-gray-500 text-sm">
        © 2026 Smart Tools. All rights reserved.
      </div>

    </main>
  );
}