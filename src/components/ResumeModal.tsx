import React, { useEffect } from 'react';
import { X, Printer, ArrowLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_LIST, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
          darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-950/90 text-white print:hidden">
          
          {/* Back Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 hover:text-cyan-300 font-semibold text-xs transition-all shadow-sm active:scale-95"
            title="Back to portfolio"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          {/* Center Title */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono-code text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Resume • Harsha Vardhan Reddy</span>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow transition-all active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-12 overflow-y-auto space-y-6 text-sm bg-white text-slate-900 print:p-0">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-4">
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 uppercase tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-800 tracking-wide mt-0.5">
              {PERSONAL_INFO.role}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-2">
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-0.5">
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              {PERSONAL_INFO.aboutMe}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-0.5">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1 text-slate-700">
              <div><strong>Programming Languages:</strong> Python, SQL</div>
              <div><strong>Backend & Frameworks:</strong> FastAPI, REST APIs, SQLAlchemy</div>
              <div><strong>Frontend Technologies:</strong> HTML5, CSS3, JavaScript (ES6+)</div>
              <div><strong>Databases:</strong> PostgreSQL, MySQL</div>
              <div><strong>Developer Tools:</strong> GitHub, Swagger / OpenAPI, Visual Studio Code</div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-0.5">
              Full-Stack Software Projects
            </h2>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-slate-900">
                    {proj.title} <span className="font-normal text-slate-600">| {proj.technologies.join(', ')}</span>
                  </h3>
                  <span className="text-xs font-semibold text-slate-700">{proj.year}</span>
                </div>
                <p className="text-[11px] text-slate-700">{proj.description}</p>
                <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-0.5">
                  {proj.technicalDetails.map((td, i) => (
                    <li key={i}>{td}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-0.5">
              Education
            </h2>
            {EDUCATION_LIST.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-baseline text-xs">
                <div>
                  <div className="font-bold text-slate-900">{edu.degree}</div>
                  <div className="text-slate-600">{edu.institution}, {edu.location}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-slate-900">{edu.scoreLabel}: {edu.score}</div>
                  <div className="text-slate-600">{edu.year}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold font-mono-code uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-0.5">
              Certifications
            </h2>
            <div className="text-xs space-y-1 text-slate-700">
              {CERTIFICATIONS.map((c, i) => (
                <div key={i} className="flex justify-between">
                  <span><strong>{c.title}</strong> — {c.issuer}</span>
                  <span className="font-semibold">{c.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-800 bg-slate-950/90 text-white print:hidden">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow hover:opacity-90 transition-opacity"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Download / Print Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
};
