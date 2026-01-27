"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const products = [
  { title: "Vacuum Chucks", description: "High-precision vacuum chucks for wafer handling and processing in advanced semiconductor fabrication. Engineered for flatness, thermal stability, and contamination control." },
  { title: "Electrostatic Chucks (ESCs)", description: "ESCs providing superior wafer clamping for plasma etch, deposition, and lithography processes. Designed for uniform clamping force distribution and rapid de-chucking." },
  { title: "Mechanical Chucks", description: "Robust mechanical chucking solutions for demanding process environments where vacuum or electrostatic methods are not suitable." },
  { title: "Vacuum End Effectors", description: "Precision vacuum end effectors for automated wafer transport and handling systems. Optimized for minimal particle generation and reliable grip." },
  { title: "Edge-Grip End Effectors", description: "Edge-grip solutions minimizing contact area for contamination-sensitive applications. Ideal for front-end wafer handling in cleanroom environments." },
  { title: "Non-Contact End Effectors", description: "Bernoulli-effect end effectors enabling zero-contact wafer handling — eliminating backside contamination for critical lithography and inspection steps." },
  { title: "Process Chambers", description: "Process chambers engineered to exact specifications for etch, CVD, PVD, and other semiconductor processes. Complete chamber assemblies with integrated gas distribution." },
  { title: "FAB Equipment Components", description: "High-end inspection and metallurgic equipment components for fab-critical operations. Precision parts for metrology, inspection, and process control tools." },
  { title: "Semiconductor Machine Manufacturing", description: "Complete manufacturing of semiconductor tools and machines from design to delivery — including assembly, integration, and qualification testing." },
];

export default function SemiconductorsPage() {
  return (
    <main>
      <PageHero
        title="Semiconductors"
        subtitle="Core Industry"
        description="Applying our broad science and engineering capabilities to create components, systems and solutions that advance semiconductor manufacturing."
        backgroundImage="/images/semiconductor-fab.png"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Advanced Components for <span className="text-deep-blue">Semiconductor Excellence</span>
                </h2>
                <p className="mt-5 text-charcoal text-lg leading-relaxed">
                  From wafer-handling chucks and end effectors to complete process chambers and FAB equipment,
                  Metalicone delivers precision-engineered components that meet the exacting standards of the
                  global semiconductor industry. Our manufacturing achieves accuracy down to a single micron (0.001 mm),
                  ensuring optimal performance in the most demanding cleanroom environments.
                </p>
                <p className="mt-4 text-charcoal text-lg leading-relaxed">
                  As a core industry for Metalicone, semiconductors represent one of our largest and most
                  strategically important segments — serving leading global FAB equipment manufacturers
                  with comprehensive component and sub-system solutions.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/semiconductor-fab.png"
                  alt="Semiconductor FAB equipment manufacturing"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <FadeIn key={product.title} delay={i * 0.06}>
                <div className="bg-off-white border border-light-gray rounded-2xl p-7 hover:shadow-lg transition-shadow h-full">
                  <div className="w-10 h-10 rounded-lg bg-deep-blue/10 flex items-center justify-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-deep-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{product.title}</h3>
                  <p className="mt-2 text-charcoal text-sm leading-relaxed">{product.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-16 text-center">
            <Link href="/industries" className="inline-flex items-center gap-2 text-deep-blue font-semibold hover:underline">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Back to All Industries
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
