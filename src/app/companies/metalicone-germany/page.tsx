"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const services = [
  {
    title: "European Sales & Distribution",
    description: "Direct sales coverage across Germany, Austria, Switzerland, and the broader EU. Local presence with global manufacturing backing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Engineering Support",
    description: "Local technical engineering support for European OEMs. Design review, DFM consultation, and application engineering in your time zone.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Supply Chain Management",
    description: "Kanban and consignment stock programs. Local warehousing for JIT delivery to European production lines, reducing lead times and inventory costs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Quality & Compliance",
    description: "Full European regulatory compliance support. Documentation in German and English, CE marking guidance, and EU-standard certifications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "2018", label: "Established" },
  { value: "EU-Wide", label: "Coverage" },
  { value: "DE / AT / CH", label: "Core Markets" },
  { value: "24h", label: "Response Time" },
];

export default function MetaliconeGermanyPage() {
  return (
    <main>
      <PageHero
        title="Metalicone Germany GmbH"
        subtitle="A Metalicone Group Company"
        description="The European gateway to Metalicone's precision manufacturing capabilities — providing local engineering support, sales, and logistics for EU-based OEMs."
      />

      {/* About */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">About Metalicone Germany</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Your European Engineering Hub
              </h2>
              <p className="mt-6 text-charcoal-light leading-relaxed text-lg">
                Metalicone Germany GmbH serves as the Group&apos;s strategic European headquarters, bridging the
                gap between world-class Israeli manufacturing and the demands of Europe&apos;s most sophisticated
                industrial OEMs. Based in Germany, the hub provides local-language support, engineering
                consultation, and streamlined logistics for the European market.
              </p>
              <p className="mt-4 text-charcoal-light leading-relaxed">
                With deep knowledge of European regulatory requirements and industry standards, Metalicone
                Germany ensures seamless integration into existing supply chains. The team manages everything
                from initial quotation and technical review through delivery coordination and after-sales support
                — all with the responsiveness of a local partner and the manufacturing depth of a global group.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-col items-center gap-10">
                <div className="bg-off-white rounded-2xl p-6 w-full">
                  <div className="relative h-28 md:h-36 w-full">
                    <Image
                      src="/images/gmbh-metalicone-removebg.png"
                      alt="Metalicone Germany GmbH"
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

      {/* Services */}
      <section className="py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-deep-blue font-semibold text-sm tracking-[0.15em] uppercase">What We Offer</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900">European Services</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-xl bg-deep-blue/10 flex items-center justify-center text-deep-blue mb-5">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* European Markets */}
      <section className="py-24 bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-blue-300 font-semibold text-sm tracking-[0.15em] uppercase">Market Reach</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">Industries We Serve in Europe</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Semiconductor Equipment", description: "Supporting European semiconductor OEMs with precision components for lithography, etch, deposition, and metrology systems." },
              { title: "Automotive & Transportation", description: "Precision components for European automotive manufacturers, EV platforms, and rail transportation systems." },
              { title: "Industrial Machinery", description: "High-precision parts for printing, packaging, energy generation, and general industrial equipment manufacturers." },
            ].map((market, i) => (
              <FadeIn key={market.title} delay={i * 0.15}>
                <div className="border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{market.title}</h3>
                  <p className="text-white/50 leading-relaxed">{market.description}</p>
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
              Looking for a Precision Manufacturing Partner in Europe?
            </h2>
            <p className="mt-4 text-charcoal-light text-lg">
              Local support, global capabilities — let Metalicone Germany be your gateway to precision.
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
