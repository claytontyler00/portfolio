import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="wrap">
      <Nav />
      <main id="main-content" className="about-hero">
        <p className="about-eyebrow">404</p>
        <h1 className="about-title">
          That page isn't here <span className="accent-italic">yet</span>.
        </h1>
        <p style={{ maxWidth: "56ch", fontSize: "18px", color: "var(--ink)", marginTop: 24 }}>
          The page you were looking for doesn't exist. Head back to{" "}
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "underline" }}>
            the homepage
          </Link>{" "}
          or browse{" "}
          <Link href="/#work" style={{ color: "var(--accent)", textDecoration: "underline" }}>
            selected work
          </Link>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
