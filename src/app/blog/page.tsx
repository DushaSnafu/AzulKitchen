import { posts } from "@/data/blog";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";

export const metadata = {
    title: "Blog | AzulKitchen - Nutrition & Science",
    description: "Découvrez nos articles sur la nutrition, le jeûne, le sommeil et des recettes pour optimiser votre santé.",
    openGraph: {
        title: "Blog | AzulKitchen",
        description: "Optimisez votre santé grâce à la science.",
        type: "website",
    }
};

export default function BlogListing() {
    return (
        <main className="bg-[var(--color-brand-cream)] min-h-screen font-sans">
            <Navbar />
            
            <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-[var(--color-brand-blue)] hover:text-[var(--color-brand-green)] transition mb-12 font-bold">
                    <ArrowLeft className="w-5 h-5" /> Retour à l'accueil
                </Link>

                <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-[var(--color-brand-blue)]">
                    Notre Journal
                </h1>
                <p className="text-xl opacity-80 text-[var(--color-brand-blue)] max-w-2xl mb-16">
                    Toutes les stratégies, décryptages scientifiques et conseils pour sublimer votre capital santé, rédigés par nos experts.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16 text-[var(--color-brand-blue)]">
                    {posts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.slug}>
                            <div className="group cursor-pointer block h-full">
                                <div className="w-full aspect-[4/5] rounded-t-full rounded-b-3xl mb-6 relative overflow-hidden bg-[var(--color-brand-blue)]/5">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>

                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider opacity-70 mb-4">
                                    <span className="text-[var(--color-brand-green)]">{post.category}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>

                                <h3 className="text-3xl font-bold font-[family-name:var(--font-seasons)] leading-tight group-hover:text-[var(--color-brand-green)] transition-colors mb-3">
                                    {post.title}
                                </h3>
                                <p className="opacity-80">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <FooterCTA />
        </main>
    );
}
