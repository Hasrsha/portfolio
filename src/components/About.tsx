import React from 'react';
import {
  User,
  GraduationCap,
  Sparkles,
  CheckCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { label: "Degree & Specialization", value: "B.E. Computer Science", sub: "SIMATS Engineering (2026)" },
    { label: "Academic Distinction", value: "8.3 CGPA", sub: "Top quartile performance" },
    { label: "Core Full-Stack Projects", value: "2 Major Projects", sub: "Job Portal & Logistics Tracker" },
    { label: "Industry Certifications", value: "3 Verified Credentials", sub: "Python, Full-Stack, MySQL" },
  ];

  return (
    <section id="about" className={`py-20 md:py-28 relative ${
      darkMode ? 'bg-slate-950/50' : 'bg-slate-50/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Bridging robust backend engineering with intuitive client interfaces to build dependable software solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/30 shadow-lg shadow-black/20'
                  : 'bg-white border-slate-200/80 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div className="text-xs font-mono-code text-cyan-500 font-semibold mb-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className={`text-xl sm:text-2xl font-bold font-display ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content: Narrative + Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative Column */}
          <div className={`lg:col-span-5 p-7 sm:p-8 rounded-3xl border space-y-5 ${
            darkMode
              ? 'bg-slate-900/70 border-slate-800 shadow-xl'
              : 'bg-white border-slate-200 shadow-md'
          }`}>
            <div className="flex items-center gap-3 pb-2 border-b border-slate-800/40">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Computer Science Graduate
                </h3>
                <p className="text-xs font-mono-code text-cyan-400">Entry-Level Full Stack Engineer</p>
              </div>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              I am a <strong>Computer Science and Engineering graduate</strong> from SIMATS Engineering, Chennai, equipped with hands-on experience developing full-stack web applications from conceptualization to deployment.
            </p>

            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              My engineering approach centers on creating clean, maintainable backend services with <strong>FastAPI and Python</strong>, integrating robust data persistence with <strong>PostgreSQL & MySQL</strong>, and delivering reactive user interfaces with modern JavaScript, HTML5, and CSS3.
            </p>

            <div className="pt-2">
              <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-400 mb-2">
                Engineering Values:
              </div>
              <ul className="space-y-2 text-xs font-mono-code text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Clean API-first design with comprehensive OpenAPI documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strong data integrity and relational schema normalization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Secure session management and JWT authentication flows</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interests & Technical Passions Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className={`text-xl font-display font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Core Technical Focus & Interests
              </h3>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Areas where I channel my coding dedication and continuous skill development:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PERSONAL_INFO.coreInterests.map((interest, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border transition-all duration-200 hover:scale-[1.02] ${
                    darkMode
                      ? 'bg-slate-900/50 border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/80'
                      : 'bg-white border-slate-200/80 hover:border-blue-400 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-semibold mb-1 ${darkMode ? 'text-slate-100' : 'text-slate-800'}`}>
                        {interest.title}
                      </h4>
                      <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {interest.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
