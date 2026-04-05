"use client";

import { useState } from "react";
import Link from "next/link";

export default function CompressImage() {
  const [image, setImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.7);

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const compressImage = () => {
    if (!image) return;
    const img = new Image();
    img.src = image;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      setCompressedImage(canvas.toDataURL("image/jpeg", quality));
    };
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container">
          <h1>⚡ Image Compressor</h1>

          <div style={{ marginBottom: "1rem" }}>
            <label className="field-label">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="input-field"
              style={{ padding: "0.6rem" }}
            />
          </div>

          <div style={{ marginBottom: "1.25rem" }}>
            <label className="field-label">Quality: {Math.round(quality * 100)}%</label>
            <input
              type="range"
              min="0.1" max="1" step="0.05"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--accent)" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--ink2)", marginTop: 4 }}>
              <span>Smaller file</span>
              <span>Better quality</span>
            </div>
          </div>

          <button onClick={compressImage} className="btn btn-primary" disabled={!image}>
            Compress Image
          </button>

          {compressedImage && (
            <div style={{ marginTop: "1.5rem" }}>
              <label className="field-label">Preview</label>
              <div className="result-box" style={{ padding: "0.75rem", textAlign: "center" }}>
                <img src={compressedImage} alt="compressed" style={{ maxWidth: "100%", borderRadius: 8 }} />
              </div>
              <a href={compressedImage} download="compressed.jpg">
                <button className="btn btn-success">⬇️ Download Image</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
