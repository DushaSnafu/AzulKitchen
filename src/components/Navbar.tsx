"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[var(--color-brand-cream)]/90 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <span className="font-[family-name:var(--font-seasons)] font-bold text-2xl tracking-tighter text-[var(--color-brand-blue)]">
                            Anti-Gravity
                        </span>
                    </div>

                    <div className="hidden md:ml-10 md:flex md:space-x-8 items-center">
                        <a href="#about" className="text-[var(--color-brand-blue)] font-medium hover:text-[var(--color-brand-green)] transition">À Propos</a>
                        <a href="#services" className="text-[var(--color-brand-blue)] font-medium hover:text-[var(--color-brand-green)] transition">Services</a>
                        <a href="#testimonials" className="text-[var(--color-brand-blue)] font-medium hover:text-[var(--color-brand-green)] transition">Avis</a>
                        <a href="#blog" className="text-[var(--color-brand-blue)] font-medium hover:text-[var(--color-brand-green)] transition">Conseils</a>
                        <button className="bg-[var(--color-brand-blue)] text-[var(--color-brand-cream)] px-6 py-2 rounded-full font-semibold hover:bg-[var(--color-brand-green)] transition shadow-lg">
                            Réserver mon diagnostic
                        </button>
                    </div>

                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)]/5 focus:outline-none"
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
                    className="md:hidden bg-[var(--color-brand-cream)] border-t border-[var(--color-brand-blue)]/10"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        <a href="#about" className="block px-3 py-2 text-lg font-medium text-[var(--color-brand-blue)]">À Propos</a>
                        <a href="#services" className="block px-3 py-2 text-lg font-medium text-[var(--color-brand-blue)]">Services</a>
                        <a href="#testimonials" className="block px-3 py-2 text-lg font-medium text-[var(--color-brand-blue)]">Avis</a>
                        <a href="#blog" className="block px-3 py-2 text-lg font-medium text-[var(--color-brand-blue)]">Conseils</a>
                        <button className="mt-4 w-full bg-[var(--color-brand-blue)] text-[var(--color-brand-cream)] px-6 py-3 rounded-full font-semibold">
                            Réserver mon diagnostic
                        </button>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
