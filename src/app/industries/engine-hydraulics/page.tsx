"use client";
import IndustrySubPage from "@/components/IndustrySubPage";

export default function EngineHydraulicsPage() {
  return (
    <IndustrySubPage
      title="Engine & Hydraulics"
      subtitle="Industry Segment"
      description="World leader in manufacturing critical metal components, system integration of engines and hydraulics."
      heroImage="/images/engine-hydraulics.png"
      featureImage="/images/engine-hydraulics.png"
      featureImageAlt="Precision hydraulic valve system with multiple manifold connections"
      intro="Metalicone is a world leader in manufacturing critical metal components and providing system integration expertise for engines and hydraulic systems. From jet engine turbine blades to complete Hydraulic Power Units, our precision manufacturing delivers the reliability that mission-critical applications demand."
      items={[
        { title: "Jet & Turbine Engines", description: "Precision components for jet engines and gas turbines — blades, vanes, casings, nozzle guide vanes, and critical rotating parts manufactured to the tightest aerospace tolerances." },
        { title: "Hydraulic Pumps & Motors", description: "High-precision pump and motor components for industrial, mobile, and aerospace hydraulic systems. Gear pumps, piston pumps, and vane motor assemblies." },
        { title: "Hydraulic Cylinders & Valves", description: "Precision-machined cylinders, valve bodies, spools, and sleeves for demanding hydraulic applications across industrial and defense sectors." },
        { title: "Hydraulic Power Units (HPUs)", description: "Complete HPU manufacturing including reservoirs, manifold blocks, integrated valve assemblies, and full system testing and commissioning." },
      ]}
    />
  );
}
