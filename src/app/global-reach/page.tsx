"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const regions = [
  {
    name: "Israel",
    count: 6,
    sites: [
      { city: "Kiryat Shmona", specialty: "Design and manufacturing of critical parts and complex mechanical assemblies for advanced AFV platforms and weapon systems." },
      { city: "Karmiel", specialty: "Assembly HUB — Full Turn Key solutions for defense and industrial projects." },
      { city: "Holon", specialty: "Design and manufacturing of complex spring systems for defense and high-tech industries." },
      { city: "Yavne", specialty: "High-volume CNC precision machining center." },
      { city: "Lavon Industrial Zone", specialty: "CNC precision machining of large parts with high accuracy and high engineering complexity; complex multi-item sub-assembly integration." },
      { city: "Nesher Industrial Zone", specialty: "Precision castings — Investment (lost wax) casting for aerospace and industrial applications." },
    ],
  },
  {
    name: "Europe",
    count: 1,
    sites: [
      { city: "Metalicone GmbH (Germany)", specialty: "European operations hub — precision engineering, manufacturing, and distribution serving European OEMs." },
    ],
  },
  {
    name: "USA",
    count: 1,
    sites: [
      { city: "United States Operations", specialty: "Strategic partnership with leading global casting manufacturers across all casting disciplines. North American business development and customer support." },
    ],
  },
  {
    name: "India",
    count: 1,
    sites: [
      { city: "Neolync Solutions (India)", specialty: "Assembly, global distribution, and electronics manufacturing services. Managed by industry pioneer Ruvi Shaibel, founder of Flex Israel." },
    ],
  },
];

export default function GlobalReachPage() {
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <main>
      <PageHero
        title="Global Reach"
        subtitle="Our Worldwide Presence"
        description="9 manufacturing sites across Asia, Europe, and the Middle East — a truly global industrial partner."
        backgroundImage="/images/global-reach.png"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              9 Manufacturing Sites Across <span className="text-deep-blue">3 Continents</span>
            </h2>
            <p className="mt-5 text-charcoal text-lg leading-relaxed">
              A global supplier operating in Asia, Europe, and the Middle East — with strategic
              partnerships across all casting disciplines worldwide. Each facility offers unique
              specializations tailored to serve our diverse customer base.
            </p>
          </FadeIn>

          {/* Visual overview */}
          <FadeIn delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden mb-16 shadow-xl">
              <Image src="/images/global-reach.png" alt="Metalicone global footprint" width={1400} height={600} className="object-cover w-full h-64 md:h-96" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent flex items-end">
                <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                  {regions.map((r, i) => (
                    <button
                      key={r.name}
                      onClick={() => setActiveRegion(i)}
                      className={`text-left p-4 rounded-xl transition-all ${
                        activeRegion === i ? "bg-white/20 backdrop-blur-sm" : "hover:bg-white/10"
                      }`}
                    >
                      <div className="text-2xl font-bold text-white">{r.count}</div>
                      <div className="text-sm text-white/70">{r.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Region tabs and detail */}
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            <div className="flex lg:flex-col gap-3">
              {regions.map((region, i) => (
                <FadeIn key={region.name} delay={i * 0.08}>
                  <button
                    onClick={() => setActiveRegion(i)}
                    className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all ${
                      activeRegion === i ? "bg-deep-blue text-white shadow-lg" : "bg-off-white text-charcoal hover:bg-light-gray"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${
                      activeRegion === i ? "bg-white/20 text-white" : "bg-deep-blue/10 text-deep-blue"
                    }`}>
                      {region.count}
                    </div>
                    <div>
                      <div className="font-bold">{region.name}</div>
                      <div className={`text-xs mt-0.5 ${activeRegion === i ? "text-white/70" : "text-charcoal-light"}`}>
                        {region.count} site{region.count > 1 ? "s" : ""}
                      </div>
                    </div>
                  </button>
                </FadeIn>
              ))}
            </div>

            <motion.div
              key={activeRegion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 gap-5"
            >
              {regions[activeRegion].sites.map((site, i) => (
                <motion.div
                  key={site.city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="bg-off-white border border-light-gray rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-deep-blue" />
                    <h4 className="font-bold text-foreground">{site.city}</h4>
                  </div>
                  <p className="text-sm text-charcoal leading-relaxed">{site.specialty}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
