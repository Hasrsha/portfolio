import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './Icons';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending message or fallback to mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono-code font-semibold tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            Let's Build <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Something Together</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            I am actively seeking entry-level Python Full Stack Developer opportunities. Feel free to connect or drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-8 rounded-3xl border space-y-6 ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800 shadow-xl'
                : 'bg-white border-slate-200 shadow-md'
            }`}>
              <h3 className={`text-xl font-display font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Email Item */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between transition-colors ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono-code text-slate-400">Email Address</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className={`font-semibold hover:text-cyan-400 transition-colors truncate block ${
                          darkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between transition-colors ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono-code text-slate-400">Phone Number</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className={`font-semibold hover:text-emerald-400 transition-colors ${
                          darkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn Item */}
                <div className={`p-4 rounded-2xl border flex items-center justify-between transition-colors ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <LinkedInIcon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono-code text-slate-400">LinkedIn Profile</div>
                      <a
                        href={PERSONAL_INFO.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold hover:text-blue-400 transition-colors truncate block ${
                          darkMode ? 'text-slate-200' : 'text-slate-800'
                        }`}
                      >
                        {PERSONAL_INFO.linkedInDisplay}
                      </a>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-blue-400 hover:bg-slate-800 transition-colors shrink-0"
                    title="Open LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>

              {/* Status Badge */}
              <div className="pt-2 text-xs font-mono-code text-slate-400 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Immediate Joining Available • Open to Relocation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-3xl border shadow-xl ${
              darkMode
                ? 'bg-slate-900/80 border-slate-800'
                : 'bg-white border-slate-200'
            }`}>
              <h3 className={`text-xl font-display font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a Direct Message
              </h3>

              {isSubmitted ? (
                <div className="p-8 text-center space-y-4 bg-emerald-950/30 border border-emerald-800/60 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                  <p className="text-xs text-slate-300">
                    Your email client has been opened with your message ready to send to Harsha Vardhan Reddy.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-mono-code bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-code uppercase font-semibold text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Recruiter / Engineering Manager"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:border-cyan-500 ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-code uppercase font-semibold text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="hiring@techcompany.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:border-cyan-500 ${
                          darkMode
                            ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code uppercase font-semibold text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Opportunity for Python Full Stack Developer"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:border-cyan-500 ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code uppercase font-semibold text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Harsha, we reviewed your projects and would like to discuss an opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:border-cyan-500 resize-none ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-600'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
