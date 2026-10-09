import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Resize and Compress Images for Websites",
  description:
    "A practical guide to choosing image dimensions, file formats, and compression settings for websites, forms, email, and social media.",
  alternates: { canonical: "/blog/resize-compress-images-for-websites" },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12 text-gray-800">
      <article className="mx-auto max-w-3xl">
        <Link href="/blog" className="mb-8 inline-block text-sm font-medium text-blue-600 hover:underline">← Back to Guides</Link>
        <header>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Practical tutorial</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">How to Resize and Compress Images for Websites</h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            The right image settings depend on where an image will be used. This step-by-step guide explains dimensions,
            file size, formats, quality checks, and common mistakes before you upload or share a picture.
          </p>
          <p className="mt-3 text-sm text-gray-500">Updated October 9, 2026 · SmartEdgeTools Editorial Team</p>
        </header>

        <div className="mt-10 space-y-7 leading-8">
          <p>
            An image can look sharp on your computer and still be unsuitable for a website form, an email attachment,
            or a social post. It may be much larger than the space where it will appear, or its file size may be too
            large to upload quickly. Resizing changes the image&apos;s pixel dimensions; compression changes how much data
            is needed to store it. They solve related but different problems.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">1. Check the requirement before editing</h2>
          <p>
            If a website or form specifies a maximum width, height, or file size, use that requirement as your starting
            point. A profile-photo upload might require a square crop, while a banner may need a wide landscape image.
            If no dimensions are given, look at the actual display area and avoid preparing a file that is far larger
            than necessary.
          </p>
          <p>
            Keep an untouched copy of the original image. That gives you a way to start again if the resized version
            becomes blurry or you later need a larger copy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">2. Understand pixels and aspect ratio</h2>
          <p>
            Pixel dimensions describe the image&apos;s width and height, such as 1600 × 900. The aspect ratio is the
            relationship between those numbers. A 1600 × 900 image has a 16:9 ratio. If you need a smaller version
            with the same shape, 800 × 450 preserves that ratio.
          </p>
          <p>
            When an editor offers “maintain aspect ratio” or a lock icon, keep it enabled unless you intentionally
            want to stretch or crop the picture. Changing width and height independently can make faces, logos, and
            objects look unnaturally wide or narrow. Cropping removes edges; resizing changes the overall dimensions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">3. Choose a suitable file format</h2>
          <ul className="list-disc space-y-3 pl-6">
            <li><strong>JPEG/JPG:</strong> Often suitable for photographs with many colours. Repeatedly saving a JPEG can reduce quality, so work from the original when possible.</li>
            <li><strong>PNG:</strong> Useful for screenshots, interface graphics, and images that need transparency. Photos saved as PNG can be much larger than JPEG files.</li>
            <li><strong>WebP:</strong> Often offers good compression for web use, but check that the website, form, or recipient accepts it.</li>
            <li><strong>SVG:</strong> Best suited to vector artwork such as simple logos and icons, not ordinary photographs. Only use SVG files from sources you trust.</li>
          </ul>
          <p>
            There is no single best format for every image. A photograph, transparent logo, screenshot, and printable graphic
            have different needs. Follow the destination&apos;s requirements first.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">4. Compress gradually and compare</h2>
          <p>
            Compression can reduce file size, but stronger compression may introduce blockiness, smudged details, colour
            banding, or fuzzy text. Start with a moderate setting if one is available, then compare the result with the
            original at the size people will actually view it. For images containing small text or sharp edges, inspect
            those areas closely.
          </p>
          <p>
            File size and visual quality are separate checks. A smaller file is not automatically a better result if the
            picture becomes difficult to read. If the file remains too large, try reducing unnecessary pixel dimensions
            before applying more aggressive compression.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">5. A worked example</h2>
          <p>
            Suppose a website asks for a landscape image no wider than 1200 pixels, and your original is 2400 × 1600.
            Reducing the width by half while preserving the aspect ratio gives 1200 × 800. This reduces the pixel count
            from 3,840,000 to 960,000—one quarter of the original pixel count. It does not guarantee a file that is
            exactly one quarter of the original size, because file size also depends on format, image detail, and
            compression settings.
          </p>
          <p>
            After resizing, export to a format accepted by the destination, check the actual file size, and open the
            saved file to make sure it displays correctly. If the destination has a strict upload limit, confirm the
            final file—not just the preview—meets that limit.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">6. Use a browser tool carefully</h2>
          <p>
            For a simple dimension change, try the <Link href="/image/resize" className="text-blue-600 hover:underline">SmartEdgeTools Image Resizer</Link>.
            If the dimensions are already correct but the file is too large, try the <Link href="/image/compress" className="text-blue-600 hover:underline">Image Compressor</Link>.
            Check the tool&apos;s controls and the downloaded result before using it in a final submission.
          </p>
          <p>
            Before using any online service with private photographs or confidential images, read its privacy information
            and understand whether processing happens in your browser or on a remote server. Do not assume every online
            tool handles files in the same way.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">Common mistakes to avoid</h2>
          <ul className="list-disc space-y-3 pl-6">
            <li>Resizing an already small image upward and expecting new detail to appear.</li>
            <li>Changing width and height separately and stretching the image.</li>
            <li>Compressing repeatedly from an already compressed copy instead of the original.</li>
            <li>Checking only the file size and not the visual quality.</li>
            <li>Ignoring the file type or maximum upload size required by the destination.</li>
            <li>Uploading sensitive images without checking how the service processes them.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900">Quick checklist before you upload</h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>Confirm the required dimensions, format, and maximum file size.</li>
            <li>Keep the aspect ratio unless you need a deliberate crop.</li>
            <li>Use a suitable format for the image and destination.</li>
            <li>Compare the saved version with the original at normal viewing size.</li>
            <li>Open the final file and verify it meets the upload requirement.</li>
          </ol>

          <p>
            Good image preparation is a balance: use dimensions that fit the job, choose a compatible format, and reduce
            file size only as far as the image still looks clear. A quick final check can prevent upload errors and
            avoidable quality loss.
          </p>

          <hr />
          <p>
            <Link href="/" className="text-blue-600 hover:underline">Explore all SmartEdgeTools</Link>
            {" "}or <Link href="/blog" className="text-blue-600 hover:underline">read more practical guides</Link>.
          </p>
        </div>
      </article>
    </main>
  );
}
