"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-deep-blue to-deep-blue-dark rounded-3xl overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
              className="absolute inset-0"
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-10 lg:p-16">
            {/* Left: CTA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Ready to Elevate Your
                <br />
                Manufacturing Capabilities?
              </h2>
              <p className="mt-5 text-white/60 text-lg leading-relaxed">
                We work with OEMs to solve challenges, providing expertise and
                know-how. With Metalicone at your side, you gain a partner
                committed to elevating performance, enhancing reliability, and
                enabling breakthrough productivity.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Over 3 decades of experience",
                  "High quality, stable, cost-effective manufacturing process",
                  "Expertise in various platforms and materials",
                  "Proven accuracy in complex components down to 0.001 mm",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue focus:ring-1 focus:ring-deep-blue transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue focus:ring-1 focus:ring-deep-blue transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue focus:ring-1 focus:ring-deep-blue transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue focus:ring-1 focus:ring-deep-blue transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue focus:ring-1 focus:ring-deep-blue transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-deep-blue text-white font-bold rounded-xl hover:bg-deep-blue-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
