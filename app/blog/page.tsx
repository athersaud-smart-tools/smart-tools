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
        Welcome to the Smart Tools Blog. Here you will find helpful guides,
        tutorials, and explanations about online tools, calculators, and
        productivity resources.
      </p>

      <hr style={{ margin: "20px 0" }} />

      {/* ARTICLE 1 */}
      <div style={{ marginBottom: "25px" }}>
        <h2>
          <Link href="/blog/best-online-tools-2026">
            Best Free Online Tools in 2026
          </Link>
        </h2>
        <p>
          Discover the most useful free online tools for productivity,
          calculations, image editing, and more.
        </p>
      </div>

      {/* ARTICLE 2 */}
      <div style={{ marginBottom: "25px" }}>
        <h2>
          <Link href="/blog/how-online-calculators-save-time">
            How Online Calculators Save Time
          </Link>
        </h2>
        <p>
          Learn how calculators improve productivity and speed up daily tasks.
        </p>
      </div>

      {/* ARTICLE 3 */}
      <div style={{ marginBottom: "25px" }}>
        <h2>
          <Link href="/blog/why-browser-tools-are-growing">
            Why Browser-Based Tools Are Growing
          </Link>
        </h2>
        <p>
          Explore why users prefer online tools instead of installing software.
        </p>
      </div>

      {/* ARTICLE 4 */}
      <div style={{ marginBottom: "25px" }}>
        <h2>
          <Link href="/blog/top-tools-for-students">
            Top Online Tools for Students in 2026
          </Link>
        </h2>
        <p>
          Best tools students can use for studying, assignments, and productivity.
        </p>
      </div>

      {/* ARTICLE 5 */}
      <div style={{ marginBottom: "25px" }}>
        <h2>
          <Link href="/blog/best-free-image-tools">
            Best Free Online Image Tools in 2026
          </Link>
        </h2>
        <p>
          Learn about image resizers, compressors, and design tools online.
        </p>
      </div>
    </main>
  );
}