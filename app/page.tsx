import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import Explosion from "@/components/Explosion";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <Explosion />
    </>
  );
}
