"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const slideshowImages = [
  { src: "/images/homepage-pic1.png", alt: "Metalicone precision manufacturing facility" },
  { src: "/images/homepage-pic2.png", alt: "Advanced CNC machining operations" },
  { src: "/images/homepage-pic3.png", alt: "Quality inspection and engineering" },
  { src: "/images/homepage-pic4.png", alt: "Global manufacturing capabilities" },
];

const industries = [
  { title: "Semiconductors", href: "/industries/semiconductors", badge: "Core Industry", description: "Advanced components for FAB equipment, chucks, end effectors, and chambers." },
  { title: "Commercial Printing", href: "/industries/commercial-printing", badge: "Core Industry", description: "Precision parts and assemblies for offset, digital, flexographic, and 3D printers." },
  { title: "Power Generation", href: "/industries/power-generation", description: "Turnkey systems for thermal, renewable, hydraulic, and nuclear power." },
  { title: "Transportation", href: "/industries/transportation", description: "Smarter manufacturing for tomorrow's transportation systems." },
  { title: "Aerospace & Defense", href: "/industries/aerospace-defense", description: "Integrated metal-based solutions for tier 1 global players." },
  { title: "Engine & Hydraulics", href: "/industries/engine-hydraulics", description: "Critical components for jet engines, turbines, and hydraulic systems." },
];

const qualityStandards = [
  { name: "AS9100D", description: "Aerospace Quality Management" },
  { name: "ISO 9001:2015", description: "Quality Management Systems" },
  { name: "ISO 14001", description: "Environmental Management" },
  { name: "ISO 45001", description: "Occupational Health & Safety" },
  { name: "NADCAP", description: "Special Process Accreditation" },
];

const capabilities = [
  { title: "CNC Mill / Turn", description: "Multi-axis precision machining with tolerances down to 0.001 mm for complex geometries." },
  { title: "Wire & Sinker EDM", description: "Electrical discharge machining for hardened materials and intricate internal features." },
  { title: "Deep Drilling", description: "High-aspect-ratio drilling for deep bores with exceptional straightness and surface finish." },
  { title: "Investment Casting", description: "Lost-wax casting for near-net-shape aerospace and industrial components." },
  { title: "Clean Room Assembly", description: "ISO Class 5 cleanroom assembly for semiconductor and optical applications." },
  { title: "Surface Treatment", description: "Anodizing, plating, passivation, and specialized coatings for performance and protection." },
];

const worldPoints = [
  { id: "israel", label: "Israel", x: 55.5, y: 50, count: "6 Sites", flag: "/images/flags/israel.png" },
  { id: "germany", label: "Germany", x: 50.5, y: 38.5, count: "European Hub", flag: "/images/flags/germany.png" },
  { id: "usa", label: "USA", x: 24.0, y: 43.5, count: "Strategic Partner", flag: "/images/flags/usa.png" },
  { id: "india", label: "India", x: 69.5, y: 57.5, count: "EMS & Distribution", flag: "/images/flags/india.png" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <main>
      {/* ─── HERO + BANNER WRAPPER ─── */}
      <div className="min-h-screen flex flex-col bg-[#0a1628]">
      {/* ─── 1. HERO ─── */}
      <section className="relative flex-1 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#060d1a] via-[#0d1f3c] to-[#0a1628]">
        {/* Slideshow background */}
        <AnimatePresence>
          {slideshowImages.map((img, i) => (
            i === currentSlide && (
              <motion.div
                key={img.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain object-top sm:object-cover sm:object-[center_20%]"
                  quality={90}
                  priority={i === 0}
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        {/* Mobile: transparent top (show full image) → rich dark below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1f3c]/40 to-[#0a1628] sm:from-transparent sm:via-transparent sm:to-[#0a1628]/40" />
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-[#0a1628]/10 via-transparent to-[#0a1628]/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[48vw] sm:pt-24 lg:pt-0" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">Global Partner to Industry Leaders</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
          >
            We Deliver Innovative Solutions
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white" style={{ textShadow: "none" }}>
              to the World&apos;s Toughest Challenges.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Every industry demands innovation, uncompromising quality, and a partner who delivers
            at scale. With world-class engineering leadership, global manufacturing infrastructure,
            and precision down to{" "}
            <span className="text-white font-semibold">a single micron (0.001&nbsp;mm)</span>
            {" "}— Metalicone Group is the strategic partner that turns your
            toughest engineering challenges into production reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-12 max-w-4xl mx-auto"
          >
            {[
              { value: "30+", label: "Years of Excellence" },
              { value: "9", label: "Manufacturing Sites" },
              { value: "0.001mm", label: "Precision Accuracy" },
              { value: "5", label: "Quality Standards" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-xs sm:text-sm text-white/70 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link href="/industries" className="px-6 sm:px-8 py-3.5 sm:py-4 bg-deep-blue text-white font-bold rounded-full hover:bg-deep-blue-dark transition-colors text-sm sm:text-base shadow-lg shadow-deep-blue/30" style={{ textShadow: "none" }}>
              Explore Our Industries
            </Link>
            <Link href="/#contact" className="px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base backdrop-blur-sm" style={{ textShadow: "none" }}>
              Contact Us
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1"
        >
          <span className="text-white/40 text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
          <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </motion.div>
      </section>

      {/* ─── GROUP COMPANIES BANNER ─── */}
      <section className="bg-[#0a1628] border-b border-white/5 py-4 sm:py-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4">
          <p className="text-center text-white/30 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase">The Metalicone Group Companies</p>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#0a1628] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#0a1628] to-transparent z-10" />
          <div className="flex animate-marquee">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex shrink-0">
                {[
                  { name: "Ramim Engineering", slug: "ramim-engineering", tagline: "Precision CNC & Assembly", logo: "/images/ramim-without-bg.png" },
                  { name: "Peleg Nia", slug: "peleg-nia", tagline: "Complex Mechanical Components", logo: "/images/peleg-nia-removebg.png" },
                  { name: "Simat", slug: "simat", tagline: "Surface Treatment Solutions", logo: "/images/simat-remove-bg.png" },
                  { name: "Oren Springs", slug: "oren-springs", tagline: "Precision Springs & Wire Forms", logo: "/images/oren-springs-removebg.png" },
                  { name: "Metalicone Germany GmbH", slug: "metalicone-germany", tagline: "European Engineering Hub", logo: "/images/gmbh-metalicone-removebg.png" },
                ].map((company) => (
                  <Link
                    key={`${setIdx}-${company.slug}`}
                    href={`/companies/${company.slug}`}
                    className="group flex items-center gap-2.5 sm:gap-4 mx-5 sm:mx-10 shrink-0"
                  >
                    <div className="h-8 w-16 sm:h-10 sm:w-24 relative shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        fill
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                    <div>
                      <div className="text-white/60 font-semibold text-xs sm:text-sm group-hover:text-blue-300 transition-colors whitespace-nowrap">{company.name}</div>
                      <div className="text-white/25 text-[10px] sm:text-xs">{company.tagline}</div>
                    </div>
                    <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white/20 group-hover:text-blue-300 group-hover:translate-x-1 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* ─── 2. THE PRECISION IDENTITY ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <FadeIn>
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Core Value</span>
                <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Accuracy as a <span className="text-deep-blue">Core Value</span>
                </h2>
                <p className="mt-4 sm:mt-6 text-charcoal text-base sm:text-lg leading-relaxed">
                  The Metalicone name is more than a brand — it is a seal of quality.
                  Every component that leaves our manufacturing floor carries the promise of
                  precision down to <strong className="text-deep-blue">0.001 mm (a single micron)</strong>.
                </p>
                <p className="mt-3 sm:mt-4 text-charcoal text-base sm:text-lg leading-relaxed">
                  Our laser-engraved logo is the final stamp of confidence — certifying that each part
                  has passed our rigorous inspection protocols and meets the exacting tolerances
                  demanded by the world&apos;s most advanced industries.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                  {["Micron-Level Precision", "Laser-Certified Parts", "100% Inspection", "Zero-Defect Commitment"].map((tag) => (
                    <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-deep-blue/5 text-deep-blue text-xs sm:text-sm font-medium rounded-full border border-deep-blue/10">{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/image_2f9259.png"
                  alt="Metalicone logo laser-engraved on precision component — seal of quality"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-blue/90 to-transparent p-6">
                  <div className="text-white text-center">
                    
                    <div className="text-sm text-white/70">Accuracy on Every Part</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 3. STRATEGIC INNOVATION HUB ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/image_2f9502.png"
                  alt="Metalicone modern R&D and development center"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Innovation &amp; R&amp;D</span>
                <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  The Industrial Home of <span className="text-deep-blue">Innovation</span>
                </h2>
                <p className="mt-4 sm:mt-6 text-charcoal text-base sm:text-lg leading-relaxed">
                  More than a contract manufacturer — Metalicone is a strategic R&amp;D partner for
                  global OEMs. Our engineering teams collaborate directly with customer design groups
                  to optimize manufacturability, reduce lead times, and push the boundaries of what&apos;s possible.
                </p>
                <p className="mt-3 sm:mt-4 text-charcoal text-base sm:text-lg leading-relaxed">
                  With over 3 decades of hands-on experience and a modern innovation center,
                  we merge proven craftsmanship with future-forward technologies — from advanced
                  5-axis CNC platforms to intelligent quality systems.
                </p>
                <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { value: "30+", label: "Years of Experience" },
                    { value: "9", label: "Manufacturing Sites" },
                    { value: "6", label: "Industry Sectors" },
                    { value: "3", label: "Continents" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white border border-light-gray rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-xl sm:text-2xl font-bold text-deep-blue">{stat.value}</div>
                      <div className="text-xs text-charcoal mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 4. MICRON-LEVEL PROOF — ADVANCED ENGINEERING SOLUTIONS ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Engineering Excellence</span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Advanced Engineering <span className="text-deep-blue">Solutions</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-charcoal text-base sm:text-lg leading-relaxed">
              From multi-axis CNC machining to EDM and deep drilling — our technology portfolio
              serves the most demanding sectors including semiconductors and commercial printing.
            </p>
          </FadeIn>

          <div className="mt-10 sm:mt-16 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <FadeIn delay={0.1} className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/semiconductor-fab.png"
                  alt="Advanced semiconductor fabrication with precision HUD overlay"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                {capabilities.map((cap) => (
                  <div key={cap.title} className="bg-off-white border border-light-gray rounded-xl p-4 sm:p-5 hover:shadow-md transition-shadow">
                    <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-deep-blue/10 flex items-center justify-center mb-2 sm:mb-3">
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-deep-blue" />
                    </div>
                    <h4 className="font-bold text-foreground text-xs sm:text-sm">{cap.title}</h4>
                    <p className="mt-1 sm:mt-1.5 text-charcoal text-[11px] sm:text-xs leading-relaxed">{cap.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 5. LEADING THE SKIES — CIVIL AVIATION ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/civil-aviation.png"
                  alt="Precision aerospace components for civil aviation manufactured by Metalicone Group"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Civil Aviation</span>
                <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Precision for the <span className="text-deep-blue">Future of Flight</span>
                </h2>
                <p className="mt-4 sm:mt-6 text-charcoal text-base sm:text-lg leading-relaxed">
                  Metalicone Group manufactures high-precision edge components for commercial passenger
                  aircraft — meeting the most stringent aerospace standards. Every part is produced under
                  full AS9100D certification, ensuring absolute reliability where it matters most: in the sky.
                </p>
                <p className="mt-3 sm:mt-4 text-charcoal text-base sm:text-lg leading-relaxed">
                  From structural assemblies to critical engine-adjacent components, our manufacturing
                  capabilities cover the full spectrum of civil aviation requirements — including complex
                  geometries, exotic alloys, and zero-defect delivery programs.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                  {["AS9100D Certified", "Flight-Critical Parts", "Exotic Alloys", "Zero-Defect Programs"].map((tag) => (
                    <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-deep-blue/5 text-deep-blue text-xs sm:text-sm font-medium rounded-full border border-deep-blue/10">{tag}</span>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8">
                  <Link
                    href="/industries/aerospace-defense"
                    className="inline-flex items-center gap-2 text-deep-blue font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Explore Aerospace &amp; Defense
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 6. SEMICONDUCTOR MASTERY ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <FadeIn delay={0.2} className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/applied-chuck.png"
                  alt="Electrostatic chuck precision component for semiconductor FAB equipment"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </FadeIn>
            <FadeIn className="order-2 lg:order-1">
              <div>
                <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Semiconductor Mastery</span>
                <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Enabling Global Semiconductor <span className="text-deep-blue">Innovation</span>
                </h2>
                <p className="mt-4 sm:mt-6 text-charcoal text-base sm:text-lg leading-relaxed">
                  Metalicone is a trusted partner to the world&apos;s leading FAB equipment manufacturers,
                  supplying mission-critical core components including Electrostatic Chucks and Process
                  Chambers — the heart of advanced chip fabrication.
                </p>
                <p className="mt-3 sm:mt-4 text-charcoal text-base sm:text-lg leading-relaxed">
                  Our semiconductor division combines ultra-clean manufacturing environments, sub-micron
                  precision machining, and deep materials expertise to deliver components that meet the
                  extreme demands of next-generation lithography and deposition systems.
                </p>
                <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { value: "Sub-µm", label: "Precision Tolerances" },
                    { value: "100%", label: "Clean-Room Standards" },
                    { value: "Tier 1", label: "FAB Partnerships" },
                    { value: "24/7", label: "Production Capacity" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-off-white border border-light-gray rounded-xl p-3 sm:p-4 text-center">
                      <div className="text-lg sm:text-xl font-bold text-deep-blue">{stat.value}</div>
                      <div className="text-xs text-charcoal mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8">
                  <Link
                    href="/industries/semiconductors"
                    className="inline-flex items-center gap-2 text-deep-blue font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Explore Semiconductors
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 7. UNWAVERING QUALITY ASSURANCE ─── */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <Image
          src="/images/image_2f957b.png"
          alt="Precision measurement and quality control at Metalicone"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep-blue/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <FadeIn>
              <span className="text-blue-200 font-semibold text-sm tracking-[0.2em] uppercase">Quality Assurance</span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Platinum Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Reliability</span>
              </h2>
              <p className="mt-4 sm:mt-6 text-white/70 text-base sm:text-lg leading-relaxed">
                Quality is non-negotiable. Every part is manufactured, inspected, and delivered
                under a multi-tiered quality system certified to the highest international standards.
                Our commitment: 100% accuracy, 100% traceability, zero defects.
              </p>
              <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3">
                {qualityStandards.map((std) => (
                  <div key={std.name} className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm">{std.name}</span>
                    <span className="text-white/50 text-xs sm:text-sm hidden sm:inline">— {std.description}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2} direction="left">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: "5", label: "Quality Certifications" },
                  { value: "100%", label: "Part Inspection" },
                  { value: "0", label: "Tolerance for Defects" },
                  { value: "24/7", label: "Process Monitoring" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── 8. INDUSTRIES PREVIEW ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Industries We Serve</span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Delivering Excellence Across <span className="text-deep-blue">Key Sectors</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-charcoal text-base sm:text-lg leading-relaxed">
              World-class engineering and manufacturing expertise with a collaborative approach that accelerates your path from concept to solution.
            </p>
          </FadeIn>
          <div className="mt-10 sm:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {industries.map((ind, i) => (
              <FadeIn key={ind.title} delay={i * 0.08}>
                <Link href={ind.href} className="group block relative rounded-2xl border border-light-gray bg-white p-5 sm:p-8 hover:shadow-xl transition-all h-full">
                  {ind.badge && (
                    <span className="absolute top-0 right-0 bg-deep-blue text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2 sm:px-3 py-0.5 sm:py-1 rounded-bl-lg rounded-tr-2xl">{ind.badge}</span>
                  )}
                  <h3 className="text-base sm:text-xl font-bold text-foreground group-hover:text-deep-blue transition-colors">{ind.title}</h3>
                  <p className="mt-2 sm:mt-3 text-charcoal text-xs sm:text-sm leading-relaxed">{ind.description}</p>
                  <div className="mt-3 sm:mt-5 text-deep-blue text-xs sm:text-sm font-semibold flex items-center gap-1">
                    Learn more
                    <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. GLOBAL PRESENCE TEASER ─── */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Global Footprint</span>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Manufacturing Across <span className="text-deep-blue">4 Countries</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-charcoal text-base sm:text-lg leading-relaxed">
              9 manufacturing sites and strategic partnerships spanning Israel, Germany, the United States, and India.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10 sm:mt-16">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0a1628]">
              <Image
                src="/images/global-reach-map2.png"
                alt="Metalicone global manufacturing footprint"
                width={1400}
                height={700}
                className="object-cover w-full"
              />

              {/* Hotspot dots */}
              {worldPoints.map((pt) => (
                <div
                  key={pt.id}
                  className="absolute group"
                  style={{
                    left: `${pt.x}%`,
                    top: `${pt.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="relative flex h-3 w-3 sm:h-4 sm:w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/40" />
                    <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-white border-2 border-white/80 shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
                  </span>
                  {/* Label */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-11 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    <span className="bg-white text-deep-blue text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg inline-flex items-center gap-1.5">
                      <Image src={pt.flag} alt="" width={18} height={12} className="rounded-[2px] object-cover" />
                      {pt.label} — {pt.count}
                    </span>
                  </div>
                </div>
              ))}

              {/* CTA overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1628] to-transparent p-4 sm:p-8 text-center">
                <Link
                  href="/global-reach"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-deep-blue font-bold rounded-full hover:bg-gray-100 transition-colors text-xs sm:text-sm"
                >
                  Explore Our Global Reach
                  <svg className="w-3.5 sm:w-4 h-3.5 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Country summary */}
          <div className="mt-6 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {worldPoints.map((pt, i) => (
              <FadeIn key={pt.id} delay={0.1 + i * 0.06}>
                <div className="bg-off-white border border-light-gray rounded-xl p-3.5 sm:p-5 text-center flex flex-col items-center gap-2">
                  <Image
                    src={pt.flag}
                    alt={`${pt.label} flag`}
                    width={36}
                    height={24}
                    className="rounded-sm shadow-sm object-cover"
                  />
                  <div className="text-base sm:text-lg font-bold text-foreground">{pt.label}</div>
                  <div className="text-xs sm:text-sm text-charcoal">{pt.count}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. CONTACT ─── */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative bg-gradient-to-br from-deep-blue to-deep-blue-dark rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 p-6 sm:p-10 lg:p-16">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">Ready to Elevate Your Manufacturing Capabilities?</h2>
                  <p className="mt-3 sm:mt-5 text-white/60 text-base sm:text-lg leading-relaxed">We work with OEMs to solve challenges, providing expertise and know-how.</p>
                  <div className="mt-5 sm:mt-8 space-y-3 sm:space-y-4">
                    {["Over 3 decades of experience", "High quality, stable, cost-effective manufacturing", "Expertise in various platforms and materials", "Proven accuracy down to 0.001 mm"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-white/80 text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Get in Touch</h3>
                  <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()} suppressHydrationWarning>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <input type="text" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="First Name" suppressHydrationWarning />
                      <input type="text" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Last Name" suppressHydrationWarning />
                    </div>
                    <input type="email" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Email" suppressHydrationWarning />
                    <input type="text" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Company" suppressHydrationWarning />
                    <textarea rows={3} className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue resize-none" placeholder="Tell us about your project..." suppressHydrationWarning />
                    <button type="submit" className="w-full py-3 sm:py-3.5 bg-deep-blue text-white font-bold rounded-xl hover:bg-deep-blue-dark transition-colors text-sm sm:text-base">Send Message</button>
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
