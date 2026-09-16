import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Code2, 
  Briefcase, 
  Award, 
  Trophy, 
  Wrench, 
  FileText, 
  User, 
  MessageCircle,
  LayoutGrid,
  Search,
  ChevronRight
} from 'lucide-react';

interface CategoryQuickBarProps {
  activeDepartment: 'ECE' | 'CSE';
  onSelectDepartmentAndSem: (dept: 'ECE' | 'CSE', sem: number) => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenCategoryModal: () => void;
  onOpenWhatsApp: () => void;
}

export default function CategoryQuickBar({
  activeDepartment,
  onSelectDepartmentAndSem,
  onNavigateToSection,
  onOpenCategoryModal,
  onOpenWhatsApp,
}: CategoryQuickBarProps) {
  const [currentSection, setCurrentSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);

      const sectionIds = [
        'home',
        'about-creator',
        'syllabus',
        'internships',
        'programs',
        'engineering',
        'projects',
        'resources',
        'about'
      ];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setCurrentSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    {
      id: 'cat-ece-bar',
      label: 'ECE Syllabus',
      icon: Cpu,
      badge: 'Sem 1–8',
      color: 'hover:text-amber-600',
      action: () => {
        onSelectDepartmentAndSem('ECE', 1);
        onNavigateToSection('syllabus');
      },
      isActive: currentSection === 'syllabus' && activeDepartment === 'ECE',
    },
    {
      id: 'cat-cse-bar',
      label: 'CSE Syllabus',
      icon: Code2,
      badge: 'Sem 1–8',
      color: 'hover:text-cyan-600',
      action: () => {
        onSelectDepartmentAndSem('CSE', 1);
        onNavigateToSection('syllabus');
      },
      isActive: currentSection === 'syllabus' && activeDepartment === 'CSE',
    },
    {
      id: 'cat-internships-bar',
      label: 'Internships',
      icon: Briefcase,
      badge: 'Stipends',
      color: 'hover:text-blue-600',
      action: () => onNavigateToSection('internships'),
      isActive: currentSection === 'internships',
    },
    {
      id: 'cat-programs-bar',
      label: 'Programs & Certs',
      icon: Award,
      badge: 'Free',
      color: 'hover:text-emerald-600',
      action: () => onNavigateToSection('programs'),
      isActive: currentSection === 'programs',
    },
    {
      id: 'cat-hackathons-bar',
      label: 'Hackathons',
      icon: Trophy,
      badge: 'SIH / TI',
      color: 'hover:text-amber-600',
      action: () => onNavigateToSection('engineering'),
      isActive: currentSection === 'engineering',
    },
    {
      id: 'cat-projects-bar',
      label: 'Mini Projects',
      icon: Wrench,
      badge: 'Labs',
      color: 'hover:text-purple-600',
      action: () => onNavigateToSection('projects'),
      isActive: currentSection === 'projects',
    },
    {
      id: 'cat-resources-bar',
      label: 'Resources',
      icon: FileText,
      badge: 'Notes & VTU',
      color: 'hover:text-rose-600',
      action: () => onNavigateToSection('resources'),
      isActive: currentSection === 'resources',
    },
    {
      id: 'cat-creator-bar',
      label: 'About Manoj',
      icon: User,
      badge: 'SVCE ECE',
      color: 'hover:text-slate-800',
      action: () => onNavigateToSection('about-creator'),
      isActive: currentSection === 'about-creator',
    },
  ];

  return (
    <div 
      id="category-quick-bar"
      className={`sticky top-[95px] z-40 w-full transition-all duration-200 border-b border-slate-200/90 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-1.5'
          : 'bg-white py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Quick Hub Title / Launcher Button */}
          <button
            type="button"
            onClick={onOpenCategoryModal}
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors shadow-2xs group"
            title="Open All Categories & Instant Search"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-blue-700 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">All Categories</span>
            <span className="sm:hidden font-mono">Hub</span>
            <span className="text-[10px] font-mono bg-blue-100 text-blue-900 px-1.5 py-0.2 rounded font-bold">
              9
            </span>
          </button>

          {/* Horizontal Scrollable Categories Track */}
          <div className="flex-1 flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5 px-1 mask-radial">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  id={cat.id}
                  type="button"
                  onClick={cat.action}
                  className={`shrink-0 min-h-[38px] px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border whitespace-nowrap active:scale-95 ${
                    cat.isActive
                      ? 'bg-blue-900 text-white border-blue-950 font-bold shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${cat.isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] font-mono px-1 py-0.2 rounded ${
                    cat.isActive 
                      ? 'bg-blue-800 text-blue-100' 
                      : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search trigger button */}
          <button
            type="button"
            onClick={onOpenCategoryModal}
            className="shrink-0 p-2 rounded-lg text-slate-600 hover:text-blue-900 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center"
            title="Search subjects, books, or opportunities (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-slate-500" />
          </button>

          {/* WhatsApp community shortcut */}
          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shrink-0"
            title="Join SVCE WhatsApp Student Desk"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Student Desk</span>
          </button>

        </div>
      </div>
    </div>
  );
}
