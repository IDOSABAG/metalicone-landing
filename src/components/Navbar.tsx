"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Semiconductors", href: "/industries/semiconductors" },
      { label: "Commercial Printing", href: "/industries/commercial-printing" },
      { label: "Power Generation", href: "/industries/power-generation" },
      { label: "Transportation", href: "/industries/transportation" },
      { label: "Aerospace & Defense", href: "/industries/aerospace-defense" },
      { label: "Engine & Hydraulics", href: "/industries/engine-hydraulics" },
    ],
  },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Global Reach", href: "/global-reach" },
  { label: "Leadership", href: "/leadership" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showTransparent = isHome && !scrolled;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 8L12 35V90H40V60H60V90H88V35L50 8Z"
                  fill={showTransparent ? "white" : "#004B87"}
                  opacity="0.15"
                />
                <path
                  d="M50 15L18 38V85H38V55H62V85H82V38L50 15Z"
                  stroke={showTransparent ? "white" : "#004B87"}
                  strokeWidth="3"
                  fill="none"
                />
                <text
                  x="50"
                  y="52"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={showTransparent ? "white" : "#004B87"}
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
                  showTransparent ? "text-white" : "text-deep-blue"
                }`}
              >
                METALICONE
              </span>
              <span
                className={`block text-[10px] font-semibold tracking-[0.3em] uppercase ${
                  showTransparent ? "text-white/70" : "text-charcoal"
                }`}
              >
                GROUP
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setDropdownOpen(true)}
                onMouseLeave={() => link.children && setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-deep-blue-light ${
                    pathname === link.href || (link.children && pathname.startsWith(link.href))
                      ? showTransparent
                        ? "text-white font-bold"
                        : "text-deep-blue font-bold"
                      : showTransparent
                        ? "text-white/90"
                        : "text-charcoal"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <svg className="inline-block w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {/* Dropdown */}
                {link.children && dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-5 py-2.5 text-sm transition-colors hover:bg-deep-blue/5 hover:text-deep-blue ${
                          pathname === child.href
                            ? "text-deep-blue font-semibold bg-deep-blue/5"
                            : "text-charcoal"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <Link
              href="/#contact"
              className="ml-4 px-6 py-2.5 bg-deep-blue text-white text-sm font-semibold rounded-full hover:bg-deep-blue-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-6 h-0.5 transition-all ${
                  showTransparent ? "bg-white" : "bg-deep-blue"
                } ${
                  mobileOpen
                    ? i === 0
                      ? "rotate-45 translate-y-2"
                      : i === 1
                        ? "opacity-0"
                        : "-rotate-45 -translate-y-2"
                    : ""
                }`}
              />
            ))}
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
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-charcoal font-medium text-base hover:text-deep-blue transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 border-l-2 border-deep-blue/10 pl-4 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm text-charcoal-light hover:text-deep-blue transition-colors py-1.5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 px-6 py-3 bg-deep-blue text-white text-center font-semibold rounded-full"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
