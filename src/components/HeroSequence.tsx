"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

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
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = getFramePath(i);
            img.onload = () => {
                loadedCount++;
                // Draw the first frame once loaded if it's the very first image
                if (i === 0 && canvasRef.current) {
                    const ctx = canvasRef.current.getContext("2d");
                    if (ctx) {
                        // Scale and draw
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

    // Map scroll progress to a frame index (0 to 79)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

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
        // Set canvas internal dimensions to match display size for crispness,
        // or just use the image's inherent 1080p size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Calculate aspect ratio to cover the screen (object-fit: cover equivalent)
        const scale = Math.max(
            canvas.width / img.width,
            canvas.height / img.height
        ) * 1.2; // Zoom de 20% pour effacer le filigrane "Veo" tout à droite
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
        <div ref={containerRef} className="relative h-[300vh] w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                {/* Overlay to dim the image slightly to ensure text legibility */}
                <div className="absolute inset-0 bg-[var(--color-brand-blue)]/40 z-10 mix-blend-multiply pointer-events-none" />

                {/* Hero Content - Absolute Centered */}
                <div className="absolute z-20 flex flex-col items-center justify-center text-center px-4 md:px-8 w-full">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-cream)] font-[family-name:var(--font-playfair)] tracking-wide mb-6 uppercase text-balance drop-shadow-xl">
                        L'Architecte Nutrition
                    </h1>
                    <p className="text-lg md:text-2xl text-[var(--color-brand-cream)] font-light max-w-2xl mb-8 drop-shadow-md">
                        Rééquilibrage alimentaire & nutrition sportive pour femmes actives, seniors et athlètes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <a href="/contact" className="px-8 py-4 bg-[var(--color-brand-gold)] text-[var(--color-brand-blue)] font-bold rounded-full text-lg hover:bg-[var(--color-brand-yellow)] hover:scale-105 transition-all duration-300 shadow-xl">
                            Retrouver l'énergie sans frustration
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
