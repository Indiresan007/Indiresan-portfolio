import ScrollyCanvas from './components/ScrollyCanvas';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

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

            <Contact />
        </main>
    );
}
