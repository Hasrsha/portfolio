import React from 'react';
import {
  Code,
  Layers,
  Zap,
  Database,
  FolderGit2,
  Network,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  HeartHandshake
} from 'lucide-react';
import { WHY_HIRE_ME_POINTS } from '../data/portfolioData';

interface WhyHireMeProps {
  darkMode: boolean;
  onOpenResume: () => void;
}

export const WhyHireMe: React.FC<WhyHireMeProps> = ({ darkMode, onOpenResume }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'FolderGit2':
        return <FolderGit2 className="w-5 h-5 text-purple-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-pink-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-cyan-300" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="why-hire-me" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono-code font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Value Proposition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Hire Me</span>?
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            An enthusiastic, entry-level Python Full Stack Developer equipped with hands-on architectural experience and a strong learning drive.
          </p>
        </div>

        {/* 8 Core Strengths Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_HIRE_ME_POINTS.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800/90 hover:border-cyan-500/40 shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>

                <h3 className={`text-base font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>

                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/20 flex items-center gap-1.5 text-[10px] font-mono-code text-cyan-500 font-semibold">
                <span>Entry-Level Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* Candidate Summary Card */}
        <div className={`mt-12 p-8 rounded-3xl border text-center max-w-4xl mx-auto space-y-4 ${
          darkMode
            ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-slate-800'
            : 'bg-gradient-to-b from-cyan-50/50 to-white border-cyan-200'
        }`}>
          <h3 className={`text-xl font-display font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Ready to contribute to your engineering team from Day One
          </h3>
          <p className={`text-sm max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            I bring solid foundations in Python, REST API development with FastAPI, and relational database modeling (PostgreSQL & MySQL), coupled with an eagerness to adapt to team coding standards and deliver reliable software solutions.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-md hover:opacity-90 transition-opacity"
            >
              Schedule an Interview
            </a>
            <button
              onClick={onOpenResume}
              className={`px-6 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800'
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              Review Full Resume
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
