import { posts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/sections/FooterCTA";

// Génération des métadonnées SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);
    if (!post) return { title: "Article Introuvable" };

    return {
        title: `${post.title} | AzulKitchen Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    // JSON-LD for GEO and Rich Snippets
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": [post.image],
        "datePublished": post.date,
        "author": [{
            "@type": "Person",
            "name": post.author,
        }],
        "abstract": post.excerpt
    };

    const faqSchema = post.faqs ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    } : null;

    return (
        <main className="bg-[var(--color-brand-cream)] min-h-screen font-sans text-[var(--color-brand-blue)]">
            <Navbar />
            
            {/* JSON-LD injection */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

            <article className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/blog" className="inline-flex items-center gap-2 text-[var(--color-brand-blue)] hover:text-[var(--color-brand-green)] transition mb-12 font-bold">
                    <ArrowLeft className="w-5 h-5" /> Tous les articles
                </Link>

                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-wider opacity-70 mb-6">
                        <span className="text-[var(--color-brand-green)]">{post.category}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-playfair)] mb-8 leading-tight text-balance">
                        {post.title}
                    </h1>

                    <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto text-balance">
                        {post.excerpt}
                    </p>
                </div>

                <div className="w-full aspect-video md:aspect-[21/9] rounded-t-full rounded-b-[3rem] mb-16 relative overflow-hidden bg-[var(--color-brand-blue)]/5 mx-auto max-w-5xl shadow-2xl">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Article Content */}
                <div 
                    className="text-lg leading-relaxed max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* FAQ Section if available (GEO specific) */}
                {post.faqs && (
                    <div className="mt-16 pt-12 border-t border-[var(--color-brand-blue)]/10">
                        <h2 className="text-3xl font-bold font-[family-name:var(--font-seasons)] mb-8">
                            Questions Fréquentes (FAQ)
                        </h2>
                        <div className="space-y-6">
                            {post.faqs.map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-brand-blue)]/5">
                                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                                    <p className="opacity-80">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </article>

            <FooterCTA />
        </main>
    );
}
