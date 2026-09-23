'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { 
    X, 
    ExternalLink, 
    ChevronLeft, 
    ChevronRight, 
    ShieldCheck, 
    Award,
    Cloud,
    Code2,
    Cpu,
    Database,
    FileCode2,
    Layers,
    Terminal,
    Sparkles
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
    icon: any;
    theme: {
        bgGradient: string;
        accentGlow: string;
        spotlightRim: string;
        badgeColor: string;
        textColor: string;
    };
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
        icon: Cloud,
        theme: {
            bgGradient: "radial-gradient(ellipse at 50% 25%, rgba(245, 158, 11, 0.28) 0%, rgba(180, 83, 9, 0.12) 40%, rgba(12, 12, 14, 0.98) 85%)",
            accentGlow: "rgba(245, 158, 11, 0.4)",
            spotlightRim: "border-amber-400/40",
            badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
            textColor: "text-amber-400"
        }
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
        icon: Code2,
        theme: {
            bgGradient: "radial-gradient(ellipse at 50% 25%, rgba(234, 179, 8, 0.28) 0%, rgba(161, 98, 7, 0.12) 40%, rgba(12, 12, 14, 0.98) 85%)",
            accentGlow: "rgba(234, 179, 8, 0.4)",
            spotlightRim: "border-yellow-400/40",
            badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
            textColor: "text-yellow-400"
        }
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
        icon: Cpu,
        theme: {
            bgGradient: "radial-gradient(ellipse at 50% 25%, rgba(168, 85, 247, 0.3) 0%, rgba(126, 34, 206, 0.12) 40%, rgba(12, 12, 14, 0.98) 85%)",
            accentGlow: "rgba(168, 85, 247, 0.45)",
            spotlightRim: "border-purple-400/40",
            badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
            textColor: "text-purple-400"
        }
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
        icon: Terminal,
        theme: {
            bgGradient: "radial-gradient(ellipse at 50% 25%, rgba(59, 130, 246, 0.3) 0%, rgba(29, 78, 216, 0.12) 40%, rgba(12, 12, 14, 0.98) 85%)",
            accentGlow: "rgba(59, 130, 246, 0.45)",
            spotlightRim: "border-blue-400/40",
            badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
            textColor: "text-blue-400"
        }
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
        icon: Database,
        theme: {
            bgGradient: "radial-gradient(ellipse at 50% 25%, rgba(16, 185, 129, 0.3) 0%, rgba(4, 120, 87, 0.12) 40%, rgba(12, 12, 14, 0.98) 85%)",
            accentGlow: "rgba(16, 185, 129, 0.45)",
            spotlightRim: "border-emerald-400/40",
            badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
            textColor: "text-emerald-400"
        }
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
        icon: Layers,
        theme: {
            bgGradient: "radial-gradient(ellipse at 50% 25%, rgba(239, 68, 68, 0.3) 0%, rgba(185, 28, 28, 0.12) 40%, rgba(12, 12, 14, 0.98) 85%)",
            accentGlow: "rgba(239, 68, 68, 0.45)",
            spotlightRim: "border-red-400/40",
            badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
            textColor: "text-red-400"
        }
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
        icon: FileCode2,
        theme: {
            bgGradient: "radial-gradient(ellipse at 50% 25%, rgba(249, 115, 22, 0.3) 0%, rgba(194, 65, 12, 0.12) 40%, rgba(12, 12, 14, 0.98) 85%)",
            accentGlow: "rgba(249, 115, 22, 0.45)",
            spotlightRim: "border-orange-400/40",
            badgeColor: "bg-orange-500/20 text-orange-300 border-orange-500/30",
            textColor: "text-orange-400"
        }
    },
    {
        id: "css",
        title: "CSS Architecture",
        category: "UI Styling & Motion",
        issuer: "HackerRank",
        description: "Modern layout engines (Grid/Flexbox), fluid responsive design systems, and hardware-accelerated animations.",
        date: "2024",
        file: "/certifications/css.pdf",
        badge: "HackerRank Certified",
        icon: Sparkles,
        theme: {
            bgGradient: "radial-gradient(ellipse at 50% 25%, rgba(6, 182, 212, 0.3) 0%, rgba(14, 116, 144, 0.12) 40%, rgba(12, 12, 14, 0.98) 85%)",
            accentGlow: "rgba(6, 182, 212, 0.45)",
            spotlightRim: "border-cyan-400/40",
            badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
            textColor: "text-cyan-400"
        }
    }
];

export default function Certifications() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
    const [containerWidth, setContainerWidth] = useState(1200);
    const containerRef = useRef<HTMLDivElement>(null);

    // Track container width for responsive carousel centering
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
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

    // Card dimensions
    const isMobile = containerWidth < 768;
    const cardWidth = isMobile ? 260 : 320;
    const cardGap = isMobile ? 16 : 24;
    const centerOffset = containerWidth / 2 - cardWidth / 2;
    const translateX = centerOffset - activeIndex * (cardWidth + cardGap);

    return (
        <section className="relative w-full py-28 md:py-36 bg-[#0a0a0c] text-white overflow-hidden border-t border-white/5 select-none">
            {/* Ambient Background Lighting */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] rounded-full blur-[140px] opacity-25 pointer-events-none transition-all duration-700"
                style={{
                    backgroundColor: certificationsList[activeIndex].theme.accentGlow
                }}
            />

            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-4 backdrop-blur-md">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs uppercase tracking-widest text-white/70 font-mono">
                            Verified Credentials
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
                        Technical Validation
                    </h2>
                    <p className="text-sm md:text-base text-neutral-400 max-w-xl mx-auto">
                        Explore industry-verified certifications and technical competencies in our interactive spotlight showcase.
                    </p>
                </motion.div>
            </div>

            {/* Spotlight Carousel Viewport */}
            <div 
                ref={containerRef}
                className="relative w-full overflow-hidden py-10 md:py-16"
            >
                {/* Horizontal Sliding Track */}
                <motion.div
                    className="flex items-center"
                    animate={{ x: translateX }}
                    transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 32,
                        mass: 0.9
                    }}
                    style={{
                        paddingLeft: `${centerOffset}px`,
                        paddingRight: `${centerOffset}px`,
                        gap: `${cardGap}px`
                    }}
                >
                    {certificationsList.map((cert, index) => {
                        const isSpotlight = index === activeIndex;
                        const IconComponent = cert.icon;

                        return (
                            <motion.div
                                key={cert.id}
                                onClick={() => setActiveIndex(index)}
                                animate={{
                                    scale: isSpotlight ? (isMobile ? 1.05 : 1.14) : 0.88,
                                    opacity: isSpotlight ? 1 : 0.42,
                                    y: isSpotlight ? -8 : 10,
                                }}
                                whileHover={{
                                    opacity: isSpotlight ? 1 : 0.75,
                                    scale: isSpotlight ? (isMobile ? 1.05 : 1.15) : 0.92,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                style={{
                                    width: `${cardWidth}px`,
                                    minWidth: `${cardWidth}px`,
                                    height: isMobile ? '420px' : '500px',
                                    zIndex: isSpotlight ? 30 : 10
                                }}
                                className={`relative rounded-[30px] md:rounded-[36px] overflow-hidden cursor-pointer
                                           transition-shadow duration-500
                                           ${isSpotlight 
                                               ? `border ${cert.theme.spotlightRim} shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(255,255,255,0.06)]` 
                                               : 'border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.6)]'
                                           }`}
                            >
                                {/* Card Atmospheric Visual Background */}
                                <div 
                                    className="absolute inset-0 transition-all duration-700"
                                    style={{
                                        background: cert.theme.bgGradient
                                    }}
                                />

                                {/* Ambient Cybernetic Grid / Radial Lighting */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)] pointer-events-none" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                                {/* Top Light Reflection / Specular Sheen (Apple Glass Style) */}
                                <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                                {/* Top Status / Badge Area */}
                                <div className="relative z-10 p-6 flex justify-between items-center">
                                    <span className={`text-[10px] md:text-xs font-mono px-3 py-1 rounded-full border backdrop-blur-md ${cert.theme.badgeColor}`}>
                                        {cert.badge}
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80">
                                        <IconComponent className="w-4 h-4" />
                                    </div>
                                </div>

                                {/* Central Visual Graphic (Hero Icon / Symbol) */}
                                <div className="relative z-10 flex-1 flex items-center justify-center py-4">
                                    <motion.div 
                                        animate={{ 
                                            scale: isSpotlight ? 1.05 : 0.85,
                                            rotate: isSpotlight ? [0, 2, -2, 0] : 0
                                        }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative"
                                    >
                                        <div 
                                            className="w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center border border-white/15 backdrop-blur-xl shadow-2xl"
                                            style={{
                                                background: "rgba(255, 255, 255, 0.04)",
                                                boxShadow: isSpotlight ? `0 0 50px ${cert.theme.accentGlow}` : "none"
                                            }}
                                        >
                                            <IconComponent className={`w-12 h-12 md:w-16 md:h-16 ${cert.theme.textColor} drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]`} />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Card Foreground Content */}
                                <div className="relative z-20 p-6 pb-8 text-center flex flex-col items-center justify-end">
                                    {/* Category Subtitle */}
                                    <p className="text-[11px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-1">
                                        {cert.issuer} • {cert.category}
                                    </p>

                                    {/* Big Bold Headline (Matching "No Filter" style from reference) */}
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
                                        {cert.title}
                                    </h3>

                                    {/* Descriptive Subtext */}
                                    <p className="text-xs md:text-sm text-neutral-300/85 line-clamp-2 max-w-[240px] md:max-w-[270px] leading-relaxed mb-6">
                                        {cert.description}
                                    </p>

                                    {/* Spotlight CTA Pill Button ("Shop Now" in reference -> "View Certificate") */}
                                    {isSpotlight ? (
                                        <motion.button
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1, duration: 0.3 }}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedCert(cert);
                                            }}
                                            className="px-7 py-2.5 rounded-full bg-[#e5e5e5] hover:bg-white text-black font-semibold text-xs md:text-sm
                                                       shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.8)]
                                                       flex items-center gap-2 transition-all duration-200"
                                        >
                                            <span>View Certificate</span>
                                            <ExternalLink className="w-3.5 h-3.5 text-black/70" />
                                        </motion.button>
                                    ) : (
                                        <span className="text-xs text-white/40 font-mono tracking-wider flex items-center gap-1 group-hover:text-white/70">
                                            Click to spotlight
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Left Navigation Arrow */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous certification"
                    className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-13 md:h-13 rounded-full
                               bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-white/20
                               text-white/80 hover:text-white flex items-center justify-center
                               shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all hover:scale-110 active:scale-95"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                    onClick={handleNext}
                    aria-label="Next certification"
                    className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-40 w-11 h-11 md:w-13 md:h-13 rounded-full
                               bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-white/20
                               text-white/80 hover:text-white flex items-center justify-center
                               shadow-[0_8px_25px_rgba(0,0,0,0.5)] transition-all hover:scale-110 active:scale-95"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>

            {/* Pagination Dots & Navigation Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
                {certificationsList.map((item, idx) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            idx === activeIndex 
                                ? 'w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]' 
                                : 'w-2 bg-white/20 hover:bg-white/40'
                        }`}
                    />
                ))}
            </div>

            {/* Certificate PDF Modal Viewer */}
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
                            className="relative w-full max-w-5xl h-[88vh] bg-[#121216] rounded-3xl overflow-hidden border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.9)] flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.03] backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-white/10">
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
                                        className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs text-white transition-all"
                                    >
                                        <span>Open PDF</span>
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
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
