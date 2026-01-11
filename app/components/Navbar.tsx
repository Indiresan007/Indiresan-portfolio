'use client';

import {
    Home,
    User,
    Sparkles,
    BookOpen,
    LayoutGrid,
    Award,
    Cpu,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('Home');

    const navItems = [
        { id: 'home', name: 'Home', icon: Home, action: () => scrollToSection('home', true, 0) },
        { id: 'skills', name: 'Skills', icon: Cpu, action: () => scrollToSection('skills', true, 0.65) },
        { id: 'experience', name: 'Experience', icon: Sparkles, action: () => scrollToSection('experience') },
        { id: 'projects', name: 'Projects', icon: LayoutGrid, action: () => scrollToSection('projects') },
        { id: 'certifications', name: 'Certifications', icon: Award, action: () => scrollToSection('certifications') },
        { id: 'education', name: 'Education', icon: BookOpen, action: () => scrollToSection('education') },
        { id: 'contact', name: 'Contact', icon: User, action: () => scrollToSection('contact') },
    ];

    const scrollToSection = (id: string, isScrollyCanvas: boolean = false, progress: number = 0) => {
        if (isScrollyCanvas) {
            const totalHeight = window.innerHeight * 5;
            const targetScroll = totalHeight * progress;
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - 100;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
        setActiveTab(navItems.find(item => item.id === id)?.name || 'Home');
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 300;

            const expElement = document.getElementById('experience');
            const projElement = document.getElementById('projects');
            const certElement = document.getElementById('certifications');
            const eduElement = document.getElementById('education');
            const contElement = document.getElementById('contact');

            const scrollyHeight = window.innerHeight * 5;

            // ScrollyCanvas Logic
            if (scrollPosition < scrollyHeight * 0.45) {
                setActiveTab('Home');
            } else if (scrollPosition < scrollyHeight * 0.8) {
                setActiveTab('Skills');
            }
            // Standard Sections Logic
            else if (projElement && scrollPosition >= projElement.offsetTop - 100 && scrollPosition < (expElement?.offsetTop || Infinity) - 100) {
                setActiveTab('Projects');
            } else if (expElement && scrollPosition >= expElement.offsetTop - 100 && scrollPosition < (certElement?.offsetTop || Infinity) - 100) {
                setActiveTab('Experience');
            } else if (certElement && scrollPosition >= certElement.offsetTop - 100 && scrollPosition < (eduElement?.offsetTop || Infinity) - 100) {
                setActiveTab('Certifications');
            } else if (eduElement && scrollPosition >= eduElement.offsetTop - 100 && scrollPosition < (contElement?.offsetTop || Infinity) - 100) {
                setActiveTab('Education');
            } else if (contElement && scrollPosition >= contElement.offsetTop - 100) {
                setActiveTab('Contact');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex justify-end items-center pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pointer-events-auto bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl flex items-center gap-1 md:gap-1.5"
            >
                {navItems.map((item) => {
                    const isActive = activeTab === item.name;
                    return (
                        <button
                            key={item.name}
                            onClick={item.action}
                            className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${isActive
                                ? 'px-3 py-1.5 md:px-4 md:py-2'
                                : 'w-8 h-8 md:w-10 md:h-10 hover:bg-white/10 text-white/50 hover:text-white'
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}

                            <div className={`relative z-10 flex items-center gap-1.5 md:gap-2 ${isActive ? 'text-white' : ''}`}>
                                <item.icon className="w-4 h-4 md:w-[18px] md:h-[18px]" />
                                {isActive && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        className="text-xs md:text-sm font-medium whitespace-nowrap overflow-hidden"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </div>
                        </button>
                    );
                })}
            </motion.div>
        </div>
    );
}
