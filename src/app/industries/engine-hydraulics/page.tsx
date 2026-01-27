"use client";
import IndustrySubPage from "@/components/IndustrySubPage";

export default function EngineHydraulicsPage() {
  return (
    <IndustrySubPage
      title="Engine & Hydraulics"
      subtitle="Industry Segment"
      description="World leader in manufacturing critical metal components, system integration of engines and hydraulics."
      intro="Metalicone is a world leader in manufacturing critical metal components and providing system integration expertise for engines and hydraulic systems across multiple sectors."
      items={[
        { title: "Jet & Turbine Engines", description: "Precision components for jet engines and gas turbines — blades, vanes, casings, and critical rotating parts." },
        { title: "Hydraulic Pumps & Motors", description: "High-precision pump and motor components for industrial, mobile, and aerospace hydraulic systems." },
        { title: "Hydraulic Cylinders & Valves", description: "Precision-machined cylinders, valve bodies, and spools for demanding hydraulic applications." },
        { title: "Hydraulic Power Units (HPUs)", description: "Complete HPU manufacturing including reservoirs, manifolds, and integrated assemblies." },
      ]}
    />
  );
}
