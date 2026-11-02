// Single source of truth for the tool directory.
// Used by the homepage, per-tool structured data, and related-link blocks.
// When you add a tool: add it here, add its route to app/sitemap.ts, and add a layout with metadata.

export const tools: Tool[] = [
  { href: "/ai-rewrite", icon: "🤖", title: "AI Text Improver", desc: "Improve clarity, tone, and readability with AI.", category: "AI" },
  { href: "/currency-converter", icon: "💱", title: "Currency Converter", desc: "Convert currencies quickly with current rates.", category: "Finance" },
  { href: "/bmi-calculator", icon: "⚖️", title: "BMI Calculator", desc: "Calculate Body Mass Index from height and weight.", category: "Health" },
  { href: "/birth-chart", icon: "🌙", title: "Birth Chart Calculator", desc: "Explore your natal chart, planetary placements, and houses.", category: "Astrology" },
  { href: "/age-calculator", icon: "🎂", title: "Age Calculator", desc: "Calculate years, months, and days from a birth date.", category: "Calculator" },
  { href: "/loan-calculator", icon: "🏦", title: "Loan Calculator", desc: "Estimate monthly payments, interest, and total cost.", category: "Finance" },
  { href: "/final-grade-calculator", icon: "🎓", title: "Final Grade Calculator", desc: "Calculate a weighted grade or find the score needed on your final.", category: "Calculator" },
  { href: "/percentage-calculator", icon: "%", title: "Percentage Calculator", desc: "Calculate percentages, increases, decreases, and more.", category: "Calculator" },
  { href: "/random-number", icon: "🎲", title: "Random Number Generator", desc: "Generate random numbers within your chosen range.", category: "Calculator" },
  { href: "/image/resize", icon: "🖼️", title: "Image Resizer", desc: "Resize images to the dimensions you need.", category: "Image" },
  { href: "/image/compress", icon: "⚡", title: "Image Compressor", desc: "Reduce image file size for easier sharing and faster pages.", category: "Image" },
  { href: "/qr-code", icon: "📷", title: "QR Code Generator", desc: "Create QR codes for links, text, and useful information.", category: "Generator" },
  { href: "/password", icon: "🔐", title: "Password Generator", desc: "Generate strong random passwords for your accounts.", category: "Generator" },
  { href: "/word-counter", icon: "🔡", title: "Word Counter", desc: "Count words, characters, and text length instantly.", category: "Text" },
  { href: "/color-picker", icon: "🎨", title: "Color Picker", desc: "Pick a color and get useful HEX and RGB values.", category: "Design" },
  { href: "/text-case", icon: "📝", title: "Case Converter", desc: "Convert text to upper, lower, title, and other cases.", category: "Text" },
  { href: "/json-formatter", icon: "{ }", title: "JSON Formatter & Validator", desc: "Format, minify, and validate JSON in your browser.", category: "Developer" },
  { href: "/unit-converter", icon: "🔄", title: "Unit Converter", desc: "Convert common length, weight, temperature, and other units.", category: "Calculator" },
  { href: "/stopwatch", icon: "⏱️", title: "Stopwatch", desc: "Use a simple stopwatch with lap timing.", category: "Tools" },
  { href: "/typing-test", icon: "⌨️", title: "Typing Speed Test", desc: "Measure typing speed and accuracy in your browser.", category: "Tools" },
  { href: "/pdf/merge", icon: "📄", title: "PDF Merge", desc: "Combine multiple PDF files into one document.", category: "PDF" },
];

export const categories = ["All", "AI", "Finance", "Health", "Astrology", "Calculator", "Developer", "Image", "Generator", "Text", "Design", "PDF", "Tools"];

export type Tool = {
  href: string;
  icon: string;
  title: string;
  desc: string;
  category: string;
};

// schema.org applicationCategory, related tools, and related guides per tool.
// "embedded" marks tools whose functionality is provided by a third-party widget.
export const toolRelations: Record<
  string,
  { schemaCategory: string; related: string[]; guides?: string[]; embedded?: boolean }
> = {
  "/ai-rewrite": { schemaCategory: "UtilitiesApplication", related: ["/word-counter", "/text-case"], guides: ["/blog/improve-text-ai-safely", "/blog/top-tools-for-students"] },
  "/currency-converter": { schemaCategory: "FinanceApplication", related: ["/unit-converter", "/percentage-calculator", "/loan-calculator"], guides: ["/blog/exchange-rates-and-bank-rates", "/blog/how-online-calculators-save-time"] },
  "/bmi-calculator": { schemaCategory: "HealthApplication", related: ["/age-calculator", "/percentage-calculator", "/unit-converter"], guides: ["/blog/bmi-calculation-limits", "/blog/how-online-calculators-save-time"] },
  "/birth-chart": { schemaCategory: "LifestyleApplication", related: ["/age-calculator"], embedded: true, guides: ["/blog/understand-birth-chart"] },
  "/age-calculator": { schemaCategory: "UtilitiesApplication", related: ["/birth-chart", "/bmi-calculator", "/percentage-calculator"], guides: ["/blog/calculate-age-years-months-days", "/blog/how-online-calculators-save-time"] },
  "/loan-calculator": { schemaCategory: "FinanceApplication", related: ["/percentage-calculator", "/currency-converter"], guides: ["/blog/calculate-monthly-loan-payments", "/blog/how-online-calculators-save-time"] },
  "/final-grade-calculator": { schemaCategory: "EducationalApplication", related: ["/percentage-calculator", "/word-counter"], guides: ["/blog/calculate-final-grade-needed", "/blog/top-tools-for-students"] },
  "/percentage-calculator": { schemaCategory: "UtilitiesApplication", related: ["/final-grade-calculator", "/loan-calculator", "/unit-converter"], guides: ["/blog/percentage-increase-decrease", "/blog/how-online-calculators-save-time"] },
  "/random-number": { schemaCategory: "UtilitiesApplication", related: ["/password"], guides: ["/blog/generate-random-numbers", "/blog/best-online-tools-2026"] },
  "/image/resize": { schemaCategory: "MultimediaApplication", related: ["/image/compress", "/color-picker", "/qr-code"], guides: ["/blog/resize-compress-images-for-websites", "/blog/best-free-image-tools"] },
  "/image/compress": { schemaCategory: "MultimediaApplication", related: ["/image/resize", "/pdf/merge", "/qr-code"], guides: ["/blog/compress-image-under-100-kb", "/blog/resize-compress-images-for-websites", "/blog/best-free-image-tools"] },
  "/qr-code": { schemaCategory: "UtilitiesApplication", related: ["/image/resize", "/image/compress", "/color-picker"], guides: ["/blog/create-qr-code", "/blog/best-free-image-tools"] },
  "/password": { schemaCategory: "SecurityApplication", related: ["/random-number", "/qr-code"], guides: ["/blog/create-strong-password", "/blog/best-online-tools-2026"] },
  "/word-counter": { schemaCategory: "UtilitiesApplication", related: ["/text-case", "/ai-rewrite", "/typing-test"], guides: ["/blog/count-words-characters-reading-time", "/blog/top-tools-for-students"] },
  "/color-picker": { schemaCategory: "DesignApplication", related: ["/image/resize", "/qr-code"], guides: ["/blog/use-color-picker-hex-rgb-hsl", "/blog/best-free-image-tools"] },
  "/text-case": { schemaCategory: "UtilitiesApplication", related: ["/word-counter", "/ai-rewrite", "/json-formatter"], guides: ["/blog/convert-text-case", "/blog/top-tools-for-students"] },
  "/json-formatter": { schemaCategory: "DeveloperApplication", related: ["/text-case", "/word-counter"], guides: ["/blog/format-json-validate"] },
  "/unit-converter": { schemaCategory: "UtilitiesApplication", related: ["/currency-converter", "/percentage-calculator", "/bmi-calculator"], guides: ["/blog/convert-common-units", "/blog/how-online-calculators-save-time"] },
  "/stopwatch": { schemaCategory: "UtilitiesApplication", related: ["/typing-test", "/random-number"], guides: ["/blog/use-stopwatch-laps", "/blog/top-tools-for-students"] },
  "/typing-test": { schemaCategory: "EducationalApplication", related: ["/word-counter", "/stopwatch"], guides: ["/blog/typing-speed-test-improve-wpm", "/blog/top-tools-for-students"] },
  "/pdf/merge": { schemaCategory: "BusinessApplication", related: ["/image/compress", "/image/resize"], guides: ["/blog/merge-pdf-files-safely", "/blog/top-tools-for-students"] },
};

export const guideTitles: Record<string, string> = {
  "/blog/best-online-tools-2026": "Choosing an Online Tool for the Task",
  "/blog/how-online-calculators-save-time": "How Online Calculators Save Time",
  "/blog/why-browser-tools-are-growing": "Why Browser-Based Tools Are Growing",
  "/blog/top-tools-for-students": "A Practical Study Workflow for Online Tools",
  "/blog/best-free-image-tools": "Choosing the Right Image Tool for the Job",
  "/blog/resize-compress-images-for-websites": "How to Resize and Compress Images for Websites",
  "/blog/calculate-monthly-loan-payments": "How to Calculate Monthly Loan Payments",
  "/blog/percentage-increase-decrease": "How to Calculate Percentage Increase and Decrease",
  "/blog/compress-image-under-100-kb": "How to Compress an Image to Under 100 KB",
  "/blog/exchange-rates-and-bank-rates": "How Exchange Rates Work and Why Bank Rates Differ",
  "/blog/calculate-age-years-months-days": "How to Calculate Age in Years, Months and Days",
  "/blog/bmi-calculation-limits": "How BMI Is Calculated and What It Does and Does Not Tell You",
  "/blog/merge-pdf-files-safely": "How to Merge PDF Files Without Uploading Them",
  "/blog/convert-common-units": "How to Convert Common Units",
  "/blog/create-strong-password": "How to Create a Strong Password You Can Actually Remember",
  "/blog/format-json-validate": "How to Format and Validate JSON (With Examples)",
  "/blog/typing-speed-test-improve-wpm": "How to Take a Typing Speed Test and Improve Your WPM",
  "/blog/calculate-final-grade-needed": "How to Calculate Your Final Grade and the Score You Need",
  "/blog/generate-random-numbers": "How to Generate Random Numbers in a Range (With or Without Duplicates)",
  "/blog/create-qr-code": "How to Create a QR Code That Scans Reliably",
  "/blog/use-color-picker-hex-rgb-hsl": "How to Use a Color Picker: HEX, RGB, and HSL Explained",
  "/blog/use-stopwatch-laps": "How to Use a Stopwatch and Read Lap Times",
  "/blog/count-words-characters-reading-time": "How to Count Words, Characters, and Reading Time",
  "/blog/convert-text-case": "How to Convert Text Case: Uppercase, Title Case, camelCase, and More",
  "/blog/improve-text-ai-safely": "How to Improve Text With AI Without Losing Meaning",
  "/blog/understand-birth-chart": "How to Understand a Birth Chart: Signs, Planets, and Houses",
};
