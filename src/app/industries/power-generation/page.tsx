"use client";
import IndustrySubPage from "@/components/IndustrySubPage";

export default function PowerGenerationPage() {
  return (
    <IndustrySubPage
      title="Power Generation"
      subtitle="Industry Segment"
      description="Powering tomorrow with intelligent manufacturing and engineering — delivering solutions from standalone parts to turnkey integrated systems."
      heroImage="/images/power-generation.png"
      featureImage="/images/power-generation.png"
      featureImageAlt="Massive turbine rotor for power generation"
      intro="Metalicone provides precision-engineered components and complete turnkey solutions for the global power generation industry. From conventional thermal plants to next-generation Small Modular Reactors, our manufacturing capabilities support the full spectrum of energy production technologies."
      items={[
        { title: "Thermal (Conventional) Power", description: "High-precision components for gas and steam turbines, boilers, and conventional power plant equipment. Tight-tolerance machining for turbine blades, casings, and rotors." },
        { title: "Hydropower & Wind Power", description: "Renewable energy components including turbine runners, generators, and structural assemblies for hydropower and wind installations. Supporting the global transition to clean energy." },
        { title: "Hydraulic Turbines", description: "Precision-machined hydraulic turbine components with tight tolerances for maximum efficiency. Complete runner assemblies and guide vane mechanisms." },
        { title: "Nuclear Power — SMRs", description: "Components for Small Modular Reactors (SMRs) meeting the highest nuclear safety and quality standards. Specialized manufacturing for next-generation nuclear platforms." },
        { title: "Turnkey Integrated Systems", description: "Complete integrated systems from standalone parts to full turnkey power generation solutions. End-to-end project management and quality assurance." },
      ]}
    />
  );
}
