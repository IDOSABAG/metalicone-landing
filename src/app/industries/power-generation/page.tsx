"use client";
import IndustrySubPage from "@/components/IndustrySubPage";

export default function PowerGenerationPage() {
  return (
    <IndustrySubPage
      title="Power Generation"
      subtitle="Industry Segment"
      description="Powering tomorrow with intelligent manufacturing and engineering — delivering solutions from standalone parts to turnkey integrated systems."
      intro="Metalicone provides precision-engineered components and complete turnkey solutions for the global power generation industry, covering thermal, renewable, hydraulic, and nuclear sectors."
      items={[
        { title: "Thermal (Conventional) Power", description: "High-precision components for gas and steam turbines, boilers, and conventional power plant equipment." },
        { title: "Hydropower & Wind Power", description: "Renewable energy components including turbine runners, generators, and structural assemblies for hydropower and wind installations." },
        { title: "Hydraulic Turbines", description: "Precision-machined hydraulic turbine components with tight tolerances for maximum efficiency." },
        { title: "Nuclear Power — SMRs", description: "Components for Small Modular Reactors (SMRs), meeting the highest nuclear safety and quality standards." },
        { title: "Turnkey Systems", description: "Complete integrated systems from standalone parts to full turnkey power generation solutions." },
      ]}
    />
  );
}
