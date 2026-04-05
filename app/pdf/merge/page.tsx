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
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container">
          <h1>📄 PDF Merge Tool</h1>

          <div style={{ marginBottom: "1rem" }}>
            <label className="field-label">Upload PDFs (select 2 or more)</label>
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
            {loading ? "Merging..." : "🔗 Merge PDFs"}
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
      </div>
    </main>
  );
}
