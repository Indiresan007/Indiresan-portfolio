'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
    FileText, 
    ExternalLink, 
    X, 
    Check, 
    Copy, 
    ArrowDownToLine 
} from 'lucide-react';

export default function Contact() {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('indiresan742@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (
        <>
            <footer id="contact" className="relative py-32 px-6 text-center border-t border-white/5 bg-[#121212] overflow-hidden">
                {/* Ambient Radial Background Glow */}
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] rounded-full blur-[140px] opacity-20 pointer-events-none transition-all duration-700 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600" 
                />

                <div className="relative max-w-4xl mx-auto z-10">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-12">
                        Let's create something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            innovative.
                        </span>
                    </h2>

                    <div className="flex items-center justify-center gap-3 mb-12">
                        <a
                            href="mailto:indiresan742@gmail.com"
                            className="inline-block text-xl md:text-2xl text-white/80 hover:text-white border-b border-white/20 hover:border-white transition-all pb-1 font-mono"
                        >
                            indiresan742@gmail.com
                        </a>
                        <button
                            onClick={handleCopyEmail}
                            aria-label="Copy email address"
                            className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white/70 hover:text-white transition-all"
                            title="Copy email"
                        >
                            {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                    </div>

                    {/* Text Links row: LINKEDIN   GITHUB   HACKERRANK   RESUME */}
                    <div className="flex flex-wrap justify-center items-center gap-8 mb-12 md:mb-20">
                        <a
                            href="https://www.linkedin.com/in/indiresan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/indiresan007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://hackerrank.com/indiresan742"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                        >
                            HackerRank
                        </a>
                        <button
                            onClick={() => setIsResumeModalOpen(true)}
                            className="text-sm tracking-widest uppercase text-white/50 hover:text-white transition-colors cursor-pointer"
                        >
                            Resume
                        </button>
                    </div>

                    <div className="text-white/20 text-xs flex flex-col items-center gap-2">
                        <p>&copy; 2026 INDIRESAN K. All rights reserved.</p>
                    </div>
                </div>
            </footer>

            {/* Resume Full-Screen Apple Liquid Glass Modal */}
            <AnimatePresence>
                {isResumeModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsResumeModalOpen(false)}
                        className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 15 }}
                            transition={{ type: "spring", stiffness: 350, damping: 28 }}
                            style={{
                                WebkitBackdropFilter: "blur(28px) saturate(180%)",
                            }}
                            className="relative w-full max-w-5xl h-[90vh] bg-[#121216]/95 backdrop-blur-2xl rounded-3xl overflow-hidden
                                       border border-white/25
                                       shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_35px_-5px_rgba(255,255,255,0.15),inset_0_1px_1.5px_0_rgba(255,255,255,0.5),inset_0_0_20px_0_rgba(255,255,255,0.03)]
                                       flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Specular Highlight Glint */}
                            <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none rounded-full" />

                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-white/[0.04] backdrop-blur-md">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-xl bg-white/10 border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
                                        <FileText className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-white font-bold text-base md:text-lg leading-tight">
                                            Indiresan K — Resume
                                        </h4>
                                        <p className="text-xs text-white/50 font-mono">
                                            Software & Frontend Developer
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3">
                                    {/* Download Button */}
                                    <a
                                        href="/indiresan_resume.pdf"
                                        download="Indiresan_Resume.pdf"
                                        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs transition-all shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
                                    >
                                        <ArrowDownToLine className="w-3.5 h-3.5" />
                                        <span>Download</span>
                                    </a>

                                    {/* Open in New Tab */}
                                    <a
                                        href="/indiresan_resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
                                        title="Open PDF in new tab"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                    </a>

                                    {/* Close Button */}
                                    <button
                                        onClick={() => setIsResumeModalOpen(false)}
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/70 hover:text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
                                        aria-label="Close modal"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content - Direct PDF Viewer */}
                            <div className="relative flex-1 w-full bg-[#141418] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                                <iframe
                                    src="/indiresan_resume.pdf#toolbar=1"
                                    className="w-full h-full border-none rounded-xl"
                                    title="Indiresan K Resume"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
