"use client";

import { useState } from "react";
import Link from "next/link";
import ToolGuide from "@/app/components/ToolGuide";
import QRCode from "qrcode";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [generated, setGenerated] = useState(false);
  const [error, setError] = useState("");

  const generateQR = async () => {
    if (!text.trim()) return;
    try {
      setError("");
      // Generated entirely in the browser — nothing you type is sent to a server.
      const dataUrl = await QRCode.toDataURL(text, {
        width: 300,
        margin: 1,
      });
      setQrUrl(dataUrl);
      setGenerated(true);
    } catch {
      setError("Couldn't generate a QR code for that input. Try shorter text.");
      setGenerated(false);
    }
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

          {error && (
            <p style={{ color: "var(--accent)", marginTop: "0.75rem", fontSize: "0.9rem" }}>
              {error}
            </p>
          )}

          {generated && qrUrl && (
            <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
              <label className="field-label">Your QR Code</label>
              <div className="result-box" style={{ padding: "1.5rem", textAlign: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- client-generated data URL, not an optimizable remote asset */}
                <img
                  src={qrUrl}
                  alt="Generated QR code"
                  width={200}
                  height={200}
                  style={{ width: 200, height: 200, borderRadius: 8 }}
                />
              </div>
              <a href={qrUrl} download="qrcode.png">
                <button className="btn btn-success">⬇️ Download QR Code</button>
              </a>
            </div>
          )}
        </div>
      </div>
      <ToolGuide guide="qr" />

    </main>
  );
}
