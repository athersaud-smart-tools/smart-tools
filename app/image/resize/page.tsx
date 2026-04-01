"use client";

import { useState } from "react";

export default function ResizeImage() {
  const [image, setImage] = useState<string | null>(null);
  const [resizedImage, setResizedImage] = useState<string | null>(null);
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [lockRatio, setLockRatio] = useState(true);
  const [originalRatio, setOriginalRatio] = useState(1);

  const handleUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);

      const img = new Image();
      img.src = url;

      img.onload = () => {
        const ratio = img.width / img.height;
        setOriginalRatio(ratio);
        setWidth(img.width);
        setHeight(img.height);
      };
    }
  };

  const handleWidthChange = (value: number) => {
    setWidth(value);
    if (lockRatio) {
      setHeight(Math.round(value / originalRatio));
    }
  };

  const handleHeightChange = (value: number) => {
    setHeight(value);
    if (lockRatio) {
      setWidth(Math.round(value * originalRatio));
    }
  };

  const resizeImage = () => {
    if (!image) return;

    const img = new Image();
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0, width, height);

      const resized = canvas.toDataURL("image/jpeg");
      setResizedImage(resized);
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">🖼️ Image Resize Tool</h1>

        <input type="file" onChange={handleUpload} className="mb-4" />

        <div className="flex gap-2 mb-2">
          <input
            type="number"
            value={width}
            onChange={(e) => handleWidthChange(Number(e.target.value))}
            className="border p-2 rounded w-full"
            placeholder="Width"
          />
          <input
            type="number"
            value={height}
            onChange={(e) => handleHeightChange(Number(e.target.value))}
            className="border p-2 rounded w-full"
            placeholder="Height"
          />
        </div>

        <label className="flex items-center justify-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={lockRatio}
            onChange={() => setLockRatio(!lockRatio)}
          />
          Lock Aspect Ratio
        </label>

        <button
          onClick={resizeImage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Resize Image
        </button>

        {resizedImage && (
          <div className="mt-6">
            <h3 className="mb-2 font-semibold">Preview:</h3>
            <img src={resizedImage} alt="resized" className="mx-auto rounded" />

            <a href={resizedImage} download="resized.jpg">
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