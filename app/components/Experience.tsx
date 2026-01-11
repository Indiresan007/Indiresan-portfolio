'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const experiences = [
    {
        period: "2024 (Apr - May)",
        company: "Cognifyz Technology",
        role: "Frontend Development Intern",
        impact: "Engineered responsive forms and integrated back-end APIs using core web technologies.",
        file: "/internships/cognifyz.pdf",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop"
    },
    {
        period: "2024 (Jun)",
        company: "Mayura Software Solutions",
        role: "Python Development Intern",
        impact: "Developed interactive console applications (Snake Game, Number Guessing) using advanced control flow and data structures.",
        file: "/internships/mayura.pdf",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
    },
    {
        period: "2023 (Jul)",
        company: "Rejola IT Services",
        role: "Python Development Intern",
        impact: "Applied fundamental programming concepts to practical industry tasks under mentorship.",
        file: "/internships/rejola.pdf",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop"
    }
];

export default function Experience() {
    const [selectedExp, setSelectedExp] = useState<{ company: string, role: string, file: string } | null>(null);

    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-[#121212] border-t border-white/5 flex flex-col items-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                        Experience
                    </h2>
                    <div className="h-1 w-20 bg-white/20 rounded-full mx-auto" />
                </motion.div>

                <div className="flex flex-col items-center gap-12">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="group relative flex flex-col md:flex-row h-auto md:h-[300px] w-full max-w-[340px] md:max-w-[600px] cursor-pointer transition-all duration-300 ease-in-out hover:md:max-w-[800px]"
                            onClick={() => setSelectedExp(exp)}
                        >
                            {/* Image section */}
                            <div className="relative h-[200px] md:h-full w-full md:w-[450px] overflow-hidden rounded-t-lg md:rounded-lg transition-all duration-300 ease-in-out group-hover:md:w-full group-hover:md:w-[800px]">
                                <img
                                    src={exp.image}
                                    className="h-full w-full object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-150"
                                    alt={exp.company}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            </div>

                            {/* Text overlay section */}
                            <div className="md:absolute relative left-0 top-0 md:left-[380px] md:top-0 flex h-[150px] md:h-[300px] w-full md:w-[420px] flex-col overflow-hidden transition-all duration-300 ease-in-out pointer-events-none md:mix-blend-difference z-10 p-4 md:p-0">
                                <div className="relative flex h-[300px] md:h-[600px] flex-col transition-transform duration-300 ease-in-out group-hover:md:-translate-y-[300px]">
                                    {/* Default State */}
                                    <div className="flex h-[150px] md:h-[300px] flex-col justify-center items-start">
                                        <h1 className="text-2xl md:text-5xl font-bold uppercase text-white shadow-black drop-shadow-md md:drop-shadow-none leading-tight break-words max-w-full">
                                            {exp.company}
                                        </h1>
                                    </div>

                                    {/* Hover State - Hidden on mobile usually or just shown differently */}
                                    <div className="hidden md:flex h-[300px] flex-col justify-center items-start">
                                        <h1 className="text-3xl md:text-4xl font-bold uppercase text-white leading-tight tracking-tight break-words">
                                            VIEW CERTIFICATIONS
                                        </h1>
                                        <p className="text-white/80 text-base mt-2 font-mono leading-snug">
                                            {exp.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Minimal Modal */}
                <AnimatePresence>
                    {selectedExp && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedExp(null)}
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        >
                            <motion.div
                                layoutId={`exp-${selectedExp.company}`}
                                className="relative w-full max-w-6xl h-[90vh] bg-[#121212] rounded-xl overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedExp(null)}
                                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:bg-black hover:text-white transition-all backdrop-blur-sm"
                                >
                                    <X size={24} />
                                </button>

                                <iframe
                                    src={`${selectedExp.file}#toolbar=0`}
                                    className="w-full h-full border-none bg-[#1a1a1a]"
                                    title={selectedExp.company}
                                />

                                {/* Fallback overlay if iframe fails to load or empty */}
                                <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center text-white/20 -z-10">
                                    <div className="w-16 h-16 border-2 border-dashed border-white/20 rounded-lg flex items-center justify-center mb-2">
                                        <ExternalLink size={24} />
                                    </div>
                                    <p className="text-sm">Document not available</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
