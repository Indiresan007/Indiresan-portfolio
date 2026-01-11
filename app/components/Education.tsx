'use client';

import { motion } from 'framer-motion';

const education = [
    {
        degree: "Bachelor of Technology (Information Technology)",
        institute: "KSR Institute for Engineering and Technology, Tiruchengode",
        period: "2021 – 2025",
        performance: "7.40 CGPA"
    },
    {
        degree: "Higher Secondary Education",
        institute: "Govt. Higher Secondary School, Lakkapuram",
        period: "2020 – 2021",
        performance: "87.50%"
    },
    {
        degree: "Secondary School Education",
        institute: "Govt. Higher Secondary School, Lakkapuram",
        period: "2018 – 2019",
        performance: "83.20%"
    }
];

export default function Education() {
    return (
        <section className="relative w-full py-32 px-6 md:px-12 bg-[#121212] border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                        Academic Foundation
                    </h2>
                    <div className="h-1 w-20 bg-white/20 rounded-full" />
                </motion.div>

                <div className="space-y-8">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.07]"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-white/60 text-lg">
                                        {edu.institute}
                                    </p>
                                </div>
                                <div className="text-right md:text-right text-left">
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm font-mono text-white/80 border border-white/5 whitespace-nowrap">
                                        {edu.period}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                                <span className="text-sm uppercase tracking-wider text-white/40">Performance</span>
                                <span className="text-white font-mono">{edu.performance}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
