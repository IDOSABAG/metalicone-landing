"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const industries = [
  {
    title: "Semiconductors",
    href: "/industries/semiconductors",
    badge: "Core Industry",
    description: "Applying broad science and engineering capabilities to create advanced components, systems, and solutions for the semiconductor industry.",
    highlights: ["Vacuum & Electrostatic Chucks", "End Effectors", "Chambers", "FAB Equipment"],
  },
  {
    title: "Commercial Printing",
    href: "/industries/commercial-printing",
    badge: "Core Industry",
    description: "Precise machined parts manufacturing and complex assemblies supporting the commercial printing industry with dedicated supply chain solutions.",
    highlights: ["Offset Presses", "Digital Printers", "Flexographic Machines", "3D Printers"],
  },
  {
    title: "Power Generation",
    href: "/industries/power-generation",
    description: "Powering tomorrow with intelligent manufacturing and engineering — delivering solutions from standalone parts to turnkey integrated systems.",
    highlights: ["Thermal Power", "Hydropower & Wind", "Hydraulic Turbines", "Nuclear SMRs"],
  },
  {
    title: "Transportation",
    href: "/industries/transportation",
    description: "Driving tomorrow's transportation with smarter manufacturing and engineering, from precision parts to fully integrated turnkey systems.",
    highlights: ["Conventional Power Systems", "Renewable Segments", "Nuclear SMRs"],
  },
  {
    title: "Aerospace & Defense",
    href: "/industries/aerospace-defense",
    description: "Providing fully integrated manufacturing metal-based solutions with strategic focus on defense and aerospace as a partner of tier 1 global players.",
    highlights: ["Commercial & Military Aircraft", "Space & UAVs", "Radars & Naval", "Weapon Systems"],
  },
  {
    title: "Engine & Hydraulics",
    href: "/industries/engine-hydraulics",
    description: "World leader in manufacturing critical metal components, system integration of engines and hydraulics.",
    highlights: ["Jet & Turbine Engines", "Hydraulic Pumps & Motors", "Cylinders & Valves", "HPUs"],
  },
];

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        title="Industries We Serve"
        subtitle="Our Expertise"
        description="Across every industry, the pressure to innovate, meet demanding performance targets while controlling costs has never been greater. Metalicone brings a powerful advantage."
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-charcoal text-lg leading-relaxed">
              With Metalicone at your side, you gain a partner committed to elevating performance,
              enhancing reliability, and enabling breakthrough productivity across every sector we serve.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <FadeIn key={ind.title} delay={i * 0.08}>
                <Link
                  href={ind.href}
                  className={`group block relative rounded-2xl border p-8 hover:shadow-xl transition-all h-full ${
                    ind.badge ? "border-deep-blue/20 bg-gradient-to-br from-deep-blue/[0.02] to-white" : "border-light-gray bg-white"
                  }`}
                >
                  {ind.badge && (
                    <span className="absolute top-0 right-0 bg-deep-blue text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-bl-lg rounded-tr-2xl">
                      {ind.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-deep-blue transition-colors">
                    {ind.title}
                  </h3>
                  <p className="mt-3 text-charcoal leading-relaxed">{ind.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {ind.highlights.map((h) => (
                      <span key={h} className="px-3 py-1 bg-deep-blue/5 text-deep-blue text-xs font-medium rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 text-deep-blue font-semibold text-sm flex items-center gap-1">
                    Explore {ind.title}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
