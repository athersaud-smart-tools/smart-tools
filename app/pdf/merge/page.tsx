"use client";

import { useState } from "react";
import Link from "next/link";
import { PDFDocument } from "pdf-lib";

export default function MergePDF() {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedUrl, setMergedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e: any) => {
    setFiles(Array.from(e.target.files));
    setMergedUrl(null);
  };

  const mergePDFs = async () => {
    if (files.length < 2) { alert("Please upload at least 2 PDFs"); return; }
    setLoading(true);
    try {
      const mergedPdf = await PDFDocument.create();
      for (let file of files) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(bytes);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach((page) => mergedPdf.addPage(page));
      }
      const mergedBytes = await mergedPdf.save();
      const buffer = mergedBytes.buffer.slice(
        mergedBytes.byteOffset,
        mergedBytes.byteOffset + mergedBytes.byteLength
      ) as ArrayBuffer;
      const blob = new Blob([buffer], { type: "application/pdf" });
      setMergedUrl(URL.createObjectURL(blob));
    } catch (err) {
      alert("Error merging PDFs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        {/* TOOL */}
        <div className="tool-container" style={{ maxWidth: 720, marginBottom: "2rem" }}>
          <h1>📄 PDF Merge Tool — Combine PDF Files Online Free</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Merge multiple PDF files into one document instantly. No sign up, no watermark, completely free!
          </p>

          <div style={{ marginBottom: "1rem" }}>
            <label className="field-label">Upload PDF Files (select 2 or more)</label>
            <input
              type="file"
              multiple
              accept="application/pdf"
              onChange={handleUpload}
              className="input-field"
              style={{ padding: "0.6rem" }}
            />
          </div>

          {files.length > 0 && (
            <div style={{ marginBottom: "1rem" }}>
              <label className="field-label">Selected Files ({files.length})</label>
              <div className="result-box" style={{ padding: "0.75rem" }}>
                {files.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0", fontSize: "0.875rem", color: "var(--ink2)" }}>
                    <span>📄</span> {f.name}
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={mergePDFs}
            className="btn btn-primary"
            disabled={files.length < 2 || loading}
            style={{ opacity: files.length < 2 ? 0.6 : 1 }}
          >
            {loading ? "Merging..." : "🔗 Merge PDFs Now"}
          </button>

          {loading && (
            <div style={{ textAlign: "center", marginTop: "1rem", display: "flex", gap: 6, justifyContent: "center" }}>
              <span className="loading-dot" />
              <span className="loading-dot" />
              <span className="loading-dot" />
            </div>
          )}

          {mergedUrl && (
            <div style={{ marginTop: "1rem", padding: "1rem", background: "rgba(26,140,91,0.08)", borderRadius: 10, textAlign: "center", border: "1.5px solid var(--green)" }}>
              <p style={{ fontFamily: "Syne", fontWeight: 700, color: "var(--green)", marginBottom: "0.75rem" }}>
                ✅ PDFs merged successfully!
              </p>
              <a href={mergedUrl} download="merged.pdf">
                <button className="btn btn-success" style={{ marginTop: 0 }}>⬇️ Download Merged PDF</button>
              </a>
            </div>
          )}
        </div>

        {/* HOW TO USE */}
        <div className="tool-container" style={{ maxWidth: 720, marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1.25rem" }}>📋 How to Merge PDF Files Online</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { step: "1", title: "Upload Your PDF Files", desc: "Click the upload button and select 2 or more PDF files from your computer, phone or tablet." },
              { step: "2", title: "Click Merge PDFs", desc: "Press the Merge PDFs button and our tool will instantly combine all your files into one PDF." },
              { step: "3", title: "Download Your Merged PDF", desc: "Once done, click the Download button to save your merged PDF file to your device for free." },
            ].map((item) => (
              <div key={item.step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ minWidth: 36, height: 36, borderRadius: "50%", background: "var(--accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Syne", fontWeight: 800, fontSize: "1rem" }}>{item.step}</div>
                <div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{item.title}</h3>
                  <p style={{ color: "var(--ink2)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="tool-container" style={{ maxWidth: 720, marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1.25rem" }}>⭐ Why Use Our PDF Merge Tool?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            {[
              { icon: "🆓", title: "100% Free", desc: "No hidden fees, no subscriptions, completely free forever." },
              { icon: "🔒", title: "Private & Secure", desc: "Your files are never uploaded to any server. Everything happens in your browser." },
              { icon: "⚡", title: "Super Fast", desc: "Merge PDF files in seconds, no waiting required." },
              { icon: "📱", title: "Works on All Devices", desc: "Use on your phone, tablet, laptop or desktop computer." },
              { icon: "🚫", title: "No Watermark", desc: "Download your merged PDF with no watermarks added." },
              { icon: "✅", title: "No Sign Up Needed", desc: "No account or registration required. Just upload and merge!" },
            ].map((f) => (
              <div key={f.title} style={{ background: "var(--bg)", borderRadius: 10, padding: "1rem", border: "1.5px solid var(--border)" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{f.icon}</div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.25rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--ink2)", lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="tool-container" style={{ maxWidth: 720, marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1.25rem" }}>❓ Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { q: "How do I merge PDF files online for free?", a: "Simply upload your PDF files using the tool above, click the Merge PDFs button, and download your combined PDF. It is completely free with no sign up required." },
              { q: "Is there a limit to how many PDFs I can merge?", a: "No! You can merge as many PDF files as you want. Our tool handles multiple files at once with no limits." },
              { q: "Are my PDF files safe and private?", a: "Yes, 100%. Your files are never sent to any server. The merging happens entirely in your browser, so your documents stay completely private." },
              { q: "Can I merge PDFs on my phone?", a: "Yes! Our PDF merge tool works perfectly on all devices including iPhone, Android phones, tablets and computers." },
              { q: "Will the merged PDF have a watermark?", a: "No, never. Your merged PDF will be completely clean with no watermarks added." },
              { q: "What is the best free tool to merge PDF files?", a: "SmartTools PDF Merger is one of the best free online tools to combine PDF files. It is fast, private, free and works on all devices without any sign up." },
            ].map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1rem" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, marginBottom: "0.4rem", color: "var(--ink)" }}>{faq.q}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--ink2)", lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED TOOLS */}
        <div className="tool-container" style={{ maxWidth: 720 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: "1.25rem" }}>🔧 Other Free Tools You May Like</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.75rem" }}>
            {[
              { href: "/image/resize", icon: "🖼️", title: "Image Resizer" },
              { href: "/image/compress", icon: "⚡", title: "Image Compressor" },
              { href: "/word-counter", icon: "🔡", title: "Word Counter" },
              { href: "/qr-code", icon: "📷", title: "QR Code Generator" },
              { href: "/ai-rewrite", icon: "🤖", title: "AI Text Improver" },
              { href: "/password", icon: "🔐", title: "Password Generator" },
            ].map((tool) => (
              <Link key={tool.href} href={tool.href} style={{ background: "var(--bg)", borderRadius: 10, padding: "0.875rem", border: "1.5px solid var(--border)", textDecoration: "none", textAlign: "center", transition: "all 0.2s" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.4rem" }}>{tool.icon}</div>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--ink)" }}>{tool.title}</div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
