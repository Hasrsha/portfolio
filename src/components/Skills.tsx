import React, { useState } from 'react';
import {
  Code2,
  Server,
  Layout,
  Database,
  Wrench,
  CheckCircle2,
  Terminal,
  Cpu,
  Box
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-indigo-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Skills</span>
          </h2>
          <p className={`text-base ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Categorized overview of programming languages, backend frameworks, databases, and developer tooling.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 scale-105'
                  : darkMode
                  ? 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className={`rounded-3xl border p-6 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800/90 hover:border-cyan-500/40 shadow-black/20'
                  : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/30">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${group.color} bg-slate-950/60`}>
                      {getCategoryIcon(group.iconName)}
                    </div>
                    <div>
                      <h3 className={`font-display font-bold text-lg ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {group.category}
                      </h3>
                      <span className="text-[11px] font-mono-code text-slate-400">
                        {group.skills.length} core technologies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill List */}
                <div className="space-y-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-xl border transition-colors ${
                        darkMode
                          ? 'bg-slate-950/50 border-slate-800/80 group-hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200/80'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-semibold text-sm ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {skill.level}
                        </span>
                      </div>

                      <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {skill.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-5 pt-3 border-t border-slate-800/30 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                <span>Verified in full-stack projects</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className={`mt-12 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
          darkMode
            ? 'bg-gradient-to-r from-slate-900 via-cyan-950/30 to-slate-900 border-cyan-900/50'
            : 'bg-gradient-to-r from-slate-50 via-cyan-50 to-blue-50 border-cyan-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <h4 className={`text-sm font-bold font-display ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Full Stack Synergy
              </h4>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Combining FastAPI backend logic + SQLAlchemy ORM + PostgreSQL/MySQL databases with responsive frontend interfaces.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-4 py-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono-code font-semibold hover:bg-cyan-500/25 transition-all"
          >
            Explore Projects →
          </a>
        </div>

      </div>
    </section>
  );
};
