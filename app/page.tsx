import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Properties from "@/components/sections/Properties";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Properties />
      <Contact />
    </main>
  );
}