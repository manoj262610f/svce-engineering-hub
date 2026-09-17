import { STUDENT_INFO, SITE_META } from '../data/config';
import { 
  User, 
  GraduationCap, 
  Building2, 
  Calendar, 
  Compass, 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  Share2, 
  MessageCircle,
  Linkedin
} from 'lucide-react';

interface AboutSectionProps {
  onJoinWhatsApp: () => void;
  onOpenContribute: () => void;
}

export default function AboutSection({ onJoinWhatsApp, onOpenContribute }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-[#F8FAFC] border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-white text-slate-800 border border-slate-300 mb-3 uppercase tracking-wider shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>ACADEMIC DIRECTORY & STUDENT DESK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            About SVCE Engineering Hub & ECE Academic Desk
          </h2>
          <p className="text-base text-slate-600 mt-2">
            An open academic directory and career resource ecosystem built for students at Sri Venkateshwara College of Engineering, Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Academic Desk Information */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl p-5 border border-slate-300/80 shadow-xs relative border-l-4 border-l-blue-800">
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200">
                <div className="w-12 h-12 rounded-xl bg-[#0B1528] border border-amber-500/30 flex items-center justify-center text-amber-400 text-lg font-black font-mono shadow-xs shrink-0">
                  ECE
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900 truncate">
                      SVCE ECE Resource Desk
                    </h3>
                    <span className="text-[10px] font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 uppercase tracking-wide">
                      Autonomous
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-700 truncate mt-0.5">
                    Dept. of Electronics & Communication Engineering
                  </p>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    Sri Venkateshwara College of Engineering, Bengaluru
                  </p>
                </div>
              </div>

              {/* Simple compact metadata chips */}
              <div className="grid grid-cols-2 gap-2 pt-3.5 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-medium uppercase">Institution</span>
                  <span className="font-bold text-slate-800 text-xs truncate block">SVCE Bengaluru</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-medium uppercase">Discipline</span>
                  <span className="font-bold text-blue-800 text-xs truncate block">B.E. / B.Tech ECE</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-medium uppercase">Coverage</span>
                  <span className="font-bold text-slate-800 text-xs">Sem 1 to Sem 8</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-400 block font-medium uppercase">Scheme</span>
                  <span className="font-bold text-slate-800 text-xs font-mono">Autonomous 2022+</span>
                </div>
              </div>

              {/* Student curation note */}
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Curated for Students:</strong> Independent peer-maintained repository coordinated to help batchmates access verified job & internship openings, hackathons, skill certifications, and practical engineering projects.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Quote Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-blue-50/50 to-purple-50/40 border border-indigo-100/90 shadow-xs">
              <span className="text-3xl text-indigo-400 font-serif leading-none block mb-2">“</span>
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed italic">
                {STUDENT_INFO.aboutIntro}
              </p>
            </div>

            {/* Why I Started This Platform */}
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Why I Built This Platform</span>
              </h4>
              <p>
                As a 1st-year B.Tech student in Electronics and Communication Engineering at Sri Venkateshwara College of Engineering, I realized how difficult it is for engineering students to find genuine, student-friendly opportunities.
              </p>
              <p>
                Most valuable hackathons, open research internships, and training bootcamps are scattered across hundreds of telegram channels, forums, or buried under commercial promotions.
              </p>
              <p>
                I built <strong>SVCE Engineering Hub</strong> as a dedicated, organized, zero-distraction directory for engineering students. Whether you are searching for your first paid internship, wanting to build hardware projects in ECE, or preparing for technical interviews, this platform gives you verified paths to succeed.
              </p>
            </div>

            {/* 4 Core Guiding Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <h5 className="font-bold text-xs text-slate-900 mb-1 text-blue-600">1. Discover</h5>
                <p className="text-[11px] text-slate-500">
                  Uncover internships and events early before deadlines pass.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <h5 className="font-bold text-xs text-slate-900 mb-1 text-indigo-600">2. Learn</h5>
                <p className="text-[11px] text-slate-500">
                  Access free open tools, circuit simulators, and practical roadmaps.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <h5 className="font-bold text-xs text-slate-900 mb-1 text-purple-600">3. Connect</h5>
                <p className="text-[11px] text-slate-500">
                  Network with fellow engineering peers through our WhatsApp community.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <h5 className="font-bold text-xs text-slate-900 mb-1 text-emerald-600">4. Grow</h5>
                <p className="text-[11px] text-slate-500">
                  Build projects that stand out on resumes and in campus interviews.
                </p>
              </div>
            </div>

            {/* Direct Collaboration Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onJoinWhatsApp}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Join Student Group</span>
              </button>
              
              <button
                type="button"
                onClick={onOpenContribute}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                <Share2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Submit an Opportunity</span>
              </button>

              <a
                href={`mailto:${STUDENT_INFO.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{STUDENT_INFO.email}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
