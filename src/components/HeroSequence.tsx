"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const FRAME_COUNT = 80;

// Helper to format the image number with leading zeros
const getFramePath = (index: number) =>
    `/animation/Le_citron_se_1080p_202602221247_${index
        .toString()
        .padStart(3, "0")}.jpg`;

export default function HeroSequence() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                if (i === 0 && canvasRef.current) {
                    const ctx = canvasRef.current.getContext("2d");
                    if (ctx) {
                        drawFrame(ctx, canvasRef.current, img);
                    }
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.22, 0.55], [1, 1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.55], [0, -60]);

    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!canvasRef.current || images.length === 0) return;
        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const currentFrame = Math.round(latest);
        const img = images[currentFrame];
        if (img && img.complete) {
            drawFrame(ctx, canvasRef.current, img);
        }
    });

    const drawFrame = (
        ctx: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement,
        img: HTMLImageElement
    ) => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(window.innerWidth * dpr);
        canvas.height = Math.round(window.innerHeight * dpr);

        // Calculate aspect ratio to cover the screen (object-fit: cover equivalent)
        const scale = Math.max(
            canvas.width / img.width,
            canvas.height / img.height
        ) * 1.2;
        const x = canvas.width / 2 - (img.width / 2) * scale;
        const y = canvas.height / 2 - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Redraw on resize
    useEffect(() => {
        const handleResize = () => {
            if (!canvasRef.current || images.length === 0) return;
            const ctx = canvasRef.current.getContext("2d");
            const currentFrame = Math.round(frameIndex.get());
            const img = images[currentFrame];
            if (ctx && img && img.complete) {
                drawFrame(ctx, canvasRef.current, img);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [images, frameIndex]);

    return (
        <section ref={containerRef} className="relative h-[300vh] w-full bg-[var(--color-brand-blue-dark)]" aria-label="Introduction animée">
            <div className="sticky top-0 flex h-[100svh] w-full items-center overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                    aria-hidden="true"
                />
                <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(5,29,78,.9)_0%,rgba(5,29,78,.62)_46%,rgba(5,29,78,.08)_80%),linear-gradient(0deg,rgba(5,29,78,.35)_0%,transparent_45%)]" />

                <motion.div style={{ opacity: contentOpacity, y: contentY }} className="relative z-20 mx-auto w-full max-w-7xl px-5 pt-20 sm:px-8 lg:px-10">
                    <div className="max-w-3xl text-[var(--color-brand-cream)]">
                        <p className="mb-5 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                            Nutrition personnalisée · Cabinet & visio
                        </p>
                        <h1 className="max-w-[12ch] text-[clamp(3.4rem,7vw,6rem)] font-bold leading-[0.92]">
                            L’énergie, sans la frustration.
                        </h1>
                        <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/86 sm:text-xl">
                            Une stratégie nutritionnelle fondée sur la science, adaptée à votre rythme de vie et pensée pour durer.
                        </p>
                        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                            <Link href="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-brand-gold)] px-7 py-3.5 text-base font-bold text-[var(--color-brand-blue-dark)] transition-[transform,background-color] duration-300 ease-[var(--ease-out-expo)] hover:bg-[var(--color-brand-yellow)] active:scale-[0.96]">
                                Réserver mon diagnostic <ArrowUpRight className="h-5 w-5" />
                            </Link>
                            <a href="#about" className="inline-flex min-h-11 items-center gap-2 px-2 font-semibold text-white/90 transition-colors hover:text-[var(--color-brand-gold)]">
                                Découvrir l’approche
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-sm font-semibold text-white/75 md:flex">
                    <span className="h-px w-10 bg-white/40" /> Faites défiler <ArrowDown className="h-4 w-4 animate-bounce" />
                </div>
            </div>
        </section>
    );
}
