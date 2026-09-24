import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Bio */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono-code font-bold text-sm shadow-md">
              &lt;/&gt;
            </div>
            <div>
              <div className={`font-display font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs font-mono-code text-cyan-500">
                {PERSONAL_INFO.role}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono-code">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              title="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-mono-code transition-all hover:-translate-y-0.5 ${
              darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Python, FastAPI architecture mindset & React.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Open for Immediate Hiring</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
