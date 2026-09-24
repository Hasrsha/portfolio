import React, { useState } from 'react';
import {
  Truck,
  FolderGit2,
  CheckCircle2,
  Database,
  Layers,
  Sparkles,
  Search,
  MapPin,
  Package
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectDetailModal } from './ProjectDetailModal';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Interactive state for Job Portal demo card
  const [jobSearchTerm, setJobSearchTerm] = useState('');
  const [selectedJobId, setSelectedJobId] = useState<number>(1);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);

  // Interactive state for Logistics demo card
  const trackingNumber = 'TRK-2026-8849';
  const [trackingStep, setTrackingStep] = useState<number>(3); // 1: Order Placed, 2: Dispatched, 3: In Transit, 4: Delivered

  const mockJobs = [
    { id: 1, title: 'Python Backend Engineer', company: 'NovaTech Systems', location: 'Bengaluru / Remote', type: 'Full-time', salary: '₹8 - 12 LPA', applicants: 18 },
    { id: 2, title: 'FastAPI API Developer', company: 'DataScale Logistics', location: 'Hyderabad / Hybrid', type: 'Full-time', salary: '₹7 - 10 LPA', applicants: 24 },
    { id: 3, title: 'Junior Full Stack Developer', company: 'CloudCore Inc', location: 'Chennai', type: 'Full-time', salary: '₹6 - 9 LPA', applicants: 31 },
  ];

  const handleApplyJob = (id: number) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs([...appliedJobs, id]);
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      {/* Glow highlight */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono-code font-semibold tracking-wider uppercase bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Projects</span>
          </h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            End-to-end full-stack systems engineered with <strong>Python, FastAPI, Relational Databases</strong>, and reactive frontends.
          </p>
        </div>

        {/* Projects Container */}
        <div className="space-y-16 lg:space-y-24">
          
          {/* PROJECT 1: Full-Stack Job Portal */}
          <div
            id="job-portal-card"
            className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-2xl ${
              darkMode
                ? 'bg-slate-900/80 border-slate-700/80 shadow-cyan-950/20'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Column: Project Overview & Tech Details */}
              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                      2026 • Full-Stack Web Application
                    </span>
                    <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1">
                      <Database className="w-3.5 h-3.5 text-cyan-400" />
                      <span>MySQL Database</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className={`text-2xl sm:text-3xl font-display font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Full-Stack Job Portal
                    </h3>
                    <p className="text-xs font-mono-code text-cyan-400 font-semibold mt-1">
                      FastAPI Backend • MySQL DB • User Auth • Job Search & Applicant Tracking
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Developed a full-stack job portal that enables employers to post job openings and job seekers to search and apply for jobs. Built complete REST API backend services and responsive client interfaces.
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Python', 'FastAPI', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'REST APIs'].map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono-code font-medium border ${
                          darkMode
                            ? 'bg-slate-950/70 border-slate-700/70 text-slate-200'
                            : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features Bullet Points */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-400">
                      Core Capabilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        'User authentication & sessions',
                        'Employer job posting portal',
                        'Real-time job searching & filters',
                        'One-click job application submission',
                        'Application status tracking pipeline',
                        'Responsive frontend layouts',
                      ].map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/40 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[0])}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
                  >
                    <Layers className="w-4 h-4" />
                    <span>View Architecture & API Specs</span>
                  </button>

                  <a
                    href={PROJECTS[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono-code font-medium border transition-colors ${
                      darkMode
                        ? 'bg-slate-950 border-slate-700 text-slate-200 hover:bg-slate-800'
                        : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Job Portal UI Mockup */}
              <div className="lg:col-span-6 bg-slate-950/90 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
                <div className="space-y-4">
                  
                  {/* Mockup Header Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-bold text-xs">
                        JP
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-100">JobPortal Pro • Client UI</div>
                        <div className="text-[10px] font-mono-code text-cyan-400">FastAPI Async Engine Active</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      MySQL Connected
                    </span>
                  </div>

                  {/* Interactive Search Bar */}
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search jobs by title or skill (e.g. Python, FastAPI)..."
                      value={jobSearchTerm}
                      onChange={(e) => setJobSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  {/* Job Listings List */}
                  <div className="space-y-2.5">
                    {mockJobs
                      .filter(
                        (j) =>
                          j.title.toLowerCase().includes(jobSearchTerm.toLowerCase()) ||
                          j.company.toLowerCase().includes(jobSearchTerm.toLowerCase())
                      )
                      .map((job) => {
                        const isApplied = appliedJobs.includes(job.id);
                        return (
                          <div
                            key={job.id}
                            onClick={() => setSelectedJobId(job.id)}
                            className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                              selectedJobId === job.id
                                ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-950/40'
                                : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <h5 className="font-semibold text-xs text-white">{job.title}</h5>
                                <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1.5">
                                  <span>{job.company}</span>
                                  <span>•</span>
                                  <span className="text-cyan-400">{job.location}</span>
                                </p>
                              </div>
                              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                                {job.salary}
                              </span>
                            </div>

                            <div className="mt-3 flex items-center justify-between text-[11px] pt-2 border-t border-slate-800/60">
                              <span className="text-slate-400 font-mono-code">{job.applicants} applied</span>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleApplyJob(job.id);
                                }}
                                className={`px-3 py-1 rounded-lg text-xs font-semibold font-mono-code transition-all ${
                                  isApplied
                                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                    : 'bg-cyan-600 hover:bg-cyan-500 text-white'
                                }`}
                              >
                                {isApplied ? '✓ Application Sent' : 'Easy Apply'}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                </div>

                {/* Interactive Status Footer */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                  <span className="text-cyan-400">Interactive Preview Simulator</span>
                  <span>{appliedJobs.length} Active Applications</span>
                </div>
              </div>

            </div>
          </div>


          {/* PROJECT 2: Real-Time Logistics & Delivery Tracking System */}
          <div
            id="logistics-card"
            className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-2xl ${
              darkMode
                ? 'bg-slate-900/80 border-slate-700/80 shadow-emerald-950/20'
                : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left Column: Project Overview & Tech Details */}
              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      2026 • Real-Time Logistics Platform
                    </span>
                    <span className="text-xs font-mono-code text-slate-400 flex items-center gap-1">
                      <Database className="w-3.5 h-3.5 text-emerald-400" />
                      <span>PostgreSQL + SQLAlchemy</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className={`text-2xl sm:text-3xl font-display font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      Real-Time Logistics & Delivery Tracking System
                    </h3>
                    <p className="text-xs font-mono-code text-emerald-400 font-semibold mt-1">
                      FastAPI • PostgreSQL • JWT Authentication • Role-Based Dashboards
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    Developed a full-stack logistics management system to create, assign, and track delivery orders through a web application with role-based access control and live order lifecycle tracking.
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT Auth', 'HTML', 'CSS', 'JavaScript', 'REST APIs'].map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono-code font-medium border ${
                          darkMode
                            ? 'bg-slate-950/70 border-slate-700/70 text-slate-200'
                            : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features Bullet Points */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono-code font-bold uppercase tracking-wider text-slate-400">
                      System Capabilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        'Customer order creation & tracking',
                        'Delivery agent assignment workflows',
                        'Admin dispatch & fleet monitoring',
                        'Real-time order stage progression',
                        'JWT token authentication & RBAC',
                        'ACID-safe PostgreSQL transactions',
                      ].map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/40 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[1])}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs shadow-md shadow-emerald-500/20 transition-all hover:scale-105"
                  >
                    <Layers className="w-4 h-4" />
                    <span>View Architecture & API Specs</span>
                  </button>

                  <a
                    href={PROJECTS[1].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono-code font-medium border transition-colors ${
                      darkMode
                        ? 'bg-slate-950 border-slate-700 text-slate-200 hover:bg-slate-800'
                        : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
                    }`}
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Logistics Dispatcher & Package Tracker */}
              <div className="lg:col-span-6 bg-slate-950/90 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
                <div className="space-y-4">
                  
                  {/* Mockup Header Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
                        <Truck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-100">Logistics Hub • Live Dispatch</div>
                        <div className="text-[10px] font-mono-code text-emerald-400">SQLAlchemy ORM + PostgreSQL</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                      JWT RBAC Active
                    </span>
                  </div>

                  {/* Shipment Tracking Box */}
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400 text-[11px] font-mono-code">Tracking ID:</span>
                        <div className="font-mono-code font-bold text-emerald-400">{trackingNumber}</div>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-400 text-[11px] font-mono-code">Carrier Agent:</span>
                        <div className="font-semibold text-slate-200">Ramesh Kumar (ID #402)</div>
                      </div>
                    </div>

                    {/* Stepper Progress Bar */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-mono-code text-slate-400 flex items-center justify-between">
                        <span>Milestone Progression</span>
                        <span className="text-emerald-400 font-bold">Stage {trackingStep} of 4</span>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-1.5">
                        {['Order Placed', 'Dispatched', 'Out for Delivery', 'Delivered'].map((stepName, i) => {
                          const stepIdx = i + 1;
                          const isComplete = trackingStep >= stepIdx;
                          return (
                            <button
                              key={stepName}
                              onClick={() => setTrackingStep(stepIdx)}
                              className={`p-2 rounded-lg text-center transition-all ${
                                isComplete
                                  ? 'bg-emerald-950/80 border border-emerald-500/60 text-emerald-300'
                                  : 'bg-slate-950 border border-slate-800 text-slate-500'
                              }`}
                            >
                              <div className="text-[10px] font-bold font-mono-code">Step {stepIdx}</div>
                              <div className="text-[9px] truncate font-medium">{stepName}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Live Dispatch Detail Card */}
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[11px] text-slate-300">
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-rose-400" />
                          <span>Origin Hub: Chennai Freight Depot</span>
                        </span>
                        <span className="text-emerald-400 font-mono-code font-bold">ETA: 45 Mins</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-300">
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <Package className="w-3.5 h-3.5 text-amber-400" />
                          <span>Destination: Electronic City, Bengaluru</span>
                        </span>
                        <span className="text-slate-400 font-mono-code">Weight: 2.4 kg</span>
                      </div>
                    </div>

                  </div>

                  {/* Multi-role Selector buttons */}
                  <div className="flex items-center gap-2 text-xs font-mono-code">
                    <span className="text-[11px] text-slate-400">Role View:</span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300 text-[10px]">
                      Customer View
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-300 text-[10px]">
                      Agent View
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-purple-300 text-[10px]">
                      Admin View
                    </span>
                  </div>

                </div>

                {/* Interactive Status Footer */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                  <span className="text-emerald-400">Interactive Stepper Simulation</span>
                  <span>PostgreSQL ACID Certified</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />
    </section>
  );
};
