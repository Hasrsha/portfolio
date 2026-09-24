import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Timeline } from './components/Timeline';
import { WhyHireMe } from './components/WhyHireMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { SmokeEffect } from './components/SmokeEffect';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    // Ensure dark space theme is permanently locked
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-deep-space text-slate-100 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Star dust ambient particle background */}
      <div className="fixed inset-0 pointer-events-none -z-10 space-particles opacity-60" />
      
      {/* Navigation */}
      <Navbar
        darkMode={true}
        setDarkMode={() => {}}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content */}
      <main className="relative">
        <Hero
          darkMode={true}
          onOpenResume={() => setResumeModalOpen(true)}
        />
        <About darkMode={true} />
        <Skills darkMode={true} />
        <Projects darkMode={true} />
        <Education darkMode={true} />
        <Certifications darkMode={true} />
        <Timeline darkMode={true} />
        <WhyHireMe
          darkMode={true}
          onOpenResume={() => setResumeModalOpen(true)}
        />
        <Contact darkMode={true} />
      </main>

      {/* Footer */}
      <Footer darkMode={true} />

      {/* Interactive Mouse Smoke Burst Effect */}
      <SmokeEffect />

      {/* Printable / Downloadable Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        darkMode={true}
      />
    </div>
  );
}

export default App;
