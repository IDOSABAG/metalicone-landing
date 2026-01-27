"use client";
import IndustrySubPage from "@/components/IndustrySubPage";

export default function AerospaceDefensePage() {
  return (
    <IndustrySubPage
      title="Aerospace & Defense"
      subtitle="Industry Segment"
      description="Providing fully integrated manufacturing metal-based solutions with strategic focus on defense and aerospace as a partner of Tier 1 global players."
      heroImage="/images/aerospace-defense.png"
      featureImage="/images/aerospace-defense.png"
      featureImageAlt="Complex titanium aerospace component with precision machining"
      intro="With decades of proven experience and platinum-grade quality certifications, Metalicone delivers mission-critical components and complex assemblies for the world's leading Tier 1 aerospace and defense OEMs. Our expertise spans from precision-machined titanium structures to fully integrated weapon system assemblies, ensuring compliance with the strictest industry standards."
      items={[
        { title: "Commercial Airplanes", description: "High-precision structural and engine components for commercial aviation platforms — landing gear, fuselage frames, and turbine parts manufactured to AS9100 standards." },
        { title: "Military Airplanes", description: "Mission-critical components for fighter jets and military transport aircraft. Complex assemblies for avionics housings, structural elements, and propulsion systems." },
        { title: "Space Systems", description: "Precision-engineered components for satellite, launch vehicle, and space exploration programs. Ultra-tight tolerances for vacuum and extreme-environment applications." },
        { title: "UAVs", description: "Advanced unmanned aerial vehicle components and assemblies — airframes, propulsion mounts, and sensor housings for next-generation UAV platforms." },
        { title: "Radars & Sensors", description: "Complex radar housings, waveguides, and sensor components for defense electronics and surveillance systems." },
        { title: "Naval Platforms", description: "Marine-grade components for naval vessels and submarine systems, including propulsion, structural, and weapons-related assemblies." },
        { title: "Complex Weapon Systems", description: "Critical parts and mechanical assemblies for advanced weapon platforms — designed and manufactured for extreme reliability under operational conditions." },
      ]}
    />
  );
}
