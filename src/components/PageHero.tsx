"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, description, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-deep-blue">
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-deep-blue/80" />
        </div>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-deep-blue-dark to-[#001f3f]" />
      )}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-blue-300 font-semibold text-sm tracking-[0.2em] uppercase mb-4"
        >
          {subtitle}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
