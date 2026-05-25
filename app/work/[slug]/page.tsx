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
  const nextSlug = cs.nextSlug ?? all[(idx + 1) % all.length]?.slug;
  const next = nextSlug ? all.find((c) => c.slug === nextSlug) ?? null : null;
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

          <div className="case-eyebrow wire-eyebrow">
            <span>ARTERA</span>
            <span className="sep">/</span>
            <span>{cs.role}</span>
            <span className="sep">/</span>
            <span>{cs.year}</span>
            <span className="sep">/</span>
            <span className="mute">{position}</span>
          </div>
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

          {next && (
            <div className="case-nav" aria-label="Next case study">
              <div className="case-nav-right">
                <Link href={`/work/${next.slug}`}>
                  <span className="label">Next case</span>
                  {next.title}
                </Link>
              </div>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
