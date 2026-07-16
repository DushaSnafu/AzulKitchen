"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    { name: "Sophie M.", role: "Entrepreneure", content: "J’ai retrouvé de l’énergie pour mes journées intenses sans jamais avoir l’impression d’être au régime." },
    { name: "Marc T.", role: "Triathlète amateur", content: "La stratégie construite autour de mes entraînements a changé ma récupération et ma régularité." },
    { name: "Élise V.", role: "Jeune maman", content: "Le plan s’adapte enfin à ma vie de famille. Même repas, bons ajustements, et beaucoup plus de sérénité." },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="scroll-mt-24 bg-[var(--color-brand-gold)] py-24 text-[var(--color-brand-blue-dark)] sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
                    <div>
                        <div className="flex gap-1" aria-label="5 étoiles sur 5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
                        <h2 className="mt-6 text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[0.98]">Des progrès qui se vivent.</h2>
                        <p className="mt-6 max-w-sm text-lg leading-relaxed text-[var(--color-brand-blue-dark)]/70">Des changements mesurables, mais surtout un quotidien plus simple.</p>
                    </div>

                    <div className="grid gap-px bg-[var(--color-brand-blue-dark)]/18 md:grid-cols-2">
                        {testimonials.map((testimonial, index) => (
                            <motion.figure key={testimonial.name} initial={{ opacity: 1, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.08, duration: 0.5 }} className={`flex min-h-72 flex-col justify-between bg-[var(--color-brand-gold)] p-7 sm:p-9 ${index === 0 ? "md:col-span-2" : ""}`}>
                                <Quote className="h-8 w-8 opacity-25" />
                                <blockquote className={`${index === 0 ? "max-w-4xl text-3xl sm:text-4xl" : "text-2xl"} mt-8 font-[family-name:var(--font-display)] font-semibold leading-tight tracking-[-0.03em]`}>« {testimonial.content} »</blockquote>
                                <figcaption className="mt-8 text-sm"><strong>{testimonial.name}</strong><span className="ml-2 opacity-62">{testimonial.role}</span></figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
