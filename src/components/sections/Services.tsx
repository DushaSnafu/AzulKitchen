"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Consultation Express",
        price: "90€",
        description: "Le point de départ idéal pour repenser ses habitudes.",
        features: [
            "Bilan nutritionnel complet (1h)",
            "Analyse de la composition corporelle",
            "Planification des repas de la semaine",
            "Support WhatsApp 7j/7"
        ],
        recommended: false
    },
    {
        name: "Le Programme Élite",
        price: "350€",
        period: "/mois",
        description: "Un accompagnement VIP pour une transformation totale.",
        features: [
            "2 consultations mensuelles (1h)",
            "Ajustements du plan en temps réel",
            "Liste de courses & recettes sur mesure",
            "Suivi quotidien via application dédiée",
            "Analyse des bilans sanguins"
        ],
        recommended: true
    },
    {
        name: "Performance Athlète",
        price: "Sur devis",
        description: "Pour les compétiteurs exigeant le meilleur fioul.",
        features: [
            "Nutrition périodisée selon l'entraînement",
            "Stratégie de rebond glucidique",
            "Protocoles de supplémentation",
            "Accompagnement le jour de la compétition"
        ],
        recommended: false
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-[var(--color-brand-blue)] text-[var(--color-brand-cream)] relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-[var(--color-brand-green)]/10 rounded-full blur-3xl mix-blend-screen" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-[var(--color-brand-gold)]/10 rounded-full blur-3xl mix-blend-screen" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-[var(--color-brand-gold)]"
                    >
                        Investissez en vous
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg opacity-90 text-balance"
                    >
                        Sélectionnez l'accompagnement qui correspond à vos ambitions. Pas de recettes miracles, uniquement des stratégies validées scientifiquement.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`relative bg-[var(--color-brand-cream)] text-[var(--color-brand-blue)] rounded-t-[100px] rounded-b-3xl pt-24 px-8 pb-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 ${plan.recommended ? "scale-105 border-4 border-[var(--color-brand-gold)]" : "scale-100 border border-[var(--color-brand-blue)]/10"
                                }`}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wide">
                                    Le plus demandé
                                </div>
                            )}
                            <h3 className="text-2xl font-[family-name:var(--font-seasons)] font-bold mb-2">{plan.name}</h3>
                            <p className="opacity-70 mb-6 text-sm h-10">{plan.description}</p>
                            <div className="mb-8">
                                <span className="text-4xl font-extrabold">{plan.price}</span>
                                {plan.period && <span className="opacity-70">{plan.period}</span>}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start">
                                        <Check className="w-5 h-5 text-[var(--color-brand-green)] shrink-0 mr-3" />
                                        <span className="text-sm opacity-90">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all shadow-md ${plan.recommended
                                    ? "bg-[var(--color-brand-blue)] text-[var(--color-brand-cream)] hover:bg-[var(--color-brand-blue)]/90"
                                    : "bg-[var(--color-brand-blue)]/5 text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)]/10"
                                }`}>
                                Sélectionner
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
