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

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the Image Compressor?</h2>
        <p>
          The image compressor reduces the file size of your images while keeping them
          looking as close to the original as possible. Smaller image files load faster on
          websites, take up less storage, and are easier to send over email or messaging apps.
        </p>

        <h2>How to Use the Image Compressor</h2>
        <ol>
          <li>Upload the image you want to compress</li>
          <li>Let the tool process and shrink the file size</li>
          <li>Preview the compressed result</li>
          <li>Download the compressed image to your device</li>
        </ol>

        <h2>Why Compress Images</h2>
        <p>
          Large image files can slow down websites, use up storage space, and be rejected by
          upload limits on forms or email attachments. Compressing an image reduces its file
          size significantly, often with little to no visible difference in quality, making
          it easier to share, upload, and store.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Speeding up website load times by using smaller images</li>
          <li>Fitting images within upload size limits for forms or email</li>
          <li>Saving storage space on your phone or computer</li>
          <li>Preparing images for social media posts</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>Will compressing an image reduce its quality?</h3>
        <p>
          Compression reduces file size by simplifying image data. At moderate compression
          levels, the difference is usually barely noticeable, though very high compression
          can visibly reduce quality.
        </p>

        <h3>What image formats can I compress?</h3>
        <p>
          Most common formats like JPG and PNG can be compressed with this tool.
        </p>
      </div>
    </main>
  );
}
