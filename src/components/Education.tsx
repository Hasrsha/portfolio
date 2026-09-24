import React from 'react';
import { GraduationCap, MapPin, CheckCircle } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

interface EducationProps {
  darkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section id="education" className={`py-20 md:py-28 relative ${
      darkMode ? 'bg-slate-950/40' : 'bg-slate-50/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono-code font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Education <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Timeline</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Consistent academic excellence in Computer Science and Engineering with foundational analytical strength.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION_LIST.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 relative group hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800/90 hover:border-cyan-500/40 shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Left side details */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono-code font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-display font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.degree}
                  </h3>

                  <div className="text-sm font-semibold text-cyan-500">
                    {item.institution}
                  </div>
                </div>

                {/* Right side Score Badge */}
                <div className={`sm:text-right shrink-0 p-3.5 rounded-2xl border ${
                  darkMode
                    ? 'bg-slate-950/70 border-slate-800'
                    : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="text-[10px] font-mono-code uppercase font-semibold text-slate-400">
                    {item.scoreLabel}
                  </div>
                  <div className="text-2xl font-display font-black text-cyan-400">
                    {item.score}
                  </div>
                </div>

              </div>

              {/* Highlights */}
              <div className="mt-5 pt-4 border-t border-slate-800/30 space-y-2">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{h}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
