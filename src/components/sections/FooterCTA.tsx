"use client";

import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

export default function FooterCTA() {
    return (
        <footer className="bg-[var(--color-brand-blue-dark)] text-white">
            <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-28 lg:px-10">
                <div className="grid gap-12 border-b border-white/14 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                    <div>
                        <p className="mb-5 font-bold text-[var(--color-brand-gold)]">Votre prochain pas peut être simple.</p>
                        <h2 className="max-w-[12ch] text-[clamp(3rem,6vw,5.8rem)] font-bold leading-[0.94]">On construit votre équilibre ?</h2>
                        <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-brand-gold)] px-7 py-3.5 font-bold text-[var(--color-brand-blue-dark)] transition-[transform,background-color] hover:bg-[var(--color-brand-yellow)] active:scale-[0.96]">Réserver mon diagnostic <ArrowUpRight className="h-5 w-5" /></Link>
                    </div>

                    <div className="bg-white/7 p-6 sm:p-8">
                        <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-[var(--color-brand-gold)]" /><h3 className="text-2xl font-bold">Le déclic dans votre boîte mail</h3></div>
                        <p className="mt-4 max-w-lg leading-relaxed text-white/68">Recevez le guide « 7 jours pour relancer son métabolisme » et des conseils simples, deux fois par mois.</p>
                        <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <label htmlFor="footer-email" className="sr-only">Votre adresse e-mail</label>
                            <input id="footer-email" type="email" required placeholder="vous@exemple.fr" className="min-h-12 flex-1 bg-white px-4 text-[var(--color-brand-blue-dark)] placeholder:text-[var(--color-brand-blue-dark)]/55 focus:outline-none" />
                            <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--color-brand-green)] px-5 font-bold text-white transition-[transform,background-color] hover:bg-[var(--color-brand-green)]/85 active:scale-[0.96]">Recevoir le guide <ArrowRight className="h-4 w-4" /></button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col gap-8 pt-9 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
                    <Link href="/" className="flex items-center gap-2 text-white"><img src="/logo.png" alt="" className="h-8 w-auto" /><span className="font-[family-name:var(--font-display)] text-lg font-bold">AzulKitchen</span></Link>
                    <p>© 2026 AzulKitchen. Tous droits réservés.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-3"><a href="#" className="min-h-10 content-center hover:text-white">Mentions légales</a><a href="#" className="min-h-10 content-center hover:text-white">Confidentialité</a><a href="#" className="min-h-10 content-center hover:text-white">CGV</a></div>
                </div>
            </div>
        </footer>
    );
}
