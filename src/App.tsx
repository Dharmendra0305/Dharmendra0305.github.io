import { ThemeProvider } from '@/hooks/useTheme';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import WhyHireMe from '@/components/WhyHireMe';
import Contact from '@/components/Contact';
import Footer, { BackToTop } from '@/components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="theme-root relative min-h-screen overflow-x-hidden bg-slate-950 text-white antialiased">
        <AnimatedBackground />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Stats />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <WhyHireMe />
          <Contact />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
