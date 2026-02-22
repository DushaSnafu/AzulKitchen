"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
    {
        title: "5 Mythes sur le Jeûne Intermittent",
        category: "Science & Nutrition",
        readTime: "4 min red",
        image: "bg-[var(--color-brand-blue)]/5"
    },
    {
        title: "L'importance du sommeil dans la perte de masse grasse",
        category: "Mode de Vie",
        readTime: "6 min read",
        image: "bg-[var(--color-brand-green)]/10"
    },
    {
        title: "Recette : Bowl énergétique post-entraînement",
        category: "Recettes",
        readTime: "2 min read",
        image: "bg-[var(--color-brand-gold)]/10"
    }
];

export default function BlogPreview() {
    return (
        <section id="blog" className="py-24 bg-[var(--color-brand-cream)] text-[var(--color-brand-blue)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4"
                        >
                            Élevez votre quotient nutritionnel
                        </motion.h2>
                        <p className="text-lg opacity-80">
                            Astuces, décryptages scientifiques et recettes pour faire les meilleurs choix au quotidien.
                        </p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 font-bold text-[var(--color-brand-green)] hover:text-[var(--color-brand-blue)] transition mt-4 md:mt-0">
                        Voir tous les articles <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group cursor-pointer"
                        >
                            <div className={`w-full aspect-video rounded-3xl mb-6 relative overflow-hidden ${post.image}`}>
                                {/* Image placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-blue)]/40 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider opacity-70 mb-3">
                                <span className="text-[var(--color-brand-green)]">{post.category}</span>
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                            </div>

                            <h3 className="text-2xl font-bold font-[family-name:var(--font-seasons)] leading-tight group-hover:text-[var(--color-brand-green)] transition-colors">
                                {post.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <button className="md:hidden w-full flex justify-center items-center gap-2 font-bold text-[var(--color-brand-cream)] bg-[var(--color-brand-blue)] py-4 rounded-xl mt-12">
                    Voir tous les articles <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
