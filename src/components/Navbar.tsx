"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Industries", href: "#industries" },
  { label: "Global Reach", href: "#global" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative">
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 8L12 35V90H40V60H60V90H88V35L50 8Z"
                  fill={scrolled ? "#004B87" : "white"}
                  opacity="0.15"
                />
                <path
                  d="M50 15L18 38V85H38V55H62V85H82V38L50 15Z"
                  stroke={scrolled ? "#004B87" : "white"}
                  strokeWidth="3"
                  fill="none"
                />
                <text
                  x="50"
                  y="52"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={scrolled ? "#004B87" : "white"}
                  fontSize="28"
                  fontWeight="bold"
                  fontFamily="Montserrat, sans-serif"
                >
                  M
                </text>
              </svg>
            </div>
            <div>
              <span
                className={`text-xl font-bold tracking-wide font-[family-name:var(--font-heading)] ${
                  scrolled ? "text-deep-blue" : "text-white"
                }`}
              >
                METALICONE
              </span>
              <span
                className={`block text-[10px] font-semibold tracking-[0.3em] uppercase ${
                  scrolled ? "text-charcoal" : "text-white/70"
                }`}
              >
                GROUP
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-deep-blue-light ${
                  scrolled ? "text-charcoal" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 bg-deep-blue text-white text-sm font-semibold rounded-full hover:bg-deep-blue-dark transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-deep-blue" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-deep-blue" : "bg-white"
              } ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-deep-blue" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-charcoal font-medium text-base hover:text-deep-blue transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-6 py-3 bg-deep-blue text-white text-center font-semibold rounded-full"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
