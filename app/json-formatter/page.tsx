"use client";

import Link from "next/link";
import { useState } from "react";

const sample = '{"name":"SmartEdgeTools","features":["format","validate"],"active":true}';

export default function JsonFormatter() {
  const [source, setSource] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState("2");
  const [status, setStatus] = useState("");

  function transform(compact: boolean) {
    setStatus("");
    if (!source.trim()) { setError("Paste or type a JSON value first."); setOutput(""); return; }
    try {
      const parsed: unknown = JSON.parse(source);
      setOutput(JSON.stringify(parsed, null, compact ? undefined : indent === "tab" ? "\t" : Number(indent)));
      setError("");
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : "Invalid JSON.";
      const position = message.match(/(?:position|character)\s+(\d+)/i);
      let location = "";
      if (position) {
        const offset = Number(position[1]);
        const before = source.slice(0, offset);
        location = ` (line ${before.split("\n").length}, column ${offset - before.lastIndexOf("\n")})`;
      }
      setOutput("");
      setError(`Invalid JSON${location}: ${message}`);
    }
  }

  async function copyOutput() {
    try { await navigator.clipboard.writeText(output); setStatus("Formatted JSON copied."); }
    catch { setStatus("Clipboard access is unavailable. Select and copy the output manually."); }
  }

  return (
    <main className="page-wrap">
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <Link href="/" className="btn-back">← Back to Tools</Link>
        <div className="tool-container" style={{ maxWidth: "none" }}>
          <h1>JSON Formatter and Validator</h1>
          <p style={{ color: "var(--ink2)", marginBottom: "1.25rem", lineHeight: 1.7 }}>Beautify compact JSON, minify formatted JSON, or check syntax. Processing happens in your browser; the formatter code does not upload the text you enter.</p>
          <label htmlFor="json-input" className="field-label">Input JSON</label>
          <textarea id="json-input" className="input-field" spellCheck={false} autoCapitalize="off" autoCorrect="off" placeholder={'Paste JSON here, for example: {"hello":"world"}'} value={source} onChange={(event) => { setSource(event.target.value); setError(""); setOutput(""); }} style={{ minHeight: 240, fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.88rem" }} />
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.65rem", margin: "0.9rem 0 1.1rem" }}>
            <button type="button" className="btn btn-primary" style={{ width: "auto" }} onClick={() => transform(false)}>Format &amp; validate</button>
            <button type="button" className="btn" style={{ width: "auto", background: "var(--bg)", color: "var(--ink)" }} onClick={() => transform(true)}>Minify</button>
            <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--ink2)", fontSize: "0.85rem" }}>Indent
              <select aria-label="Indentation size" className="input-field" style={{ width: 88, padding: "0.55rem" }} value={indent} onChange={(event) => setIndent(event.target.value)}><option value="2">2 spaces</option><option value="4">4 spaces</option><option value="tab">Tab</option></select>
            </label>
            <button type="button" onClick={() => { setSource(sample); setOutput(""); setError(""); }} style={{ border: 0, background: "transparent", color: "var(--accent)", cursor: "pointer", fontWeight: 700 }}>Load example</button>
            <button type="button" onClick={() => { setSource(""); setOutput(""); setError(""); setStatus(""); }} style={{ border: 0, background: "transparent", color: "var(--ink2)", cursor: "pointer" }}>Clear</button>
          </div>
          {error && <p role="alert" style={{ marginBottom: "0.8rem", color: "#b42318", lineHeight: 1.6 }}>{error}</p>}
          {output && <section aria-label="Formatted JSON output"><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginBottom: "0.4rem" }}><h2 style={{ fontSize: "1rem" }}>Output</h2><button type="button" onClick={copyOutput} style={{ border: "1px solid var(--border)", borderRadius: 8, background: "white", padding: "0.5rem 0.8rem", cursor: "pointer" }}>Copy</button></div><textarea aria-label="JSON output" readOnly className="input-field" value={output} style={{ minHeight: 240, fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.88rem" }} /></section>}
          <p aria-live="polite" style={{ minHeight: "1.4rem", marginTop: "0.4rem", color: "var(--green)", fontSize: "0.85rem" }}>{status}</p>
        </div>
      </div>
      <section className="mx-auto my-10 max-w-4xl space-y-5 px-6 leading-7 text-gray-700" aria-labelledby="json-guide">
        <h2 id="json-guide" className="text-2xl font-semibold text-gray-900">How to format and validate JSON</h2>
        <p>JSON (JavaScript Object Notation) is a text format for structured data used by APIs, configuration files, and web applications. Paste a JSON value above and choose <strong>Format &amp; validate</strong> to check its syntax and add indentation, or choose <strong>Minify</strong> to remove insignificant whitespace.</p>
        <ol style={{ listStyle: "decimal", paddingLeft: "1.5rem" }}><li>Paste or type a JSON object, array, string, number, boolean, or null.</li><li>Choose an indentation style and format the input, or minify it for compact output.</li><li>If JSON is invalid, review the error and line/column hint, correct the input, then run it again.</li><li>Copy the output when it is valid. The input remains in this page until you clear or leave it.</li></ol>
        <h3 className="text-lg font-semibold text-gray-900">Example</h3>
        <p>The compact input <code>{'{"name":"Mina","items":[1,2]}'}</code> becomes readable on separate lines when formatted. Minifying reverses the whitespace change; it does not rename fields or alter values. JSON strings require double quotes, object keys must be quoted, and trailing commas are not allowed.</p>
        <p>Need to work with ordinary prose instead? Try our <Link href="/word-counter" style={{ color: "var(--accent)" }}>word counter</Link> or <Link href="/text-case" style={{ color: "var(--accent)" }}>text case converter</Link>.</p>
        <h3 className="text-lg font-semibold text-gray-900">Frequently asked questions</h3>
        <div><h4 className="font-semibold">What does a JSON formatter do?</h4><p>It parses valid JSON and prints the same data with consistent whitespace, making nested objects and arrays easier to inspect.</p></div>
        <div><h4 className="font-semibold">How do I validate JSON online?</h4><p>Paste the complete JSON value and select Format &amp; validate. A successful result appears in the output area; invalid syntax produces an error message.</p></div>
        <div><h4 className="font-semibold">How do I minify JSON?</h4><p>Select Minify to remove formatting whitespace. The resulting compact JSON keeps its data values and structure.</p></div>
        <div><h4 className="font-semibold">Why is my JSON invalid?</h4><p>Common causes include single quotes, unquoted object keys, a missing comma or bracket, and a trailing comma. JSON requires double-quoted strings and keys.</p></div>
        <div><h4 className="font-semibold">Is my JSON uploaded or stored?</h4><p>The formatter and validator run in the browser and their code does not send the entered JSON to a server. Avoid using sensitive data in a shared device or a page you do not trust.</p></div>
        <div><h4 className="font-semibold">Can the formatter repair broken JSON?</h4><p>No. It reports a parsing error but does not guess at a correction. Fix the source deliberately so that values are not changed unexpectedly.</p></div>
      </section>
    </main>
  );
}
