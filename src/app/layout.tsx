import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Metalicone Group | The Industrial Home",
    template: "%s | Metalicone Group",
  },
  description:
    "Global industrial leader specializing in precision-engineered components and assembly solutions for semiconductors, commercial printing, aerospace, power generation, transportation, and engine & hydraulics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
