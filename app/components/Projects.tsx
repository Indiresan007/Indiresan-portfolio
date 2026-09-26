'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: "Sneakify",
        category: "Luxury E-Commerce",
        description: "India's premier luxury sneaker platform featuring authentic verified footwear, dynamic catalog filtering, secure checkout, and real-time order management.",
        tags: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
        image: "/projects/sneakify.jpg",
        link: "https://sneakify.web.app/"
    },
    {
        title: "Speech Emotion Recognition",
        category: "AI Integration",
        description: "An RNN-based deep learning system achieving 96.96% accuracy. Integrated into a web interface for real-time prediction, outperforming traditional CNN models.",
        tags: ["Python", "Deep Learning", "Web Interface", "Django"],
        image: "/projects/ai.png",
        link: "https://github.com/Indiresan007/An-Enhanced-Speech-Emotion-Recognition-System-Using-RNN-compared-with-CNN"
    },
    {
        title: "Real-Time Weather Monitor",
        category: "IoT Innovation",
        description: "An IoT solution utilizing Raspberry Pi and Arduino to capture and transmit environmental data wirelessly for remote analysis.",
        tags: ["IoT", "Raspberry Pi", "Arduino", "Wireless Transmission"],
        image: "/projects/iot.png",
        link: "https://github.com/Indiresan007/Weather-Monitoring-System-using-IOT"
    },
];

export default function Projects() {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-[#121212] min-h-screen border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                        Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-white/20 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative h-[550px] w-full cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-colors block text-left"
                        >
                            {/* Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                            />

                            {/* Dark Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>

                            <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col items-center text-center">
                                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-white/70 mb-4 backdrop-blur-md border border-white/5">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-lg">
                                    {project.title}
                                </h3>
                                <div className="translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100 flex flex-col items-center">
                                    <p className="text-white/80 text-sm mb-4 leading-relaxed max-w-[90%]">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {project.tags.map((tag, t) => (
                                            <span key={t} className="text-[10px] uppercase tracking-wider text-purple-300 bg-purple-900/40 border border-purple-500/30 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
