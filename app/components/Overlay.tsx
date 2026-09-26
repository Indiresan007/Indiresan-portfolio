'use client';

import { MotionValue, useTransform, motion } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Section 1: Center (0% - 25%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.25], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.25], [60, -100]);
    const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.9]);

    // Section 2: Left aligned (starts at 30%)
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.25, 0.55], [-150, 0]);

    // Section 3: Right aligned (starts at 60%)
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.9], [0, 1, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.55, 0.9], [150, 0]);

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10 font-sans">
            {/* Section 1 */}
            <motion.div
                style={{ opacity: opacity1, y: y1, scale: scale1 }}
                className="absolute inset-0 flex items-center justify-center p-8"
            >
                <div className="text-center mix-blend-difference">
                    <h1 className="text-4xl md:text-9xl font-bold tracking-tighter text-white mb-6">
                        INDIRESAN K
                    </h1>
                    <p className="text-sm md:text-2xl text-white/80 tracking-[0.2em] uppercase font-light mb-2">
                        Software & Frontend Developer
                    </p>
                    <p className="text-xs md:text-base text-white/50 font-mono">
                        Based in India | Creative Engineer
                    </p>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                style={{ opacity: opacity2, x: x2 }}
                className="absolute inset-0 flex items-center justify-start p-8 md:pl-32 max-w-4xl"
            >
                <div>
                    <h2 className="text-3xl md:text-7xl font-semibold text-white leading-[1.1] mb-6">
                        Logic meets <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Design.
                        </span>
                    </h2>
                    <p className="text-sm md:text-xl text-white/70 max-w-md leading-relaxed">
                        Leveraging a background in Information Technology to build efficient software solutions. From pixel-perfect UI to deep learning logic.
                    </p>
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                style={{ opacity: opacity3, x: x3 }}
                className="absolute inset-0 flex items-center justify-end p-8 md:pr-32"
            >
                <div className="text-right flex flex-col items-end">
                    <h2 className="text-3xl md:text-7xl font-semibold text-white leading-[1.1] mb-6">
                        The <span className="italic font-light text-white/50">Toolkit.</span>
                    </h2>
                    <p className="text-base md:text-lg text-white/70 max-w-lg ml-auto leading-relaxed">
                        Proficient in React.js, JavaScript, Python, and Java. Specializing in Modern Web Architecture, Next.js, Component Systems, SQL Databases, and Creative Design Tools.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
