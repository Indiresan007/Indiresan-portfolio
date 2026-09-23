'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
    X, 
    ExternalLink, 
    ChevronLeft, 
    ChevronRight, 
    ShieldCheck, 
    Award
} from 'lucide-react';

interface Certification {
    id: string;
    title: string;
    category: string;
    issuer: string;
    description: string;
    date: string;
    file: string;
    badge: string;
    image: string;
    glow: string;
}

const certificationsList: Certification[] = [
    {
        id: "aws-s3",
        title: "AWS S3 Basics",
        category: "Cloud Architecture",
        issuer: "Great Learning",
        description: "Cloud storage architecture, access policies, encryption, and automated lifecycle rules.",
        date: "2024",
        file: "/certifications/aws.pdf",
        badge: "AWS Certified",
        image: "/spotlight/card_0.jpg",
        glow: "rgba(245, 158, 11, 0.45)"
    },
    {
        id: "js-basic",
        title: "JavaScript Core",
        category: "Frontend Engineering",
        issuer: "HackerRank",
        description: "Asynchronous architecture, closures, event loop mechanics, and modern ES6+ standards.",
        date: "2024",
        file: "/certifications/javascript.pdf",
        badge: "HackerRank Gold",
        image: "/spotlight/card_1.jpg",
        glow: "rgba(234, 179, 8, 0.45)"
    },
    {
        id: "problem-solving",
        title: "Problem Solving",
        category: "Algorithms & Logic",
        issuer: "HackerRank",
        description: "Advanced algorithmic efficiency, data structures, graph traversals, and dynamic programming.",
        date: "2024",
        file: "/certifications/problem_solving.pdf",
        badge: "HackerRank Certified",
        image: "/spotlight/card_2.jpg",
        glow: "rgba(220, 38, 38, 0.45)"
    },
    {
        id: "python",
        title: "Python Systems",
        category: "Backend & Automation",
        issuer: "DigiLabs",
        description: "Object-oriented software systems, scripting automation, and computational data processing.",
        date: "2024",
        file: "/certifications/python.pdf",
        badge: "DigiLabs Certified",
        image: "/spotlight/card_3.jpg",
        glow: "rgba(59, 130, 246, 0.45)"
    },
    {
        id: "sql",
        title: "SQL & Databases",
        category: "Data Architecture",
        issuer: "HackerRank",
        description: "Relational query optimization, complex joins, transactions, and performant schema design.",
        date: "2024",
        file: "/certifications/sql.pdf",
        badge: "HackerRank Certified",
        image: "/spotlight/card_4.jpg",
        glow: "rgba(16, 185, 129, 0.45)"
    },
    {
        id: "java",
        title: "Java Programming",
        category: "Software Engineering",
        issuer: "HackerRank",
        description: "Enterprise OOP design, multithreaded architecture, memory safety, and collections framework.",
        date: "2024",
        file: "/certifications/java.pdf",
        badge: "HackerRank Certified",
        image: "/spotlight/card_5.jpg",
        glow: "rgba(239, 68, 68, 0.45)"
    },
    {
        id: "html",
        title: "Frontend HTML5",
        category: "Semantic Web",
        issuer: "Great Learning",
        description: "Modern semantic structuring, web accessibility standards (WCAG), and responsive UX fundamentals.",
        date: "2024",
        file: "/certifications/html.pdf",
        badge: "Great Learning",
        image: "/spotlight/card_6.jpg",
        glow: "rgba(249, 115, 22, 0.45)"
    },
    {
        id: "css",
        title: "CSS Architecture",
        category: "UI Styling & Motion",
        issuer: "HackerRank",
        description: "Modern layout engines, fluid responsive design systems, and hardware-accelerated animations.",
        date: "2024",
        file: "/certifications/css.pdf",
        badge: "HackerRank Certified",
        image: "/spotlight/card_7.jpg",
        glow: "rgba(6, 182, 212, 0.45)"
    }
];

export default function Certifications() {
    const [activeIndex, setActiveIndex] = useState(2);
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
    const [viewportWidth, setViewportWidth] = useState(1200);

    // Track viewport width for exact center alignment
    useEffect(() => {
        const updateWidth = () => {
            setViewportWidth(window.innerWidth);
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedCert) return;
            if (e.key === 'ArrowLeft') {
                setActiveIndex((prev) => Math.max(0, prev - 1));
            } else if (e.key === 'ArrowRight') {
                setActiveIndex((prev) => Math.min(certificationsList.length - 1, prev + 1));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedCert]);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : certificationsList.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < certificationsList.length - 1 ? prev + 1 : 0));
    };

    // Responsive dimensions matching the reference video
    const isMobile = viewportWidth < 768;
    const cardWidth = isMobile ? 240 : 310;
    const cardHeight = isMobile ? 380 : 470;
    const cardGap = isMobile ? 16 : 24;

    // Mathematical guarantee: card at activeIndex will always have its center at viewportWidth / 2
    const trackX = (viewportWidth / 2) - (cardWidth / 2) - activeIndex * (cardWidth + cardGap);

    return (
        <section className="relative w-full py-28 md:py-36 bg-black text-white overflow-hidden border-t border-white/5 select-none">
            {/* Ambient Background Glow matching the active card */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] rounded-full blur-[140px] opacity-25 pointer-events-none transition-all duration-700"
                style={{
                    backgroundColor: certificationsList[activeIndex].glow
                }}
            />

            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-4 backdrop-blur-md">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs uppercase tracking-widest text-white/70 font-mono">
                            Verified Credentials
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                        Technical Validation
                    </h2>
                </motion.div>
            </div>

            {/* Spotlight Carousel Full-Width Viewport */}
            <div className="relative w-full overflow-hidden py-8 md:py-12">
                {/* Sliding Track - Animated smoothly to center the selected card */}
                <motion.div
                    className="flex items-center"
                    animate={{ x: trackX }}
                    transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 28,
                        mass: 0.85
                    }}
                    style={{
                        gap: `${cardGap}px`
                    }}
                >
                    {certificationsList.map((cert, index) => {
                        const isSpotlight = index === activeIndex;

                        return (
                            <motion.div
                                key={cert.id}
                                onClick={() => {
                                    if (isSpotlight) {
                                        setSelectedCert(cert);
                                    } else {
                                        setActiveIndex(index);
                                    }
                                }}
                                animate={{
                                    scale: isSpotlight ? (isMobile ? 1.05 : 1.12) : 0.88,
                                    opacity: isSpotlight ? 1 : 0.4,
                                    y: isSpotlight ? -6 : 10,
                                }}
                                whileHover={{
                                    opacity: isSpotlight ? 1 : 0.65,
                                    scale: isSpotlight ? (isMobile ? 1.06 : 1.14) : 0.91,
                                }}
                                transition={{
                                    duration: 0.45,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                style={{
                                    width: `${cardWidth}px`,
                                    minWidth: `${cardWidth}px`,
                                    height: `${cardHeight}px`,
                                    zIndex: isSpotlight ? 30 : 10,
                                    transformOrigin: 'center center'
                                }}
                                className={`relative rounded-[28px] md:rounded-[32px] overflow-hidden cursor-pointer
                                           transition-all duration-500
                                           ${isSpotlight 
                                               ? 'border border-white/25 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.95),inset_0_1px_1.5px_rgba(255,255,255,0.5),inset_0_0_20px_rgba(255,255,255,0.05)]' 
                                               : 'border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.7)]'
                                           }`}
                            >
                                {/* Full Bleed Photographic Background */}
                                <img 
                                    src={cert.image} 
                                    alt={cert.title}
                                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                                />

                                {/* Ambient Gradient Overlay (Atmospheric Lighting) */}
                                <div 
                                    className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                                        isSpotlight 
                                            ? 'bg-gradient-to-t from-black/95 via-black/40 to-black/10' 
                                            : 'bg-black/55 hover:bg-black/40'
                                    }`} 
                                />

                                {/* Apple Liquid Glass Top Specular Sheen (Only on spotlight) */}
                                {isSpotlight && (
                                    <>
                                        <div className="absolute top-0 inset-x-8 h-[1.5px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                                        <div className="absolute bottom-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />
                                    </>
                                )}

                                {/* Top Badge (Visible on Spotlight Card) */}
                                <AnimatePresence>
                                    {isSpotlight && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative z-20 p-5 flex justify-between items-center"
                                        >
                                            <span className="text-[10px] md:text-xs font-mono px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                                                {cert.badge}
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                                                <Award className="w-4 h-4 text-white" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Card Foreground Content (Title, Description, Pill Button - EXACTLY matching reference video) */}
                                <div className="absolute inset-x-0 bottom-0 z-20 p-6 pb-8 text-center flex flex-col items-center justify-end">
                                    <AnimatePresence>
                                        {isSpotlight ? (
                                            <motion.div
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                                className="flex flex-col items-center w-full"
                                            >
                                                {/* Bold Title (Matching "No Filter" / "Fresh Fit") */}
                                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                                    {cert.title}
                                                </h3>

                                                {/* Subtitle / Description */}
                                                <p className="text-xs md:text-sm text-neutral-300 font-normal leading-relaxed max-w-[210px] md:max-w-[240px] text-center mb-5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                                                    {cert.description}
                                                </p>

                                                {/* Pill Button (Matching "Shop Now" -> "View Certificate") */}
                                                <motion.button
                                                    whileHover={{ scale: 1.06 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedCert(cert);
                                                    }}
                                                    className="px-7 py-2.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs md:text-sm
                                                               shadow-[0_4px_20px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.9)]
                                                               flex items-center gap-2 transition-all duration-200"
                                                >
                                                    <span>View Certificate</span>
                                                    <ExternalLink className="w-3.5 h-3.5 text-black/70" />
                                                </motion.button>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 0.7 }}
                                                className="text-[11px] text-white/50 font-mono tracking-wider flex items-center gap-1"
                                            >
                                                <span>{cert.title}</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Left Navigation Chevron Button */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous card"
                    className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-13 md:h-13 rounded-full
                               bg-black/60 hover:bg-black/85 backdrop-blur-xl border border-white/20
                               text-white/80 hover:text-white flex items-center justify-center
                               shadow-[0_8px_25px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)]
                               transition-all hover:scale-110 active:scale-95"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Right Navigation Chevron Button */}
                <button
                    onClick={handleNext}
                    aria-label="Next card"
                    className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-13 md:h-13 rounded-full
                               bg-black/60 hover:bg-black/85 backdrop-blur-xl border border-white/20
                               text-white/80 hover:text-white flex items-center justify-center
                               shadow-[0_8px_25px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)]
                               transition-all hover:scale-110 active:scale-95"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>

            {/* Bottom Dots Indicator (Matching reference video) */}
            <div className="flex items-center justify-center gap-2 mt-4 md:mt-6">
                {certificationsList.map((item, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`Jump to slide ${idx + 1}`}
                            className={`h-2 rounded-full transition-all duration-400 ${
                                isActive 
                                    ? 'w-7 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]' 
                                    : 'w-2 bg-white/25 hover:bg-white/50'
                            }`}
                        />
                    );
                })}
            </div>

            {/* Certificate PDF Modal Viewer with Apple Glass Glow Effect */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 15 }}
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            style={{
                                WebkitBackdropFilter: "blur(28px) saturate(180%)",
                            }}
                            className="relative w-full max-w-5xl h-[88vh] bg-[#121216]/95 backdrop-blur-2xl rounded-3xl overflow-hidden
                                       border border-white/25
                                       shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_35px_-5px_rgba(255,255,255,0.15),inset_0_1px_1.5px_0_rgba(255,255,255,0.5),inset_0_0_20px_0_rgba(255,255,255,0.03)]
                                       flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Apple Liquid Glass Top Specular Glint */}
                            <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none rounded-full" />

                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.04] backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-white/10 border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                                        <Award className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-base md:text-lg">
                                            {selectedCert.title}
                                        </h4>
                                        <p className="text-xs text-white/50 font-mono">
                                            {selectedCert.issuer} • Verified Credential ({selectedCert.date})
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <a
                                        href={selectedCert.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
                                    >
                                        <span>Open PDF</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/70 hover:text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Iframe PDF Body */}
                            <div className="relative flex-1 w-full bg-[#1a1a1e]">
                                <iframe
                                    src={`${selectedCert.file}#toolbar=0`}
                                    className="w-full h-full border-none"
                                    title={selectedCert.title}
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
