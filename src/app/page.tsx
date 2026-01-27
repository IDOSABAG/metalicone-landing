"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const industries = [
  { title: "Semiconductors", href: "/industries/semiconductors", badge: "Core Industry", description: "Advanced components for FAB equipment, chucks, end effectors, and chambers." },
  { title: "Commercial Printing", href: "/industries/commercial-printing", badge: "Core Industry", description: "Precision parts and assemblies for offset, digital, flexographic, and 3D printers." },
  { title: "Power Generation", href: "/industries/power-generation", description: "Turnkey systems for thermal, renewable, hydraulic, and nuclear power." },
  { title: "Transportation", href: "/industries/transportation", description: "Smarter manufacturing for tomorrow's transportation systems." },
  { title: "Aerospace & Defense", href: "/industries/aerospace-defense", description: "Integrated metal-based solutions for tier 1 global players." },
  { title: "Engine & Hydraulics", href: "/industries/engine-hydraulics", description: "Critical components for jet engines, turbines, and hydraulic systems." },
];

const qualityStandards = [
  { name: "AS9100D", description: "Aerospace Quality Management" },
  { name: "ISO 9001:2015", description: "Quality Management Systems" },
  { name: "ISO 14001", description: "Environmental Management" },
  { name: "ISO 45001", description: "Occupational Health & Safety" },
  { name: "NADCAP", description: "Special Process Accreditation" },
];

const capabilities = [
  { title: "CNC Mill / Turn", description: "Multi-axis precision machining with tolerances down to 0.001 mm for complex geometries." },
  { title: "Wire & Sinker EDM", description: "Electrical discharge machining for hardened materials and intricate internal features." },
  { title: "Deep Drilling", description: "High-aspect-ratio drilling for deep bores with exceptional straightness and surface finish." },
  { title: "Investment Casting", description: "Lost-wax casting for near-net-shape aerospace and industrial components." },
  { title: "Clean Room Assembly", description: "ISO Class 5 cleanroom assembly for semiconductor and optical applications." },
  { title: "Surface Treatment", description: "Anodizing, plating, passivation, and specialized coatings for performance and protection." },
];

const worldPoints = [
  { id: "israel", label: "Israel", x: 55.5, y: 50, count: "6 Sites" },
  { id: "germany", label: "Germany", x: 50.5, y: 38.5, count: "European Hub" },
  { id: "usa", label: "USA", x: 24.0, y: 43.5, count: "Strategic Partner" },
  { id: "india", label: "India", x: 69.5, y: 57.5, count: "EMS & Distribution" },
];

export default function Home() {
  return (
    <main>
      {/* ─── 1. HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/image_400219.png"
          alt="Massive industrial turbine — Metalicone precision manufacturing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-blue/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/30 via-transparent to-deep-blue/60" />

        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-24 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Global Partner to Industry Leaders</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            Precision You Can Trust.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
              Capability You Can Scale.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            World-class engineering and manufacturing expertise — delivering
            precision-engineered components and assembly solutions down to{" "}
            <span className="text-white font-semibold">a single micron (0.001&nbsp;mm)</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto"
          >
            {[
              { value: "30+", label: "Years of Excellence" },
              { value: "9", label: "Manufacturing Sites" },
              { value: "0.001mm", label: "Precision Accuracy" },
              { value: "5", label: "Quality Standards" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-white/50 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/industries" className="px-8 py-4 bg-white text-deep-blue font-bold rounded-full hover:bg-gray-100 transition-colors text-base">
              Explore Our Industries
            </Link>
            <Link href="/#contact" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-base">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-white/60" />
          </div>
        </motion.div>
      </section>

      {/* ─── 2. THE PRECISION IDENTITY ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Core Value</span>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Accuracy as a <span className="text-deep-blue">Core Value</span>
                </h2>
                <p className="mt-6 text-charcoal text-lg leading-relaxed">
                  The Metalicone name is more than a brand — it is a seal of quality.
                  Every component that leaves our manufacturing floor carries the promise of
                  precision down to <strong className="text-deep-blue">0.001 mm (a single micron)</strong>.
                </p>
                <p className="mt-4 text-charcoal text-lg leading-relaxed">
                  Our laser-engraved logo is the final stamp of confidence — certifying that each part
                  has passed our rigorous inspection protocols and meets the exacting tolerances
                  demanded by the world&apos;s most advanced industries.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Micron-Level Precision", "Laser-Certified Parts", "100% Inspection", "Zero-Defect Commitment"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-deep-blue/5 text-deep-blue text-sm font-medium rounded-full border border-deep-blue/10">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/image_2f9259.png"
                  alt="Metalicone logo laser-engraved on precision component — seal of quality"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6">
                  <div className="text-white text-center">
                    
                    <div className="text-sm text-white/70">Accuracy on Every Part</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 3. STRATEGIC INNOVATION HUB ─── */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/image_2f9502.png"
                  alt="Metalicone modern R&D and development center"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Innovation &amp; R&amp;D</span>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  The Industrial Home of <span className="text-deep-blue">Innovation</span>
                </h2>
                <p className="mt-6 text-charcoal text-lg leading-relaxed">
                  More than a contract manufacturer — Metalicone is a strategic R&amp;D partner for
                  global OEMs. Our engineering teams collaborate directly with customer design groups
                  to optimize manufacturability, reduce lead times, and push the boundaries of what&apos;s possible.
                </p>
                <p className="mt-4 text-charcoal text-lg leading-relaxed">
                  With over 3 decades of hands-on experience and a modern innovation center,
                  we merge proven craftsmanship with future-forward technologies — from advanced
                  5-axis CNC platforms to intelligent quality systems.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { value: "30+", label: "Years of Experience" },
                    { value: "9", label: "Manufacturing Sites" },
                    { value: "6", label: "Industry Sectors" },
                    { value: "3", label: "Continents" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-light-gray rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-deep-blue">{stat.value}</div>
                      <div className="text-xs text-charcoal mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 4. MICRON-LEVEL PROOF — ADVANCED ENGINEERING SOLUTIONS ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Engineering Excellence</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Advanced Engineering <span className="text-deep-blue">Solutions</span>
            </h2>
            <p className="mt-5 text-charcoal text-lg leading-relaxed">
              From multi-axis CNC machining to EDM and deep drilling — our technology portfolio
              serves the most demanding sectors including semiconductors and commercial printing.
            </p>
          </FadeIn>

          <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1} className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/semiconductor-fab.png"
                  alt="Advanced semiconductor fabrication with precision HUD overlay"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div className="grid sm:grid-cols-2 gap-5">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="bg-off-white border border-light-gray rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 rounded-lg bg-deep-blue/10 flex items-center justify-center mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-deep-blue" />
                    </div>
                    <h4 className="font-bold text-foreground text-sm">{cap.title}</h4>
                    <p className="mt-1.5 text-charcoal text-xs leading-relaxed">{cap.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 5. UNWAVERING QUALITY ASSURANCE ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/images/image_2f957b.png"
          alt="Precision measurement and quality control at Metalicone"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep-blue/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-blue-200 font-semibold text-sm tracking-[0.2em] uppercase">Quality Assurance</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Platinum Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Reliability</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Quality is non-negotiable. Every part is manufactured, inspected, and delivered
                under a multi-tiered quality system certified to the highest international standards.
                Our commitment: 100% accuracy, 100% traceability, zero defects.
              </p>
              <div className="mt-8 space-y-3">
                {qualityStandards.map((std) => (
                  <div key={std.name} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-sm">{std.name}</span>
                    <span className="text-white/50 text-sm">— {std.description}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "5", label: "Quality Certifications" },
                  { value: "100%", label: "Part Inspection" },
                  { value: "0", label: "Tolerance for Defects" },
                  { value: "24/7", label: "Process Monitoring" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 6. INDUSTRIES PREVIEW ─── */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Industries We Serve</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Delivering Excellence Across <span className="text-deep-blue">Key Sectors</span>
            </h2>
            <p className="mt-5 text-charcoal text-lg leading-relaxed">
              World-class engineering and manufacturing expertise with a collaborative approach that accelerates your path from concept to solution.
            </p>
          </FadeIn>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <FadeIn key={ind.title} delay={i * 0.08}>
                <Link href={ind.href} className="group block relative rounded-2xl border border-light-gray bg-white p-8 hover:shadow-xl transition-all h-full">
                  {ind.badge && (
                    <span className="absolute top-0 right-0 bg-deep-blue text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-bl-lg rounded-tr-2xl">{ind.badge}</span>
                  )}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-deep-blue transition-colors">{ind.title}</h3>
                  <p className="mt-3 text-charcoal text-sm leading-relaxed">{ind.description}</p>
                  <div className="mt-5 text-deep-blue text-sm font-semibold flex items-center gap-1">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. GLOBAL PRESENCE TEASER ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Global Footprint</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Manufacturing Across <span className="text-deep-blue">4 Countries</span>
            </h2>
            <p className="mt-5 text-charcoal text-lg leading-relaxed">
              9 manufacturing sites and strategic partnerships spanning Israel, Germany, the United States, and India.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0a1628]">
              <Image
                src="/images/global-reach-map2.png"
                alt="Metalicone global manufacturing footprint"
                width={1400}
                height={700}
                className="object-cover w-full"
              />

              {/* Hotspot dots */}
              {worldPoints.map((pt) => (
                <div
                  key={pt.id}
                  className="absolute group"
                  style={{
                    left: `${pt.x}%`,
                    top: `${pt.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-white/80 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                  </span>
                  {/* Label */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-9 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    <span className="bg-white text-deep-blue text-xs font-bold px-3 py-1 rounded-lg shadow-lg">
                      {pt.label} — {pt.count}
                    </span>
                  </div>
                </div>
              ))}

              {/* CTA overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1628] to-transparent p-8 text-center">
                <Link
                  href="/global-reach"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-deep-blue font-bold rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  Explore Our Global Reach
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Country summary */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {worldPoints.map((pt, i) => (
              <FadeIn key={pt.id} delay={0.1 + i * 0.06}>
                <div className="bg-off-white border border-light-gray rounded-xl p-5 text-center">
                  <div className="text-lg font-bold text-foreground">{pt.label}</div>
                  <div className="text-sm text-charcoal mt-1">{pt.count}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. CONTACT ─── */}
      <section id="contact" className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="relative bg-gradient-to-br from-deep-blue to-deep-blue-dark rounded-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 lg:p-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Ready to Elevate Your Manufacturing Capabilities?</h2>
                  <p className="mt-5 text-white/60 text-lg leading-relaxed">We work with OEMs to solve challenges, providing expertise and know-how.</p>
                  <div className="mt-8 space-y-4">
                    {["Over 3 decades of experience", "High quality, stable, cost-effective manufacturing", "Expertise in various platforms and materials", "Proven accuracy down to 0.001 mm"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-white/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="text" className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="First Name" />
                      <input type="text" className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Last Name" />
                    </div>
                    <input type="email" className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Email" />
                    <input type="text" className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Company" />
                    <textarea rows={4} className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue resize-none" placeholder="Tell us about your project..." />
                    <button type="submit" className="w-full py-3.5 bg-deep-blue text-white font-bold rounded-xl hover:bg-deep-blue-dark transition-colors">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
