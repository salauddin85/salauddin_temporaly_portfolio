import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Highlights />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
