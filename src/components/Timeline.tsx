import React from 'react';
import { Milestone, GraduationCap, Award, FolderGit2, CheckCircle2 } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/portfolioData';

interface TimelineProps {
  darkMode: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({ darkMode }) => {
  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'certification':
        return <Award className="w-4 h-4 text-emerald-400" />;
      case 'project':
        return <FolderGit2 className="w-4 h-4 text-purple-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="journey" className={`py-20 md:py-28 relative ${
      darkMode ? 'bg-slate-950/50' : 'bg-slate-50/70'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono-code font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Milestone className="w-3.5 h-3.5" />
            <span>Progression & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Developer <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Journey</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            A chronological timeline tracing my academic milestones, skill certifications, and full-stack project builds.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-8 pb-4">
          {TIMELINE_MILESTONES.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8 group">
              
              {/* Year Pill on Left (Desktop) */}
              <div className="hidden md:block absolute -left-28 top-1 text-right w-20">
                <span className="text-xs font-mono-code font-bold px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800 text-cyan-300">
                  {item.year}
                </span>
              </div>

              {/* Node Bullet Circle */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500/80 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                {getMilestoneIcon(item.type)}
              </div>

              {/* Milestone Content Card */}
              <div
                className={`p-5 rounded-2xl border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800/90 group-hover:border-cyan-500/40 shadow-black/20'
                    : 'bg-white border-slate-200 group-hover:border-blue-300 shadow-sm'
                }`}
              >
                {/* Year Pill (Mobile) */}
                <div className="md:hidden inline-block mb-2">
                  <span className="text-[11px] font-mono-code font-bold px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800 text-cyan-300">
                    {item.year}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className={`text-base font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono-code text-cyan-400 font-medium">
                    {item.subtitle}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
