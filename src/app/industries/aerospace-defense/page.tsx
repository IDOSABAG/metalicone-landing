"use client";
import IndustrySubPage from "@/components/IndustrySubPage";

export default function AerospaceDefensePage() {
  return (
    <IndustrySubPage
      title="Aerospace & Defense"
      subtitle="Industry Segment"
      description="Providing fully integrated manufacturing metal-based solutions with strategic focus on defense and aerospace as a partner of tier 1 global players."
      intro="With decades of proven experience, Metalicone delivers mission-critical components and complex assemblies for the world's leading aerospace and defense OEMs. Our platinum-grade quality certifications ensure compliance with the strictest industry standards."
      items={[
        { title: "Commercial Airplanes", description: "High-precision structural and engine components for commercial aviation platforms." },
        { title: "Military Airplanes", description: "Mission-critical components for fighter jets and military transport aircraft." },
        { title: "Space Systems", description: "Precision-engineered components for satellite, launch vehicle, and space exploration programs." },
        { title: "UAVs", description: "Advanced unmanned aerial vehicle components and assemblies." },
        { title: "Radars & Sensors", description: "Complex radar housings, waveguides, and sensor components for defense systems." },
        { title: "Naval Platforms", description: "Marine-grade components for naval vessels and submarine systems." },
        { title: "Complex Weapon Systems", description: "Critical parts and mechanical assemblies for advanced weapon platforms." },
      ]}
    />
  );
}
