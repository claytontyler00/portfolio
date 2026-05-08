import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllCaseStudies, getCaseStudy } from "@/lib/case-studies";

export async function generateStaticParams() {
  return getAllCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) return { title: "Not found" };
  return {
    title: `${cs.title} · Clayton Tyler`,
    description: cs.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) notFound();

  const all = getAllCaseStudies();
  const idx = all.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? all[idx - 1] : null;
  const next = idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null;
  const position = `${idx + 1} of ${all.length}`;

  return (
    <div className="wrap">
      <Nav />
      <main id="main-content">
        <article className="case-study">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/#work">Work</Link>
            <span aria-hidden="true"> / </span>
            <span className="current">{cs.title}</span>
          </nav>

          <p className="case-eyebrow">
            {cs.role} · {cs.year} · <span className="case-position">{position}</span>
          </p>
          <h1>{cs.title}</h1>
          <p className="subtitle">{cs.subtitle}</p>

          {cs.stats && cs.stats.length > 0 && (
            <div className="metrics-row">
              {cs.stats.map((s) => (
                <div className="metric-item" key={s.label}>
                  <div className="number">{s.value}</div>
                  <div className="label">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {cs.tldr && (
            <div className="tldr">
              <p className="label">At a glance</p>
              <p>{cs.tldr}</p>
            </div>
          )}

          <div className="prose" dangerouslySetInnerHTML={{ __html: cs.html }} />

          <div className="case-nav" aria-label="Adjacent case studies">
            <div>
              {prev && (
                <Link href={`/work/${prev.slug}`}>
                  <span className="label">← Previous</span>
                  {prev.title}
                </Link>
              )}
            </div>
            <div className="case-nav-right">
              {next && (
                <Link href={`/work/${next.slug}`}>
                  <span className="label">Next →</span>
                  {next.title}
                </Link>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
