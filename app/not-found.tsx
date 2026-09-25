import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-wrap" style={{ display: "grid", placeItems: "center" }}>
      <section className="tool-container" style={{ maxWidth: 680, textAlign: "center" }}>
        <p className="badge" style={{ marginBottom: "1rem" }}>404 · Page not found</p>
        <h1>We couldn&apos;t find that page</h1>
        <p style={{ color: "var(--ink2)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
          The link may be outdated or the page may have moved. You can return to SmartEdgeTools and find a useful free online tool instead.
        </p>
        <Link href="/" className="btn btn-primary" style={{ textDecoration: "none" }}>
          Browse all tools
        </Link>
      </section>
    </main>
  );
}
