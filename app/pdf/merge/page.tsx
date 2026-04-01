"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function MergePDF() {
  const [files, setFiles] = useState<File[]>([]);
  const [mergedUrl, setMergedUrl] = useState<string | null>(null);

  const handleUpload = (e: any) => {
    setFiles(Array.from(e.target.files));
  };

  const mergePDFs = async () => {
    if (files.length < 2) {
      alert("Please upload at least 2 PDFs");
      return;
    }

    const mergedPdf = await PDFDocument.create();

    for (let file of files) {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());

      pages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();
    const blob = new Blob([mergedBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    setMergedUrl(url);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">📄 PDF Merge Tool</h1>

        <input
          type="file"
          multiple
          accept="application/pdf"
          onChange={handleUpload}
          className="mb-4"
        />

        <button
          onClick={mergePDFs}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Merge PDFs
        </button>

        {mergedUrl && (
          <a href={mergedUrl} download="merged.pdf">
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700">
              Download Merged PDF
            </button>
          </a>
        )}
      </div>
    </div>
  );
}