import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { Pricing } from "@/components/sections/Pricing";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <BentoFeatures />
        <Pricing />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
