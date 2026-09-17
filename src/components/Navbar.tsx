import { useState, useEffect } from 'react';
import { Menu, X, Share2, Sparkles, MessageCircle, ExternalLink, Search, LayoutGrid, Cpu, Code2, Briefcase, Award, Trophy, Wrench, FileText, User } from 'lucide-react';
import { STUDENT_INFO } from '../data/config';

interface NavbarProps {
  onOpenWhatsApp: () => void;
  onOpenContribute: () => void;
  onOpenCategoryModal?: () => void;
}

export default function Navbar({ onOpenWhatsApp, onOpenContribute, onOpenCategoryModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about-creator', 'internships', 'programs', 'engineering', 'projects', 'resources', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About Myself', href: '#about-creator', id: 'about-creator' },
    { name: 'Internships', href: '#internships', id: 'internships' },
    { name: 'Programs', href: '#programs', id: 'programs' },
    { name: 'Hackathons', href: '#engineering', id: 'engineering' },
    { name: 'Projects & Events', href: '#projects', id: 'projects' },
    { name: 'Resources', href: '#resources', id: 'resources' },
    { name: 'About Desk', href: '#about', id: 'about' },
  ];

  return (
    <header
      id="site-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-xs"
    >
      {/* Official Institutional Top Utility Bar */}
      <div className="bg-[#0B1528] text-slate-300 text-[11px] border-b border-slate-800 py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
            <span className="text-slate-200 font-semibold tracking-wide">
              SRI VENKATESHWARA COLLEGE OF ENGINEERING (SVCE)
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-400">
              Bengaluru • Student Innovation & Opportunities
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[10px] text-slate-400 font-mono">
            <span className="text-amber-400/90 font-semibold">SVCE BENGALURU</span>
            <span>|</span>
            <span className="text-slate-300">STUDENT OPPORTUNITY PORTAL</span>
            <span>|</span>
            <span className="inline-flex items-center gap-1 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              VERIFIED DIRECTORY
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 shadow-sm'
            : 'bg-white border-b border-slate-200/80 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              id="brand-logo"
              href="#home"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0B1528] border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-xs group-hover:scale-105 transition-transform">
                <span className="font-black text-sm tracking-wider font-mono">SVCE</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                    SVCE Engineering Hub
                  </span>
                  <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-300/80 uppercase tracking-wide">
                    Bengaluru
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                  Internships, Hackathons & Tech Projects
                </p>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      isActive
                        ? 'text-blue-900 bg-blue-50 border border-blue-200/80 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              {onOpenCategoryModal && (
                <button
                  type="button"
                  onClick={onOpenCategoryModal}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-300 shadow-2xs"
                  title="Search syllabus, books, or jump to categories (Ctrl+K)"
                >
                  <Search className="w-3.5 h-3.5 text-blue-700" />
                  <span>Search All Categories</span>
                  <span className="font-mono text-[10px] bg-white text-slate-500 px-1 py-0.2 rounded border border-slate-200">
                    ⌘K
                  </span>
                </button>
              )}

              <button
                id="header-submit-opp-btn"
                type="button"
                onClick={onOpenContribute}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200/80"
                title="Share an opportunity for review and publish"
              >
                <Share2 className="w-3.5 h-3.5 text-blue-700" />
                <span>Share Opp</span>
              </button>

              <button
                id="header-whatsapp-cta-btn"
                type="button"
                onClick={onOpenWhatsApp}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-xs transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Join Community</span>
              </button>
            </div>

            {/* Mobile Actions: Search & Menu */}
            <div className="flex items-center gap-1.5 lg:hidden">
              {onOpenCategoryModal && (
                <button
                  type="button"
                  onClick={onOpenCategoryModal}
                  className="p-2 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 focus:outline-none"
                  aria-label="Search all categories"
                >
                  <Search className="w-4 h-4 text-blue-800" />
                </button>
              )}

              <button
                id="mobile-menu-toggle"
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 border border-slate-200"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          {isOpen && (
            <div
              id="mobile-nav-drawer"
              className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-200 space-y-3 bg-white/98 backdrop-blur-md rounded-2xl p-4 shadow-2xl border max-h-[80vh] overflow-y-auto"
            >
              <div className="px-3.5 py-2.5 bg-blue-50/90 rounded-xl border border-blue-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-blue-950">SVCE Student Hub</p>
                  <p className="text-[11px] text-blue-800">Opportunities & Innovation Directory</p>
                </div>
                {onOpenCategoryModal && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenCategoryModal();
                    }}
                    className="px-2 py-1 rounded bg-blue-900 text-white text-[11px] font-bold"
                  >
                    All Categories
                  </button>
                )}
              </div>

              {/* Quick Jump Buttons */}
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1 px-1">
                  Top Opportunities
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  <a
                    href="#internships"
                    onClick={() => setIsOpen(false)}
                    className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-blue-50 text-xs font-bold text-slate-800 flex items-center gap-2"
                  >
                    <Briefcase className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Internships</span>
                  </a>
                  <a
                    href="#engineering"
                    onClick={() => setIsOpen(false)}
                    className="p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-blue-50 text-xs font-bold text-slate-800 flex items-center gap-2"
                  >
                    <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Hackathons</span>
                  </a>
                </div>
              </div>

              {/* Group 2: Career & Opportunities */}
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1 px-1">
                  Careers & Growth
                </span>
                <div className="space-y-1">
                  {[
                    { name: 'Verified Internships & Stipends', href: '#internships', icon: Briefcase, color: 'text-blue-600' },
                    { name: 'Upskilling & Free Certifications', href: '#programs', icon: Award, color: 'text-emerald-600' },
                    { name: 'Hackathons & Competitions', href: '#engineering', icon: Trophy, color: 'text-amber-600' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        <Icon className={`w-4 h-4 ${item.color}`} />
                        <span>{item.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Group 3: Build & Resources */}
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1 px-1">
                  Projects & Learning
                </span>
                <div className="space-y-1">
                  {[
                    { name: 'Mini Projects & Hardware Labs', href: '#projects', icon: Wrench, color: 'text-purple-600' },
                    { name: 'Study Notes, Formulas & VTU Papers', href: '#resources', icon: FileText, color: 'text-rose-600' },
                    { name: 'About Myself (M. Manoj Profile)', href: '#about-creator', icon: User, color: 'text-blue-800' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        <Icon className={`w-4 h-4 ${item.color}`} />
                        <span>{item.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenContribute();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 text-center border border-slate-200"
                >
                  <Share2 className="w-3.5 h-3.5 text-blue-700" />
                  <span>Share Opp</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenWhatsApp();
                  }}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
