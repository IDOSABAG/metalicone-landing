"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const treatments = [
  {
    title: "Anodizing",
    description: "Hard and decorative anodizing for aluminum components. Type II and Type III processes with precise color matching and coating thickness control.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Electroless Nickel Plating",
    description: "Uniform nickel-phosphorus coatings for corrosion resistance and hardness. High- and mid-phosphorus options for varied application requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Passivation",
    description: "Chemical passivation of stainless steel per ASTM A967 and AMS 2700. Removes free iron and enhances corrosion resistance of machined surfaces.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Chrome Plating",
    description: "Hard chrome plating for wear resistance and dimensional restoration. Engineered for hydraulic cylinders, rollers, and high-wear industrial components.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Specialty Coatings",
    description: "Teflon, ceramic, and thermal spray coatings for extreme environments. Engineered for temperature resistance, low friction, and chemical inertness.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Surface Finishing",
    description: "Precision grinding, lapping, and polishing to achieve mirror finishes below Ra 0.1. Critical for semiconductor and optical applications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "20+", label: "Treatment Processes" },
  { value: "Ra 0.1", label: "Mirror Finish" },
  { value: "NADCAP", label: "Accredited" },
  { value: "100%", label: "Inspection" },
];

export default function SimatPage() {
  return (
    <main>
      <PageHero
        title="Simat"
        subtitle="A Metalicone Group Company"
        description="Advanced surface treatment and coating solutions — protecting and enhancing precision components for the world's most demanding applications."
      />

      {/* About */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">About Simat</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                The Surface Treatment Experts
              </h2>
              <p className="mt-6 text-charcoal-light leading-relaxed text-lg">
                Simat is the Metalicone Group&apos;s dedicated surface treatment arm, providing a comprehensive
                range of coating, plating, and finishing services. With NADCAP accreditation and rigorous
                process controls, Simat delivers surface solutions that meet the strictest aerospace, defense,
                and semiconductor industry requirements.
              </p>
              <p className="mt-4 text-charcoal-light leading-relaxed">
                Integrated directly within the Group&apos;s manufacturing workflow, Simat eliminates the need
                for external subcontractors — reducing lead times, ensuring traceability, and maintaining the
                quality chain from raw material to finished product. Every treatment is backed by full
                certification and detailed test reports.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center gap-10">
                <div className="bg-off-white rounded-2xl p-10 w-full">
                  <div className="relative h-24 md:h-32 w-full">
                    <Image
                      src="/images/simat-remove-bg.png"
                      alt="Simat"
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

      {/* Treatments */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">Our Processes</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">Surface Treatment Solutions</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((t, i) => (
              <FadeIn key={t.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-xl bg-deep-blue/10 flex items-center justify-center text-deep-blue mb-5">
                    {t.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{t.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{t.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Advantage */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-blue-300 font-semibold text-sm tracking-[0.15em] uppercase">Group Integration</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">The In-House Advantage</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Reduced Lead Times", description: "No external subcontracting delays. Parts move directly from machining to surface treatment within the same Group ecosystem." },
              { title: "Full Traceability", description: "Complete documentation chain from substrate preparation through coating application, testing, and final inspection." },
              { title: "Custom Process Development", description: "R&D capability to develop bespoke coating solutions for unique application requirements and challenging environments." },
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
              Need Surface Treatment Solutions?
            </h2>
            <p className="mt-4 text-charcoal-light text-lg">
              From anodizing to specialty coatings — Simat has the process for your application.
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
