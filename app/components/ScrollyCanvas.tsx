'use client';

import { useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import Overlay from './Overlay';

const FRAME_COUNT = 57;

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const currentIndexRef = useRef(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const paddedIndex = i < 10 ? `0${i}` : `${i}`;
                    img.src = `/sequence/frame_${paddedIndex}.webp`;
                    img.onload = () => resolve();
                    img.onerror = () => {
                        console.warn(`Failed to load frame ${i}`);
                        resolve();
                    };
                    loadedImages[i] = img;
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        const scale = Math.max(cw / iw, ch / ih);
        const x = (cw - iw * scale) / 2;
        const y = (ch - ih * scale) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, iw * scale, ih * scale);
    }, [images]);

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                renderFrame(currentIndexRef.current);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [renderFrame]);

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const frameIndex = Math.floor(latest * (FRAME_COUNT - 1));
        const clampedIndex = Math.min(Math.max(frameIndex, 0), FRAME_COUNT - 1);

        currentIndexRef.current = clampedIndex;
        requestAnimationFrame(() => renderFrame(clampedIndex));
    });

    useEffect(() => {
        if (isLoaded && images.length > 0) {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
            renderFrame(0);
        }
    }, [isLoaded, images, renderFrame]);

    return (
        <div ref={containerRef} className="h-[500vh] w-full relative bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full block"
                />

                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#121212] z-50">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                            <span className="text-white/50 text-sm tracking-widest animate-pulse">LOADING EXPERIENCE...</span>
                        </div>
                    </div>
                )}

                <Overlay scrollYProgress={smoothProgress} />
            </div>
        </div>
    );
}
