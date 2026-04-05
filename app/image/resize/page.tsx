"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResizeImage() {
  const [image, setImage] = useState<string | null>(null);
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [lockRatio, setLockRatio] = useState(true);
  const [originalRatio, setOriginalRatio] = useState(1);

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      const img = new Image();
      img.src = url;
      img.onload = () => {
        const ratio = img.width / img.height;
        setOriginalRatio(ratio);
        setWidth(img.width);
        setHeight(img.height);
      };
    }
  };

  const handleWidthChange = (value: number) => {
    setWidth(value);
    if (lockRatio) setHeight(Math.round(value / originalRatio));
  };

  const handleHeightChange = (value: number) => {
    setHeight(value);
    if (lockRatio) setWidth(Math.round(value * originalRatio));
  };

  const resizeImage = () => {
    if (!image) return;
    const img = new Image();
    img.src = image;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, width, height);
      setResizedImage(canvas.toDataURL("image/jpeg"));
    };
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container">
          <h1>🖼️ Image Resizer</h1>

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

          <div style={{ display: "flex", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <div style={{ flex: 1 }}>
              <label className="field-label">Width (px)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => handleWidthChange(Number(e.target.value))}
                className="input-field"
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className="field-label">Height (px)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => handleHeightChange(Number(e.target.value))}
                className="input-field"
              />
            </div>
          </div>

          <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem", cursor: "pointer", fontSize: "0.9rem", color: "var(--ink2)" }}>
            <input
              type="checkbox"
              checked={lockRatio}
              onChange={() => setLockRatio(!lockRatio)}
            />
            🔒 Lock Aspect Ratio
          </label>

          <button onClick={resizeImage} className="btn btn-primary" disabled={!image}>
            Resize Image
          </button>

          {resizedImage && (
            <div style={{ marginTop: "1.5rem" }}>
              <label className="field-label">Preview</label>
              <div className="result-box" style={{ padding: "0.75rem", textAlign: "center" }}>
                <img src={resizedImage} alt="resized" style={{ maxWidth: "100%", borderRadius: 8 }} />
              </div>
              <a href={resizedImage} download="resized.jpg">
                <button className="btn btn-success">⬇️ Download Image</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
