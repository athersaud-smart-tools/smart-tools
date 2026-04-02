"use client";

import { useState } from "react";

export default function AIRewrite() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleRewrite = async () => {
    const res = await fetch("/api/rewrite", {
      method: "POST",
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">🤖 AI Text Improver</h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border p-2 rounded mb-4"
          rows={4}
          placeholder="Enter your text..."
        />

        <button
          onClick={handleRewrite}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
        >
          Improve Text
        </button>

        {result && (
          <div className="mt-4 p-3 border rounded bg-gray-50">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}