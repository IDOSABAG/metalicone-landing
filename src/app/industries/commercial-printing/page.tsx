"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const technicalCapabilities = [
  {
    title: "Mirror-Finish Lapping",
    value: "Ra 0.1",
    description: "Ultra-smooth surface finishes for ink transfer rollers, impression cylinders, and precision guiding surfaces.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Multi-Axis Mill/Turn",
    value: "9-Axis",
    description: "Complex geometries machined in single setups — cylinders, drums, and roller assemblies with concentricity under 5 microns.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "System Integration",
    value: "Turnkey",
    description: "Complete assembly and testing of fluid delivery systems, ink heads, and precision motion assemblies — ready for OEM integration.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875S10.5 3.089 10.5 4.125c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.839 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
  {
    title: "Deep Hole Drilling",
    value: "L/D 40:1",
    description: "Precision deep drilling for ink channels, cooling passages, and pneumatic systems in large-format printing components.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
];

const printingPlatforms = [
  { title: "Offset Presses", description: "High-speed sheetfed and web offset equipment for commercial and packaging printing." },
  { title: "Digital Inkjet", description: "Production digital printers for variable data, wide-format, and industrial applications." },
  { title: "Flexographic", description: "Flexible packaging and label printing systems requiring precision anilox and plate cylinders." },
  { title: "3D Additive", description: "Next-generation additive manufacturing equipment for industrial production." },
];

export default function CommercialPrintingPage() {
  return (
    <main>
      <PageHero
        title="Precision at Scale: The Future of Industrial Printing"
        subtitle="Core Industry"
        description="Global center of excellence for commercial printing OEMs — delivering precision-machined components and integrated assemblies for offset, digital, flexo, and additive manufacturing platforms."
        backgroundImage="/images/print-rollers.png"
      />

      {/* ─── STRATEGIC INTRO ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">OEM Partner</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Enabling the World&apos;s Leading <span className="text-deep-blue">Printing Equipment Manufacturers</span>
                </h2>
                <p className="mt-6 text-charcoal text-lg leading-relaxed">
                  Metalicone serves as a strategic manufacturing partner for the global printing industry —
                  delivering precision components and integrated assemblies that power the next generation
                  of commercial and industrial printing platforms.
                </p>
                <p className="mt-4 text-charcoal text-lg leading-relaxed">
                  From massive impression cylinders to microscale inkjet components, our capabilities span
                  the full spectrum of printing technology. Multi-axis machining, mirror-finish lapping,
                  and cleanroom assembly ensure every part meets the exacting tolerances that modern
                  printing demands.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {printingPlatforms.map((platform) => (
                    <div key={platform.title} className="bg-off-white border border-light-gray rounded-xl p-4">
                      <div className="text-deep-blue font-bold text-sm">{platform.title}</div>
                      <div className="text-charcoal text-xs mt-1">{platform.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/commercial-printing.png"
                  alt="Large-scale precision printing component manufacturing"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">Industrial Scale Precision</div>
                    <div className="text-sm text-white/70">Components up to 3 meters in length</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── COMPLEX FLUID & INK INTEGRATION ─── */}
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
                  src="/images/ink-system.png"
                  alt="Precision ink delivery system with integrated sensors and controls"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">Turnkey Integration</div>
                    <div className="text-sm text-white/70">Complete Fluid Systems Delivered Ready-to-Install</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase">Fluid Systems</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Complex Fluid & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Ink Integration</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Modern printing equipment demands precision fluid delivery systems that maintain exact ink
                viscosity, temperature, and flow rates. Metalicone delivers complete turnkey solutions —
                from manifold machining to full system assembly with integrated sensors, valves, and controls.
              </p>
              <p className="mt-4 text-white/70 text-lg leading-relaxed">
                Our cleanroom assembly capabilities ensure contamination-free integration of sensitive ink
                delivery components. Every system undergoes comprehensive flow testing and validation before
                shipment — eliminating field integration issues and accelerating OEM time-to-market.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Ink Manifolds", desc: "Multi-port distribution with precision flow paths" },
                  { label: "Print Heads", desc: "Integration and alignment of inkjet assemblies" },
                  { label: "Fluid Reservoirs", desc: "Temperature-controlled ink storage systems" },
                  { label: "Sensor Integration", desc: "Flow, pressure, and viscosity monitoring" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-white/50 text-xs mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── ENABLING NEXT-GEN 3D PRINTING ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
              <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Additive Manufacturing</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Enabling Next-Gen <span className="text-deep-blue">3D Printing</span>
              </h2>
              <p className="mt-6 text-charcoal text-lg leading-relaxed">
                As additive manufacturing evolves from prototyping to production, the equipment demands
                ever-greater precision. Metalicone partners with the world&apos;s leading 3D printing OEMs
                to manufacture the critical components that enable industrial-scale additive production.
              </p>
              <p className="mt-4 text-charcoal text-lg leading-relaxed">
                From precision motion systems to powder handling components, our capabilities support the
                full spectrum of additive technologies — including metal powder bed fusion, binder jetting,
                and large-format polymer systems. Sub-micron tolerances and mirror-finish surfaces ensure
                the repeatability that production additive manufacturing requires.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Metal Powder Bed Fusion", "Binder Jetting", "Large-Format Polymer", "Multi-Material Systems"].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-deep-blue/5 text-deep-blue text-sm font-medium rounded-full border border-deep-blue/10">{tag}</span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left" className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/3d-printing.png"
                  alt="Industrial 3D printing equipment components manufactured by Metalicone"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">Production-Grade Additive</div>
                    <div className="text-sm text-white/70">Components for Industrial 3D Printing Leaders</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── TECHNICAL EDGE ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0a1628] to-[#0f2240]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase">Technical Edge</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Capabilities</span>
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              Specialized capabilities that set Metalicone apart as the manufacturing partner of choice
              for commercial and industrial printing equipment manufacturers.
            </p>
          </FadeIn>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalCapabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all h-full group text-center">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4 text-blue-300 group-hover:bg-blue-500/30 transition-colors">
                    {cap.icon}
                  </div>
                  <div className="text-blue-300 font-bold text-2xl">{cap.value}</div>
                  <h3 className="text-white font-bold mt-2">{cap.title}</h3>
                  <p className="mt-3 text-white/60 text-sm leading-relaxed">{cap.description}</p>
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
              Ready to Elevate Your Printing Equipment Manufacturing?
            </h2>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Our printing industry engineering team brings decades of experience serving the world&apos;s
              leading OEMs. From initial design consultation through production scale-up — let&apos;s
              build the future of printing together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-deep-blue font-bold rounded-full hover:bg-gray-100 transition-colors text-base"
              >
                Partner with our Printing Industry Engineering Team
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
