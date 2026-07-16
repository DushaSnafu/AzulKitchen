"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
    { href: "/#about", label: "L’approche" },
    { href: "/#services", label: "Accompagnements" },
    { href: "/#testimonials", label: "Résultats" },
    { href: "/blog", label: "Le journal" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav aria-label="Navigation principale" className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
            <div className={`mx-auto max-w-7xl transition-[background-color,box-shadow] duration-300 ${scrolled || isOpen ? "bg-[var(--color-brand-blue-dark)] shadow-[0_8px_24px_rgba(2,18,55,.18)]" : "bg-[var(--color-brand-blue-dark)]/35 backdrop-blur-md"}`}>
                <div className="flex h-18 items-center justify-between px-4 sm:px-6">
                    <Link href="/" className="flex min-h-11 items-center gap-2.5 text-white">
                        <img src="/logo.png" alt="" className="h-9 w-auto object-contain" />
                        <span className="font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.03em]">AzulKitchen</span>
                    </Link>

                    <div className="hidden items-center gap-7 lg:flex">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} className="inline-flex min-h-11 items-center text-[15px] font-semibold text-white/85 transition-colors hover:text-[var(--color-brand-gold)]">
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[var(--color-brand-gold)] px-5 py-2.5 font-bold text-[var(--color-brand-blue-dark)] transition-[transform,background-color] hover:bg-[var(--color-brand-yellow)] active:scale-[0.96]">
                            Prendre rendez-vous <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>

                    <button type="button" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} className="relative inline-flex h-11 w-11 items-center justify-center text-white lg:hidden">
                        <Menu className={`absolute h-6 w-6 transition-[opacity,transform,filter] ${isOpen ? "scale-25 opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0"}`} />
                        <X className={`absolute h-6 w-6 transition-[opacity,transform,filter] ${isOpen ? "scale-100 opacity-100 blur-0" : "scale-25 opacity-0 blur-[4px]"}`} />
                    </button>
                </div>

                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div id="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }} className="border-t border-white/10 px-4 pb-5 pt-3 lg:hidden">
                            {links.map((link) => (
                                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="flex min-h-12 items-center border-b border-white/10 text-lg font-semibold text-white">
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-brand-gold)] px-5 font-bold text-[var(--color-brand-blue-dark)] active:scale-[0.96]">
                                Prendre rendez-vous <ArrowUpRight className="h-4 w-4" />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
