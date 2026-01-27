import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industries from "@/components/Industries";
import GlobalFootprint from "@/components/GlobalFootprint";
import Capabilities from "@/components/Capabilities";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Industries />
      <GlobalFootprint />
      <Capabilities />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
