import Link from "next/link";

export const metadata = {
  title: "Smart Tools - 18 Free Online Tools for Everyone",
  description: "Free online tools — currency converter, BMI calculator, percentage calculator, age calculator, loan calculator, image resizer, AI text improver, QR code generator, random number generator and more!",
};

const tools = [
  { href: "/ai-rewrite", icon: "🤖", title: "AI Text Improver", desc: "Rewrite and improve your text instantly using AI." },
  { href: "/currency-converter", icon: "💱", title: "Currency Converter", desc: "Convert between world currencies with live rates." },
  { href: "/bmi-calculator", icon: "⚖️", title: "BMI Calculator", desc: "Calculate your Body Mass Index and health category." },
  { href: "/age-calculator", icon: "🎂", title: "Age Calculator", desc: "Find your exact age in years, months, days and hours." },
  { href: "/loan-calculator", icon: "🏦", title: "Loan Calculator", desc: "Calculate monthly payments, total cost and interest." },
  { href: "/percentage-calculator", icon: "%", title: "Percentage Calculator", desc: "Calculate percentages, increases and decreases easily." },
  { href: "/random-number", icon: "🎲", title: "Random Number Generator", desc: "Generate random numbers for games, lotteries and more." },
  { href: "/image/resize", icon: "🖼️", title: "Image Resizer", desc: "Resize any image to any size in seconds." },
  { href: "/image/compress", icon: "⚡", title: "Image Compressor", desc: "Reduce image file size without losing quality." },
  { href: "/qr-code", icon: "📷", title: "QR Code Generator", desc: "Turn any text or link into a QR code instantly." },
  { href: "/password", icon: "🔐", title: "Password Generator", desc: "Generate strong and secure passwords instantly." },
  { href: "/word-counter", icon: "🔡", title: "Word Counter", desc: "Count words, characters, sentences and more." },
  { href: "/color-picker", icon: "🎨", title: "Color Picker", desc: "Pick any color and get HEX, RGB and HSL values." },
  { href: "/text-case", icon: "📝", title: "Text Case Converter", desc: "Convert text to uppercase, lowercase, title case and more." },
  { href: "/unit-converter", icon: "🔄", title: "Unit Converter", desc: "Convert length, weight, temperature, speed and more." },
  { href: "/stopwatch", icon: "⏱️", title: "Stopwatch", desc: "Simple stopwatch with lap timer." },
  { href: "/typing-test", icon: "⌨️", title: "Typing Speed Test", desc: "Find out how fast you can type in 30 seconds." },
  { href: "/pdf/merge", icon: "📄", title: "PDF Merge", desc: "Combine multiple PDF files into one document." },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>

      <nav className="navbar">
        <a href="/" className="navbar-logo">🚀 SmartTools</a>
        <ul className="navbar-links">
          <li><a href="/currency-converter">Currency</a></li>
          <li><a href="/bmi-calculator">BMI</a></li>
          <li><a href="/qr-code">QR Code</a></li>
          <li><a href="/pdf/merge">PDF</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>

      <div className="hero">
        <div className="badge">100% Free • No Sign Up • 18 Tools</div>
        <h1>Smart Tools for<br /><span className="accent-text">Everyday Use</span></h1>
        <p>Currency converter, BMI calculator, AI text improver, QR codes and more — all completely free!</p>
      </div>

      <div className="section">
        <h2 className="section-title">🔧 All Tools</h2>
        <div className="tools-grid">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="tool-card">
              <span className="tool-icon">{tool.icon}</span>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <footer className="footer">
        <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <a href="/about" style={{ color: "#888", textDecoration: "none" }}>About</a>
          <a href="/contact" style={{ color: "#888", textDecoration: "none" }}>Contact</a>
          <a href="/privacy-policy" style={{ color: "#888", textDecoration: "none" }}>Privacy Policy</a>
        </div>
        © 2026 <span>SmartTools</span> — Free tools for everyone
      </footer>

    </main>
  );
}
