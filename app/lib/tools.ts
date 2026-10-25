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
  "/ai-rewrite": { schemaCategory: "UtilitiesApplication", related: ["/word-counter", "/text-case"], guides: ["/blog/top-tools-for-students"] },
  "/currency-converter": { schemaCategory: "FinanceApplication", related: ["/unit-converter", "/percentage-calculator", "/loan-calculator"], guides: ["/blog/how-online-calculators-save-time"] },
  "/bmi-calculator": { schemaCategory: "HealthApplication", related: ["/age-calculator", "/percentage-calculator", "/unit-converter"], guides: ["/blog/how-online-calculators-save-time"] },
  "/birth-chart": { schemaCategory: "LifestyleApplication", related: ["/age-calculator"], embedded: true },
  "/age-calculator": { schemaCategory: "UtilitiesApplication", related: ["/birth-chart", "/bmi-calculator", "/percentage-calculator"], guides: ["/blog/how-online-calculators-save-time"] },
  "/loan-calculator": { schemaCategory: "FinanceApplication", related: ["/percentage-calculator", "/currency-converter"], guides: ["/blog/how-online-calculators-save-time"] },
  "/final-grade-calculator": { schemaCategory: "EducationalApplication", related: ["/percentage-calculator", "/word-counter"], guides: ["/blog/top-tools-for-students"] },
  "/percentage-calculator": { schemaCategory: "UtilitiesApplication", related: ["/final-grade-calculator", "/loan-calculator", "/unit-converter"], guides: ["/blog/how-online-calculators-save-time"] },
  "/random-number": { schemaCategory: "UtilitiesApplication", related: ["/password"] },
  "/image/resize": { schemaCategory: "MultimediaApplication", related: ["/image/compress", "/color-picker", "/qr-code"], guides: ["/blog/resize-compress-images-for-websites", "/blog/best-free-image-tools"] },
  "/image/compress": { schemaCategory: "MultimediaApplication", related: ["/image/resize", "/pdf/merge", "/qr-code"], guides: ["/blog/resize-compress-images-for-websites", "/blog/best-free-image-tools"] },
  "/qr-code": { schemaCategory: "UtilitiesApplication", related: ["/image/resize", "/image/compress", "/color-picker"], guides: ["/blog/best-free-image-tools"] },
  "/password": { schemaCategory: "SecurityApplication", related: ["/random-number", "/qr-code"] },
  "/word-counter": { schemaCategory: "UtilitiesApplication", related: ["/text-case", "/ai-rewrite", "/typing-test"], guides: ["/blog/top-tools-for-students"] },
  "/color-picker": { schemaCategory: "DesignApplication", related: ["/image/resize", "/qr-code"], guides: ["/blog/best-free-image-tools"] },
  "/text-case": { schemaCategory: "UtilitiesApplication", related: ["/word-counter", "/ai-rewrite", "/json-formatter"], guides: ["/blog/top-tools-for-students"] },
  "/json-formatter": { schemaCategory: "DeveloperApplication", related: ["/text-case", "/word-counter"] },
  "/unit-converter": { schemaCategory: "UtilitiesApplication", related: ["/currency-converter", "/percentage-calculator", "/bmi-calculator"], guides: ["/blog/how-online-calculators-save-time"] },
  "/stopwatch": { schemaCategory: "UtilitiesApplication", related: ["/typing-test", "/random-number"] },
  "/typing-test": { schemaCategory: "EducationalApplication", related: ["/word-counter", "/stopwatch"] },
  "/pdf/merge": { schemaCategory: "BusinessApplication", related: ["/image/compress", "/image/resize"], guides: ["/blog/top-tools-for-students"] },
};

export const guideTitles: Record<string, string> = {
  "/blog/best-online-tools-2026": "Choosing an Online Tool for the Task",
  "/blog/how-online-calculators-save-time": "How Online Calculators Save Time",
  "/blog/why-browser-tools-are-growing": "Why Browser-Based Tools Are Growing",
  "/blog/top-tools-for-students": "A Practical Study Workflow for Online Tools",
  "/blog/best-free-image-tools": "Choosing the Right Image Tool for the Job",
  "/blog/resize-compress-images-for-websites": "How to Resize and Compress Images for Websites",
};
