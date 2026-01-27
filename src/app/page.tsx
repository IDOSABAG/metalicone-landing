"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const industries = [
  { title: "Semiconductors", href: "/industries/semiconductors", badge: "Core Industry", description: "Advanced components for FAB equipment, chucks, end effectors, and chambers." },
  { title: "Commercial Printing", href: "/industries/commercial-printing", badge: "Core Industry", description: "Precision parts and assemblies for offset, digital, flexographic, and 3D printers." },
  { title: "Power Generation", href: "/industries/power-generation", description: "Turnkey systems for thermal, renewable, hydraulic, and nuclear power." },
  { title: "Transportation", href: "/industries/transportation", description: "Smarter manufacturing for tomorrow's transportation systems." },
  { title: "Aerospace & Defense", href: "/industries/aerospace-defense", description: "Integrated metal-based solutions for tier 1 global players." },
  { title: "Engine & Hydraulics", href: "/industries/engine-hydraulics", description: "Critical components for jet engines, turbines, and hydraulic systems." },
];

export default function Home() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt="Metalicone precision manufacturing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-deep-blue/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/40 via-transparent to-deep-blue/60" />

        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Global Partner to Industry Leaders</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            Precision You Can Trust.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
              Capability You Can Scale.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            World-class engineering and manufacturing expertise — delivering
            precision-engineered components and assembly solutions down to{" "}
            <span className="text-white font-semibold">a single micron (0.001&nbsp;mm)</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto"
          >
            {[
              { value: "30+", label: "Years of Excellence" },
              { value: "9", label: "Manufacturing Sites" },
              { value: "0.001mm", label: "Precision Accuracy" },
              { value: "5", label: "Quality Standards" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-white/50 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/industries" className="px-8 py-4 bg-white text-deep-blue font-bold rounded-full hover:bg-gray-100 transition-colors text-base">
              Explore Our Industries
            </Link>
            <Link href="/#contact" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-base">
              Contact Us
            </Link>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-white/60" />
          </div>
        </motion.div>
      </section>

      {/* ─── ABOUT & STRATEGIC FOCUS ─── */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">About &amp; Heritage</span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  The Industrial Home — <span className="text-deep-blue">Built on Legacy,</span> Driven by Innovation
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-charcoal leading-relaxed text-lg">
                  Established by Mr. Steff Wertheimer — founder of the Iscar Group, today owned
                  by Warren Buffett&apos;s Berkshire Hathaway — Metalicone Group carries a rich
                  legacy of industrial excellence. Acquired in January 2023 by FGT Private Equity,
                  the company continues its expansion as a global industrial powerhouse.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-4 text-charcoal leading-relaxed text-lg">
                  As a trusted partner to the world&apos;s leading OEMs, approximately{" "}
                  <strong className="text-deep-blue">90% of our output serves the commercial and private industrial sector</strong>,
                  with the remaining 10% supporting select defense programs — making us a
                  truly market-driven, industry-focused global manufacturer.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Platinum Grade Supplier", "5 Quality Standards", "90% Commercial / OEM", "Global Reach"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-deep-blue/5 text-deep-blue text-sm font-medium rounded-full border border-deep-blue/10">{tag}</span>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.3} direction="left">
              <div className="relative">
                <div className="bg-gradient-to-br from-deep-blue to-deep-blue-dark rounded-2xl p-10 text-white">
                  <svg width="64" height="64" viewBox="0 0 100 100" fill="none" className="mb-6">
                    <path d="M50 15L18 38V85H38V55H62V85H82V38L50 15Z" stroke="white" strokeWidth="2.5" fill="none" />
                    <text x="50" y="52" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Montserrat">M</text>
                  </svg>
                  <h3 className="text-2xl font-bold">Global Partner to Industry Leaders</h3>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    A results-oriented and values-driven partner to major OEMs worldwide.
                    Operating 9 manufacturing sites across Asia, Europe, and the Middle East.
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[{ v: "90%", l: "Commercial" }, { v: "9", l: "Global Sites" }, { v: "30+", l: "Years" }].map((s) => (
                      <div key={s.l} className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="text-2xl font-bold">{s.v}</div>
                        <div className="text-xs text-white/60 mt-1">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-deep-blue/10 rounded-2xl -z-10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES PREVIEW ─── */}
      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Industries We Serve</span>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Delivering Excellence Across <span className="text-deep-blue">Key Sectors</span>
            </h2>
            <p className="mt-5 text-charcoal text-lg leading-relaxed">
              World-class engineering and manufacturing expertise with a collaborative approach that accelerates your path from concept to solution.
            </p>
          </FadeIn>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <FadeIn key={ind.title} delay={i * 0.08}>
                <Link href={ind.href} className="group block relative rounded-2xl border border-light-gray bg-white p-8 hover:shadow-xl transition-all h-full">
                  {ind.badge && (
                    <span className="absolute top-0 right-0 bg-deep-blue text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-bl-lg rounded-tr-2xl">{ind.badge}</span>
                  )}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-deep-blue transition-colors">{ind.title}</h3>
                  <p className="mt-3 text-charcoal text-sm leading-relaxed">{ind.description}</p>
                  <div className="mt-5 text-deep-blue text-sm font-semibold flex items-center gap-1">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CAREERS / THE INDUSTRIAL HOME ─── */}
      <section id="careers" className="relative py-24 lg:py-32 overflow-hidden">
        <Image
          src="/images/factory-floor.png"
          alt="Modern Metalicone production floor"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep-blue/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-blue-200 font-semibold text-sm tracking-[0.2em] uppercase">The Industrial Home</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Build Your Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Metalicone</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Join a global industrial group where engineering excellence meets real impact.
                We invest in our people — offering growth opportunities across 9 manufacturing
                sites, advanced technology platforms, and a culture that values innovation,
                precision, and teamwork.
              </p>
              <ul className="mt-8 space-y-3">
                {["Work with cutting-edge CNC, EDM, and cleanroom technologies", "Grow within a global network — Israel, Germany, USA, India", "Collaborate with world-class OEMs across 6 industries", "Be part of a legacy founded by Steff Wertheimer"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/#contact" className="px-8 py-4 bg-white text-deep-blue font-bold rounded-full hover:bg-gray-100 transition-colors text-base inline-block">
                  Get in Touch
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "9", label: "Manufacturing Sites" },
                  { value: "6", label: "Industry Sectors" },
                  { value: "30+", label: "Years of Excellence" },
                  { value: "3", label: "Continents" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="relative bg-gradient-to-br from-deep-blue to-deep-blue-dark rounded-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 lg:p-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Ready to Elevate Your Manufacturing Capabilities?</h2>
                  <p className="mt-5 text-white/60 text-lg leading-relaxed">We work with OEMs to solve challenges, providing expertise and know-how.</p>
                  <div className="mt-8 space-y-4">
                    {["Over 3 decades of experience", "High quality, stable, cost-effective manufacturing", "Expertise in various platforms and materials", "Proven accuracy down to 0.001 mm"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-white/80 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="text" className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="First Name" />
                      <input type="text" className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Last Name" />
                    </div>
                    <input type="email" className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Email" />
                    <input type="text" className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Company" />
                    <textarea rows={4} className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue resize-none" placeholder="Tell us about your project..." />
                    <button type="submit" className="w-full py-3.5 bg-deep-blue text-white font-bold rounded-xl hover:bg-deep-blue-dark transition-colors">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
