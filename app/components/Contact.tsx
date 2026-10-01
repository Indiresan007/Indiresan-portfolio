'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
    FileText, 
    Download, 
    Eye, 
    ExternalLink, 
    X, 
    Mail, 
    Check, 
    Copy, 
    Sparkles, 
    ArrowDownToLine,
    Layers
} from 'lucide-react';

export default function Contact() {
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [viewMode, setViewMode] = useState<'pages' | 'pdf'>('pages');

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('indiresan742@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (
        <>
            <footer id="contact" className="relative py-28 md:py-36 px-6 text-center border-t border-white/5 bg-[#121212] overflow-hidden">
                {/* Ambient Radial Background Glow */}
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] rounded-full blur-[140px] opacity-20 pointer-events-none transition-all duration-700 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600" 
                />

                <div className="relative max-w-4xl mx-auto z-10">
                    {/* Status Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-8 backdrop-blur-md"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-xs uppercase tracking-widest text-white/80 font-mono">
                            Available for Opportunities
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2 
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8"
                    >
                        Let's create something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
                            innovative.
                        </span>
                    </motion.h2>

                    {/* Email Contact with Copy Button */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-14"
                    >
                        <a
                            href="mailto:indiresan742@gmail.com"
                            className="text-lg sm:text-xl md:text-2xl text-white/80 hover:text-white border-b border-white/20 hover:border-white transition-all pb-1 font-mono"
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
                    </motion.div>

                    {/* Resume Showcase Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative mx-auto max-w-xl p-6 sm:p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)] mb-16 text-left overflow-hidden group"
                    >
                        {/* Top Edge Specular Reflection */}
                        <div className="absolute top-0 inset-x-8 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20 text-purple-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] shrink-0">
                                    <FileText className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="text-xl font-bold text-white tracking-tight">Curriculum Vitae</h3>
                                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/10 text-emerald-400 border border-emerald-500/30">
                                            2026 Updated
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                                        Indiresan K • Software & Frontend Developer
                                    </p>
                                    <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                                        B.Tech IT • 2 Pages • PDF (166 KB)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Action Buttons: View & Download */}
                        <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3.5">
                            {/* View Button */}
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setIsResumeModalOpen(true)}
                                className="flex-1 min-w-[140px] px-5 py-3 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs sm:text-sm
                                           shadow-[0_4px_20px_rgba(255,255,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.9)]
                                           flex items-center justify-center gap-2 transition-all duration-200"
                            >
                                <Eye className="w-4 h-4 text-black" />
                                <span>View Resume</span>
                            </motion.button>

                            {/* Download Button */}
                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="/indiresan_resume.pdf"
                                download="Indiresan_Resume.pdf"
                                className="flex-1 min-w-[140px] px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm
                                           border border-white/20 backdrop-blur-md
                                           shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]
                                           flex items-center justify-center gap-2 transition-all duration-200"
                            >
                                <Download className="w-4 h-4 text-white" />
                                <span>Download PDF</span>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Social Media Links */}
                    <div className="flex justify-center gap-8 mb-12 md:mb-16">
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
                    </div>

                    {/* Footer Copyright */}
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
                                    <div>
                                        <h4 className="text-white font-bold text-base md:text-lg leading-tight">
                                            Indiresan K — Resume
                                        </h4>
                                        <p className="text-xs text-white/50 font-mono">
                                            Software & Frontend Developer (2 Pages)
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 sm:gap-3">
                                    {/* View Mode Switcher */}
                                    <div className="hidden sm:flex items-center p-1 rounded-full bg-white/10 border border-white/15 text-xs">
                                        <button
                                            onClick={() => setViewMode('pages')}
                                            className={`px-3 py-1 rounded-full transition-all ${
                                                viewMode === 'pages' 
                                                    ? 'bg-white text-black font-semibold shadow-sm' 
                                                    : 'text-white/70 hover:text-white'
                                            }`}
                                        >
                                            HD Pages
                                        </button>
                                        <button
                                            onClick={() => setViewMode('pdf')}
                                            className={`px-3 py-1 rounded-full transition-all ${
                                                viewMode === 'pdf' 
                                                    ? 'bg-white text-black font-semibold shadow-sm' 
                                                    : 'text-white/70 hover:text-white'
                                            }`}
                                        >
                                            PDF Viewer
                                        </button>
                                    </div>

                                    {/* Download Button */}
                                    <a
                                        href="/indiresan_resume.pdf"
                                        download="Indiresan_Resume.pdf"
                                        className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-white hover:bg-neutral-100 text-black font-semibold text-xs transition-all shadow-[0_2px_10px_rgba(255,255,255,0.2)]"
                                    >
                                        <ArrowDownToLine className="w-3.5 h-3.5" />
                                        <span>Download</span>
                                    </a>

                                    {/* Open in New Tab */}
                                    <a
                                        href="/indiresan_resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white transition-all"
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

                            {/* Modal Content */}
                            <div className="relative flex-1 w-full bg-[#141418] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
                                {viewMode === 'pages' ? (
                                    <div className="flex flex-col items-center gap-8 w-full max-w-3xl py-4">
                                        {/* Page 1 */}
                                        <div className="relative w-full flex flex-col items-center">
                                            <div className="flex items-center justify-between w-full max-w-2xl px-2 mb-2">
                                                <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                                                    Page 1 of 2
                                                </span>
                                                <span className="text-[11px] font-mono text-emerald-400">
                                                    High Resolution
                                                </span>
                                            </div>
                                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/15 max-w-2xl w-full bg-white">
                                                <img
                                                    src="/resume_page_1.png"
                                                    alt="Indiresan K Resume - Page 1"
                                                    className="w-full h-auto object-contain select-none"
                                                />
                                            </div>
                                        </div>

                                        {/* Page 2 */}
                                        <div className="relative w-full flex flex-col items-center">
                                            <div className="flex items-center justify-between w-full max-w-2xl px-2 mb-2">
                                                <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                                                    Page 2 of 2
                                                </span>
                                                <span className="text-[11px] font-mono text-emerald-400">
                                                    High Resolution
                                                </span>
                                            </div>
                                            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/15 max-w-2xl w-full bg-white">
                                                <img
                                                    src="/resume_page_2.png"
                                                    alt="Indiresan K Resume - Page 2"
                                                    className="w-full h-auto object-contain select-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full">
                                        <iframe
                                            src="/indiresan_resume.pdf#toolbar=1"
                                            className="w-full h-full border-none rounded-xl"
                                            title="Indiresan K Resume PDF"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
