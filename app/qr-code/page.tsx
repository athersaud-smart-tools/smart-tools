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

      {/* SEO CONTENT */}
      <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", lineHeight: "1.8" }}>
        <h2>What is the QR Code Generator?</h2>
        <p>
          The QR code generator turns text, links, or other information into a scannable QR
          code image. Anyone with a smartphone camera can scan the code to instantly open the
          link or see the information it contains.
        </p>

        <h2>How to Use the QR Code Generator</h2>
        <ol>
          <li>Enter the text or URL you want to turn into a QR code</li>
          <li>The QR code is generated automatically</li>
          <li>Preview the QR code</li>
          <li>Download it as an image to use anywhere</li>
        </ol>

        <h2>Why Use a QR Code</h2>
        <p>
          QR codes make it fast and easy for people to access a link or piece of information
          without typing anything. Instead of reading out a long web address, you can print
          or share a QR code that opens it with a simple scan.
        </p>

        <h2>Common Uses</h2>
        <ul>
          <li>Sharing a website link on printed flyers or business cards</li>
          <li>Linking to a menu, form, or social media profile</li>
          <li>Sharing Wi-Fi details or contact information quickly</li>
          <li>Adding a scannable link to event tickets or posters</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>Do QR codes expire?</h3>
        <p>
          A QR code itself doesn’t expire — it simply stores the text or link you entered.
          However, if it links to a webpage, the code will stop working correctly only if
          that webpage is removed.
        </p>

        <h3>Can I scan a QR code with any phone?</h3>
        <p>
          Most modern smartphones can scan QR codes directly through the built-in camera app,
          without needing to download a separate app.
        </p>
      </div>
    </main>
  );
}
