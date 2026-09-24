import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

interface CertificationsProps {
  darkMode: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono-code font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Award className="w-3.5 h-3.5" />
            <span>Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Certifications</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Verified technical certifications validating hands-on skills in Python programming, Full-Stack engineering, and Database management.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800/90 hover:border-cyan-500/40 shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono-code font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                    {cert.year}
                  </span>
                  <span className="text-xs font-mono-code text-slate-400 font-semibold">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className={`text-xl font-display font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono-code text-cyan-500 font-medium mt-0.5">
                    {cert.badge}
                  </div>
                </div>

                {/* Skills Gained List */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono-code uppercase font-bold text-slate-400">
                    Key Competencies Acquired:
                  </div>
                  <ul className="space-y-1.5 text-xs">
                    {cert.skillsGained.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/30 flex items-center justify-between text-xs font-mono-code text-slate-400">
                <span className="truncate">ID: {cert.credentialId}</span>
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
