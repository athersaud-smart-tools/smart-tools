"use client";

import { useState, useEffect } from "react";

const sampleText = "The quick brown fox jumps over the lazy dog";

export default function TypingTest() {
  const [input, setInput] = useState("");
  const [time, setTime] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWpm] = useState(0);

  useEffect(() => {
    let timer: any;

    if (isActive && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time === 0) {
      calculateWPM();
      setIsActive(false);
    }

    return () => clearInterval(timer);
  }, [isActive, time]);

  const startTest = () => {
    setIsActive(true);
    setTime(30);
    setInput("");
    setWpm(0);
  };

  const calculateWPM = () => {
    const words = input.trim().split(" ").length;
    setWpm(words * 2); // 30 sec → multiply by 2
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">⌨️ Typing Speed Test</h1>

        <p className="mb-4 text-gray-700">{sampleText}</p>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!isActive}
          className="w-full border p-2 rounded mb-4"
          rows={4}
          placeholder="Start typing..."
        />

        <div className="mb-4">
          <p>Time: {time}s</p>
          <p>WPM: {wpm}</p>
        </div>

        <button
          onClick={startTest}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}