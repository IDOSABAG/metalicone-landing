"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    title: "Mill/Turn & Turn/Mill",
    description:
      "Precision machining down to a single micron (0.001 mm) in one clamp — delivering unparalleled accuracy.",
    metric: "0.001mm",
    metricLabel: "Precision",
  },
  {
    title: "Angular Head Machining",
    description:
      "Angular head precise machining capabilities resulting in highly complex parts manufacturing.",
    metric: "360°",
    metricLabel: "Capability",
  },
  {
    title: "Deep Automated Drilling",
    description:
      "High-cycle drilling capabilities up to 600 mm depth with full automation and repeatability.",
    metric: "600mm",
    metricLabel: "Depth",
  },
  {
    title: "Lapping & Deburring",
    description:
      "Surface finishing to the highest standards, ensuring component integrity and performance.",
    metric: "Ra 0.1",
    metricLabel: "Surface",
  },
  {
    title: "EDM & WEDM",
    description:
      "Electrical discharge machining and wire EDM for intricate geometries and hardened materials.",
    metric: "±2μm",
    metricLabel: "Tolerance",
  },
  {
    title: "Complex Assembly",
    description:
      "Full system assembly capabilities — from sub-assemblies to complete integrated systems and turnkey solutions.",
    metric: "100%",
    metricLabel: "Integrated",
  },
];

export default function Capabilities() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-deep-blue relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase">
            Capabilities & Technologies
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Engineering Expertise,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Proven Solutions
            </span>
          </h2>
          <p className="mt-5 text-white/60 text-lg leading-relaxed">
            Advanced, innovative leading manufacturer with a variety of
            equipment, technologies and capabilities. Proven achievement of
            unprecedented levels of accuracy in complex component production.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-60px" });

            return (
              <motion.div
                ref={ref}
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="px-3 py-1 bg-white/10 rounded-lg">
                    <span className="text-2xl font-bold text-white">
                      {cap.metric}
                    </span>
                  </div>
                  <span className="text-xs text-white/40 uppercase tracking-wider">
                    {cap.metricLabel}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                <p className="mt-3 text-white/50 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full">
            <span className="text-white/80 text-sm">
              Leading, innovative engineering team meeting the challenges of
              tomorrow
            </span>
            <span className="text-white font-bold text-sm">
              Getting things done!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
