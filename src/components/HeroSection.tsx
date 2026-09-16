import { useState } from 'react';
import { 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Youtube, 
  Layers, 
  Sparkles, 
  Compass, 
  Users, 
  TrendingUp, 
  Search,
  CheckCircle2,
  User,
  MessageCircle,
  Mail,
  Building2,
  ExternalLink,
  Code2,
  Cpu,
  LayoutGrid,
  Briefcase,
  Award,
  Trophy,
  Wrench,
  FileText,
  ChevronRight
} from 'lucide-react';
import { STUDENT_INFO } from '../data/config';

interface HeroSectionProps {
  onExploreClick: () => void;
  onSyllabusClick: (dept?: 'ECE' | 'CSE', sem?: number) => void;
  onJoinWhatsApp?: () => void;
  onCategoryClick?: (categoryId: string, dept?: 'ECE' | 'CSE', sem?: number) => void;
  onOpenCategoryModal?: () => void;
}

export default function HeroSection({ 
  onExploreClick, 
  onSyllabusClick, 
  onJoinWhatsApp,
  onCategoryClick,
  onOpenCategoryModal,
}: HeroSectionProps) {
  const semestersList = [1, 2, 3, 4, 5, 6, 7, 8];
  const [navDept, setNavDept] = useState<'ECE' | 'CSE'>('ECE');

  const categories = [
    {
      id: 'ece-cat',
      title: 'ECE Syllabus & Books',
      desc: '1st to 8th Semester syllabus, prescribed textbooks with author links & chapter videos',
      badge: 'Sem 1–8 • 40+ Books',
      icon: Cpu,
      color: 'text-amber-500',
      bgColor: 'bg-[#0B1528]',
      borderColor: 'border-amber-500/30',
      action: () => {
        if (onCategoryClick) onCategoryClick('syllabus', 'ECE', 1);
        else onSyllabusClick('ECE', 1);
      }
    },
    {
      id: 'cse-cat',
      title: 'CSE Syllabus & Books',
      desc: '1st to 8th Semester CS courses: DSA, OS, DBMS, Networks, AI & Gate Smashers videos',
      badge: 'Sem 1–8 • 40+ Books',
      icon: Code2,
      color: 'text-cyan-400',
      bgColor: 'bg-indigo-950',
      borderColor: 'border-cyan-400/30',
      action: () => {
        if (onCategoryClick) onCategoryClick('syllabus', 'CSE', 1);
        else onSyllabusClick('CSE', 1);
      }
    },
    {
      id: 'internships-cat',
      title: 'Verified Internships',
      desc: 'Stipend-backed roles, Bangalore tech firms, DRDO, ISRO & remote opportunities',
      badge: 'Stipends & Remote',
      icon: Briefcase,
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      action: () => {
        if (onCategoryClick) onCategoryClick('internships');
        else onExploreClick();
      }
    },
    {
      id: 'programs-cat',
      title: 'Upskilling Programs',
      desc: 'Free certified courses from Google Cloud, AWS, Cisco Networking, and NPTEL',
      badge: 'Free Certifications',
      icon: Award,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      action: () => {
        if (onCategoryClick) onCategoryClick('programs');
      }
    },
    {
      id: 'hackathons-cat',
      title: 'Hackathons & Contests',
      desc: 'Smart India Hackathon, Texas Instruments Innovation, KPIT Sparkle & campus fests',
      badge: 'Cash Prizes & SIH',
      icon: Trophy,
      color: 'text-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      action: () => {
        if (onCategoryClick) onCategoryClick('engineering');
      }
    },
    {
      id: 'projects-cat',
      title: 'Mini Projects & Labs',
      desc: 'Embedded IoT, VLSI circuits, Full-stack apps, AI models with diagrams & components',
      badge: 'Hardware & Code',
      icon: Wrench,
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      action: () => {
        if (onCategoryClick) onCategoryClick('projects');
      }
    },
    {
      id: 'resources-cat',
      title: 'Study Notes & Tools',
      desc: 'Autonomous question papers, formula sheets, component datasheets & simulators',
      badge: 'VTU & Autonomous',
      icon: FileText,
      color: 'text-rose-700',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200',
      action: () => {
        if (onCategoryClick) onCategoryClick('resources');
      }
    },
    {
      id: 'community-cat',
      title: 'Student Desk & Peer Chat',
      desc: 'Direct connect with M. Manoj and fellow SVCE engineering students on WhatsApp',
      badge: 'Active Peer Group',
      icon: MessageCircle,
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-100/60',
      borderColor: 'border-emerald-300',
      action: () => {
        if (onJoinWhatsApp) onJoinWhatsApp();
        else if (onCategoryClick) onCategoryClick('about');
      }
    },
  ];

  return (
    <section id="home" className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden bg-[#F8FAFC] border-b border-slate-200/90 bg-official-grid">
      {/* Subtle technical background engineering markings */}
      <div className="absolute top-28 left-6 hidden lg:flex items-center gap-2 text-[10px] font-mono text-slate-400 select-none pointer-events-none">
        <span className="text-slate-500 font-bold">+</span>
        <span>SYS.REF: SVCE-ACADEMIC-PORTAL</span>
        <span>|</span>
        <span>AUTONOMOUS SCHEME • ECE & CSE</span>
      </div>
      <div className="absolute top-28 right-6 hidden lg:flex items-center gap-2 text-[10px] font-mono text-slate-400 select-none pointer-events-none">
        <span>CURATED BY M. MANOJ (1ST YEAR ECE)</span>
        <span className="text-slate-500 font-bold">+</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            ABOUT MYSELF (CREATOR PROFILE SPOTLIGHT AT STARTING)
            ========================================================================= */}
        <div 
          id="about-creator"
          className="mb-8 p-4 sm:p-6 bg-white rounded-2xl border border-slate-300 shadow-xs relative overflow-hidden border-l-4 border-l-blue-800"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
            {/* Creator Identity & Bio */}
            <div className="flex items-start sm:items-center gap-4">
              {/* Profile Monogram Avatar */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0B1528] to-slate-800 border-2 border-amber-400/40 flex flex-col items-center justify-center text-white shadow-sm shrink-0">
                <span className="font-mono font-black text-lg sm:text-xl text-amber-400 tracking-wider">
                  MM
                </span>
                <span className="text-[9px] font-mono text-slate-300 font-bold -mt-0.5">
                  SVCE
                </span>
              </div>

              {/* Identity details */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-50 text-blue-900 border border-blue-200 uppercase tracking-wide">
                    <User className="w-3 h-3 text-blue-700" />
                    <span>About Myself • Creator</span>
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Batch 2026–2030
                  </span>
                  <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    1st Year B.Tech ECE
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Hi, I’m {STUDENT_INFO.name}
                </h2>
                
                <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
                  I’m a 1st-year B.Tech student in <strong>Electronics and Communication Engineering</strong> at <strong>Sri Venkateshwara College of Engineering (SVCE)</strong>, Bengaluru. I created this hub to bring together our complete autonomous syllabus for <strong>both ECE & CSE</strong> (1st to 8th Semester), prescribed reference textbooks with direct links, top chapter-wise YouTube lectures, and verified engineering opportunities.
                </p>
              </div>
            </div>

            {/* Quick Connect & Contact Pills */}
            <div className="flex flex-wrap md:flex-col items-stretch gap-2 shrink-0">
              {onJoinWhatsApp ? (
                <button
                  type="button"
                  onClick={onJoinWhatsApp}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 min-h-[40px] rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-all active:scale-98"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Join Student Desk</span>
                </button>
              ) : (
                <a
                  href={STUDENT_INFO.whatsappGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 min-h-[40px] rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-all active:scale-98"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Join Student Desk</span>
                </a>
              )}

              <a
                href={`mailto:${STUDENT_INFO.email}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 min-h-[40px] rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-700" />
                <span>Contact Manoj</span>
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN HERO SECTION (ECE & CSE PORTAL)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Official initiative badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-semibold mb-5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
              </span>
              <span className="text-slate-800 font-bold font-mono">SVCE BANGALORE • ACADEMIC HUB</span>
              <span className="text-slate-300">•</span>
              <span className="text-blue-800 font-bold">ECE & CSE (Sem 1 to 8)</span>
            </div>

            {/* Main heading */}
            <h1
              id="hero-main-heading"
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5"
            >
              ECE & CSE Syllabus, Textbooks &{" "}
              <span className="text-blue-900 block sm:inline">
                Curated Video Lectures.
              </span>
            </h1>

            {/* Subheading */}
            <p
              id="hero-subheading"
              className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-7 leading-relaxed font-normal"
            >
              The definitive academic portal for <strong>Electronics & Communication Engineering (ECE)</strong> and <strong>Computer Science & Engineering (CSE)</strong> students at Sri Venkateshwara College of Engineering (SVCE), Bengaluru. Access complete 1st to 8th Semester curriculum, prescribed standard textbooks, and top-rated chapter-wise YouTube video classes.
            </p>

            {/* Action Buttons: Mobile Optimized for both ECE and CSE */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8">
              <button
                id="hero-ece-syllabus-btn"
                type="button"
                onClick={() => onSyllabusClick('ECE', 1)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl text-sm font-bold text-white bg-blue-900 hover:bg-blue-950 border border-blue-950 shadow-xs transition-all active:scale-98"
              >
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Explore ECE Syllabus</span>
              </button>

              <button
                id="hero-cse-syllabus-btn"
                type="button"
                onClick={() => onSyllabusClick('CSE', 1)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[44px] rounded-xl text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all active:scale-98"
              >
                <Code2 className="w-4 h-4 text-indigo-600" />
                <span>Explore CSE Syllabus</span>
              </button>

              <button
                id="hero-explore-btn"
                type="button"
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 min-h-[44px] rounded-xl text-sm font-bold text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-100 transition-all active:scale-98"
              >
                <Compass className="w-4 h-4 text-blue-700" />
                <span>Internships</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quick stats pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-5 border-t border-slate-200">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-left">
                <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Departments</span>
                <span className="text-sm font-black text-slate-900">ECE & CSE</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-left">
                <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Curriculum</span>
                <span className="text-sm font-black text-blue-900">16 Semesters</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-left">
                <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Textbooks</span>
                <span className="text-sm font-black text-emerald-800">80+ Standard Books</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-left">
                <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">Video Classes</span>
                <span className="text-sm font-black text-red-600">Chapter-Wise YT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Department & Semester Jump Navigator */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              id="quick-semester-navigator"
              className="w-full max-w-md bg-white rounded-xl p-5 border border-slate-300 shadow-xs border-t-4 border-t-blue-800"
            >
              {/* Card Header with Department Selector */}
              <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono font-bold text-sm shadow-xs shrink-0 ${
                    navDept === 'ECE' ? 'bg-[#0B1528] text-amber-400' : 'bg-indigo-900 text-cyan-300'
                  }`}>
                    {navDept}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Fast Semester Navigator
                    </h3>
                    <p className="text-xs text-slate-500">
                      SVCE Autonomous Scheme
                    </p>
                  </div>
                </div>

                {/* Branch Toggle in card */}
                <div className="flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setNavDept('ECE')}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                      navDept === 'ECE'
                        ? 'bg-blue-900 text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    ECE
                  </button>
                  <button
                    type="button"
                    onClick={() => setNavDept('CSE')}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                      navDept === 'CSE'
                        ? 'bg-indigo-900 text-white shadow-2xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    CSE
                  </button>
                </div>
              </div>

              {/* Instant Semester Switcher Grid for Mobile/Desktop */}
              <div className="py-4">
                <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-blue-700" />
                    <span>Select {navDept} Semester:</span>
                  </span>
                  <span className="text-blue-800 font-bold">Sem 1–8</span>
                </p>

                <div className="grid grid-cols-4 gap-2">
                  {semestersList.map((sem) => (
                    <button
                      key={sem}
                      type="button"
                      onClick={() => onSyllabusClick(navDept, sem)}
                      className="min-h-[44px] flex flex-col items-center justify-center p-2 rounded-lg bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 active:scale-95 transition-all text-center group"
                    >
                      <span className="text-[10px] font-mono font-semibold text-slate-400 group-hover:text-blue-700">
                        {navDept}
                      </span>
                      <span className="text-sm font-black text-slate-800 group-hover:text-blue-950">
                        Sem {sem}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Features checkmarks */}
              <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Prescribed Textbooks with Authors & Editions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Chapter-by-Chapter Curated YouTube Video Classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Gate Smashers, Abdul Bari, Neso Academy & More</span>
                </div>
              </div>

              {/* Bottom fast button */}
              <button
                type="button"
                onClick={() => onSyllabusClick(navDept, 1)}
                className="w-full mt-4 min-h-[44px] py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span>Search {navDept} Syllabus, Books & Video Classes</span>
              </button>
            </div>
          </div>

        </div>

        {/* =========================================================================
            ONE-IN-ALL PLATFORM DIRECTORY (EASY ACCESS FOR ALL CATEGORIES)
            ========================================================================= */}
        <div id="all-categories-hub" className="mt-14 pt-10 border-t border-slate-200/90">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-white text-blue-900 border border-slate-300 uppercase tracking-wider mb-2 shadow-2xs">
                <LayoutGrid className="w-3.5 h-3.5 text-blue-700" />
                <span>ALL-IN-ONE PLATFORM DIRECTORY</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                Quick Access to All Engineering Categories
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                One centralized hub for SVCE students: jump straight to autonomous syllabus, textbooks, internships, free skill certifications, hackathons, and lab projects.
              </p>
            </div>

            {onOpenCategoryModal && (
              <button
                type="button"
                onClick={onOpenCategoryModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[42px] rounded-xl text-xs font-bold text-blue-950 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs transition-colors shrink-0 self-start sm:self-auto group"
              >
                <Search className="w-3.5 h-3.5 text-blue-700 group-hover:scale-110 transition-transform" />
                <span>Search Everything</span>
                <span className="font-mono text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                  Ctrl+K
                </span>
              </button>
            )}
          </div>

          {/* 8 Category Interactive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  id={`cat-card-${cat.id}`}
                  className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${cat.bgColor} ${cat.borderColor} border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform`}>
                        <Icon className={`w-5 h-5 ${cat.color}`} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {cat.badge}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={cat.action}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-800 hover:text-blue-950 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore Category</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

