"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const capabilities = [
  {
    title: "Complex Geometry Machining",
    description: "Multi-axis CNC solutions for intricate parts requiring tight tolerances and complex surface profiles.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
      </svg>
    ),
  },
  {
    title: "Precision Turning",
    description: "High-precision CNC turning for cylindrical components with exceptional concentricity and surface finish.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Mechanical Sub-Assemblies",
    description: "Integration of multiple machined components into tested, ready-to-install sub-assemblies.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Prototype-to-Production",
    description: "Rapid prototyping with seamless transition to serial production, maintaining consistent quality at scale.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "150+", label: "Employees" },
  { value: "ISO 9001", label: "Certified" },
  { value: "24/7", label: "Production" },
];

export default function PelegNiaPage() {
  return (
    <main>
      <PageHero
        title="Peleg Nia"
        subtitle="A Metalicone Group Company"
        description="Specializing in complex mechanical components and sub-assemblies — delivering precision-engineered solutions for high-tech and industrial applications."
      />

      {/* About */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">About Peleg Nia</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Complex Components, Simplified Delivery
              </h2>
              <p className="mt-6 text-charcoal-light leading-relaxed text-lg">
                Peleg Nia brings decades of expertise in manufacturing complex mechanical components that demand
                the highest precision and quality standards. As a key member of the Metalicone Group, Peleg Nia
                complements the group&apos;s capabilities with specialized know-how in intricate geometries and
                tight-tolerance machining.
              </p>
              <p className="mt-4 text-charcoal-light leading-relaxed">
                From concept review to final delivery, Peleg Nia operates as a full-service partner — handling
                design-for-manufacturability (DFM) consultation, process development, precision machining, and
                assembly. The company&apos;s production floor features state-of-the-art CNC turning and milling
                centers capable of handling complex workpieces in a wide range of materials.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center gap-10">
                <div className="bg-off-white rounded-2xl p-10 w-full">
                  <div className="relative h-16 md:h-20 w-full">
                    <Image
                      src="/images/peleg-nia-removebg.png"
                      alt="Peleg Nia"
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
          <div className="grid md:grid-cols-2 gap-8">
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

      {/* Value Proposition */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-blue-300 font-semibold text-sm tracking-[0.15em] uppercase">Our Advantage</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Why Peleg Nia</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Materials Expertise", description: "Extensive experience with aluminum alloys, stainless steels, titanium, Inconel, and engineered plastics — selecting the right material for every application." },
              { title: "Turnkey Solutions", description: "From raw material procurement through final inspection and packaging — a single source for complete mechanical component solutions." },
              { title: "Group Synergy", description: "Seamless integration with Metalicone Group companies for surface treatment, spring manufacturing, and European distribution channels." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.description}</p>
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
              Ready to Partner with Peleg Nia?
            </h2>
            <p className="mt-4 text-charcoal-light text-lg">
              Complex components made simple — let&apos;s engineer your next project together.
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
