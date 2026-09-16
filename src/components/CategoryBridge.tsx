import { 
  ArrowRight, 
  BookOpen, 
  Cpu, 
  Code2, 
  Briefcase, 
  Award, 
  Trophy, 
  Wrench, 
  FileText,
  Compass
} from 'lucide-react';

interface CategoryBridgeProps {
  currentCategory: 'syllabus' | 'internships' | 'programs' | 'engineering' | 'projects' | 'resources';
  onNavigateToCategory: (categoryId: string, dept?: 'ECE' | 'CSE', sem?: number) => void;
  onOpenCategoryModal: () => void;
}

export default function CategoryBridge({
  currentCategory,
  onNavigateToCategory,
  onOpenCategoryModal,
}: CategoryBridgeProps) {
  const bridgeLinks = [
    {
      id: 'bridge-ece',
      label: 'ECE Syllabus',
      target: 'syllabus',
      dept: 'ECE' as const,
      icon: Cpu,
      color: 'hover:border-amber-400',
    },
    {
      id: 'bridge-cse',
      label: 'CSE Syllabus',
      target: 'syllabus',
      dept: 'CSE' as const,
      icon: Code2,
      color: 'hover:border-cyan-400',
    },
    {
      id: 'bridge-internships',
      label: 'Internships',
      target: 'internships',
      icon: Briefcase,
      color: 'hover:border-blue-400',
    },
    {
      id: 'bridge-programs',
      label: 'Skill Programs',
      target: 'programs',
      icon: Award,
      color: 'hover:border-emerald-400',
    },
    {
      id: 'bridge-engineering',
      label: 'Hackathons',
      target: 'engineering',
      icon: Trophy,
      color: 'hover:border-amber-400',
    },
    {
      id: 'bridge-projects',
      label: 'Mini Projects',
      target: 'projects',
      icon: Wrench,
      color: 'hover:border-purple-400',
    },
    {
      id: 'bridge-resources',
      label: 'Study Notes & Tools',
      target: 'resources',
      icon: FileText,
      color: 'hover:border-rose-400',
    },
  ];

  return (
    <div className="mt-12 pt-8 border-t border-slate-200/90">
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 flex items-center justify-center shrink-0">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
              One-in-All Hub • Jump to Other Categories
            </h4>
            <p className="text-[11px] text-slate-500">
              Easily navigate syllabus, careers, projects, and learning materials
            </p>
          </div>
        </div>

        {/* Action Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {bridgeLinks
            .filter((item) => item.target !== currentCategory)
            .map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigateToCategory(item.target, item.dept, 1)}
                  className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 ${item.color} transition-all active:scale-95`}
                >
                  <Icon className="w-3.5 h-3.5 text-slate-500" />
                  <span>{item.label}</span>
                </button>
              );
            })}

          <button
            type="button"
            onClick={onOpenCategoryModal}
            className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
          >
            <span>All (9)</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
