"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <FadeIn>
              <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">
                About &amp; Heritage
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                The Industrial Home —{" "}
                <span className="text-deep-blue">Built on Legacy,</span>{" "}
                Driven by Innovation
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-charcoal leading-relaxed text-lg">
                Established by Mr. Steff Wertheimer — founder of the Iscar
                Group, today owned by Warren Buffett&apos;s Berkshire Hathaway —
                Metalicone Group carries a rich legacy of industrial excellence.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-4 text-charcoal leading-relaxed text-lg">
                Acquired in January 2023 by FGT Private Equity, the company
                continues to expand as a global industrial group specializing in
                manufacturing high value-added components and assembly solutions.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="mt-4 text-charcoal leading-relaxed text-lg">
                Our vision is to be your most trusted partner in
                precision-engineered components by consistently pushing
                innovation and technology boundaries with unwavering commitment
                to quality and deliveries.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Platinum Grade Supplier",
                  "5 Quality Standards",
                  "Results-Oriented",
                  "Values-Driven",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-deep-blue/5 text-deep-blue text-sm font-medium rounded-full border border-deep-blue/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right: Visual Card */}
          <FadeIn delay={0.3}>
            <div className="relative">
              <div className="bg-gradient-to-br from-deep-blue to-deep-blue-dark rounded-2xl p-10 text-white">
                {/* Logo Mark */}
                <div className="mb-8">
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <path
                      d="M50 8L12 35V90H40V60H60V90H88V35L50 8Z"
                      fill="white"
                      opacity="0.1"
                    />
                    <path
                      d="M50 15L18 38V85H38V55H62V85H82V38L50 15Z"
                      stroke="white"
                      strokeWidth="2.5"
                      fill="none"
                    />
                    <text
                      x="50"
                      y="52"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize="28"
                      fontWeight="bold"
                      fontFamily="Montserrat, sans-serif"
                    >
                      M
                    </text>
                  </svg>
                </div>

                <h3 className="text-2xl font-bold">
                  Global Partner to Industry Leaders
                </h3>
                <p className="mt-3 text-white/70 leading-relaxed">
                  A results-oriented and values-driven trusted partner to major
                  OEMs worldwide. Operating across Asia, Europe, and the Middle
                  East with 9 manufacturing sites delivering fully integrated
                  metal-based solutions.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold">30+</div>
                    <div className="text-sm text-white/60 mt-1">
                      Years of Excellence
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold">9</div>
                    <div className="text-sm text-white/60 mt-1">
                      Global Sites
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-deep-blue/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-deep-blue/5 rounded-2xl -z-10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
