"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }
    // Opens email client
    window.location.href = `mailto:contact@smart-tools.com?subject=Message from ${name}&body=${message}%0A%0AFrom: ${name}%0AEmail: ${email}`;
    setSent(true);
  };

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Home</Link>

        <div className="tool-container">
          <h1>📬 Contact Us</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
            Have a question, suggestion, or found a bug? We'd love to hear from you!
          </p>

          {sent ? (
            <div style={{ padding: "1.5rem", background: "rgba(26,140,91,0.08)", borderRadius: 12, textAlign: "center", border: "1.5px solid var(--green)" }}>
              <p style={{ fontFamily: "Syne", fontWeight: 700, fontSize: "1.1rem", color: "var(--green)" }}>
                ✅ Thank you! We'll get back to you soon.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label className="field-label">Your Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="field-label">Your Email</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="field-label">Message</label>
                <textarea
                  className="input-field"
                  placeholder="Write your message here..."
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button onClick={handleSubmit} className="btn btn-primary">
                📨 Send Message
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
