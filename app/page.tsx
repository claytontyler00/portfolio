import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllCaseStudies } from "@/lib/case-studies";

export default function Home() {
  const cases = getAllCaseStudies();
  return (
    <div className="wrap">
      <Nav />
      <main id="main-content">
        <section className="hero">
          <p className="eyebrow">Head of AI, Specialty · Artera</p>
          <h1>
            Design leader who <span className="accent-italic">runs AI</span> in healthcare.
          </h1>
          <p className="lede">
            I built and led the product design organization at Artera, a patient communication platform used by 800+
            provider organizations. Now I lead a nine-builder AI squad building agentic patient intake for 48
            specialty healthcare practices.
          </p>
        </section>

        <hr className="rule-thick" />

        <section id="work" className="cases">
          <p className="section-label">
            Selected <b>work</b>
          </p>
          {cases.map((c) => (
            <Link className="case" href={`/work/${c.slug}`} key={c.slug}>
              <div>
                <h3>{c.title}</h3>
                <div className="role">
                  {c.role} · {c.year}
                </div>
              </div>
              <p>{c.summary}</p>
              <div className="metric">
                {c.metric}
                <span>{c.metricLabel}</span>
                <span className="arrow" aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </section>

        <section className="cta-strip">
          <div>
            <p className="section-label">Currently</p>
            <p className="cta-body">
              Leading the specialty AI squad at Artera. Open to conversations about design leadership roles at
              healthcare SaaS, enterprise SaaS, and AI-native companies.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/about" className="cta-link">
              More about me <span aria-hidden="true">→</span>
            </Link>
            <a href="mailto:clayton.tyler@artera.io" className="cta-link">
              Get in touch <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
