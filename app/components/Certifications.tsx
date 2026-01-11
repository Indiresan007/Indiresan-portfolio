'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const certifications = {
    frontend: [
        { name: "Front End Development (HTML)", issuer: "Great Learning", file: "/certifications/html.pdf" },
        { name: "JavaScript (Basic)", issuer: "HackerRank", file: "/certifications/javascript.pdf" },
        { name: "CSS (Basic)", issuer: "HackerRank", file: "/certifications/css.pdf" },
        { name: "Java (Basic)", issuer: "HackerRank", file: "/certifications/java.pdf" },
        { name: "Python", issuer: "DigiLabs", file: "/certifications/python.pdf" }
    ],
    infrastructure: [
        { name: "AWS S3 Basics", issuer: "Great Learning", file: "/certifications/aws.pdf" },
        { name: "SQL (Basic)", issuer: "HackerRank", file: "/certifications/sql.pdf" },
        { name: "Problem Solving (Basic)", issuer: "HackerRank", file: "/certifications/problem_solving.pdf" }
    ]
};

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<{ name: string, issuer: string, file: string } | null>(null);

    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-[#121212] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                        Technical Validation
                    </h2>
                    <div className="h-1 w-20 bg-white/20 rounded-full mx-auto" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Frontend & Core */}
                    <div>
                        <h3 className="text-xl font-mono text-white/50 mb-8 uppercase tracking-widest border-b border-white/10 pb-4">
                            Frontend & Core Engineering
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {certifications.frontend.map((cert, i) => (
                                <motion.div
                                    key={i}
                                    layoutId={`cert-${cert.name}`}
                                    onClick={() => setSelectedCert(cert)}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all cursor-pointer group"
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <h4 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">
                                            {cert.name}
                                        </h4>
                                        <ExternalLink size={12} className="text-white/20 group-hover:text-purple-300 opacity-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider group-hover:text-white/60">
                                        {cert.issuer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Infrastructure & Logic */}
                    <div>
                        <h3 className="text-xl font-mono text-white/50 mb-8 uppercase tracking-widest border-b border-white/10 pb-4">
                            Infrastructure & Logic
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {certifications.infrastructure.map((cert, i) => (
                                <motion.div
                                    key={i}
                                    layoutId={`cert-${cert.name}`}
                                    onClick={() => setSelectedCert(cert)}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-pointer group"
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <h4 className="text-white font-medium mb-1 group-hover:text-blue-300 transition-colors">
                                            {cert.name}
                                        </h4>
                                        <ExternalLink size={12} className="text-white/20 group-hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider group-hover:text-white/60">
                                        {cert.issuer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Minimal Modal */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        >
                            <motion.div
                                layoutId={`cert-${selectedCert.name}`}
                                className="relative w-full max-w-6xl h-[90vh] bg-[#121212] rounded-xl overflow-hidden shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white/70 hover:bg-black hover:text-white transition-all backdrop-blur-sm"
                                >
                                    <X size={24} />
                                </button>

                                <iframe
                                    src={`${selectedCert.file}#toolbar=0`}
                                    className="w-full h-full border-none bg-[#1a1a1a]"
                                    title={selectedCert.name}
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
