import Image from "next/image";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Explosion from "@/components/Explosion";
import Navbar from "@/components/Navbar";
import ScrollSection from "@/components/ScrollSection";
import CardGridSection from "@/components/CardGridSection";
import MarqueeCardSection from "@/components/MarqueeCardSection";
import MarqueeSlider from "@/components/MarqueeSlider";

import Pricing from "@/components/Pricing";
import FAQs from "@/components/FAQs";
import SpotlightHero from "@/components/SpotlightHero";


export default function Home() {
  return (
    <>
      <Navbar />
      <SpotlightHero/>
      <ScrollSection/>
      <CardGridSection/>
      <MarqueeSlider />
      <Pricing/>
      <MarqueeCardSection/>
      <FAQs/>
    </>
  );
}
