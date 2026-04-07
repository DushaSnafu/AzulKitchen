"use client";

import { motion } from "framer-motion";
import { Award, Leaf, HeartPulse } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-[var(--color-brand-cream)] text-[var(--color-brand-blue)] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-t-full bg-[var(--color-brand-blue)]/5 border-2 border-[var(--color-brand-gold)] overflow-hidden relative shadow-2xl">
                            <img
                                src="/about_portrait_1771764831216.png"
                                alt="L'Architecte Nutrition"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[var(--color-brand-yellow)] mix-blend-multiply opacity-60 blur-2xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
                            L'art de sculpter la santé
                        </h2>
                        <p className="text-lg mb-6 leading-relaxed opacity-90">
                            En tant que nutritionniste certifié, je ne crois pas aux régimes drastiques. Mon approche s'appuie sur la science de pointe et la psychologie pour vous offrir une transformation durable, sans jamais sacrifier le plaisir de vivre.
                        </p>

                        <div className="space-y-6 mt-10">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="p-3 bg-[var(--color-brand-gold)] rounded-full text-[var(--color-brand-blue)]">
                                        <Award className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold font-[family-name:var(--font-seasons)]">Expertise Diplômée</h4>
                                    <p className="mt-1 opacity-80">Certification d'État en diététique et nutrition sportive avancée.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="p-3 bg-[var(--color-brand-green)] rounded-full text-[var(--color-brand-cream)]">
                                        <Leaf className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold font-[family-name:var(--font-seasons)]">Philosophie Zéro Privation</h4>
                                    <p className="mt-1 opacity-80">Une alimentation bio-compatible qui respecte votre métabolisme unique.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="p-3 bg-[var(--color-brand-blue)] rounded-full text-[var(--color-brand-cream)]">
                                        <HeartPulse className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-xl font-semibold font-[family-name:var(--font-seasons)]">Focus Longévité</h4>
                                    <p className="mt-1 opacity-80">Optimisez votre énergie, votre digestion et vos performances cognitives.</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
