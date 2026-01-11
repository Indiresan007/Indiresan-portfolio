import ScrollyCanvas from './components/ScrollyCanvas';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Navbar from './components/Navbar';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#121212]">
            <Navbar />
            <ScrollyCanvas />
            <div id="projects">
                <Projects />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="education">
                <Education />
            </div>
            <div id="certifications">
                <Certifications />
            </div>

            <footer id="contact" className="relative py-32 px-6 text-center border-t border-white/5 bg-[#121212]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-12">
                        Let's create something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            innovative.
                        </span>
                    </h2>

                    <a
                        href="mailto:indiresan742@gmail.com"
                        className="inline-block text-xl md:text-2xl text-white/80 hover:text-white mb-12 border-b border-white/20 hover:border-white transition-all pb-1"
                    >
                        indiresan742@gmail.com
                    </a>

                    <div className="flex justify-center gap-8 mb-12 md:mb-20">
                        <a
                            href="https://linkedin.com/in/indiresan-kaliyappan-9924b0386"
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



                    <div className="text-white/20 text-xs flex flex-col items-center gap-2">
                        <p>&copy; 2026 INDIRESAN K. All rights reserved.</p>
                    </div>
                </div>


            </footer>
        </main>
    );
}
