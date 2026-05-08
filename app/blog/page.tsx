import Link from "next/link";

export default function Blog() {
  return (
    <main
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "Arial",
      }}
    >
      <h1>Smart Tools Blog</h1>

      <p>
        Welcome to the Smart Tools blog. Here you can find helpful guides,
        tutorials, and articles about online tools, productivity, calculators,
        generators, and digital utilities.
      </p>

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gap: "20px",
        }}
      >
        {/* ARTICLE CARD */}
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>
            <Link href="/blog/best-online-tools-2026">
              Best Free Online Tools in 2026
            </Link>
          </h2>

          <p>
            Discover the most useful free online tools for productivity,
            calculations, image editing, and more.
          </p>

          <Link href="/blog/best-online-tools-2026">
            Read Full Article →
          </Link>
        </div>

        {/* FUTURE ARTICLES */}
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>How Online Calculators Save Time</h2>

          <p>
            Learn how browser-based calculators improve efficiency for students,
            professionals, and businesses.
          </p>

          <p>Coming soon...</p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Why Browser-Based Tools Are Growing</h2>

          <p>
            Explore why more users prefer web tools instead of downloading
            software.
          </p>

          <p>Coming soon...</p>
        </div>
      </div>
    </main>
  );
}