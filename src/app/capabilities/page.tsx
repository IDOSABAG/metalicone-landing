"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const capabilities = [
  { title: "Mill/Turn & Turn/Mill", metric: "0.001mm", metricLabel: "Precision", description: "Precision machining down to a single micron (0.001 mm) in one clamp — delivering unparalleled accuracy for the most demanding components." },
  { title: "Angular Head Machining", metric: "360°", metricLabel: "Multi-axis", description: "Angular head precise machining results in highly complex parts capabilities, enabling geometries impossible with conventional approaches." },
  { title: "Deep Automated Drilling", metric: "600mm", metricLabel: "Max Depth", description: "Deep automated high-cycle drilling capabilities up to 600 mm depth, maintaining tight tolerances throughout the entire bore length." },
  { title: "Lapping & Deburring", metric: "Ra 0.1", metricLabel: "Surface", description: "Surface finishing to the highest standards — lapping achieves mirror-like finishes for sealing surfaces and critical interfaces." },
  { title: "EDM & WEDM", metric: "±2μm", metricLabel: "Tolerance", description: "Electrical Discharge Machining and Wire EDM for intricate geometries, hardened materials, and features unreachable by conventional tools." },
  { title: "Complex Assembly", metric: "100%", metricLabel: "Integrated", description: "Full Turn-Key assembly capabilities — from sub-assemblies to fully integrated systems with comprehensive quality verification and testing." },
];

const qualityStandards = [
  "AS9100 — Aerospace Quality Management",
  "ISO 9001 — Quality Management Systems",
  "ISO 14001 — Environmental Management",
  "NADCAP — Special Process Accreditation",
  "Platinum Grade Supplier Certification",
];

export default function CapabilitiesPage() {
  return (
    <main>
      <PageHero
        title="Capabilities & Technologies"
        subtitle="Engineering Excellence"
        description="Engineering expertise, proven trusted solutions, and supply chain excellency — advanced, innovative manufacturing for over 3 decades."
        backgroundImage="/images/semiconductor-fab.png"
      />

      {/* Precision Accuracy Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Micron-Level Accuracy</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                  Precision Down to <span className="text-deep-blue">0.001 mm</span>
                </h2>
                <p className="mt-5 text-charcoal text-lg leading-relaxed">
                  Proven achievement of unprecedented levels of accuracy in complex component
                  production down to a single micron. Our leading, innovative engineering team
                  ensures full alignment between part design and manufacturing technology —
                  maintaining unwavering commitment to quality, deliveries, and safety.
                </p>
                <div className="mt-8">
                  <h4 className="font-bold text-foreground mb-3">Quality Certifications</h4>
                  <ul className="space-y-2">
                    {qualityStandards.map((std) => (
                      <li key={std} className="flex items-center gap-3 text-sm text-charcoal">
                        <div className="w-5 h-5 rounded-full bg-deep-blue/10 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {std}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/semiconductor-fab.png" alt="Semiconductor FAB precision measurement — accuracy to 0.001 mm" width={700} height={500} className="object-cover w-full" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6">
                  <div className="text-white text-center">
                    <div className="text-3xl font-bold">0.001 mm</div>
                    <div className="text-sm text-white/70">Single micron precision</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Complex Assembly & Cleanroom */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/clean-room-assembly.png" alt="Technician performing complex assembly in cleanroom environment" width={700} height={500} className="object-cover w-full" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Full Turn-Key</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                  Complex Assembly & <span className="text-deep-blue">System Integration</span>
                </h2>
                <p className="mt-5 text-charcoal text-lg leading-relaxed">
                  Our Full Turn-Key capabilities span from individual component manufacturing
                  through complex sub-assembly integration to complete system delivery. Cleanroom
                  environments, rigorous quality inspection, and comprehensive testing ensure
                  every assembly meets the highest standards.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Multi-item sub-assembly integration",
                    "Cleanroom assembly environments",
                    "Complete system testing and qualification",
                    "End-to-end project management",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-charcoal">
                      <span className="w-2 h-2 rounded-full bg-deep-blue shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Precision Casting */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Nesher Facility</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
                  Precision Casting — <span className="text-deep-blue">Investment (Lost Wax)</span>
                </h2>
                <p className="mt-5 text-charcoal text-lg leading-relaxed">
                  Our Nesher Industrial Zone facility specializes in investment casting (lost wax process),
                  delivering near-net-shape components with exceptional surface finish and dimensional accuracy.
                  This process is ideal for complex geometries in aerospace, defense, and industrial applications
                  where conventional machining alone cannot achieve the required form.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Lost wax investment casting",
                    "Aerospace-grade alloys and superalloys",
                    "Near-net-shape complex geometries",
                    "Integrated post-casting CNC finishing",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-charcoal">
                      <span className="w-2 h-2 rounded-full bg-deep-blue shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/precision-casting.png" alt="Molten metal being poured in precision investment casting process" width={700} height={500} className="object-cover w-full" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Technologies Grid */}
      <section className="py-24 lg:py-32 bg-deep-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Core Technologies</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.08}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="px-3 py-1 bg-white/10 rounded-lg">
                      <span className="text-2xl font-bold text-white">{cap.metric}</span>
                    </div>
                    <span className="text-xs text-white/40 uppercase tracking-wider">{cap.metricLabel}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                  <p className="mt-3 text-white/50 text-sm leading-relaxed">{cap.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full">
              <span className="text-white/80 text-sm">Leading, innovative engineering team meeting the challenges of tomorrow</span>
              <span className="text-white font-bold text-sm">Getting things done!</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
