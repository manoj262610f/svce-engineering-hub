import { STUDENT_INFO, SITE_META } from '../data/config';
import { MessageCircle, Linkedin, Mail, ExternalLink, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
}

export default function Footer({ onOpenWhatsApp }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070D18] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-10">
          
          {/* Col 1: Brand & Creator Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0B1528] border border-amber-500/30 flex items-center justify-center text-amber-400 font-black font-mono text-xs shadow-xs">
                SVCE
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                SVCE Engineering Hub
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An independent student-created initiative by <strong>{STUDENT_INFO.name}</strong>, 1st-year B.Tech Electronics and Communication Engineering student at Sri Venkateshwara College of Engineering (SVCE).
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              <span>Official Academic Directory • AY 2026–2030</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#internships" className="hover:text-indigo-400 transition-colors">
                  Internships (Hardware & Software)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-indigo-400 transition-colors">
                  Courses & Bootcamps
                </a>
              </li>
              <li>
                <a href="#engineering" className="hover:text-indigo-400 transition-colors">
                  Hackathons & Competitions
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">
                  Project Blueprints & Events
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-indigo-400 transition-colors">
                  Career & Resume Toolkits
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">
                  About M. Manoj (Creator)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Social Placeholders */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Connect & Reach Out
            </p>
            <p className="text-[11px] text-slate-400">
              Connect with M. Manoj or join the student updates broadcast:
            </p>

            <div className="space-y-2 pt-1">
              {/* WhatsApp */}
              <button
                type="button"
                onClick={onOpenWhatsApp}
                className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Community</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">
                  {STUDENT_INFO.whatsappGroupLink === 'YOUR_WHATSAPP_GROUP_LINK' ? 'Config link' : 'Join'}
                </span>
              </button>

              {/* LinkedIn */}
              <a
                href={STUDENT_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-slate-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${STUDENT_INFO.email}`}
                className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-purple-400 border border-slate-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <span>{STUDENT_INFO.email}</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] text-slate-400 mb-8 leading-relaxed">
          <p className="flex items-start gap-1.5">
            <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <span>
              <strong>Disclaimer:</strong> {SITE_META.disclaimer} All opportunities, internships, and programs are shared strictly for educational awareness and student growth.
            </span>
          </p>
        </div>

        {/* Bottom copyright line - exactly as requested */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p id="footer-copyright-text" className="text-xs text-slate-400 text-center sm:text-left font-medium">
            © 2026 SVCE Engineering Hub • Created by M. Manoj
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
