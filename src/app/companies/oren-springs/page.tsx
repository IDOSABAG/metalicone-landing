"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const products = [
  {
    title: "Compression Springs",
    description: "Custom compression springs engineered for precise load and deflection requirements. Available in a wide range of materials, wire diameters, and end configurations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
      </svg>
    ),
  },
  {
    title: "Extension Springs",
    description: "Tension springs with precisely controlled initial tension, hook geometry, and spring rate for reliable pull-force applications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
      </svg>
    ),
  },
  {
    title: "Torsion Springs",
    description: "Angular deflection springs with tight tolerance on torque and position. Double-torsion and special leg configurations available.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: "Wire Forms & Clips",
    description: "Custom wire forming for retaining clips, snap rings, and complex wire assemblies. CNC wire forming for consistent production quality.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Flat Springs & Stampings",
    description: "Precision flat springs and stamped components for electronics, medical devices, and automotive applications. Progressive die and fine blanking capabilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Belleville Washers",
    description: "Disc springs for high-load, small-deflection applications. Single, stacked, and nested configurations for precise preload control.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "40+", label: "Years Experience" },
  { value: "10M+", label: "Springs / Year" },
  { value: "0.05mm", label: "Wire Diameter Min" },
  { value: "ISO 9001", label: "Certified" },
];

export default function OrenSpringsPage() {
  return (
    <main>
      <PageHero
        title="Oren Springs"
        subtitle="A Metalicone Group Company"
        description="Precision springs and wire forms for critical applications — from miniature medical springs to heavy-duty industrial compression springs."
      />

      {/* About */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">About Oren Springs</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                The Art & Science of Spring Manufacturing
              </h2>
              <p className="mt-6 text-charcoal-light leading-relaxed text-lg">
                Oren Springs is one of Israel&apos;s most established spring manufacturers, bringing four decades
                of expertise to the Metalicone Group. Specializing in precision springs and wire forms, Oren
                serves industries ranging from aerospace and defense to medical devices and electronics.
              </p>
              <p className="mt-4 text-charcoal-light leading-relaxed">
                With CNC coiling machines, automated heat treatment, and in-house testing laboratories, Oren
                Springs delivers consistent quality at volumes from small prototype batches to millions of
                units per year. Every spring is engineered with finite element analysis and validated through
                rigorous load-deflection testing.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center gap-10">
                <div className="bg-off-white rounded-2xl p-6 w-full">
                  <div className="relative h-24 md:h-32 w-full">
                    <Image
                      src="/images/oren-springs-removebg.png"
                      alt="Oren Springs"
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

      {/* Products */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">Product Range</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">Springs & Wire Forms</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-xl bg-deep-blue/10 flex items-center justify-center text-deep-blue mb-5">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-blue-300 font-semibold text-sm tracking-[0.15em] uppercase">Materials</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Materials We Work With</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Music Wire & Carbon Steel", description: "High-tensile carbon steel wire for general-purpose springs. ASTM A228 music wire for maximum fatigue life and consistent performance." },
              { title: "Stainless Steel", description: "302, 304, 316, and 17-7 PH stainless steel for corrosion resistance. Ideal for medical, food processing, and marine environments." },
              { title: "Specialty Alloys", description: "Inconel, Hastelloy, titanium, and beryllium copper for extreme temperature, corrosion, and electrical conductivity requirements." },
            ].map((mat, i) => (
              <FadeIn key={mat.title} delay={i * 0.15}>
                <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{mat.title}</h3>
                  <p className="text-white/50 leading-relaxed">{mat.description}</p>
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
              Need Custom Springs or Wire Forms?
            </h2>
            <p className="mt-4 text-charcoal-light text-lg">
              From micro springs to heavy-duty industrial — Oren Springs delivers precision at any scale.
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
