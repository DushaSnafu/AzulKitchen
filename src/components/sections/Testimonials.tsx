"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sophie M.",
        role: "Entrepreneure",
        content: "Une révélation. L'approche d'Anti-Gravity déconstruit tous les mythes de la diététique classique. J'ai retrouvé de l'énergie pour mes journées de 12h sans jamais avoir l'impression d'être au régime.",
        rating: 5
    },
    {
        name: "Marc T.",
        role: "Triathlète Amateur",
        content: "Mes chronos ont baissé de 15% en 3 mois. La stratégie de nutrition sportive élaborée autour de mes entraînements a fait la différence. Indispensable.",
        rating: 5
    },
    {
        name: "Élise V.",
        role: "Jeune Maman",
        content: "Après des années d'effet yoyo, j'ai enfin trouvé un équilibre. Le plan est adapté à ma vie de famille, on mange les mêmes repas, ajustés pour mes besoins. Merci pour cette sérénité retrouvée.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-[#FAF7EF] text-[var(--color-brand-blue)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6"
                    >
                        Leurs Résultats. Votre Futur.
                    </motion.h2>
                    <div className="w-24 h-1 bg-[var(--color-brand-gold)] mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
                        >
                            <Quote className="absolute top-6 right-8 text-[var(--color-brand-blue)]/10 w-12 h-12" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[var(--color-brand-gold)] text-[var(--color-brand-gold)]" />
                                ))}
                            </div>
                            <p className="text-lg italic opacity-90 mb-8 z-10 relative">"{testimonial.content}"</p>
                            <div>
                                <h4 className="font-bold text-xl font-[family-name:var(--font-seasons)]">{testimonial.name}</h4>
                                <p className="text-sm opacity-60 uppercase tracking-widest mt-1">{testimonial.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
