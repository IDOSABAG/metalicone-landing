"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

interface Site {
  id: string;
  city: string;
  region: string;
  specialty: string;
  type: "manufacturing" | "strategic";
  image?: string;
}

/* ── World map points (Israel = single HQ dot, 3 international) ── */
const worldPoints = [
  { id: "israel-hq", label: "Israel HQ", x: 55.5, y: 50, type: "hq" as const },
  { id: "germany", label: "Metalicone GmbH", x: 49, y: 40, type: "strategic" as const },
  { id: "usa", label: "United States", x: 25.0, y: 45.5, type: "strategic" as const },
  { id: "india", label: "Neolync Solutions", x: 69.5, y: 57.5, type: "strategic" as const },
];

/* ── Israel zoom sites (distributed N→S inside circle) ── */
const israelSites: Site[] = [
  {
    id: "kiryat-shmona",
    city: "Kiryat Shmona",
    region: "Israel",
    specialty: "Design and manufacturing of critical parts and complex mechanical assemblies for advanced Armored Fighting Vehicle (AFV) platforms and sophisticated weapon systems. Specializing in defense-grade precision for mission-critical applications.",
    type: "manufacturing",
    image: "/images/image_40019f.png",
  },
  {
    id: "karmiel",
    city: "Karmiel",
    region: "Israel",
    specialty: "Assembly HUB — Full Turn-Key solutions for defense and industrial projects. Complete project management from component sourcing through final integration, testing, and delivery.",
    type: "manufacturing",
    image: "/images/image_3ffe1e.png",
  },
  {
    id: "lavon",
    city: "Lavon Industrial Zone",
    region: "Israel",
    specialty: "CNC precision machining of large parts with high accuracy and complex engineering geometry. Specializing in multi-item sub-assembly integration for complex systems requiring numerous precision components.",
    type: "manufacturing",
    image: "/images/image_3ffa3f.png",
  },
  {
    id: "nesher",
    city: "Nesher Industrial Zone",
    region: "Israel",
    specialty: "Precision castings — Investment (lost wax) casting facility for aerospace and industrial applications. Near-net-shape manufacturing of complex geometries in high-performance alloys.",
    type: "manufacturing",
    image: "/images/image_3ffaf4.png",
  },
  {
    id: "holon",
    city: "Holon",
    region: "Israel",
    specialty: "Design and manufacturing of complex spring systems for defense and high-tech industries. Advanced engineering of springs and elastic components for demanding operational environments.",
    type: "manufacturing",
    image: "/images/image_18gerg.png",
  },
  {
    id: "yavne",
    city: "Yavne",
    region: "Israel",
    specialty: "High-volume CNC precision machining center. Focused on scalable production runs with consistent quality and rapid turnaround for commercial and industrial clients.",
    type: "manufacturing",
    image: "/images/image_3ffa3f.png",
  },
];

/* ── Strategic partner data ── */
const strategicSites: Site[] = [
  {
    id: "germany",
    city: "Metalicone GmbH",
    region: "Germany",
    specialty: "European operations hub — precision engineering, manufacturing, and distribution serving European OEMs. Strategic presence for customer proximity and regional supply chain optimization.",
    type: "strategic",
  },
  {
    id: "usa",
    city: "United States Operations",
    region: "USA",
    specialty: "Strategic partnership with leading global casting manufacturers across all casting disciplines. North American business development, customer support, and supply chain coordination for the Americas market.",
    type: "strategic",
  },
  {
    id: "india",
    city: "Neolync Solutions",
    region: "India",
    specialty: "Assembly, global distribution, and electronics manufacturing services hub. Managed by industry pioneer Ruvi Shaibel — founder of Flex Israel and former President of Flex Corp International. Leveraging India's manufacturing ecosystem for cost-effective high-quality production.",
    type: "strategic",
  },
];

const allSites = [...israelSites, ...strategicSites];

const regionSummary = [
  { name: "Israel", count: 6, label: "Manufacturing Sites" },
  { name: "Germany", count: 1, label: "European Hub" },
  { name: "USA", count: 1, label: "Strategic Partnership" },
  { name: "India", count: 1, label: "EMS & Distribution" },
];

/* ── Zoom circle positions: 6 points distributed vertically inside circle ── */
const zoomPositions = [
  { x: 54, y: 15 },  // Kiryat Shmona (northernmost)
  { x: 50, y: 30 },  // Karmiel
  { x: 53, y: 25 },  // Lavon
  { x: 49, y: 25 },  // Nesher
  { x: 48, y: 40 },  // Holon
  { x: 45, y: 43 },  // Yavne (southernmost)
];

/* ── Pulse Hotspot (reusable) ── */
function PulsePoint({
  isStrategic,
  isHQ,
  isActive,
  size = 16,
}: {
  isStrategic?: boolean;
  isHQ?: boolean;
  isActive?: boolean;
  size?: number;
}) {
  const colorFaded = isHQ ? "bg-white/40" : isStrategic ? "bg-[#5BB0F0]/40" : "bg-white/40";
  const dotSize = isHQ ? size + 4 : size;

  return (
    <>
      <motion.span
        className={`absolute rounded-full ${colorFaded}`}
        style={{
          width: dotSize * 1.6,
          height: dotSize * 1.6,
          top: -(dotSize * 0.3),
          left: -(dotSize * 0.3),
        }}
        animate={{ scale: [1, 1.4, 2], opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 1] }}
      />
      <motion.span
        className={`absolute rounded-full ${colorFaded}`}
        style={{
          width: dotSize * 1.3,
          height: dotSize * 1.3,
          top: -(dotSize * 0.15),
          left: -(dotSize * 0.15),
        }}
        animate={{ scale: [1, 1.3, 1.7], opacity: [0, 0.4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 1], delay: 0.8 }}
      />
      <motion.div
        className={`relative rounded-full border-2 cursor-pointer ${
          isHQ
            ? "bg-white border-white/90 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            : isStrategic
              ? "bg-[#5BB0F0] border-[#5BB0F0]/60 shadow-[0_0_8px_rgba(91,176,240,0.3)]"
              : "bg-white border-white/90 shadow-[0_0_8px_rgba(255,255,255,0.2)]"
        } ${isActive ? "ring-3 ring-white/30 scale-110" : ""}`}
        style={{ width: dotSize, height: dotSize }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}

/* ── Page ── */
export default function GlobalReachPage() {
  const [activeSite, setActiveSite] = useState<string | null>(null);
  const active = allSites.find((s) => s.id === activeSite);

  // Zoom circle position (bottom-right of map)
  const zoomCx = 82; // % from left
  const zoomCy = 32; // % from top
  const zoomR = 16;  // % radius

  // Israel HQ position on world map
  const hqX = 55.5;
  const hqY = 50;

  return (
    <main>
      <PageHero
        title="Global Reach"
        subtitle="Our Worldwide Presence"
        description="9 manufacturing sites across Asia, Europe, and the Middle East — a truly global industrial partner."
        backgroundImage="/images/global-reach-map2.png"
      />

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              9 Manufacturing Sites Across{" "}
              <span className="text-deep-blue">3 Continents</span>
            </h2>
            <p className="mt-5 text-charcoal text-lg leading-relaxed">
              A global supplier operating in Asia, Europe, and the Middle East —
              with strategic partnerships across all casting disciplines worldwide.
              Hover over the hotspots to explore each facility.
            </p>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0a1628]">
              <Image
                src="/images/global-reach-map2.png"
                alt="Metalicone global manufacturing footprint"
                width={1400}
                height={700}
                className="object-cover w-full"
                priority
              />

              {/* ── SVG connector line from Israel HQ to zoom circle ── */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-[5]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <line
                  x1={hqX}
                  y1={hqY}
                  x2={zoomCx}
                  y2={zoomCy}
                  stroke="white"
                  strokeWidth="0.15"
                  strokeDasharray="0.8 0.4"
                  opacity="0.6"
                />
              </svg>

              {/* ── World map hotspots ── */}
              {worldPoints.map((pt) => {
                const isHQ = pt.type === "hq";
                const isStrategic = pt.type === "strategic";
                const siteData = isStrategic ? strategicSites.find((s) => s.id === pt.id) : null;

                return (
                  <div
                    key={pt.id}
                    className="absolute z-999 group"
                    style={{
                      left: `${pt.x}%`,
                      top: `${pt.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    onMouseEnter={() => siteData && setActiveSite(siteData.id)}
                    onMouseLeave={() => setActiveSite(null)}
                  >
                    <PulsePoint
                      isStrategic={isStrategic}
                      isHQ={isHQ}
                      isActive={siteData ? activeSite === siteData.id : false}
                    />
                    {/* Label */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-translate-y-1"
                      style={{ bottom: "calc(100% + 10px)", zIndex: 60 }}
                    >
                      <span className="bg-white text-deep-blue text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-xl border border-gray-100">
                        {isHQ ? "Israel — 6 Sites" : pt.label}
                      </span>
                    </div>
                    {/* HQ badge */}
                    {isHQ && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none"
                        style={{ top: "calc(100% + 6px)" }}
                      >
                        <span className="bg-white/15 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-full border border-white/20 tracking-wider uppercase">
                          HQ &amp; Manufacturing
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* ── Zoom Circle (Israel detail) ── */}
              <div
                className="absolute z-20 pointer-events-none"
                style={{
                  left: `${zoomCx}%`,
                  top: `${zoomCy}%`,
                  transform: "translate(-50%, -50%)",
                  width: `${zoomR * 2}%`,
                  paddingBottom: `${zoomR * 2}%`,
                }}
              >
                {/* Circle container */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/40 shadow-2xl pointer-events-auto">
                  {/* Zoom background image */}
                  <Image
                    src="/images/israel-zoom.png"
                    alt="Israel manufacturing sites detail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0a1628]/30" />

                  {/* 6 Israel hotspot dots inside zoom circle */}
                  {israelSites.map((site, i) => (
                    <div
                      key={site.id}
                      className="absolute z-10 group"
                      style={{
                        left: `${zoomPositions[i].x}%`,
                        top: `${zoomPositions[i].y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      onMouseEnter={() => setActiveSite(site.id)}
                      onMouseLeave={() => setActiveSite(null)}
                    >
                      <PulsePoint
                        isActive={activeSite === site.id}
                        size={12}
                      />
                      {/* City label */}
                      <div
                        className={`absolute whitespace-nowrap pointer-events-none transition-all duration-200 ${
                          activeSite === site.id
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                        style={{
                          left: i % 2 === 0 ? "calc(100% + 8px)" : "auto",
                          right: i % 2 === 1 ? "calc(100% + 8px)" : "auto",
                          top: "50%",
                          transform: "translateY(-50%)",
                          zIndex: 70,
                        }}
                      >
                        <span className="bg-white text-deep-blue text-[10px] font-bold px-2 py-0.5 rounded shadow-lg border border-gray-100">
                          {site.city}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Zoom label */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/15 tracking-wider uppercase">
                    Israel — 6 Manufacturing Sites
                  </span>
                </div>
              </div>

              {/* ── Tooltip card ── */}
              <AnimatePresence>
                {active && (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute bottom-6 left-6 right-6 md:left-6 md:right-auto md:w-[400px] bg-white rounded-xl shadow-2xl p-6 z-[80] pointer-events-none border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-3.5 h-3.5 rounded-full ${
                          active.type === "strategic" ? "bg-[#5BB0F0]" : "bg-white border-2 border-deep-blue"
                        }`}
                      />
                      <h4 className="font-bold text-foreground text-base">{active.city}</h4>
                      <span className="ml-auto text-xs text-charcoal-light uppercase tracking-wider font-bold">
                        {active.region}
                      </span>
                    </div>
                    <p className="text-sm text-charcoal leading-relaxed">{active.specialty}</p>
                    {active.type === "strategic" && (
                      <span className="inline-block mt-3 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        Strategic Partner
                      </span>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Region stats bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/50 to-transparent p-6 md:p-8 z-[15]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {regionSummary.map((r) => (
                    <div key={r.name} className="text-left p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/5">
                      <div className="text-2xl md:text-3xl font-bold text-white">{r.count}</div>
                      <div className="text-sm text-white/80 font-medium">{r.name}</div>
                      <div className="text-xs text-white/50 mt-0.5">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-6 justify-center text-sm text-charcoal">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white border-2 border-gray-300" />
              Israel — Manufacturing Site
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#5BB0F0]" />
              Global — Strategic Partner
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-white border-2 border-gray-300" />
              HQ &amp; Manufacturing Hub
            </div>
          </div>

          {/* ── Site cards ── */}
          <div className="mt-20">
            <FadeIn className="mb-10">
              <h3 className="text-2xl font-bold text-foreground">
                Israel — <span className="text-deep-blue">6 Manufacturing Sites</span>
              </h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {israelSites.map((site, i) => (
                <FadeIn key={site.id} delay={i * 0.06}>
                  <div className="bg-white border border-light-gray rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={site.image!}
                        alt={`${site.city} manufacturing facility`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <h4 className="font-bold text-white text-lg">{site.city}</h4>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-sm text-charcoal leading-relaxed flex-1">{site.specialty}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn className="mt-14 mb-10">
              <h3 className="text-2xl font-bold text-foreground">
                Global — <span className="text-deep-blue">Strategic Partners & Operations</span>
              </h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {strategicSites.map((site, i) => (
                <FadeIn key={site.id} delay={i * 0.06}>
                  <div className="bg-white border border-light-gray rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/images/global-reach-map2.png"
                        alt={`${site.city} — ${site.region}`}
                        fill
                        className="object-cover blur-[2px] scale-110"
                      />
                      <div className="absolute inset-0 bg-deep-blue/60" />
                      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                        <h4 className="font-bold text-white text-lg">{site.city}</h4>
                        <span className="text-xs text-white/70 uppercase tracking-wider font-bold">
                          {site.region}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p className="text-sm text-charcoal leading-relaxed flex-1">{site.specialty}</p>
                      <span className="inline-block mt-3 text-xs font-semibold text-[#5BB0F0] bg-blue-50 px-2.5 py-1 rounded-full self-start">
                        Strategic Partner
                      </span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
