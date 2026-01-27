"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const capabilities = [
  {
    title: "Thermal Power Systems",
    description:
      "Precision components for conventional transportation power systems including internal combustion engines, hybrid drivetrains, and turbine-based propulsion platforms. Engineered for thermal stability, vibration resistance, and long service life.",
  },
  {
    title: "Renewable & Low-Carbon Segments",
    description:
      "Advanced components for electric, hydrogen fuel cell, and other low-carbon transportation technologies. Supporting the global transition to sustainable mobility through precision-engineered parts for next-generation powertrains.",
  },
  {
    title: "Nuclear Power — SMRs",
    description:
      "Specialized high-tolerance parts for Small Modular Reactors (SMRs) supporting future marine and rail transportation applications. Meeting the strictest nuclear-grade quality and traceability requirements.",
  },
  {
    title: "Integrated Turnkey Systems",
    description:
      "Complete manufacturing from individual precision parts to fully integrated transportation assemblies. End-to-end project management covering design, machining, assembly, testing, and qualification.",
  },
  {
    title: "Drivetrain & Transmission Components",
    description:
      "High-precision gears, shafts, housings, and transmission assemblies for automotive, rail, and marine applications. CNC machining with micron-level accuracy for demanding operational environments.",
  },
  {
    title: "Structural & Chassis Components",
    description:
      "Precision-machined structural elements, brackets, and chassis sub-assemblies for heavy-duty transportation platforms. Investment casting and CNC finishing for complex geometries and weight optimization.",
  },
];

export default function TransportationPage() {
  return (
    <main>
      <PageHero
        title="Transportation"
        subtitle="Industry Segment"
        description="Driving tomorrow's transportation with smarter manufacturing — from precision parts to fully integrated turnkey systems for conventional, electric, and low-carbon platforms."
        backgroundImage="/images/transportation-hero.png"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Turnkey Solutions for{" "}
                  <span className="text-deep-blue">Next-Generation Mobility</span>
                </h2>
                <p className="mt-5 text-charcoal text-lg leading-relaxed">
                  Metalicone delivers advanced manufacturing solutions for the transportation
                  sector, combining precision engineering with scalable production to support
                  the next generation of mobility platforms. From conventional drivetrains to
                  renewable and low-carbon propulsion systems, we provide the critical components
                  that keep the world moving.
                </p>
                <p className="mt-4 text-charcoal text-lg leading-relaxed">
                  Our expertise spans the full transportation value chain — thermal power systems,
                  electric vehicle components, hydrogen fuel cell assemblies, and Small Modular
                  Reactor (SMR) parts for marine and rail applications. Every component is
                  manufactured to the highest standards of accuracy and reliability.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/transportation-hero.png"
                  alt="Advanced transportation manufacturing and precision engineering"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold">Turnkey</div>
                    <div className="text-sm text-white/70">End-to-end integrated systems</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.06}>
                <div className="bg-off-white border border-light-gray rounded-2xl p-7 hover:shadow-lg transition-shadow h-full">
                  <div className="w-10 h-10 rounded-lg bg-deep-blue/10 flex items-center justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-deep-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{cap.title}</h3>
                  <p className="mt-2 text-charcoal text-sm leading-relaxed">{cap.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-16 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-deep-blue font-semibold hover:underline"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Industries
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
