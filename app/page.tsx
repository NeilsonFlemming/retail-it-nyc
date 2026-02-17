import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import Contact from "@/components/Contact";
import ScrollAnimations from "@/components/ScrollAnimations";
import { generateStructuredData } from "@/lib/structured-data";

export default function Home() {
  const jsonLd = generateStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Differentiators />
      <Contact />
      <ScrollAnimations />
    </>
  );
}
