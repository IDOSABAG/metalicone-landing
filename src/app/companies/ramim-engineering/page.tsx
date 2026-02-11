"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const capabilities = [
  {
    title: "Multi-Axis CNC Machining",
    description: "5-axis simultaneous milling and turning centers for complex geometries with tolerances down to 0.001 mm.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Wire & Sinker EDM",
    description: "Electrical discharge machining for hardened materials and intricate internal features requiring extreme precision.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Clean Room Assembly",
    description: "ISO Class 5 cleanroom for semiconductor equipment assembly, integration, and qualification testing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Deep Drilling",
    description: "High-aspect-ratio drilling for deep bores up to L/D 40:1 with exceptional straightness and finish.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
      </svg>
    ),
  },
  {
    title: "Full Machine Build",
    description: "Complete OEM machine manufacturing from design through qualification — delivered ready for installation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Quality Inspection",
    description: "CMM and optical inspection systems ensuring 100% traceability on every critical dimension.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "1985", label: "Founded" },
  { value: "250+", label: "Employees" },
  { value: "0.001mm", label: "Precision" },
  { value: "AS9100D", label: "Certified" },
];

export default function RamimEngineeringPage() {
  return (
    <main>
      <PageHero
        title="Ramim Engineering"
        subtitle="A Metalicone Group Company"
        description="Israel's leading precision CNC machining and full-assembly house — delivering mission-critical components for semiconductor, aerospace, and defense industries."
      />

      {/* About */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">About Ramim</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                The Backbone of Metalicone&apos;s Precision Manufacturing
              </h2>
              <p className="mt-6 text-charcoal-light leading-relaxed text-lg">
                Ramim Engineering is the founding pillar of the Metalicone Group, with decades of expertise
                in high-precision CNC machining. From single prototypes to serial production runs, Ramim delivers
                end-to-end manufacturing solutions — including design review, process engineering, machining,
                assembly, and final inspection.
              </p>
              <p className="mt-4 text-charcoal-light leading-relaxed">
                With over 60 CNC machining centers and a dedicated cleanroom facility, Ramim serves the world&apos;s
                most demanding OEMs in semiconductor capital equipment, aerospace, and defense sectors. Every
                component is backed by full dimensional inspection and traceability.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center gap-10">
                <div className="bg-off-white rounded-2xl p-10 w-full">
                  <div className="relative h-16 md:h-20 w-full">
                    <Image
                      src="/images/ramim-without-bg.png"
                      alt="Ramim Engineering"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6 w-full">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-off-white rounded-2xl p-6 text-center">
                      <div className="text-2xl md:text-3xl font-extrabold text-deep-blue">{stat.value}</div>
                      <div className="mt-1 text-sm text-charcoal-light">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">What We Do</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">Core Capabilities</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-xl bg-deep-blue/10 flex items-center justify-center text-deep-blue mb-5">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cap.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{cap.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-blue-300 font-semibold text-sm tracking-[0.15em] uppercase">Markets</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Industries Served</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Semiconductor Equipment", description: "Process chambers, chucks, end effectors, gas delivery systems, and full machine builds for leading FAB equipment OEMs." },
              { title: "Aerospace & Defense", description: "AS9100D-certified structural components, engine parts, and mission-critical assemblies for tier-1 defense contractors." },
              { title: "Industrial & Energy", description: "High-precision components for power generation, hydraulic systems, and commercial printing equipment manufacturers." },
            ].map((industry, i) => (
              <FadeIn key={industry.title} delay={i * 0.15}>
                <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-white/50 leading-relaxed">{industry.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Ready to Partner with Ramim Engineering?
            </h2>
            <p className="mt-4 text-charcoal-light text-lg">
              From prototype to production — let&apos;s build precision together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-3.5 bg-deep-blue text-white font-semibold rounded-full hover:bg-deep-blue-dark transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/"
                className="px-8 py-3.5 border-2 border-deep-blue text-deep-blue font-semibold rounded-full hover:bg-deep-blue hover:text-white transition-colors"
              >
                Back to Group
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
