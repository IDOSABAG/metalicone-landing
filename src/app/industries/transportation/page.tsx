"use client";
import IndustrySubPage from "@/components/IndustrySubPage";

export default function TransportationPage() {
  return (
    <IndustrySubPage
      title="Transportation"
      subtitle="Industry Segment"
      description="Driving tomorrow's transportation with smarter manufacturing and engineering, from precision parts to fully integrated turnkey systems."
      intro="Metalicone delivers advanced manufacturing solutions for the transportation sector, combining precision engineering with scalable production to support the next generation of mobility platforms."
      items={[
        { title: "Thermal Power Systems", description: "Precision components for conventional transportation power systems including internal combustion and hybrid platforms." },
        { title: "Renewable & Low-Carbon Segments", description: "Components for electric, hydrogen, and other low-carbon transportation technologies." },
        { title: "Nuclear Power — SMRs", description: "Specialized parts for Small Modular Reactors supporting future marine and rail transportation." },
        { title: "Integrated Turnkey Systems", description: "Complete manufacturing from precision parts to fully integrated transportation assemblies." },
      ]}
    />
  );
}
