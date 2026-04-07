"use client";

import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <main className="bg-[#FAF7EF] min-h-screen font-sans">
            <Navbar />

            <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] text-[var(--color-brand-blue)] mb-6">
                            Réservez votre diagnostic
                        </h1>
                        <p className="text-lg text-[var(--color-brand-blue)] opacity-80 mb-10 max-w-md text-balance">
                            Le premier pas vers une santé optimisée. Remplissez ce formulaire d'approche, ou réserver directement un créneau (module Calendly à venir).
                        </p>

                        <div className="space-y-6 text-[var(--color-brand-blue)]">
                            <div>
                                <h4 className="font-bold font-[family-name:var(--font-seasons)] text-xl">Email</h4>
                                <p className="opacity-70">contact@architectenutrition.com</p>
                            </div>
                            <div>
                                <h4 className="font-bold font-[family-name:var(--font-seasons)] text-xl">Lieu</h4>
                                <p className="opacity-70">Consultations en visio exclusives.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                    >
                        <form className="space-y-6 text-[var(--color-brand-blue)]">
                            <div>
                                <label className="block text-sm font-bold mb-2">Prénom & Nom</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#FAF7EF] border-transparent focus:border-[var(--color-brand-gold)] focus:ring-0 rounded-xl px-4 py-3 outline-none transition-all"
                                    placeholder="Ex: Sophie Martin"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-[#FAF7EF] border-transparent focus:border-[var(--color-brand-gold)] focus:ring-0 rounded-xl px-4 py-3 outline-none transition-all"
                                    placeholder="votre.email@exemple.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2">Votre objectif principal</label>
                                <select className="w-full bg-[#FAF7EF] border-transparent focus:border-[var(--color-brand-gold)] focus:ring-0 rounded-xl px-4 py-3 outline-none transition-all">
                                    <option>Perte de masse grasse</option>
                                    <option>Optimisation santé & énergie</option>
                                    <option>Performance sportive</option>
                                    <option>Autre</option>
                                </select>
                            </div>
                            <div className="pt-4">
                                <button type="button" className="w-full bg-[var(--color-brand-blue)] text-white font-bold text-lg py-4 rounded-xl hover:bg-[var(--color-brand-blue)]/90 transition-colors shadow-lg">
                                    Envoyer ma demande
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 pt-8 border-t border-[var(--color-brand-blue)]/10 text-center">
                            <p className="text-sm opacity-60 italic">Le module de réservation Calendly sera intégré ici lors de la prochaine mise à jour.</p>
                        </div>
                    </motion.div>

                </div>
            </section>

            <FooterCTA />
        </main>
    );
}
