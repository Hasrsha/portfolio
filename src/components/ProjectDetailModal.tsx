import React, { useState } from 'react';
import {
  X,
  Code2,
  CheckCircle2,
  FolderGit2,
  Layers,
  Boxes,
  Workflow,
  Terminal
} from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'architecture' | 'endpoints'>('details');
  const [testEndpointIndex, setTestEndpointIndex] = useState<number>(0);
  const [testedResponse, setTestedResponse] = useState<string | null>(null);

  if (!project) return null;

  const handleTestApi = (index: number) => {
    setTestEndpointIndex(index);
    setTestedResponse(null);
    setTimeout(() => {
      setTestedResponse(project.sampleEndpoints[index].responseSample);
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden transition-all ${
          darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/40 bg-slate-950/40">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {project.year} • {project.category}
            </span>
            <h3 className="font-display font-bold text-lg sm:text-xl truncate">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex items-center gap-2 px-6 py-2 border-b border-slate-800/40 bg-slate-950/20 overflow-x-auto text-xs font-mono-code">
          <button
            onClick={() => setActiveTab('details')}
            className={`px-3 py-2 rounded-lg font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'details'
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Scope</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-2 rounded-lg font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>Architecture & Data Flow</span>
          </button>

          <button
            onClick={() => setActiveTab('endpoints')}
            className={`px-3 py-2 rounded-lg font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'endpoints'
                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>REST API Contracts</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          
          {activeTab === 'details' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono-code uppercase font-bold text-cyan-400 mb-2">Project Overview</h4>
                <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {project.description}
                </p>
              </div>

              {/* Technologies Pill Grid */}
              <div>
                <h4 className="text-xs font-mono-code uppercase font-bold text-slate-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-mono-code font-medium bg-slate-800/80 text-cyan-300 border border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical Implementation details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className="font-display font-bold text-sm mb-3 flex items-center gap-2 text-cyan-400">
                    <Code2 className="w-4 h-4" />
                    <span>Technical Highlights</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {project.technicalDetails.map((td, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{td}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`p-4 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <h4 className="font-display font-bold text-sm mb-3 flex items-center gap-2 text-emerald-400">
                    <Boxes className="w-4 h-4" />
                    <span>Functional Features</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {project.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <h4 className="font-display font-bold text-base mb-4 flex items-center gap-2 text-emerald-400">
                  <Workflow className="w-5 h-5" />
                  <span>Layered Architecture Diagram</span>
                </h4>

                <div className="space-y-3 font-mono-code text-xs">
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/60 text-cyan-300">
                    <div className="font-bold flex items-center justify-between">
                      <span>[1] Presentation Layer</span>
                      <span className="text-[10px] uppercase">Client Browser</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1">Responsive HTML5 + CSS3 + Async JavaScript Fetch API</p>
                  </div>

                  <div className="text-center text-slate-500 font-bold">↓ HTTP / REST JSON Requests ↓</div>

                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/60 text-purple-300">
                    <div className="font-bold flex items-center justify-between">
                      <span>[2] Application & API Layer</span>
                      <span className="text-[10px] uppercase">FastAPI Server</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1">Pydantic Schemas, JWT Auth Guard, APIRouter modular endpoints</p>
                  </div>

                  <div className="text-center text-slate-500 font-bold">↓ SQLAlchemy ORM Mapping ↓</div>

                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-300">
                    <div className="font-bold flex items-center justify-between">
                      <span>[3] Relational Database Layer</span>
                      <span className="text-[10px] uppercase">
                        {project.id === 'job-portal' ? 'MySQL Database' : 'PostgreSQL Database'}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1">Normalized schema with foreign keys, transactional safety, and indexes</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {project.architecturePoints.map((ap, i) => (
                  <div key={i} className={`p-3.5 rounded-xl border ${darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                    <h5 className="font-bold text-xs text-cyan-400 mb-1">{ap.title}</h5>
                    <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{ap.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'endpoints' && (
            <div className="space-y-4 font-mono-code">
              <div className="text-xs text-slate-400">
                Select an endpoint below to preview the FastAPI JSON response contract:
              </div>

              <div className="grid grid-cols-1 gap-2">
                {project.sampleEndpoints.map((ep, i) => (
                  <button
                    key={i}
                    onClick={() => handleTestApi(i)}
                    className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                      testEndpointIndex === i
                        ? 'bg-slate-800 border-cyan-500/50 shadow-md'
                        : darkMode
                        ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          ep.method === 'GET'
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : ep.method === 'POST'
                            ? 'bg-blue-950 text-blue-400 border border-blue-800'
                            : 'bg-amber-950 text-amber-400 border border-amber-800'
                        }`}
                      >
                        {ep.method}
                      </span>
                      <span className="text-xs text-slate-200 font-semibold">{ep.path}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 hidden sm:inline">{ep.desc}</span>
                  </button>
                ))}
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs text-slate-400">
                  <span>FastAPI Sample Response</span>
                  <span className="text-emerald-400 font-bold">200 OK</span>
                </div>
                <pre className="text-cyan-300 text-xs overflow-x-auto leading-relaxed max-h-48">
                  {testedResponse || project.sampleEndpoints[testEndpointIndex].responseSample}
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800/40 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono-code font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow hover:opacity-90 transition-opacity"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
