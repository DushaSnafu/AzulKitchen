"use client";

import { motion } from "framer-motion";
import { Activity, Heart, Sparkles } from "lucide-react";

const principles = [
    { icon: Activity, title: "Comprendre", text: "Vos habitudes, votre métabolisme et vos objectifs — sans jugement." },
    { icon: Sparkles, title: "Construire", text: "Une stratégie simple, concrète et compatible avec votre vraie vie." },
    { icon: Heart, title: "Faire durer", text: "Des repères que vous gardez, bien après l’accompagnement." },
];

export default function About() {
    return (
        <section id="about" className="relative scroll-mt-24 bg-[var(--color-brand-cream)] py-24 text-[var(--color-brand-blue-dark)] sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-24">
                    <motion.div initial={{ opacity: 1, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }} className="relative mx-auto w-full max-w-lg lg:max-w-none">
                        <div className="overflow-hidden bg-[var(--color-brand-blue)] shadow-[14px_14px_0_var(--color-brand-gold)]">
                            <img src="/about_portrait_1771764831216.png" alt="Votre nutritionniste AzulKitchen dans son cabinet" className="aspect-[4/5] w-full object-cover outline outline-1 -outline-offset-1 outline-black/10" />
                        </div>
                        <div className="absolute -bottom-7 -left-3 max-w-52 bg-[var(--color-brand-blue-dark)] p-5 text-white sm:-left-7">
                            <strong className="block font-[family-name:var(--font-display)] text-2xl">100% sur mesure</strong>
                            <span className="mt-1 block text-sm leading-snug text-white/72">Pas de menu générique. Pas de liste d’interdits.</span>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 1, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }}>
                        <p className="mb-5 text-base font-bold text-[var(--color-brand-green)]">La méthode AzulKitchen</p>
                        <h2 className="max-w-[13ch] text-[clamp(2.8rem,5vw,5.2rem)] font-bold leading-[0.98]">
                            Mieux manger ne devrait pas prendre toute la place.
                        </h2>
                        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--color-brand-blue-dark)]/76 sm:text-xl">
                            Ici, la nutrition s’adapte à votre quotidien — et non l’inverse. Nous croisons données scientifiques, écoute et plaisir pour créer un équilibre que vous aurez réellement envie de garder.
                        </p>

                        <div className="mt-12 divide-y divide-[var(--color-brand-blue-dark)]/15 border-y border-[var(--color-brand-blue-dark)]/15">
                            {principles.map(({ icon: Icon, title, text }) => (
                                <div key={title} className="grid gap-3 py-5 sm:grid-cols-[48px_130px_1fr] sm:items-center">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-blue-dark)]"><Icon className="h-5 w-5" /></span>
                                    <h3 className="text-xl font-bold tracking-[-0.025em]">{title}</h3>
                                    <p className="text-base leading-relaxed text-[var(--color-brand-blue-dark)]/70">{text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
