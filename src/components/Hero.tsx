import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  Download,
  Phone,
  Cloud,
  Settings,
  Database,
  Zap,
  Camera,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './Icons';

interface HeroProps {
  darkMode?: boolean;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Always use /profile.jpg as the permanent default; localStorage only overrides on upload
  const DEFAULT_AVATAR = '/profile.jpg';
  const [avatarUrl, setAvatarUrl] = useState<string>(
    () => localStorage.getItem('custom_user_avatar') || DEFAULT_AVATAR
  );
  const [avatarScale, setAvatarScale] = useState<number>(() => {
    const saved = localStorage.getItem('custom_avatar_scale');
    return saved ? parseFloat(saved) : 0.92;
  });
  const [avatarY, setAvatarY] = useState<number>(() => {
    const saved = localStorage.getItem('custom_avatar_y');
    return saved ? parseInt(saved) : 10;
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setAvatarUrl(result);
        localStorage.setItem('custom_user_avatar', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAvatarUrl(DEFAULT_AVATAR);
    setAvatarScale(0.92);
    setAvatarY(10);
    localStorage.removeItem('custom_user_avatar');
    localStorage.removeItem('custom_avatar_scale');
    localStorage.removeItem('custom_avatar_y');
  };

  const updateScale = (delta: number) => {
    setAvatarScale((prev) => {
      const next = Math.max(0.6, Math.min(1.4, Number((prev + delta).toFixed(2))));
      localStorage.setItem('custom_avatar_scale', next.toString());
      return next;
    });
  };

  const updateY = (delta: number) => {
    setAvatarY((prev) => {
      const next = Math.max(-50, Math.min(50, prev + delta));
      localStorage.setItem('custom_avatar_y', next.toString());
      return next;
    });
  };

  // Typewriter effect for role subtitle matching reference
  const roles = [
    "Python Full Stack Developer",
    "FastAPI & REST API Specialist",
    "PostgreSQL & MySQL Developer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        if (currentText === fullRole) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Background ambient lighting from reference */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header (Exact layout and fonts as reference image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Name, Subtitle, Bio, Action Buttons */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Bold Stacked Title */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                <div>Chevvu Harsha</div>
                <div>Vardhan Reddy</div>
              </h1>

              {/* Dynamic Typewriter Subtitle matching reference */}
              <div className="pt-2 text-xl sm:text-2xl font-bold tracking-wide">
                <span className="text-[#c084fc]">
                  {currentText}
                </span>
                <span className="inline-block w-2.5 h-6 bg-[#c084fc] ml-0.5 animate-pulse align-middle" />
              </div>
            </div>

            {/* Academic & Degree Line */}
            <div className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              <strong className="text-white font-semibold">Computer Science & Engineering</strong> graduate from SIMATS Engineering · <span className="text-slate-200">CGPA 8.3/10</span>
            </div>

            {/* Motivation Quote / Current Status */}
            <div className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              <span className="text-base mr-1.5">🚀</span>
              {PERSONAL_INFO.heroDescription}
            </div>

            {/* Action Buttons from Reference */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-[#6366f1] via-[#7c3aed] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white shadow-xl shadow-purple-950/60 hover:shadow-purple-900/80 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Résumé</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-[#130f24] border border-[#2d2448] text-slate-200 hover:text-white hover:bg-[#1c1635] hover:border-purple-800/60 shadow-lg shadow-black/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl font-semibold text-sm bg-purple-950/30 border border-purple-800/40 text-purple-300 hover:bg-purple-900/40 hover:text-white transition-all hover:-translate-y-0.5"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>View Projects</span>
              </a>
            </div>

            {/* Social Pill Buttons matching reference rounded squares */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-[#130f24] border border-[#2d2448] flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-500 hover:scale-105 transition-all shadow-md"
                title="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-2xl bg-[#130f24] border border-[#2d2448] flex items-center justify-center text-slate-300 hover:text-purple-300 hover:border-purple-500 hover:scale-105 transition-all shadow-md"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-11 h-11 rounded-2xl bg-[#130f24] border border-[#2d2448] flex items-center justify-center text-slate-300 hover:text-pink-300 hover:border-pink-500 hover:scale-105 transition-all shadow-md"
                title="Email Harsha"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-11 h-11 rounded-2xl bg-[#130f24] border border-[#2d2448] flex items-center justify-center text-slate-300 hover:text-emerald-300 hover:border-emerald-500 hover:scale-105 transition-all shadow-md"
                title="Phone Number"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Circular Glowing Profile with Floating Tech Badges (Exact match to reference) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 flex items-center justify-center group">
              
              {/* Hidden File Input for Image Upload */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />

              {/* Radiant Neon Halo Halo Glow */}
              <div className="absolute inset-0 rounded-full neon-halo -z-10 pointer-events-none" />

              {/* Animated Gradient Halo Border Ring */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-2 rounded-full p-1.5 bg-gradient-to-tr from-[#ec4899] via-[#8b5cf6] to-[#38bdf8] shadow-2xl cursor-pointer"
                title="Click to change photo"
              >
                {/* Inner Image Container with clean white background matching photo */}
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white flex items-center justify-center relative shadow-inner">
                  <img
                    src={avatarUrl}
                    alt="Chevvu Harsha Vardhan Reddy - Python Full Stack Developer"
                    style={{
                      transform: `scale(${avatarScale}) translateY(${avatarY}px)`,
                      transformOrigin: 'center center',
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-300 pointer-events-none"
                  />

                  {/* Hover Overlay with Camera Icon */}
                  <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white">
                    <Camera className="w-8 h-8 text-purple-300 animate-bounce" />
                    <span className="text-xs font-mono-code font-bold tracking-wider uppercase bg-[#140f28]/95 px-3 py-1 rounded-full border border-purple-500/50 text-purple-200">
                      Change Photo
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge: Code Bracket { } */}
              <div className="absolute -top-2 left-6 p-3.5 rounded-2xl bg-[#141026]/90 border border-[#2d2448] text-cyan-400 shadow-2xl animate-float backdrop-blur-md pointer-events-none">
                <span className="font-mono-code font-bold text-sm">&#123; &#125;</span>
              </div>

              {/* Floating Tech Badge: Settings / Gears ⚙ */}
              <div className="absolute top-12 -right-3 p-3.5 rounded-2xl bg-[#141026]/90 border border-[#2d2448] text-pink-400 shadow-2xl animate-float backdrop-blur-md [animation-delay:1s] pointer-events-none">
                <Settings className="w-5 h-5" />
              </div>

              {/* Floating Tech Badge: Cloud ☁ */}
              <div className="absolute bottom-12 -left-4 p-3.5 rounded-2xl bg-[#141026]/90 border border-[#2d2448] text-purple-400 shadow-2xl animate-float backdrop-blur-md [animation-delay:2s] pointer-events-none">
                <Cloud className="w-5 h-5" />
              </div>

              {/* Floating Tech Badge: Database / Doc 📄 */}
              <div className="absolute -bottom-2 right-8 p-3.5 rounded-2xl bg-[#141026]/90 border border-[#2d2448] text-indigo-400 shadow-2xl animate-float backdrop-blur-md [animation-delay:1.5s] pointer-events-none">
                <Database className="w-5 h-5" />
              </div>

            </div>

            {/* Photo Adjust & Upload Toolbar */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-code bg-[#141026] border border-[#2d2448] hover:border-purple-500 text-slate-300 hover:text-purple-300 transition-colors shadow-sm"
              >
                <Camera className="w-3.5 h-3.5 text-purple-400" />
                <span>Upload Photo</span>
              </button>

              {/* Image Fine-Tuning Pill */}
              <div className="flex items-center bg-[#141026] border border-[#2d2448] rounded-xl px-1.5 py-0.5 gap-1">
                <button
                  onClick={() => updateScale(-0.05)}
                  className="p-1 rounded-lg hover:bg-purple-950 text-slate-300 hover:text-purple-300 transition-colors"
                  title="Zoom Out (Fit more hair)"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => updateScale(0.05)}
                  className="p-1 rounded-lg hover:bg-purple-950 text-slate-300 hover:text-purple-300 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <div className="w-px h-3 bg-[#2d2448] mx-0.5" />
                <button
                  onClick={() => updateY(4)}
                  className="p-1 rounded-lg hover:bg-purple-950 text-slate-300 hover:text-purple-300 transition-colors"
                  title="Shift Photo Down"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => updateY(-4)}
                  className="p-1 rounded-lg hover:bg-purple-950 text-slate-300 hover:text-purple-300 transition-colors"
                  title="Shift Photo Up"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
              </div>

              {(avatarUrl !== DEFAULT_AVATAR || avatarScale !== 0.92 || avatarY !== 10) && (
                <button
                  onClick={handleResetAvatar}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-mono-code bg-[#141026] border border-[#2d2448] hover:border-rose-500 text-slate-400 hover:text-rose-300 transition-colors"
                  title="Reset to default settings"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
