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

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the Image Resizer?</h2>
        <p>
          The image resizer changes the width and height of an image to fit exactly what you
          need, whether that’s a specific pixel size for a website, a profile picture, or a
          document upload requirement.
        </p>

        <h2>How to Use the Image Resizer</h2>
        <ol>
          <li>Upload the image you want to resize</li>
          <li>Enter your desired width and height</li>
          <li>Preview the resized image</li>
          <li>Download the resized image to your device</li>
        </ol>

        <h2>Why Resize Images</h2>
        <p>
          Different platforms and forms require different image dimensions — a profile
          picture, a banner, and a document scan all need different sizes. Resizing an image
          before uploading it saves you from upload errors, awkward cropping, or images that
          look stretched or squeezed on a page.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Resizing profile pictures for social media platforms</li>
          <li>Fitting images to exact dimensions required by a form or application</li>
          <li>Preparing images for a website or blog post</li>
          <li>Creating uniform image sizes for a gallery or portfolio</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>Will resizing distort my image?</h3>
        <p>
          If you change the width and height by different proportions, the image can appear
          stretched. For the best results, try to keep the same aspect ratio as the original
          image.
        </p>

        <h3>Can I make an image larger without losing quality?</h3>
        <p>
          Enlarging an image beyond its original size can reduce sharpness, since no new
          detail is being added. For best results, resizing works best when reducing an
          image’s dimensions rather than enlarging them.
        </p>
      </div>
    </main>
  );
}
