"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ToolGuide from "@/app/components/ToolGuide";

export default function CompressImage() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [compressedImageUrl, setCompressedImageUrl] = useState<string | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.7);
  const imageUrlRef = useRef<string | null>(null);
  const compressedUrlRef = useRef<string | null>(null);

  useEffect(() => () => {
    if (imageUrlRef.current) URL.revokeObjectURL(imageUrlRef.current);
    if (compressedUrlRef.current) URL.revokeObjectURL(compressedUrlRef.current);
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    if (imageUrlRef.current) URL.revokeObjectURL(imageUrlRef.current);
    if (compressedUrlRef.current) URL.revokeObjectURL(compressedUrlRef.current);
    const nextImageUrl = URL.createObjectURL(selectedFile);
    imageUrlRef.current = nextImageUrl;
    compressedUrlRef.current = null;
    setFile(selectedFile);
    setImageUrl(nextImageUrl);
    setCompressedImageUrl(null);
    setCompressedSize(null);
    setDimensions(null);
    setError(null);
  };

  const compressImage = () => {
    if (!imageUrl) return;
    setError(null);
    const img = new Image();
    img.onerror = () => setError("This image could not be opened. Try a different image file.");
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setError("Your browser could not prepare this image. Try another browser or a smaller file.");
        return;
      }
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) {
          setError("The compressed image could not be created. Try a different quality setting.");
          return;
        }
        if (compressedUrlRef.current) URL.revokeObjectURL(compressedUrlRef.current);
        const nextCompressedUrl = URL.createObjectURL(blob);
        compressedUrlRef.current = nextCompressedUrl;
        setCompressedImageUrl(nextCompressedUrl);
        setCompressedSize(blob.size);
        setDimensions({ width: img.width, height: img.height });
      }, "image/jpeg", quality);
    };
  };

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const savingsPercent = file && compressedSize !== null
    ? Math.round(((file.size - compressedSize) / file.size) * 100)
    : null;

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container">
          <h1>⚡ Image Compressor</h1>
          <p style={{ color: "var(--ink2)", margin: "0.75rem 0 1.5rem", lineHeight: 1.6 }}>
            Compress an image in your browser, compare its file size before and after, and download the JPEG when the result suits your needs. The original stays unchanged.
          </p>

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
              onChange={(e) => {
                setQuality(Number(e.target.value));
                setCompressedImageUrl(null);
                setCompressedSize(null);
                setDimensions(null);
                setError(null);
                if (compressedUrlRef.current) URL.revokeObjectURL(compressedUrlRef.current);
                compressedUrlRef.current = null;
              }}
              style={{ width: "100%", accentColor: "var(--accent)" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--ink2)", marginTop: 4 }}>
              <span>Smaller file</span>
              <span>Better quality</span>
            </div>
          </div>

          <button onClick={compressImage} className="btn btn-primary" disabled={!imageUrl}>
            Compress Image
          </button>

          {error && <p role="alert" style={{ color: "var(--accent)", marginTop: "1rem" }}>{error}</p>}

          {file && (
            <div className="result-box" style={{ marginTop: "1.25rem", padding: "1rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>File size comparison</h2>
              <dl style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "0.5rem 1rem", color: "var(--ink2)" }}>
                <dt>Original</dt><dd>{formatBytes(file.size)}</dd>
                {compressedSize !== null && <>
                  <dt>Compressed JPEG</dt><dd>{formatBytes(compressedSize)}</dd>
                  <dt>Change</dt>
                  <dd style={{ fontWeight: 700, color: savingsPercent !== null && savingsPercent > 0 ? "var(--green)" : "var(--accent)" }}>
                    {savingsPercent !== null && savingsPercent > 0
                      ? `${savingsPercent}% smaller`
                      : savingsPercent === 0
                        ? "About the same size"
                        : `${Math.abs(savingsPercent ?? 0)}% larger`}
                  </dd>
                </>}
                {dimensions && <><dt>Output dimensions</dt><dd>{dimensions.width} × {dimensions.height} px</dd></>}
              </dl>
              {compressedSize !== null && savingsPercent !== null && savingsPercent <= 0 && (
                <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", lineHeight: 1.6 }}>
                  This JPEG is not smaller than the original. Try a lower quality setting or keep the original file.
                </p>
              )}
            </div>
          )}

          {compressedImageUrl && (
            <div style={{ marginTop: "1.5rem" }}>
              <label className="field-label">Compressed JPEG preview</label>
              <div className="result-box" style={{ padding: "0.75rem", textAlign: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- client-generated blob URL, not an optimizable remote asset */}
                <img src={compressedImageUrl} alt="Compressed image preview" style={{ maxWidth: "100%", borderRadius: 8 }} />
              </div>
              <a href={compressedImageUrl} download="compressed.jpg">
                <button className="btn btn-success">⬇️ Download Image</button>
              </a>
            </div>
          )}
        </div>
      </div>
      <ToolGuide guide="image-compress" />

    </main>
  );
}
