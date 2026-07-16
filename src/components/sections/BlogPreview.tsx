"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { posts } from "@/data/blog";

export default function BlogPreview() {
    return (
        <section id="blog" className="bg-[var(--color-brand-cream)] py-24 text-[var(--color-brand-blue-dark)] sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                <div className="flex flex-col gap-7 border-b border-[var(--color-brand-blue-dark)]/18 pb-10 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-4 font-bold text-[var(--color-brand-green)]">À lire, à tester, à garder</p>
                        <h2 className="max-w-[14ch] text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[0.98]">Le journal d’une nutrition plus libre.</h2>
                    </div>
                    <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 font-bold transition-colors hover:text-[var(--color-brand-green)]">Tous les articles <ArrowRight className="h-5 w-5" /></Link>
                </div>

                <div className="grid gap-8 pt-10 lg:grid-cols-2">
                    {posts.slice(0, 3).map((post, index) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug} className={`group block ${index === 0 ? "lg:row-span-2" : ""}`}>
                            <article className={`${index === 0 ? "lg:grid-rows-[1fr_auto]" : "sm:grid sm:grid-cols-[0.8fr_1.2fr] sm:gap-6"} h-full`}>
                                <div className={`overflow-hidden bg-[var(--color-brand-blue)]/8 ${index === 0 ? "aspect-[4/3] lg:aspect-auto" : "aspect-[4/3] sm:aspect-square"}`}>
                                    <img src={post.image} alt={post.title} className="h-full w-full object-cover outline outline-1 -outline-offset-1 outline-black/10 transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.035]" />
                                </div>
                                <div className={`${index === 0 ? "pt-6" : "pt-5 sm:pt-2"}`}>
                                    <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--color-brand-blue-dark)]/62"><span className="text-[var(--color-brand-green)]">{post.category}</span><span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span></div>
                                    <h3 className={`${index === 0 ? "mt-3 text-3xl sm:text-4xl" : "mt-3 text-2xl"} font-bold leading-tight transition-colors group-hover:text-[var(--color-brand-green)]`}>{post.title}</h3>
                                    {index === 0 && <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-brand-blue-dark)]/70">{post.excerpt}</p>}
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
