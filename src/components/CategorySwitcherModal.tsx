import { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  X, 
  Briefcase, 
  Award, 
  Trophy, 
  Wrench, 
  FileText, 
  MessageCircle, 
  User, 
  ChevronRight,
  LucideIcon
} from 'lucide-react';

interface CategorySwitcherModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToCategory: (categoryId: string) => void;
  onOpenWhatsApp: () => void;
}

export interface PlatformCategoryItem {
  id: string;
  name: string;
  shortDesc: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  targetId: string;
  countBadge: string;
  categoryGroup: 'Opportunities' | 'Skills & Projects' | 'Community';
}

export const PLATFORM_CATEGORIES: PlatformCategoryItem[] = [
  {
    id: 'cat-internships',
    name: 'Verified Internships',
    shortDesc: 'Stipend-backed roles, Bangalore tech companies, DRDO/ISRO, and direct application links',
    icon: Briefcase,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    targetId: 'internships',
    countBadge: 'Direct Apply Links',
    categoryGroup: 'Opportunities'
  },
  {
    id: 'cat-competitions',
    name: 'Hackathons & Competitions',
    shortDesc: 'Bangalore hackathons, Smart India Hackathon, TI Design & national innovation challenges',
    icon: Trophy,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    targetId: 'engineering',
    countBadge: 'Bangalore & National',
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
    id: 'cat-projects',
    name: 'Engineering Projects',
    shortDesc: 'Embedded IoT, VLSI circuits, Full-stack apps, AI models with architecture guides',
    icon: Wrench,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    targetId: 'projects',
    countBadge: 'Hardware & Software',
    categoryGroup: 'Skills & Projects'
  },
  {
    id: 'cat-resources',
    name: 'Developer Toolkits & Portals',
    shortDesc: 'Official job portals, developer toolkits, simulators, and career resources',
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
    shortDesc: '1st Year B.Tech ECE student behind the hub, vision, background & contact',
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
    shortDesc: 'Peer community forum, instant internship alerts, and collaborative team forming',
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
  const [activeTab, setActiveTab] = useState<'all' | 'Opportunities' | 'Skills & Projects' | 'Community'>('all');

  // Handle escape key and Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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
      onNavigateToCategory(cat.targetId);
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
              placeholder="Search internships, hackathons, Bangalore events, toolkits..."
              className="flex-1 bg-transparent text-sm sm:text-base font-semibold text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-200 px-2 py-0.5 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Category Group Tabs */}
          <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-0.5 scrollbar-none">
            {(['all', 'Opportunities', 'Skills & Projects', 'Community'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`text-xs px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors border cursor-pointer ${
                  activeTab === tab
                    ? 'bg-blue-900 text-white border-blue-950 shadow-2xs font-bold'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab === 'all' ? 'All Opportunities' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 overflow-y-auto space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                Explore Directory
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
                    className="text-left p-3 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-slate-50/80 transition-all flex items-start gap-3 group active:scale-98 cursor-pointer"
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
            <span className="font-bold text-slate-700">SVCE Engineering Opportunities Hub</span>
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
