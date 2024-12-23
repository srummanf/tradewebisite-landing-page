import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Explosion from "@/components/Explosion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollSection from "@/components/ScrollSection";
import CardGridSection from "@/components/CardGridSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <ScrollSection/>
      <CardGridSection/>
    </>
  );
}
