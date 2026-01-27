"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileIndustriesOpen(false);
  }, [pathname]);

  const showTransparent = isHome && !scrolled;

  const handleDropdownEnter = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setDropdownOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 250);
  }, []);

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
          <Link href="/" className="flex items-center">
            <Image
              src="/images/metalicone-logo2.png"
              alt="Metalicone Technologies"
              width={180}
              height={48}
              priority
              className={`h-10 w-auto transition-all duration-300 ${
                showTransparent ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={link.children ? handleDropdownEnter : undefined}
                onMouseLeave={link.children ? handleDropdownLeave : undefined}
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
                    <svg
                      className={`inline-block w-3.5 h-3.5 ml-1 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown with invisible bridge */}
                {link.children && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <>
                        {/* Invisible bridge between trigger and dropdown */}
                        <div className="absolute top-full left-0 w-full h-4" />
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8, transition: { delay: 0.15, duration: 0.2 } }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 pt-4 pointer-events-auto"
                        >
                          <div className="w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
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
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
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
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                        className="w-full flex items-center justify-between text-charcoal font-medium text-base hover:text-deep-blue transition-colors py-3"
                      >
                        {link.label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileIndustriesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <Link
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block ml-4 pl-4 border-l-2 border-deep-blue/10 text-sm font-semibold text-deep-blue py-2"
                            >
                              All Industries
                            </Link>
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block ml-4 pl-4 border-l-2 border-deep-blue/10 text-sm hover:text-deep-blue transition-colors py-2 ${
                                  pathname === child.href
                                    ? "text-deep-blue font-semibold"
                                    : "text-charcoal-light"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block font-medium text-base hover:text-deep-blue transition-colors py-3 ${
                        pathname === link.href ? "text-deep-blue font-bold" : "text-charcoal"
                      }`}
                    >
                      {link.label}
                    </Link>
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
