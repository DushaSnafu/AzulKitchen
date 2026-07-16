"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const plans = [
    { name: "Le déclic", price: "90 €", description: "Un bilan ciblé pour repartir avec une direction claire.", features: ["Bilan complet de 60 min", "Plan d’action personnalisé", "Compte-rendu pratique"] },
    { name: "L’équilibre", price: "350 €", period: "/ mois", description: "Le suivi complet pour transformer vos habitudes en profondeur.", features: ["2 consultations mensuelles", "Ajustements en continu", "Recettes & listes de courses", "Support entre les séances"], recommended: true },
    { name: "La performance", price: "Sur devis", description: "Une stratégie périodisée pour vos entraînements et compétitions.", features: ["Plan nutritionnel sportif", "Protocoles de supplémentation", "Suivi des performances"] },
];

export default function Services() {
    return (
        <section id="services" className="scroll-mt-24 bg-[var(--color-brand-blue-dark)] py-24 text-white sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="grid gap-8 border-b border-white/16 pb-12 lg:grid-cols-[1fr_0.75fr] lg:items-end">
                    <h2 className="max-w-[12ch] text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[0.98]">Un accompagnement à votre mesure.</h2>
                    <p className="max-w-xl text-lg leading-relaxed text-white/70 lg:justify-self-end">Choisissez votre point de départ. Chaque formule reste adaptable après un premier échange.</p>
                </div>

                <div className="divide-y divide-white/16">
                    {plans.map((plan, index) => (
                        <motion.article key={plan.name} initial={{ opacity: 1, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08, duration: 0.55 }} className={`group relative grid gap-7 py-10 md:grid-cols-[0.8fr_1.15fr_0.75fr] md:items-center ${plan.recommended ? "text-[var(--color-brand-yellow)]" : ""}`}>
                            <div>
                                {plan.recommended && <span className="mb-3 inline-block rounded-full bg-[var(--color-brand-gold)] px-3 py-1 text-xs font-bold text-[var(--color-brand-blue-dark)]">Le plus choisi</span>}
                                <h3 className="text-3xl font-bold">{plan.name}</h3>
                                <p className="mt-3 max-w-sm text-base leading-relaxed text-white/64">{plan.description}</p>
                            </div>
                            <ul className="grid gap-3 sm:grid-cols-2">
                                {plan.features.map((feature) => <li key={feature} className="flex items-start gap-2.5 text-sm font-semibold text-white/84"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-gold)]" />{feature}</li>)}
                            </ul>
                            <div className="flex items-center justify-between gap-5 md:justify-end">
                                <p className="font-[family-name:var(--font-display)] text-2xl font-bold tabular-nums">{plan.price}<span className="text-sm font-normal text-white/56">{plan.period}</span></p>
                                <Link href="/contact" aria-label={`Choisir ${plan.name}`} className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] group-hover:rotate-6 active:scale-[0.96] ${plan.recommended ? "bg-[var(--color-brand-gold)] text-[var(--color-brand-blue-dark)]" : "bg-white/10 text-white hover:bg-white hover:text-[var(--color-brand-blue-dark)]"}`}><ArrowUpRight className="h-5 w-5" /></Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
