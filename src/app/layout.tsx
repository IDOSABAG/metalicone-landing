import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Metalicone Group | The Industrial Home — Global Partner to Industry Leaders",
  description:
    "Metalicone Group is a global industrial leader specializing in precision-engineered components and assembly solutions for semiconductors, commercial printing, aerospace, power generation, transportation, and engine & hydraulics.",
  keywords: [
    "Metalicone",
    "precision manufacturing",
    "semiconductors",
    "CNC machining",
    "industrial components",
    "aerospace",
    "commercial printing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
