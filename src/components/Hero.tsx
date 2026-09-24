import React, { useState, useEffect } from 'react';
import {
  Mail,
  Download,
  Phone,
  Cloud,
  Settings,
  Database,
  Zap,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

interface HeroProps {
  darkMode?: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Typewriter effect
  const roles = [
    "Python Full Stack Developer",
    "FastAPI & REST API Specialist",
    "PostgreSQL & MySQL Developer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        if (currentText === fullRole) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Mobile: Photo on top centered | Desktop: hidden here, shown in right col */}
          <div className="flex lg:hidden justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full neon-halo -z-10 pointer-events-none" />
              <div className="absolute inset-2 rounded-full p-1.5 bg-gradient-to-tr from-[#ec4899] via-[#8b5cf6] to-[#38bdf8] shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white flex items-center justify-center shadow-inner">
                  <img
                    src="/profile.jpg"
                    alt="Chevvu Harsha Vardhan Reddy"
                    className="w-full h-full object-cover object-top pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Left Column — Text */}
          <div className="lg:col-span-7 text-left space-y-6">

            {/* Bold Stacked Title */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                <div>Chevvu Harsha</div>
                <div>Vardhan Reddy</div>
              </h1>

              {/* Typewriter Subtitle */}
              <div className="pt-2 text-xl sm:text-2xl font-bold tracking-wide">
                <span className="text-[#c084fc]">
                  {currentText}
                </span>
                <span className="inline-block w-2.5 h-6 bg-[#c084fc] ml-0.5 animate-pulse align-middle" />
              </div>
            </div>

            {/* Academic Line */}
            <div className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              <strong className="text-white font-semibold">Computer Science &amp; Engineering</strong> graduate from SIMATS Engineering · <span className="text-slate-200">CGPA 8.3/10</span>
            </div>

            {/* Bio */}
            <div className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              <span className="text-base mr-1.5">🚀</span>
              {PERSONAL_INFO.heroDescription}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-[#6366f1] via-[#7c3aed] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white shadow-xl shadow-purple-950/60 hover:shadow-purple-900/80 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Résumé</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-[#130f24] border border-[#2d2448] text-slate-200 hover:text-white hover:bg-[#1c1635] hover:border-purple-800/60 shadow-lg shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm bg-purple-950/30 border border-purple-800/40 text-purple-300 hover:bg-purple-900/40 hover:text-white transition-all hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>View Projects</span>
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-[#130f24] border border-[#2d2448] flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500 hover:scale-105 transition-all shadow-md"
                title="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-[#130f24] border border-[#2d2448] flex items-center justify-center text-slate-300 hover:text-purple-300 hover:border-purple-500 hover:scale-105 transition-all shadow-md"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-11 h-11 rounded-2xl bg-[#130f24] border border-[#2d2448] flex items-center justify-center text-slate-300 hover:text-pink-300 hover:border-pink-500 hover:scale-105 transition-all shadow-md"
                title="Email Harsha"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-11 h-11 rounded-2xl bg-[#130f24] border border-[#2d2448] flex items-center justify-center text-slate-300 hover:text-emerald-300 hover:border-emerald-500 hover:scale-105 transition-all shadow-md"
                title="Phone Number"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Static Profile Photo — Desktop only */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 flex items-center justify-center">

              {/* Neon Halo Glow */}
              <div className="absolute inset-0 rounded-full neon-halo -z-10 pointer-events-none" />

              {/* Gradient Border Ring */}
              <div className="absolute inset-2 rounded-full p-1.5 bg-gradient-to-tr from-[#ec4899] via-[#8b5cf6] to-[#38bdf8] shadow-2xl">
                {/* Image Container */}
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white flex items-center justify-center shadow-inner">
                  <img
                    src="/profile.jpg"
                    alt="Chevvu Harsha Vardhan Reddy - Python Full Stack Developer"
                    className="w-full h-full object-cover object-top pointer-events-none"
                  />
                </div>
              </div>

              {/* Floating Tech Badge: { } */}
              <div className="absolute -top-2 left-6 p-3.5 rounded-2xl bg-[#141026]/90 border border-[#2d2448] text-cyan-400 shadow-2xl animate-float backdrop-blur-md pointer-events-none">
                <span className="font-mono-code font-bold text-sm">&#123; &#125;</span>
              </div>

              {/* Floating Tech Badge: ⚙ */}
              <div className="absolute top-12 -right-3 p-3.5 rounded-2xl bg-[#141026]/90 border border-[#2d2448] text-pink-400 shadow-2xl animate-float backdrop-blur-md [animation-delay:1s] pointer-events-none">
                <Settings className="w-5 h-5" />
              </div>

              {/* Floating Tech Badge: ☁ */}
              <div className="absolute bottom-12 -left-4 p-3.5 rounded-2xl bg-[#141026]/90 border border-[#2d2448] text-purple-400 shadow-2xl animate-float backdrop-blur-md [animation-delay:2s] pointer-events-none">
                <Cloud className="w-5 h-5" />
              </div>

              {/* Floating Tech Badge: 🗄 */}
              <div className="absolute -bottom-2 right-8 p-3.5 rounded-2xl bg-[#141026]/90 border border-[#2d2448] text-indigo-400 shadow-2xl animate-float backdrop-blur-md [animation-delay:1.5s] pointer-events-none">
                <Database className="w-5 h-5" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
