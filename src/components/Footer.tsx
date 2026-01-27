"use client";

import Link from "next/link";

const footerLinks = {
  Industries: [
    { label: "Semiconductors", href: "/industries/semiconductors" },
    { label: "Commercial Printing", href: "/industries/commercial-printing" },
    { label: "Power Generation", href: "/industries/power-generation" },
    { label: "Transportation", href: "/industries/transportation" },
    { label: "Aerospace & Defense", href: "/industries/aerospace-defense" },
    { label: "Engine & Hydraulics", href: "/industries/engine-hydraulics" },
  ],
  Company: [
    { label: "About Us", href: "/#about" },
    { label: "Leadership", href: "/leadership" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Global Reach", href: "/global-reach" },
    { label: "Careers", href: "/#careers" },
  ],
  Connect: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/metalicone-gmbh", external: true },
    { label: "Contact Us", href: "/#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                <path d="M50 15L18 38V85H38V55H62V85H82V38L50 15Z" stroke="white" strokeWidth="2.5" fill="none" />
                <text x="50" y="52" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Montserrat, sans-serif">M</text>
              </svg>
              <div>
                <span className="text-lg font-bold tracking-wide">METALICONE</span>
                <span className="block text-[9px] font-semibold tracking-[0.3em] text-white/50 uppercase">GROUP</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              The Industrial Home — Your most trusted partner in
              precision-engineered components and assembly solutions.
            </p>
            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/metalicone-gmbh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-deep-blue transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-white/80">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {(link as { external?: boolean }).external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 text-sm hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link href={link.href} className="text-white/40 text-sm hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Metalicone Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
