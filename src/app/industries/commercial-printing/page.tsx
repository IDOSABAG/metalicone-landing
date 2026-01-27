"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const capabilities = [
  { title: "Offset Presses", description: "Precision machined parts and assemblies for high-speed offset printing equipment." },
  { title: "Digital Printers", description: "Complex components and integrated assemblies for next-generation digital printing platforms." },
  { title: "Flexographic Machines", description: "High-tolerance parts for flexible packaging and label printing systems." },
  { title: "3D Printers", description: "Precision-engineered components enabling additive manufacturing equipment performance." },
  { title: "End-to-End Integration", description: "Complete end-to-end service for integrated parts — from raw material to final assembly." },
  { title: "Sub-Assemblies", description: "Professional assemblies and sub-assemblies with dedicated professional supply chain management." },
];

export default function CommercialPrintingPage() {
  return (
    <main>
      <PageHero
        title="Commercial Printing"
        subtitle="Core Industry"
        description="Precise machined parts manufacturing and complex assemblies supporting the commercial printing industry with dedicated supply chain solutions."
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Precision Manufacturing for <span className="text-deep-blue">Print Innovation</span>
                </h2>
                <p className="mt-5 text-charcoal text-lg leading-relaxed">
                  Metalicone serves the world&apos;s leading commercial printing manufacturers with precision
                  machined parts and complex assemblies. Our dedicated supply chain ensures consistent
                  quality and on-time delivery for the most demanding printing platforms.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/commercial-printing.png" alt="Commercial printing manufacturing" width={700} height={500} className="object-cover w-full" />
              </div>
            </FadeIn>
          </div>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.06}>
                <div className="bg-off-white border border-light-gray rounded-2xl p-7 hover:shadow-lg transition-shadow h-full">
                  <h3 className="text-lg font-bold text-foreground">{cap.title}</h3>
                  <p className="mt-2 text-charcoal text-sm leading-relaxed">{cap.description}</p>
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
