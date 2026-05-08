"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="wrap">
      <Nav />
      <main id="main-content" className="about-hero">
        <p className="about-eyebrow">500</p>
        <h1 className="about-title">
          Something <span className="accent-italic">went wrong</span>.
        </h1>
        <p style={{ maxWidth: "56ch", fontSize: "18px", color: "var(--ink)", marginTop: 24 }}>
          An unexpected error occurred. Try refreshing, or head back to{" "}
          <Link href="/" style={{ color: "var(--accent)", textDecoration: "underline" }}>
            the homepage
          </Link>
          .
        </p>
        <button
          onClick={() => reset()}
          style={{
            marginTop: 24,
            padding: "10px 20px",
            background: "var(--ink)",
            color: "var(--bg)",
            border: "none",
            fontFamily: "var(--sans)",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
            borderRadius: 2,
          }}
        >
          Try again
        </button>
      </main>
      <Footer />
    </div>
  );
}
