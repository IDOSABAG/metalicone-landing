"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const products = [
  { title: "Hydraulic Cylinders & Actuators", description: "Precision-machined cylinders, actuator assemblies, and piston rods for demanding applications. Tolerances down to 0.001 mm with superior surface finish." },
  { title: "Valve Bodies & Manifolds", description: "Complex valve bodies, spools, sleeves, and manifold blocks for hydraulic control systems. Multi-port configurations with integrated flow paths." },
  { title: "Hydraulic Power Units (HPUs)", description: "Complete HPU manufacturing including reservoirs, manifold blocks, integrated valve assemblies, pumps, and full system testing before delivery." },
  { title: "Pump & Motor Components", description: "High-precision pump housings, gear sets, piston assemblies, and motor components for industrial, mobile, and aerospace hydraulic systems." },
  { title: "Servo-Hydraulic Assemblies", description: "Integrated servo-valve assemblies with electronic drives, feedback sensors, and precision-machined mounting interfaces." },
  { title: "Defense-Grade Actuation Systems", description: "MIL-SPEC compliant actuation systems for armored vehicles, naval applications, and aerospace platforms with full traceability." },
];

const milStandards = [
  { code: "MIL-STD-167", name: "Mechanical Vibration", description: "Shipboard equipment vibration testing requirements" },
  { code: "MIL-S-901D", name: "Shock Resistance", description: "High-impact shock testing for naval applications" },
  { code: "MIL-STD-810G", name: "Environmental Testing", description: "Climatic, dynamic, and chemical resistance validation" },
  { code: "MIL-PRF-46010", name: "Hydraulic Fluid Compatibility", description: "Material compatibility with MIL-spec hydraulic fluids" },
];

export default function EngineHydraulicsPage() {
  return (
    <main>
      <PageHero
        title="Hydraulic Systems & Mission-Critical Components"
        subtitle="Industry Segment"
        description="Your one-stop partner for complex hydraulic systems — from precision components to fully integrated assemblies with valves, seals, and sensors."
        backgroundImage="/images/image_3ffe99.png"
      />

      {/* ─── ONE-STOP SHOP INTRO ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">One-Stop Shop</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  Complete Hydraulic Solutions — <span className="text-deep-blue">From Component to System</span>
                </h2>
                <p className="mt-6 text-charcoal text-lg leading-relaxed">
                  Metalicone delivers end-to-end hydraulic system manufacturing — combining precision-machined
                  components with full integration of valves, seals, sensors, and electronic controls. Our
                  vertically integrated capabilities mean fewer suppliers, faster lead times, and complete
                  accountability for system performance.
                </p>
                <p className="mt-4 text-charcoal text-lg leading-relaxed">
                  From initial engineering consultation through final system testing, we partner with OEMs
                  to deliver hydraulic assemblies that meet the most demanding specifications in defense,
                  aerospace, energy, and heavy industrial applications.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Precision Machining", "System Integration", "100% Testing", "Full Traceability"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-deep-blue/5 text-deep-blue text-sm font-medium rounded-full border border-deep-blue/10">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/image_3ffe99.png"
                  alt="Integrated hydraulic valve manifold system with multiple connections"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">Full System Integration</div>
                    <div className="text-sm text-white/70">Valves • Sensors • Controls • Testing</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── HEAVY-DUTY PRECISION CYLINDERS ─── */}
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
                  src="/images/heavy-cylinders.png"
                  alt="Heavy-duty precision hydraulic cylinders with massive bore diameter"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <div className="text-3xl font-bold">15,000 PSI</div>
                    <div className="text-sm text-white/70">Maximum Operating Pressure</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase">Heavy-Duty Engineering</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Heavy-Duty <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Precision Cylinders</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Metalicone manufactures large-bore hydraulic cylinders engineered for the most demanding applications
                in heavy industry, energy, and defense sectors. Our precision machining capabilities handle
                cylinder bores up to 500mm diameter with tolerances maintained at micron-level accuracy.
              </p>
              <p className="mt-4 text-white/70 text-lg leading-relaxed">
                Operating pressures up to 15,000 PSI and extreme environmental durability are achieved through
                advanced materials, proprietary heat treatments, and rigorous quality control at every stage
                of production.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "500mm", label: "Max Bore Diameter" },
                  { value: "15,000 PSI", label: "Operating Pressure" },
                  { value: "0.001mm", label: "Precision Tolerance" },
                  { value: "-40°/+120°C", label: "Temperature Range" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-white font-bold text-xl">{stat.value}</div>
                    <div className="text-white/50 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── DEFENSE ACTUATION SYSTEMS ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
              <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Defense-Grade Engineering</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Defense <span className="text-deep-blue">Actuation Systems</span>
              </h2>
              <p className="mt-6 text-charcoal text-lg leading-relaxed">
                Metalicone specializes in designing and manufacturing hydraulic actuation systems for armored
                fighting vehicles (AFVs) and main battle tanks. Our hatch and door opening mechanisms deliver
                reliable operation under extreme combat conditions — from desert heat to arctic cold.
              </p>
              <p className="mt-4 text-charcoal text-lg leading-relaxed">
                Every system is engineered to meet stringent MIL-STD specifications for shock, vibration,
                and environmental exposure. Our proven track record with defense primes demonstrates that
                when mission-critical systems must perform without fail, Metalicone delivers.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {milStandards.map((std) => (
                  <div key={std.code} className="bg-off-white border border-light-gray rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="text-deep-blue font-bold text-sm">{std.code}</div>
                    <div className="text-charcoal text-xs mt-1">{std.name}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left" className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/tank-actuator.png"
                  alt="Hydraulic door actuator mechanism for armored fighting vehicle"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">Combat-Proven Reliability</div>
                    <div className="text-sm text-white/70">AFV & Tank Actuation Systems</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── ADVANCED SURFACE TECHNOLOGIES ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#0a1628] to-[#0f2240]">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/rod-coating-macro.png"
                  alt="Macro view of advanced ceramic coating on hydraulic rod surface"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-white">
                    <div className="text-2xl font-bold">Micron-Level Coating</div>
                    <div className="text-sm text-white/70">Surface Engineering Excellence</div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase">Surface Engineering</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Advanced Surface <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Technologies</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Maximum corrosion and wear resistance for the harshest operating environments. Our advanced
                coating technologies extend component life cycles and ensure reliable performance in marine,
                desert, and extreme industrial conditions.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { title: "Ceramic Coatings", description: "Ultra-hard ceramic layers providing exceptional wear resistance and thermal stability for high-cycle applications." },
                  { title: "Nickel-Chrome Plating", description: "Industrial-grade plating for superior corrosion protection in marine and high-humidity environments." },
                  { title: "Laser Cladding", description: "Precision laser-deposited coatings for localized wear protection and component repair/rebuild." },
                  { title: "DLC (Diamond-Like Carbon)", description: "Low-friction, high-hardness coatings for sealing surfaces and precision sliding components." },
                ].map((coating, i) => (
                  <FadeIn key={coating.title} delay={0.3 + i * 0.1}>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                      <h4 className="text-white font-bold">{coating.title}</h4>
                      <p className="mt-2 text-white/60 text-sm leading-relaxed">{coating.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS GRID ─── */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Product Portfolio</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
              Hydraulic Components & <span className="text-deep-blue">Systems</span>
            </h2>
            <p className="mt-5 text-charcoal text-lg leading-relaxed">
              From individual precision components to complete integrated systems — our portfolio serves
              the most demanding applications in defense, aerospace, energy, and heavy industry.
            </p>
          </FadeIn>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <FadeIn key={product.title} delay={i * 0.06}>
                <div className="bg-white border border-light-gray rounded-2xl p-7 hover:shadow-lg transition-shadow h-full">
                  <div className="w-10 h-10 rounded-lg bg-deep-blue/10 flex items-center justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-deep-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{product.title}</h3>
                  <p className="mt-2 text-charcoal text-sm leading-relaxed">{product.description}</p>
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
              Ready to Discuss Your Hydraulic System Requirements?
            </h2>
            <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Our engineering team brings decades of experience in hydraulic system design and manufacturing.
              From initial concept through production — let&apos;s build your next mission-critical system together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white text-deep-blue font-bold rounded-full hover:bg-gray-100 transition-colors text-base"
              >
                Consult with our Engineering Team
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
