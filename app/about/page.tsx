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
                Design discipline at uncomfortable <span className="accent-italic">altitude</span>.
              </h1>
              <p>
                I came up through product design. Four years at Artera took me from senior IC to Director of
                Product Design to Head of AI, Specialty. Before that, six years at AppFolio.
              </p>
              <p>
                What has carried through every role is a way of working: measure from the patient's perspective,
                design for goal completion not feature parity, and treat the intake experience as the product
                rather than a configuration layer on top of an EHR.
              </p>
              <p>
                Right now I lead a nine-builder AI squad building agentic patient intake for 48 specialty
                healthcare practices. My role is part design, part operator, built on the conviction that design
                discipline is the most undervalued edge in patient-facing AI.
              </p>
              <p className="mute">
                Based in Santa Barbara. Scuba diver, banjo player, regular at Orville Peck shows with my husband.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
