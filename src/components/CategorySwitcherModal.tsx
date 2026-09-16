import { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  X, 
  BookOpen, 
  Cpu, 
  Code2, 
  Briefcase, 
  Award, 
  Trophy, 
  Wrench, 
  FolderGit2, 
  FileText, 
  MessageCircle, 
  User, 
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { SVCE_ECE_SEMESTERS } from '../data/eceSyllabus';
import { SVCE_CSE_SEMESTERS } from '../data/cseSyllabus';
import { STUDENT_INFO } from '../data/config';

interface CategorySwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToCategory: (categoryId: string, dept?: 'ECE' | 'CSE', sem?: number) => void;
  onOpenWhatsApp: () => void;
}

export interface PlatformCategoryItem {
  id: string;
  name: string;
  shortDesc: string;
  icon: typeof BookOpen;
  color: string;
  bgColor: string;
  borderColor: string;
  targetId: string;
  dept?: 'ECE' | 'CSE';
  sem?: number;
  countBadge: string;
  categoryGroup: 'Academic' | 'Opportunities' | 'Skills & Projects' | 'Community';
}

export const PLATFORM_CATEGORIES: PlatformCategoryItem[] = [
  {
    id: 'cat-ece',
    name: 'ECE Syllabus & Books',
    shortDesc: 'Semesters 1 to 8, prescribed reference textbooks & chapter-wise YouTube classes',
    icon: Cpu,
    color: 'text-amber-500',
    bgColor: 'bg-[#0B1528]',
    borderColor: 'border-amber-500/30',
    targetId: 'syllabus',
    dept: 'ECE',
    sem: 1,
    countBadge: '8 Semesters • 40+ Books',
    categoryGroup: 'Academic'
  },
  {
    id: 'cat-cse',
    name: 'CSE Syllabus & Books',
    shortDesc: 'Semesters 1 to 8, DSA, OS, DBMS, Networks, AI & top educator lectures',
    icon: Code2,
    color: 'text-cyan-400',
    bgColor: 'bg-indigo-950',
    borderColor: 'border-cyan-400/30',
    targetId: 'syllabus',
    dept: 'CSE',
    sem: 1,
    countBadge: '8 Semesters • 40+ Books',
    categoryGroup: 'Academic'
  },
  {
    id: 'cat-internships',
    name: 'Verified Internships',
    shortDesc: 'Stipend-backed roles, Bangalore tech companies, DRDO/ISRO, and remote tracks',
    icon: Briefcase,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    targetId: 'internships',
    countBadge: 'Verified & Updated',
    categoryGroup: 'Opportunities'
  },
  {
    id: 'cat-programs',
    name: 'Upskilling & Certifications',
    shortDesc: 'Free industry credentials from Google Cloud, AWS, Cisco, NPTEL & Microsoft',
    icon: Award,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    targetId: 'programs',
    countBadge: 'Free & Subsidized',
    categoryGroup: 'Skills & Projects'
  },
  {
    id: 'cat-competitions',
    name: 'Hackathons & Competitions',
    shortDesc: 'Smart India Hackathon, Texas Instruments, KPIT Sparkle & campus fests',
    icon: Trophy,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    targetId: 'engineering',
    countBadge: 'Cash Prizes & Incubation',
    categoryGroup: 'Opportunities'
  },
  {
    id: 'cat-projects',
    name: 'Mini Projects & Lab Ideas',
    shortDesc: 'Embedded IoT, VLSI circuits, Full-stack apps, AI models with circuit diagrams',
    icon: Wrench,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    targetId: 'projects',
    countBadge: 'Circuit & Code Guides',
    categoryGroup: 'Skills & Projects'
  },
  {
    id: 'cat-resources',
    name: 'Study Resources & Tools',
    shortDesc: 'VTU/Autonomous question papers, formula cheat sheets, datasheets & simulators',
    icon: FileText,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    targetId: 'resources',
    countBadge: 'Curated Hub',
    categoryGroup: 'Skills & Projects'
  },
  {
    id: 'cat-creator',
    name: 'About Manoj (Creator)',
    shortDesc: '1st Year B.Tech ECE student behind the hub, purpose, vision & contact',
    icon: User,
    color: 'text-blue-800',
    bgColor: 'bg-slate-100',
    borderColor: 'border-slate-300',
    targetId: 'about-creator',
    countBadge: 'SVCE ECE 2026–30',
    categoryGroup: 'Community'
  },
  {
    id: 'cat-community',
    name: 'WhatsApp Student Desk',
    shortDesc: 'Peer discussion forum, instant updates, doubts clearance & academic sharing',
    icon: MessageCircle,
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-100/60',
    borderColor: 'border-emerald-300',
    targetId: 'about',
    countBadge: 'Join Peer Community',
    categoryGroup: 'Community'
  },
];

export default function CategorySwitcherModal({
  isOpen,
  onClose,
  onNavigateToCategory,
  onOpenWhatsApp,
}: CategorySwitcherModalProps) {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'Academic' | 'Opportunities' | 'Skills & Projects' | 'Community'>('all');

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // toggle modal
        if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search subjects across ECE and CSE
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matches: Array<{
      type: 'subject';
      dept: 'ECE' | 'CSE';
      sem: number;
      code: string;
      title: string;
      extra: string;
    }> = [];

    // ECE
    SVCE_ECE_SEMESTERS.forEach((sem) => {
      sem.subjects.forEach((sub) => {
        if (
          sub.title.toLowerCase().includes(q) ||
          sub.code.toLowerCase().includes(q) ||
          sub.overview.toLowerCase().includes(q) ||
          sub.textbooks.some((b) => b.title.toLowerCase().includes(q) || b.authors.toLowerCase().includes(q))
        ) {
          matches.push({
            type: 'subject',
            dept: 'ECE',
            sem: sem.semester,
            code: sub.code,
            title: sub.title,
            extra: `ECE Sem ${sem.semester} • ${sub.subBranch}`,
          });
        }
      });
    });

    // CSE
    SVCE_CSE_SEMESTERS.forEach((sem) => {
      sem.subjects.forEach((sub) => {
        if (
          sub.title.toLowerCase().includes(q) ||
          sub.code.toLowerCase().includes(q) ||
          sub.overview.toLowerCase().includes(q) ||
          sub.textbooks.some((b) => b.title.toLowerCase().includes(q) || b.authors.toLowerCase().includes(q))
        ) {
          matches.push({
            type: 'subject',
            dept: 'CSE',
            sem: sem.semester,
            code: sub.code,
            title: sub.title,
            extra: `CSE Sem ${sem.semester} • ${sub.subBranch}`,
          });
        }
      });
    });

    return matches.slice(0, 8);
  }, [query]);

  const filteredCategories = useMemo(() => {
    return PLATFORM_CATEGORIES.filter((cat) => {
      const matchesTab = activeTab === 'all' || cat.categoryGroup === activeTab;
      if (!matchesTab) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase();
      return (
        cat.name.toLowerCase().includes(q) ||
        cat.shortDesc.toLowerCase().includes(q) ||
        cat.countBadge.toLowerCase().includes(q) ||
        cat.categoryGroup.toLowerCase().includes(q)
      );
    });
  }, [activeTab, query]);

  if (!isOpen) return null;

  const handleSelectCategory = (cat: PlatformCategoryItem) => {
    onClose();
    if (cat.id === 'cat-community') {
      onOpenWhatsApp();
    } else {
      onNavigateToCategory(cat.targetId, cat.dept, cat.sem);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Search Input */}
        <div className="p-4 border-b border-slate-200 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-blue-800 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Jump to any category, subject, textbook, or opportunity..."
              className="flex-1 bg-transparent text-sm sm:text-base font-semibold text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-0.5 rounded"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Group Tabs */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-0.5 scrollbar-none">
            {(['all', 'Academic', 'Opportunities', 'Skills & Projects', 'Community'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`text-xs px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors border ${
                  activeTab === tab
                    ? 'bg-blue-900 text-white border-blue-950 shadow-2xs font-bold'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab === 'all' ? 'All Categories (9)' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto space-y-4 divide-y divide-slate-100">
          
          {/* Live Subject Matches if user types query */}
          {searchResults.length > 0 && (
            <div className="pb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Matching Syllabus Subjects</span>
                </span>
                <span className="text-[10px] text-blue-800 font-bold bg-blue-50 px-2 py-0.5 rounded">
                  {searchResults.length} found
                </span>
              </div>
              <div className="space-y-1.5">
                {searchResults.map((res, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      onClose();
                      onNavigateToCategory('syllabus', res.dept, res.sem);
                    }}
                    className="w-full text-left p-2.5 rounded-xl border border-slate-200 hover:border-blue-400 bg-white hover:bg-blue-50/50 flex items-center justify-between gap-3 group transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                        res.dept === 'ECE' ? 'bg-[#0B1528] text-amber-400' : 'bg-indigo-950 text-cyan-300'
                      }`}>
                        {res.code}
                      </span>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-950">
                          {res.title}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {res.extra}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-700 flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View Course</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Main Category Cards */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                All Platform Categories
              </span>
              <span className="text-[11px] text-slate-500">
                Click to jump directly
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {filteredCategories.map((cat) => {
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleSelectCategory(cat)}
                    className="text-left p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-slate-50/80 transition-all flex items-start gap-3 group active:scale-98"
                  >
                    <div className={`w-10 h-10 rounded-lg ${cat.bgColor} ${cat.borderColor} border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                      <IconComponent className={`w-5 h-5 ${cat.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-900 truncate">
                          {cat.name}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-800 shrink-0" />
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {cat.shortDesc}
                      </p>
                      <span className="inline-block mt-1 text-[10px] font-mono font-bold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                        {cat.countBadge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-slate-700">SVCE One-in-All Hub</span>
            <span>• Curated by M. Manoj</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] bg-slate-200 px-1.5 py-0.5 rounded text-slate-700">ESC to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
