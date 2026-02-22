import Navbar from "@/components/Navbar";
import HeroSequence from "@/components/HeroSequence";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FooterCTA from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <main className="bg-[var(--color-brand-cream)] min-h-screen font-sans selection:bg-[var(--color-brand-gold)] selection:text-[var(--color-brand-blue)]">
      <Navbar />

      {/* 
        The HeroSequence handles the frame-by-frame scroll of the Lemon. 
        It naturally takes up a large scroll distance.
      */}
      <HeroSequence />

      {/* Subsequent Sections stack naturally below */}
      <div className="relative z-10 bg-[var(--color-brand-cream)] rounded-t-[3rem] -mt-10 overflow-hidden shadow-2xl">
        <About />
        <Services />
        <Testimonials />
        <BlogPreview />
      </div>

      <FooterCTA />
    </main>
  );
}
