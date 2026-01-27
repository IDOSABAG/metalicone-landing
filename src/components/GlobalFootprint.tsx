"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const regions = [
  {
    name: "Israel",
    sites: [
      { city: "Kiryat Shmona", specialty: "Design and manufacturing of critical parts and complex mechanical assemblies for advanced AFV platforms and weapon systems" },
      { city: "Karmiel", specialty: "Assembly HUB — Full Turn Key solutions for defense projects" },
      { city: "Holon", specialty: "Design and manufacturing of complex spring systems for defense and high-tech industries" },
      { city: "Yavne", specialty: "CNC precision machining" },
      { city: "Lavon Industrial Zone", specialty: "CNC precision machining" },
      { city: "Nesher Industrial Zone", specialty: "Precision castings — Investment (lost wax) casting" },
    ],
  },
  {
    name: "Europe",
    sites: [
      { city: "Metalicone GmbH", specialty: "European operations hub — precision engineering and manufacturing" },
    ],
  },
  {
    name: "USA",
    sites: [
      { city: "United States", specialty: "Strategic partnership with leading global casting manufacturers across all casting disciplines" },
    ],
  },
  {
    name: "India",
    sites: [
      { city: "India Operations", specialty: "Assembly and global distribution center — managed by Neolync Solutions" },
    ],
  },
];

export default function GlobalFootprint() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });
  const [activeRegion, setActiveRegion] = useState(0);

  return (
    <section id="global" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">
            Global Reach
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            9 Manufacturing Sites Across{" "}
            <span className="text-deep-blue">3 Continents</span>
          </h2>
          <p className="mt-5 text-charcoal text-lg leading-relaxed">
            A global supplier operating in Asia, Europe, and the Middle East —
            with strategic partnerships across all casting disciplines worldwide.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-[1fr_2fr] gap-10">
          {/* Region Tabs */}
          <div className="flex lg:flex-col gap-3">
            {regions.map((region, i) => (
              <motion.button
                key={region.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                onClick={() => setActiveRegion(i)}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all ${
                  activeRegion === i
                    ? "bg-deep-blue text-white shadow-lg"
                    : "bg-off-white text-charcoal hover:bg-light-gray"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shrink-0 ${
                    activeRegion === i
                      ? "bg-white/20 text-white"
                      : "bg-deep-blue/10 text-deep-blue"
                  }`}
                >
                  {region.sites.length}
                </div>
                <div>
                  <div className="font-bold text-base">{region.name}</div>
                  <div
                    className={`text-xs mt-0.5 ${
                      activeRegion === i ? "text-white/70" : "text-charcoal-light"
                    }`}
                  >
                    {region.sites.length} site{region.sites.length > 1 ? "s" : ""}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Sites Grid */}
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
                <p className="text-sm text-charcoal leading-relaxed">
                  {site.specialty}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
