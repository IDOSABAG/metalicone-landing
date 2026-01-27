"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const leaders = [
  {
    name: "Aviram Sella",
    role: "Strategic Business Development",
    bio: [
      "IDF Brigadier General (Res.)",
      "BA Business Administration, IDC Israel",
      "MA Political Science, University of Haifa",
      "Chief of Staff of the Ground Forces Command and Head of Ground Forces Planning & Build-Up Division, IDF",
      "Chief of Artillery Corps, IDF",
    ],
  },
  {
    name: "Dan Topaz",
    role: "Managing Partner",
    bio: [
      "27 years journey at Ham-Let Group — scaling from machine shop to one of the world's 2 best manufacturers in fluid solutions with $150M turnover",
      "Graduate of Harvard Business School (MBA/AMP 2009)",
      "Strategic adviser to successful startup companies",
    ],
  },
  {
    name: "Sam Topaz",
    role: "Managing Partner",
    bio: [
      "B.A. in Economics, Advanced Management studies at Harvard University",
      "CEO of HAM-LET (1995–2009) — led from family business to global public company with 16 subsidiaries worldwide (acquired by UCT at $351M in 2021)",
      "Founded Paltop — global dental implant company, sold successfully in 2020 ($100M valuation)",
      "Extensive experience in industry, technology, product development, advanced production and global distribution",
    ],
  },
  {
    name: "Igor Krapovinsky",
    role: "CEO & Deputy Chairman",
    bio: [
      "30+ years of experience in aerospace component manufacturing, operations, quality, and global distribution",
      "MBA Mechanical Engineering",
      "GM of Pratt & Whitney operations in Israel — 3 sites, 1,400+ employees",
      "GM of Turbine Jet Ltd (Blades Technology International subsidiary) — 3 business units, 400+ employees",
    ],
  },
  {
    name: "Tal Topaz",
    role: "Managing Partner",
    bio: [
      "LL.B. in Law & B.A. in Business from IDC, Israeli Bar Association member since 2010",
      "Founder & CEO of Roligo Dental Fund — U.S.-based healthcare roll-up platform, scaled to 18 dental practices with $35M revenue",
      "CEO of Paltop — transformed from $3M to $50M annual revenue through strategic M&A",
      "VP Business Development at Sunflower Sustainable Investments (TASE: SNFL)",
    ],
  },
  {
    name: "Ruvi",
    role: "Director & CEO of Neolync Solutions (India)",
    bio: [
      "Founder of Flex Israel, former President in Flex Corp International",
      "Recognized leader in EMS Industry — Israeli Industry Award Winner",
      "B.A. in Mathematics and Economics from Columbia University",
      "VP at Apax Partners — invested $250M+ in leading Israeli companies",
      "Board member at Psagot, Go Global, Paltop, and Metalicone",
    ],
  },
];

function LeaderCard({
  leader,
  index,
}: {
  leader: (typeof leaders)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState(false);

  const initials = leader.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-light-gray overflow-hidden hover:shadow-xl transition-shadow"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-deep-blue to-deep-blue-dark p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold shrink-0">
            {initials}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{leader.name}</h3>
            <p className="text-blue-200 text-sm mt-0.5">{leader.role}</p>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="p-6">
        <ul className="space-y-2">
          {(expanded ? leader.bio : leader.bio.slice(0, 2)).map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-charcoal leading-relaxed"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-deep-blue shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        {leader.bio.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-deep-blue text-sm font-semibold hover:underline"
          >
            {expanded ? "Show less" : `Show more (${leader.bio.length - 2} more)`}
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="leadership" className="py-24 lg:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">
            Our Leadership
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Driving Operational Excellence &{" "}
            <span className="text-deep-blue">Business Integration</span>
          </h2>
          <p className="mt-5 text-charcoal text-lg leading-relaxed">
            A world-class leadership team combining decades of experience in
            aerospace manufacturing, global distribution, M&amp;A, and strategic
            business development.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <LeaderCard key={leader.name} leader={leader} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
