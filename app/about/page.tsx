import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About · Clayton Tyler",
  description:
    "Head of AI, Specialty at Artera. Product design leader who runs AI squads in healthcare.",
};

export default function AboutPage() {
  return (
    <div className="wrap">
      <Nav />
      <main id="main-content">
        <section className="about-hero">
          <div className="about-grid">
            <div className="about-portrait">
              <Image
                src="/about/headshot.jpg"
                alt="Portrait of Clayton Tyler"
                width={900}
                height={1260}
                priority
                sizes="(max-width: 820px) 240px, 280px"
                style={{ width: "100%", height: "auto", borderRadius: "4px" }}
              />
            </div>
            <div className="about-copy">
              <p className="eyebrow about-eyebrow">About</p>
              <h1 className="about-title">
                I design AI for <span className="accent-italic">patients</span>, not for the EHR.
              </h1>
              <p className="about-lede">
                I&apos;m Head of AI for Specialty at Artera, and I came up through product design. Five years ago
                I was redesigning enrollment screens. Now I lead a nine-builder squad designing the agents that
                will run patient intake for 48 specialty practices. Nothing is live yet, and no implementation
                team is in the room when an agent talks to a patient at 11pm. The design has to be right before
                we ship.
              </p>

              <div className="about-section">
                <p className="about-section-label">
                  <span className="num">01</span> What I do now
                </p>
                <p>
                  I run a nine-builder squad at Artera building agentic patient intake for a cohort of specialty
                  practices. The job is part product design and part operating: standing up the squad, picking
                  the customers we build with, and holding a quality bar that EHR-native intake never had to meet.
                </p>
              </div>

              <div className="about-section">
                <p className="about-section-label">
                  <span className="num">02</span> What I believe
                </p>
                <p>
                  Most healthcare software is configured, not designed. It ships as capability, an implementation
                  team bends it into shape, and the patient gets whatever falls out. That worked when the medium
                  was forms and SMS. It breaks when the medium is conversation. No implementation team is in the
                  room when an agent is talking to a patient at 11pm. The design has to be right the first time.
                  That&apos;s what I&apos;m building the squad around.
                </p>
              </div>

              <div className="about-section">
                <p className="about-section-label">
                  <span className="num">03</span> How I got here
                </p>
                <p>
                  Six years at AppFolio designing software people use under stress. Four years at Artera: senior
                  IC, then design manager, then Director of Product Design, now Head of AI for Specialty. The
                  pattern isn&apos;t &ldquo;moved up.&rdquo; It&apos;s kept following the part of the work where
                  design was load-bearing. Right now that&apos;s AI.
                </p>
              </div>

              <div className="about-section about-personal">
                <p className="about-section-label">Off the clock</p>
                <p>
                  Based in Santa Barbara. Scuba diver, banjo player, regular at Orville Peck shows with my
                  husband.
                </p>
              </div>

              <div className="about-cta">
                <p>
                  Open to conversations about design leadership or principal IC roles at healthcare SaaS,
                  enterprise SaaS, and AI-native companies.
                </p>
                <p className="about-cta-links">
                  <a href="mailto:claytonltyler00@gmail.com">Email</a>
                  <span className="sep" aria-hidden="true">·</span>
                  <a
                    href="https://www.linkedin.com/in/clayton-tyler-99a571bb/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
