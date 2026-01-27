"use client";

const footerLinks = {
  Industries: [
    "Semiconductors",
    "Commercial Printing",
    "Power Generation",
    "Transportation",
    "Aerospace & Defense",
    "Engine & Hydraulics",
  ],
  Company: ["About Us", "Leadership", "Capabilities", "Global Reach", "Careers"],
  Connect: ["LinkedIn", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
                <path d="M50 15L18 38V85H38V55H62V85H82V38L50 15Z" stroke="white" strokeWidth="2.5" fill="none" />
                <text x="50" y="52" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="28" fontWeight="bold" fontFamily="Montserrat, sans-serif">M</text>
              </svg>
              <div>
                <span className="text-lg font-bold tracking-wide">METALICONE</span>
                <span className="block text-[9px] font-semibold tracking-[0.3em] text-white/50 uppercase">GROUP</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              The Industrial Home — Your most trusted partner in
              precision-engineered components and assembly solutions.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-white/80">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Metalicone Group. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
