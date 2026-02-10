"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const solutions = [
  {
    title: "Process Chambers",
    description: "Complete chamber assemblies for etch, CVD, PVD, and ALD processes. Engineered to exact specifications with integrated gas distribution, thermal management, and vacuum sealing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Vacuum Manifolds",
    description: "Multi-port vacuum manifolds with precision flow paths, integrated valves, and leak-tight sealing. Designed for UHV applications with surface finishes below Ra 0.4.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Metallurgic Equipment",
    description: "High-precision components for metrology and inspection tools. Sub-micron accuracy for critical measurement systems in front-end and back-end processes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Inspection Tools",
    description: "Precision parts for optical, e-beam, and X-ray inspection systems. Engineered for thermal stability and vibration damping in high-throughput environments.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Gas Delivery Systems",
    description: "Ultra-clean gas distribution components with electropolished surfaces and VCR/VCO fittings. Designed for corrosive and reactive process chemistries.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Full Machine Build",
    description: "Complete semiconductor tool manufacturing from design through qualification. Assembly, integration, and testing delivered ready for FAB installation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
];

const handlingCapabilities = [
  { title: "Vacuum Chucks", description: "High-precision wafer clamping with exceptional flatness and thermal uniformity" },
  { title: "Electrostatic Chucks (ESCs)", description: "Superior clamping force distribution for plasma processes" },
  { title: "Mechanical Chucks", description: "Robust solutions for demanding process environments" },
  { title: "Vacuum End Effectors", description: "Minimal particle generation for automated transport" },
  { title: "Edge-Grip Effectors", description: "Minimized contact for contamination-sensitive handling" },
  { title: "Bernoulli Effectors", description: "Zero-contact handling eliminating backside contamination" },
];

export default function SemiconductorsPage() {
  return (
    <main>
      <PageHero
        title="Semiconductor Manufacturing Partner"
        subtitle="Core Industry"
        description="Turnkey solutions for complex vacuum systems and FAB equipment — delivering precision-engineered components and complete sub-assemblies to the world's leading semiconductor equipment manufacturers."
        backgroundImage="/images/semi-chamber.png"
      />

      {/* ─── STRATEGIC PARTNERSHIP INTRO ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Strategic Partner</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Enabling the Future of <span className="text-deep-blue">Semiconductor Manufacturing</span>
                </h2>
                <p className="mt-6 text-charcoal text-lg leading-relaxed">
                  As a core industry for Metalicone, semiconductors represent our largest and most strategically
                  important segment. We partner with the world&apos;s leading FAB equipment manufacturers — delivering
                  everything from individual precision components to complete, qualified sub-systems.
                </p>
                <p className="mt-4 text-charcoal text-lg leading-relaxed">
                  Our turnkey approach means fewer suppliers, faster time-to-market, and single-source accountability
                  for the most demanding semiconductor applications. From 200mm to 300mm+ platforms, Metalicone
                  delivers the precision that advanced node manufacturing demands.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Turnkey Solutions", "Cleanroom Assembly", "Single Micron Precision", "Full Traceability"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-deep-blue/5 text-deep-blue text-sm font-medium rounded-full border border-deep-blue/10">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/image_40def8.png"
                  alt="Advanced semiconductor FAB equipment manufacturing"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">Global FAB Partners</div>
                    <div className="text-sm text-white/70">Serving Industry Leaders Worldwide</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── WAFER HANDLING MASTERY ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-[#0a1628]">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/semi-chuck.png"
                  alt="Precision vacuum chuck with silicon wafer in cleanroom environment"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">Wafer-Level Precision</div>
                    <div className="text-sm text-white/70">Contamination-Free Handling Solutions</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase">Handling Excellence</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Wafer Handling <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Mastery</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Metalicone engineers and manufactures the full spectrum of wafer handling solutions — from
                vacuum and electrostatic chucks (ESCs) to advanced end effectors. Every component is designed
                for exceptional flatness, thermal stability, and contamination control.
              </p>
              <p className="mt-4 text-white/70 text-lg leading-relaxed">
                Our materials expertise ensures optimal thermal conductivity for uniform wafer temperature,
                while specialized surface treatments minimize particle generation — critical for advanced
                node fabrication where even nanometer-scale contamination impacts yield.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {handlingCapabilities.map((cap, i) => (
                  <FadeIn key={cap.title} delay={0.3 + i * 0.05}>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                      <div className="text-white font-semibold text-sm">{cap.title}</div>
                      <div className="text-white/50 text-xs mt-1 leading-relaxed">{cap.description}</div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── MICRON-LEVEL VERIFICATION ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
              <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Quality Assurance</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Micron-Level <span className="text-deep-blue">Verification</span>
              </h2>
              <p className="mt-6 text-charcoal text-lg leading-relaxed">
                In semiconductor manufacturing, precision isn&apos;t just measured — it&apos;s verified at every step.
                Our cleanroom-certified inspection processes ensure that every component meets the exacting
                tolerances that advanced FAB equipment demands.
              </p>
              <p className="mt-4 text-charcoal text-lg leading-relaxed">
                With measurement accuracy down to a single micron (0.001 mm), Metalicone provides the
                documentation and traceability that semiconductor OEMs require — from incoming material
                certification through final dimensional verification and cleanroom packaging.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { value: "0.001mm", label: "Single Micron Precision", sublabel: "Measurement Accuracy" },
                  { value: "Class 100", label: "Cleanroom Assembly", sublabel: "ISO 5 Certified" },
                  { value: "100%", label: "Inspection Coverage", sublabel: "Critical Dimensions" },
                  { value: "Full", label: "Traceability", sublabel: "Material to Shipment" },
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
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/semi-inspection.png"
                  alt="Laser metrology inspection with digital measurement overlay"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">Precision Metrology</div>
                    <div className="text-sm text-white/70">Cleanroom-Certified Verification</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRY-SPECIFIC SOLUTIONS ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0a1628] to-[#0f2240]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase">Solutions Portfolio</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Semiconductor <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Solutions</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              From individual components to complete equipment builds — our capabilities span the full
              spectrum of semiconductor manufacturing requirements.
            </p>
          </FadeIn>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <FadeIn key={solution.title} delay={i * 0.08}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all h-full group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-5 text-blue-300 group-hover:bg-blue-500/30 transition-colors">
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{solution.title}</h3>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">{solution.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-deep-blue to-deep-blue-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Accelerate Your Semiconductor Equipment Development?
            </h2>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Our semiconductor engineering team brings decades of experience in precision manufacturing
              for the world&apos;s leading FAB equipment manufacturers. Let&apos;s discuss how Metalicone can
              become your strategic manufacturing partner.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-deep-blue font-bold rounded-full hover:bg-gray-100 transition-colors text-base"
              >
                Consult with our Semiconductor Engineering Experts
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
