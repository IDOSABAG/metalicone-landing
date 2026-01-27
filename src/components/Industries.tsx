"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const industries = [
  {
    title: "Semiconductors",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    description:
      "Applying broad science and engineering capabilities to create advanced components, systems and solutions for the semiconductor industry.",
    details: [
      "Vacuum Chucks & Electrostatic Chucks (ESCs)",
      "Vacuum, Edge-Grip & Non-Contact End Effectors",
      "Tools for the semiconductor industry",
      "Chambers & FAB equipment",
      "High-end inspection and metallurgic equipment",
      "Semiconductor machines manufacturing",
    ],
    featured: true,
  },
  {
    title: "Commercial Printing",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
      </svg>
    ),
    description:
      "Precise machined parts manufacturing and complex assemblies supporting the commercial printing industry with dedicated supply chain solutions.",
    details: [
      "Offset presses & digital printers",
      "Flexographic machines & 3D printers",
      "Complete end-to-end integrated parts service",
      "Professional assemblies and sub-assemblies",
      "Dedicated professional supply chain",
    ],
    featured: true,
  },
  {
    title: "Power Generation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    description:
      "Powering tomorrow with intelligent manufacturing and engineering — delivering solutions from standalone parts to turnkey integrated systems.",
    details: [
      "Thermal (Conventional) Power",
      "Renewable / Low-Carbon (Hydropower, Wind)",
      "Hydraulic turbines",
      "Nuclear Power — SMRs (Small Modular Reactors)",
    ],
  },
  {
    title: "Transportation",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    description:
      "Driving tomorrow's transportation with smarter manufacturing and engineering — from precision parts to fully integrated turnkey systems.",
    details: [
      "Thermal (Conventional) Power systems",
      "Renewable / Low-Carbon segments",
      "Nuclear Power — SMRs",
    ],
  },
  {
    title: "Aerospace & Defense",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
    description:
      "Providing fully integrated manufacturing metal-based solutions with strategic focus on defense and aerospace sectors as a partner of tier 1 global players.",
    details: [
      "Commercial & military airplanes",
      "Space systems & UAVs",
      "Radars & naval platforms",
      "Complex weapon systems",
    ],
  },
  {
    title: "Engine & Hydraulics",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
      </svg>
    ),
    description:
      "World leader in manufacturing critical metal components, system integration of engines and hydraulics.",
    details: [
      "Jet & turbine engines",
      "Hydraulic pumps, motors, cylinders & valves",
      "Hydraulic Power Units (HPUs)",
    ],
  },
];

function IndustryCard({
  industry,
  index,
}: {
  industry: (typeof industries)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onClick={() => setExpanded(!expanded)}
      className={`group relative cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
        industry.featured
          ? "border-deep-blue/20 bg-gradient-to-br from-deep-blue/[0.03] to-white shadow-lg hover:shadow-xl"
          : "border-light-gray bg-white hover:shadow-lg"
      }`}
    >
      {industry.featured && (
        <div className="absolute top-0 right-0 bg-deep-blue text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-bl-lg">
          Core Industry
        </div>
      )}

      <div className="p-8">
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-colors ${
            industry.featured
              ? "bg-deep-blue text-white"
              : "bg-deep-blue/10 text-deep-blue group-hover:bg-deep-blue group-hover:text-white"
          }`}
        >
          {industry.icon}
        </div>

        <h3 className="text-xl font-bold text-foreground">{industry.title}</h3>
        <p className="mt-3 text-charcoal leading-relaxed text-sm">
          {industry.description}
        </p>

        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2">
            {industry.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-charcoal">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-deep-blue shrink-0" />
                {detail}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-5 flex items-center gap-2 text-deep-blue text-sm font-semibold">
          <span>{expanded ? "Show less" : "Learn more"}</span>
          <motion.svg
            animate={{ rotate: expanded ? 180 : 0 }}
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Industries() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="industries" className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">
            Industries We Serve
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Delivering Excellence Across{" "}
            <span className="text-deep-blue">Key Sectors</span>
          </h2>
          <p className="mt-5 text-charcoal text-lg leading-relaxed">
            Across every industry, the pressure to innovate and meet demanding
            performance targets while controlling costs has never been greater.
            Metalicone brings a powerful advantage: world-class engineering and
            manufacturing expertise with a collaborative approach that
            accelerates your path from concept to solution.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.title} industry={industry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
