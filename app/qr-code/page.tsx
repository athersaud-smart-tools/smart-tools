"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const generateQR = () => {
    if (!text.trim()) return;
    const encoded = encodeURIComponent(text);
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}`;
    setQrUrl(url);
    setGenerated(true);
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>

        <div className="tool-container">
          <h1>📷 QR Code Generator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Turn any text, link, or message into a QR code instantly — for free!
          </p>

          <div style={{ marginBottom: "1rem" }}>
            <label className="field-label">Enter Text or URL</label>
            <textarea
              className="input-field"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://your-website.com or any text..."
              rows={4}
            />
          </div>

          <button
            className="btn btn-primary"
            onClick={generateQR}
            disabled={!text.trim()}
            style={{ opacity: !text.trim() ? 0.6 : 1 }}
          >
            ⚡ Generate QR Code
          </button>

          {generated && qrUrl && (
            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <label className="field-label">Your QR Code</label>
              <div className="result-box" style={{ padding: "1.5rem", textAlign: "center" }}>
                <img
                  src={qrUrl}
                  alt="QR Code"
                  style={{ width: 200, height: 200, borderRadius: 8 }}
                />
              </div>
              <a href={qrUrl} download="qrcode.png" target="_blank">
                <button className="btn btn-success">⬇️ Download QR Code</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
