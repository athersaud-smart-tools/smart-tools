"use client";

import { useState } from "react";

export default function CompressImage() {
  const [image, setImage] = useState<string | null>(null);
  const [compressedImage, setCompressedImage] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.7);

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
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

      const compressed = canvas.toDataURL("image/jpeg", quality);
      setCompressedImage(compressed);
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">🖼️ Image Compressor</h1>

        <input type="file" onChange={handleUpload} className="mb-4" />

        <div className="mb-4">
          <label>Quality: {Math.round(quality * 100)}%</label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <button
          onClick={compressImage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Compress Image
        </button>

        {compressedImage && (
          <div className="mt-6">
            <h3 className="mb-2 font-semibold">Preview:</h3>
            <img src={compressedImage} alt="compressed" className="mx-auto rounded" />

            <a href={compressedImage} download="compressed.jpg">
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700">
                Download Image
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}