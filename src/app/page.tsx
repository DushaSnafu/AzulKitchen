import Navbar from "@/components/Navbar";
import HeroSequence from "@/components/HeroSequence";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import FooterCTA from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-cream)] font-sans">
      <Navbar />

      <HeroSequence />

      <div className="relative z-10 -mt-px overflow-hidden bg-[var(--color-brand-cream)]">
        <About />
        <Services />
        <Testimonials />
        <BlogPreview />
      </div>

      <FooterCTA />
    </main>
  );
}
