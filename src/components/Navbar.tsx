"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isBlueSection, setIsBlueSection] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            let isBlue = true; // Default to blue for HeroSequence
            const checkPoint = 100;
            const aboutSection = document.getElementById('about');
            
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                // Check if we have scrolled down to the 'about' section
                if (rect.top <= checkPoint + 50) {
                    // We are in the lower sections, default to cream
                    isBlue = false;
                    const sections = document.querySelectorAll("section");
                    sections.forEach(section => {
                        const secRect = section.getBoundingClientRect();
                        if (secRect.top <= checkPoint && secRect.bottom >= checkPoint) {
                            if (section.className.includes('bg-[var(--color-brand-blue)]')) {
                                isBlue = true;
                            }
                        }
                    });
                }
            }
            setIsBlueSection(isBlue);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // init
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navBg = isBlueSection ? "bg-[var(--color-brand-blue)]" : "bg-[var(--color-brand-cream)]";
    const textBase = isBlueSection ? "text-[var(--color-brand-cream)]" : "text-[var(--color-brand-blue)]";
    const textHover = isBlueSection ? "hover:text-[var(--color-brand-gold)]" : "hover:text-[var(--color-brand-green)]";
    const logoFilter = "drop-shadow-sm"; // Garder la couleur jaune/citronnée
    const btnBg = isBlueSection 
        ? "bg-[var(--color-brand-cream)] text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-gold)]" 
        : "bg-[var(--color-brand-blue)] text-[var(--color-brand-cream)] hover:bg-[var(--color-brand-green)]";
    const borderColor = isBlueSection ? "border-[var(--color-brand-cream)]/20" : "border-transparent";

    return (
        <nav className={`fixed w-full z-50 top-0 transition-colors duration-500 ${navBg} shadow-xl border-b ${borderColor} rounded-b-[2.5rem]`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    <Link href="/" className="flex-shrink-0 flex items-center cursor-pointer gap-3">
                        <img src="/logo.png" alt="Logo AzulKitchen" className={`h-10 w-auto object-contain transition-all duration-500 ${logoFilter}`} />
                        <span className={`font-[family-name:var(--font-seasons)] font-bold text-2xl tracking-tighter transition-colors duration-500 ${textBase}`}>
                            AzulKitchen
                        </span>
                    </Link>

                    <div className="hidden md:ml-10 md:flex md:space-x-8 items-center">
                        <a href="/#about" className={`font-medium transition-colors duration-500 ${textBase} ${textHover}`}>À Propos</a>
                        <a href="/#services" className={`font-medium transition-colors duration-500 ${textBase} ${textHover}`}>Services</a>
                        <a href="/#testimonials" className={`font-medium transition-colors duration-500 ${textBase} ${textHover}`}>Avis</a>
                        <Link href="/blog" className={`font-medium transition-colors duration-500 ${textBase} ${textHover}`}>Articles</Link>
                        <Link href="/contact" className={`px-6 py-2 rounded-full font-semibold transition-all duration-500 shadow-lg inline-block text-center ${btnBg}`}>
                            Réserver mon diagnostic
                        </Link>
                    </div>

                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-500 focus:outline-none ${textBase}`}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`md:hidden ${navBg} border-t ${borderColor} transition-colors duration-500 pb-4 shadow-lg`}
                >
                    <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3 text-center">
                        <a href="/#about" className={`block px-3 py-2 text-lg font-medium transition-colors duration-500 ${textBase}`}>À Propos</a>
                        <a href="/#services" className={`block px-3 py-2 text-lg font-medium transition-colors duration-500 ${textBase}`}>Services</a>
                        <a href="/#testimonials" className={`block px-3 py-2 text-lg font-medium transition-colors duration-500 ${textBase}`}>Avis</a>
                        <Link href="/blog" className={`block px-3 py-2 text-lg font-medium transition-colors duration-500 ${textBase}`}>Articles</Link>
                        <Link href="/contact" className={`mt-4 w-full block px-6 py-3 rounded-full font-semibold shadow-md transition-colors duration-500 inline-block text-center ${btnBg}`}>
                            Réserver mon diagnostic
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
