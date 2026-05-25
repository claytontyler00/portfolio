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
            I build AI that <span className="accent-italic">patients</span> actually use.
          </h1>
          <p className="lede">
            I came up through product design, ran the design org at Artera, and now run intake AI. Most patient-facing software treats the experience as a configuration layer on top of an EHR. I don&apos;t.
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
              Leading the specialty AI squad at Artera. Open to conversations about design leadership or
              principal IC roles at healthcare SaaS, enterprise SaaS, and AI-native companies.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
