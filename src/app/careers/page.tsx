"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

const departments = [
  "All Departments",
  "Engineering",
  "Manufacturing",
  "Quality",
  "Sales & Business Development",
  "Operations",
];

const locations = ["All Locations", "Israel", "Germany", "Remote"];

const jobs = [
  {
    id: 1,
    title: "Senior CNC Programmer",
    department: "Engineering",
    location: "Israel",
    type: "Full-time",
    description:
      "Lead the programming of multi-axis CNC machines for complex aerospace and semiconductor components. You'll work directly with our engineering team to optimize toolpaths, reduce cycle times, and ensure micron-level precision.",
    tags: ["5-Axis", "Mastercam", "GD&T"],
  },
  {
    id: 2,
    title: "Quality Engineer — AS9100",
    department: "Quality",
    location: "Israel",
    type: "Full-time",
    description:
      "Drive quality improvement initiatives across our manufacturing sites. Manage AS9100D and ISO 9001 compliance, lead internal audits, and implement corrective actions for aerospace and defense programs.",
    tags: ["AS9100D", "CAPA", "SPC"],
  },
  {
    id: 3,
    title: "Mechanical Design Engineer",
    department: "Engineering",
    location: "Israel",
    type: "Full-time",
    description:
      "Design precision fixtures, tooling, and mechanical assemblies for semiconductor equipment manufacturing. Collaborate with customers on DFM reviews and drive design optimization from prototype to production.",
    tags: ["SolidWorks", "FEA", "DFM"],
  },
  {
    id: 4,
    title: "European Sales Manager",
    department: "Sales & Business Development",
    location: "Germany",
    type: "Full-time",
    description:
      "Expand Metalicone's presence in the European market. Manage key accounts across automotive, semiconductor, and industrial sectors in the DACH region. Build long-term partnerships with tier-1 OEMs.",
    tags: ["B2B Sales", "OEM", "DACH Region"],
  },
  {
    id: 5,
    title: "Surface Treatment Technician",
    department: "Manufacturing",
    location: "Israel",
    type: "Full-time",
    description:
      "Operate and maintain anodizing, plating, and passivation lines at our Simat facility. Ensure process parameters meet NADCAP and customer specifications for aerospace-grade surface treatments.",
    tags: ["Anodizing", "NADCAP", "Chemical Processing"],
  },
  {
    id: 6,
    title: "Production Planning Manager",
    department: "Operations",
    location: "Israel",
    type: "Full-time",
    description:
      "Oversee production scheduling across multiple manufacturing sites. Optimize capacity utilization, manage inventory levels, and ensure on-time delivery for critical aerospace and semiconductor programs.",
    tags: ["ERP", "Lean Manufacturing", "Supply Chain"],
  },
];

const benefits = [
  {
    title: "Growth & Development",
    description: "Continuous learning programs, mentorship, and clear career advancement paths across the Group.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Global Exposure",
    description: "Work with leading OEMs worldwide and collaborate across our sites in Israel, Germany, and beyond.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Cutting-Edge Technology",
    description: "Access to the latest CNC platforms, EDM systems, cleanroom facilities, and quality instrumentation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Meaningful Impact",
    description: "Your work directly supports aerospace, defense, medical, and semiconductor industries that shape the future.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  return (
    <main>
      <PageHero
        title="Careers"
        subtitle="Join the Metalicone Group"
        description="Build your career at the intersection of precision engineering and innovation. We're looking for talented people who share our passion for excellence."
      />

      {/* Why Join Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Why Metalicone</span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Why Build Your Career <span className="text-deep-blue">With Us</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="text-center p-6 sm:p-8 rounded-2xl bg-off-white border border-light-gray hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-xl bg-deep-blue/10 text-deep-blue flex items-center justify-center mx-auto mb-4">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg mb-2">{b.title}</h3>
                  <p className="text-charcoal text-sm leading-relaxed">{b.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-deep-blue font-semibold text-sm tracking-[0.2em] uppercase">Open Positions</span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Find Your Next <span className="text-deep-blue">Opportunity</span>
              </h2>
              <p className="mt-4 text-charcoal text-base sm:text-lg">
                {jobs.length} open positions across our global operations
              </p>
            </div>
          </FadeIn>

          {/* Filters */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <select className="flex-1 px-4 py-3 border border-light-gray rounded-xl text-sm text-charcoal bg-white focus:outline-none focus:border-deep-blue appearance-none cursor-pointer">
                {departments.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
              <select className="flex-1 px-4 py-3 border border-light-gray rounded-xl text-sm text-charcoal bg-white focus:outline-none focus:border-deep-blue appearance-none cursor-pointer">
                {locations.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
          </FadeIn>

          {/* Job Cards */}
          <div className="space-y-4 sm:space-y-5">
            {jobs.map((job, i) => (
              <FadeIn key={job.id} delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-light-gray p-5 sm:p-8 hover:shadow-lg transition-shadow group">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-deep-blue transition-colors">
                          {job.title}
                        </h3>
                        <span className="px-2.5 py-0.5 bg-deep-blue/10 text-deep-blue text-[11px] sm:text-xs font-semibold rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-charcoal text-xs sm:text-sm mb-3">
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-charcoal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-charcoal-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {job.location}
                        </span>
                      </div>
                      <p className="text-charcoal text-sm leading-relaxed mb-3 line-clamp-2">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 bg-off-white text-charcoal text-[11px] sm:text-xs font-medium rounded-lg border border-light-gray"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:ml-8 shrink-0">
                      <a
                        href="#apply"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-deep-blue text-white font-semibold text-sm rounded-full hover:bg-deep-blue-dark transition-colors"
                      >
                        Apply Now
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative bg-gradient-to-br from-deep-blue to-deep-blue-dark rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 p-6 sm:p-10 lg:p-16">
                <div>
                  <span className="text-blue-200 font-semibold text-sm tracking-[0.2em] uppercase">Apply Now</span>
                  <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    Start Your Journey With Metalicone
                  </h2>
                  <p className="mt-4 sm:mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
                    Fill in your details and we&apos;ll get back to you shortly. Whether you&apos;re applying for a specific role or sending a general application — we&apos;d love to hear from you.
                  </p>
                  <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                    {["Review within 5 business days", "Confidential and secure process", "Open to all experience levels", "Relocation support available"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 sm:gap-3">
                        <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-white/80 text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-2xl">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">Application Form</h3>
                  <form className="space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()} suppressHydrationWarning>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      <input type="text" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Full Name" suppressHydrationWarning />
                      <input type="tel" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Phone Number" suppressHydrationWarning />
                    </div>
                    <input type="email" className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue" placeholder="Email Address" suppressHydrationWarning />
                    <select className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-light-gray rounded-xl text-sm text-charcoal bg-white focus:outline-none focus:border-deep-blue appearance-none cursor-pointer" defaultValue="" suppressHydrationWarning>
                      <option value="" disabled>Position of Interest</option>
                      {jobs.map((job) => (
                        <option key={job.id} value={job.title}>{job.title} — {job.location}</option>
                      ))}
                      <option value="General Application">General Application</option>
                    </select>
                    <div className="relative">
                      <label className="flex flex-col items-center justify-center w-full py-6 sm:py-8 border-2 border-dashed border-light-gray rounded-xl cursor-pointer hover:border-deep-blue transition-colors bg-off-white/50">
                        <svg className="w-8 h-8 text-charcoal-light mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <span className="text-sm font-medium text-charcoal">Upload Resume / CV</span>
                        <span className="text-xs text-charcoal-light mt-1">PDF, DOC, DOCX (max 5MB)</span>
                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" suppressHydrationWarning />
                      </label>
                    </div>
                    <textarea rows={3} className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 border border-light-gray rounded-xl text-sm focus:outline-none focus:border-deep-blue resize-none" placeholder="Cover letter or additional notes (optional)" suppressHydrationWarning />
                    <button type="submit" className="w-full py-3 sm:py-3.5 bg-deep-blue text-white font-bold rounded-xl hover:bg-deep-blue-dark transition-colors text-sm sm:text-base">
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#0a1628] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
              Don&apos;t See the Right Role?
            </h2>
            <p className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent. Send us your resume and we&apos;ll reach out when a matching position opens up.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#apply"
                className="px-8 py-3.5 bg-white text-deep-blue font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Send Your Resume
              </a>
              <Link
                href="/"
                className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
