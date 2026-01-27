"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const leaders = [
  {
    name: "Aviram Sella",
    role: "Strategic Business Development, IDF Brigadier General (Res.)",
    image: "/images/team/aviram-sella.png",
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
    role: "Managing Partner, Harvard Business School Graduate",
    image: "/images/team/dan-topaz.png",
    bio: [
      "27 years journey at Ham-Let Group — scaling from machine shop to one of the world's 2 best manufacturers in fluid solutions with $150M turnover",
      "Graduate of Harvard Business School (MBA/AMP 2009)",
      "Strategic adviser to successful startup companies",
    ],
  },
  {
    name: "Sam Topaz",
    role: "Managing Partner, Former CEO of Ham-Let Group",
    image: "/images/team/sam-topaz.png",
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
    image: "/images/team/igor-krapovinsky.png",
    bio: [
      "30+ years of experience in aerospace component manufacturing, operations, quality, and global distribution",
      "MBA Mechanical Engineering",
      "GM of Pratt & Whitney operations in Israel — 3 sites, 1,400+ employees",
      "GM of Turbine Jet Ltd (Blades Technology International subsidiary) — 3 business units, 400+ employees",
    ],
  },
  {
    name: "Rafi Hadad",
    role: "UPC CEO",
    image: "/images/team/rafi-hadad.png",
    bio: [
      "Accomplished Business Development Manager with over 20 years of experience at Flextronics International, headquartered in San Jose, California",
      "Held multiple leadership roles within Flex, demonstrating a consistent track record in driving business growth",
      "Developing strategic customer relationships and expanding global market presence",
      "Recognized for expertise in electronics manufacturing services (EMS), contract negotiations, and delivering innovative supply chain and manufacturing solutions",
    ],
  },
  {
    name: "Tal Topaz",
    role: "Managing Partner, CEO of Roligo Dental Fund",
    image: "/images/team/tal-topaz.png",
    bio: [
      "LL.B. in Law & B.A. in Business from IDC, Israeli Bar Association member since 2010",
      "Founder & CEO of Roligo Dental Fund — U.S.-based healthcare roll-up platform, scaled to 18 dental practices with $35M revenue",
      "CEO of Paltop — transformed from $3M to $50M annual revenue through strategic M&A",
      "VP Business Development at Sunflower Sustainable Investments (TASE: SNFL) — led M&A and project financing for multi-million-dollar renewable energy initiatives",
    ],
  },
  {
    name: "Ruvi Shaibel",
    role: "Director, CEO of Neolync Solutions (India)",
    image: "/images/team/ruvi-shaibel.png",
    bio: [
      "Founder of Flex Israel, former President in Flex Corp International",
      "Recognized leader in Israel and world over in the EMS Industry",
      "Israeli Industry Award Winner",
      "B.A. in Mathematics and Economics from Columbia University",
      "VP at Apax Partners — invested $250M+ in leading Israeli companies",
      "Board member at Psagot, Go Global, Paltop, and Metalicone",
    ],
  },
];

function LeaderCard({ leader, index }: { leader: (typeof leaders)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeIn delay={index * 0.08}>
      <div className="bg-white rounded-2xl border border-light-gray overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
        <div className="bg-gradient-to-r from-deep-blue to-deep-blue-dark p-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/30 shrink-0 bg-white/10">
              <Image
                src={leader.image}
                alt={leader.name}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{leader.name}</h3>
              <p className="text-blue-200 text-sm mt-0.5">{leader.role}</p>
            </div>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <ul className="space-y-2 flex-1">
            {(expanded ? leader.bio : leader.bio.slice(0, 2)).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-charcoal leading-relaxed">
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
              {expanded ? "Show less" : `Show all (${leader.bio.length} items)`}
            </button>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default function LeadershipPage() {
  return (
    <main>
      <PageHero
        title="Our Leadership"
        subtitle="The Team"
        description="Driving operational excellence and business integration — a world-class leadership team combining decades of experience in aerospace, global distribution, M&A, and strategic business development."
      />

      <section className="py-24 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Strategic Leadership in <span className="text-deep-blue">Industry & Operations</span>
            </h2>
            <p className="mt-5 text-charcoal text-lg leading-relaxed">
              Our leadership team brings together proven expertise from Harvard Business School,
              Pratt & Whitney, Flextronics, and some of the most successful Israeli industrial
              companies — driving Metalicone&apos;s global growth and operational excellence.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
