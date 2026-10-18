import Link from "next/link";

const links = [
  { href: "/", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function BrandMark() {
  return (
    <svg
      className="brand-mark"
      viewBox="0 0 40 40"
      role="img"
      aria-label="SmartEdgeTools mark"
    >
      <defs>
        <linearGradient id="brand-mark-gradient" x1="5" y1="35" x2="35" y2="5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c43b00" />
          <stop offset="1" stopColor="#ff783f" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="12" fill="#171615" />
      <path d="M11 12.5 20 7l9 5.5v10L20 28l-9-5.5v-10Z" fill="url(#brand-mark-gradient)" />
      <path d="m17 19 3-8 3 8h-2l-1 4-1-4h-2Z" fill="#fff" />
      <path d="m20 28 9-5.5v5L20 33l-9-5.5v-5L20 28Z" fill="#2878e8" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link href="/" className="navbar-logo" aria-label="SmartEdgeTools home">
        <BrandMark />
        <span className="navbar-wordmark"><span>Smart</span>EdgeTools</span>
      </Link>
      <ul className="navbar-links">
        {links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
      </ul>
      <details className="mobile-menu">
        <summary aria-label="Open navigation menu">Menu</summary>
        <ul className="mobile-menu-links">
          {links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          <li><Link href="/terms">Terms</Link></li>
        </ul>
      </details>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/">Tools</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
        <p>© {new Date().getFullYear()} SmartEdgeTools. Free online tools for everyday tasks.</p>
      </div>
    </footer>
  );
}
