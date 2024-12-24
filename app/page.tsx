import Image from "next/image";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Explosion from "@/components/Explosion";
import Navbar from "@/components/Navbar";
import ScrollSection from "@/components/ScrollSection";
import CardGridSection from "@/components/CardGridSection";
import MarqueeCardSection from "@/components/MarqueeCardSection";
import MarqueeSlider from "@/components/MarqueeSlider";

import Pricing from "@/components/Pricing2";
import FAQs from "@/components/FAQs";
import SpotlightHero from "@/components/SpotlightHero";
import Footer from "@/components/Footer";
import CompareComp from "@/components/CompareComp";
import CardSample from "@/components/CardSample";
import Dashboard from "@/components/Dashboard";


export default function Home() {
  return (
    <>


      <Navbar />
      <SpotlightHero />
      {/* <ScrollSection/> */}
      <CompareComp />
      <Dashboard/>
      {/* <CardSample /> */}
      {/* <CardGridSection /> */}
      {/* <MarqueeSlider /> */}
      <Pricing />
      <MarqueeCardSection />
      <FAQs />
      <Footer />
    </>
  );
}
