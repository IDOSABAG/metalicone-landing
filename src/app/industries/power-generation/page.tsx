"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const engineeringCapabilities = [
  {
    title: "Super-Alloy Machining",
    value: "Inconel & Hastelloy",
    description: "Multi-axis precision machining of nickel-based super-alloys for extreme temperature and corrosion resistance in turbine and reactor applications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Large-Scale Assemblies",
    value: "Up to 5 Meters",
    description: "Precision manufacturing and assembly of oversized components — turbine casings, reactor vessels, and generator housings with tolerances under 50 microns.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Thermal Management",
    value: "Critical Cooling",
    description: "Complex heat exchanger components, cooling channels, and thermal barrier systems engineered for extreme operating temperatures.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Nuclear-Grade QA",
    value: "NQA-1 Compliant",
    description: "Full traceability, documentation, and quality assurance meeting the stringent requirements of nuclear safety standards including NQA-1 and ASME N-stamp.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const renewableCapabilities = [
  { title: "Wind Turbines", description: "Precision gearbox components, blade pitch mechanisms, and generator assemblies" },
  { title: "Solar Thermal", description: "Concentrator components, tracking systems, and heat transfer assemblies" },
  { title: "Hydroelectric", description: "Turbine runners, guide vanes, and generator shaft assemblies" },
  { title: "Energy Storage", description: "Precision components for grid-scale battery and hydrogen systems" },
];

function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

export default function PowerGenerationPage() {
  return (
    <main>
      <PageHero
        title="Powering the Future: Turnkey Solutions for Global Energy"
        subtitle="Industry Segment"
        description="End-to-end manufacturing solutions for the world's most demanding energy systems — from conventional turbines to next-generation nuclear and renewable platforms."
        backgroundImage="/images/image_400219.png"
      />

      {/* ─── STRATEGIC INTRO ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Energy Infrastructure</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Trusted Partner for <span className="text-deep-blue">Global Energy Leaders</span>
                </h2>
                <p className="mt-6 text-charcoal text-lg leading-relaxed">
                  Metalicone delivers precision-engineered components and complete turnkey solutions for the
                  global power generation industry. Our manufacturing capabilities span the full spectrum of
                  energy production technologies — from conventional thermal plants to the cutting edge of
                  renewable and nuclear innovation.
                </p>
                <p className="mt-4 text-charcoal text-lg leading-relaxed">
                  With decades of experience serving tier-one OEMs and operators, we understand that power
                  generation demands absolute reliability. Every component we manufacture is engineered to
                  perform flawlessly under the most extreme operating conditions — because downtime isn&apos;t
                  an option when the world depends on your energy.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Thermal Power", "Renewables", "Nuclear SMRs", "Grid Infrastructure"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-deep-blue/5 text-deep-blue text-sm font-medium rounded-full border border-deep-blue/10">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <ParallaxImage
                  src="/images/power-generation.png"
                  alt="Massive turbine rotor for power generation applications"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">Mission-Critical Reliability</div>
                    <div className="text-sm text-white/70">Components for 24/7 Operation</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── RENEWABLE & SUSTAINABLE ENERGY ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0a1628]">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[450px]">
                <ParallaxImage
                  src="/images/renewable-hub.png"
                  alt="Renewable energy infrastructure with wind turbines and solar installations"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">Clean Energy Future</div>
                    <div className="text-sm text-white/70">Precision Components for Sustainable Power</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-green-400 font-semibold text-sm tracking-[0.2em] uppercase">Sustainable Energy</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Renewable & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300">Sustainable Energy</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                The global transition to clean energy demands precision manufacturing at scale. Metalicone
                partners with leading renewable energy OEMs to deliver the critical components that power
                wind farms, solar installations, and hydroelectric facilities worldwide.
              </p>
              <p className="mt-4 text-white/70 text-lg leading-relaxed">
                From massive wind turbine gearbox assemblies to precision solar tracking mechanisms, our
                manufacturing capabilities support every major renewable technology. We combine large-scale
                machining with micron-level precision to deliver components that maximize energy capture
                and minimize maintenance requirements.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {renewableCapabilities.map((cap) => (
                  <div key={cap.title} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                    <div className="text-white font-semibold text-sm">{cap.title}</div>
                    <div className="text-white/50 text-xs mt-1 leading-relaxed">{cap.description}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── NEXT-GEN NUCLEAR (SMRs) ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
              <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Advanced Nuclear</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Next-Gen Nuclear: <span className="text-deep-blue">SMRs</span>
              </h2>
              <p className="mt-6 text-charcoal text-lg leading-relaxed">
                Small Modular Reactors represent the future of safe, scalable nuclear energy. Metalicone
                is positioned as a manufacturing partner for the emerging SMR industry — combining our
                precision machining expertise with the rigorous quality systems that nuclear applications demand.
              </p>
              <p className="mt-4 text-charcoal text-lg leading-relaxed">
                SMR components require tolerances measured in single microns, materials capable of withstanding
                extreme radiation and thermal environments, and documentation that meets NQA-1 and ASME
                nuclear codes. Our decades of aerospace and defense experience translate directly to the
                exacting requirements of next-generation nuclear platforms.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { value: "0.001mm", label: "Single Micron Precision", sublabel: "Critical tolerances" },
                  { value: "NQA-1", label: "Nuclear QA Standard", sublabel: "Full compliance" },
                  { value: "100%", label: "Traceability", sublabel: "Material to delivery" },
                  { value: "ASME", label: "N-Stamp Ready", sublabel: "Nuclear certification" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-off-white border border-light-gray rounded-xl p-5">
                    <div className="text-deep-blue font-bold text-2xl">{stat.value}</div>
                    <div className="text-foreground font-semibold text-sm mt-1">{stat.label}</div>
                    <div className="text-charcoal text-xs">{stat.sublabel}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left" className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[450px]">
                <ParallaxImage
                  src="/images/smr-core.png"
                  alt="Small Modular Reactor core visualization with precision engineering"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">Next-Gen Nuclear</div>
                    <div className="text-sm text-white/70">Precision Manufacturing for SMR Platforms</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── ENGINEERING EXCELLENCE ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0a1628] to-[#0f2240]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase">Engineering Excellence</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Capabilities</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              Specialized capabilities meeting the stringent safety and quality standards
              required by the global energy industry.
            </p>
          </FadeIn>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringCapabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all h-full group text-center">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4 text-blue-300 group-hover:bg-blue-500/30 transition-colors">
                    {cap.icon}
                  </div>
                  <div className="text-blue-300 font-bold text-lg">{cap.value}</div>
                  <h3 className="text-white font-bold mt-2">{cap.title}</h3>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">{cap.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} className="mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  { label: "ISO 9001:2015", desc: "Quality Management" },
                  { label: "AS9100D", desc: "Aerospace Standard" },
                  { label: "ISO 14001", desc: "Environmental Management" },
                  { label: "NADCAP", desc: "Special Processes" },
                ].map((cert) => (
                  <div key={cert.label} className="text-center">
                    <div className="text-white font-bold">{cert.label}</div>
                    <div className="text-white/50 text-xs">{cert.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-deep-blue to-deep-blue-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Power Your Next Energy Project?
            </h2>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              From conventional thermal plants to next-generation SMRs and renewable installations —
              our engineering team brings decades of experience delivering mission-critical components
              for the world&apos;s most demanding energy applications.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-deep-blue font-bold rounded-full hover:bg-gray-100 transition-colors text-base"
              >
                Connect with our Energy Engineering Team
              </Link>
              <Link
                href="/capabilities"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-base"
              >
                View All Capabilities
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── BACK LINK ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center">
            <Link href="/industries" className="inline-flex items-center gap-2 text-deep-blue font-semibold hover:underline">
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
