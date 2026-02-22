"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function FooterCTA() {
    return (
        <footer className="bg-[var(--color-brand-blue)] text-[var(--color-brand-cream)] pt-24 pb-12 rounded-t-[3rem] -mt-8 relative z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 border-b border-[var(--color-brand-cream)]/10 pb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] leading-tight mb-8">
                            Prêt(e) à redéfinir votre équilibre ?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-brand-yellow)] transition-all shadow-[0_0_40px_rgba(251,208,95,0.3)]">
                                Réserver mon diagnostic offert
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[var(--color-brand-cream)]/5 p-8 rounded-3xl border border-[var(--color-brand-cream)]/10 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-[var(--color-brand-green)]/20 rounded-xl text-[var(--color-brand-green)]">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-seasons)]">Le Guide Gratuit</h3>
                        </div>
                        <p className="opacity-80 mb-6">
                            "7 jours pour relancer son métabolisme sans frustration". Téléchargez mon guide de démarrage rapide et recevez mes conseils bi-mensuels.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Votre email professionnel ou personnel"
                                className="flex-1 bg-transparent border border-[var(--color-brand-cream)]/20 rounded-xl px-4 py-3 placeholder:text-[var(--color-brand-cream)]/40 focus:outline-none focus:border-[var(--color-brand-gold)] transition-colors"
                            />
                            <button className="bg-[var(--color-brand-green)] text-[var(--color-brand-cream)] px-6 py-3 rounded-xl font-bold hover:bg-[var(--color-brand-green)]/80 transition flex items-center justify-center gap-2 group">
                                Obtenir <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center opacity-60 text-sm">
                    <div className="mb-4 md:mb-0">
                        <span className="font-[family-name:var(--font-seasons)] font-bold text-xl tracking-tighter mr-2">
                            Anti-Gravity
                        </span>
                        &copy; 2026. Tous droits réservés.
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-[var(--color-brand-gold)] transition">Mentions légales</a>
                        <a href="#" className="hover:text-[var(--color-brand-gold)] transition">Politique de confidentialité</a>
                        <a href="#" className="hover:text-[var(--color-brand-gold)] transition">CGV</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
