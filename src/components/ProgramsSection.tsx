import { useState, useMemo } from 'react';
import { ProgramItem, ProgramCategory } from '../types';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  GraduationCap, 
  Clock, 
  ExternalLink, 
  Laptop, 
  BadgeCheck, 
  Sparkles,
  Award,
  Layers,
  Globe
} from 'lucide-react';

interface ProgramsSectionProps {
  programs: ProgramItem[];
  onRegisterClick: (item: ProgramItem) => void;
}

export default function ProgramsSection({ programs, onRegisterClick }: ProgramsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProgramCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ProgramCategory[] = [
    'All',
    'Courses',
    'Training',
    'Workshops',
    'Certifications',
    'Bootcamps',
  ];

  const filteredPrograms = useMemo(() => {
    return programs.filter((prog) => {
      const matchesCategory =
        selectedCategory === 'All' || prog.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        prog.programName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.keyTopics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [programs, selectedCategory, searchQuery]);

  return (
    <section id="programs" className="py-20 bg-[#F8FAFC] border-b border-slate-200/90 bg-official-subtle-lines relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-white text-slate-800 border border-slate-300 mb-3 uppercase tracking-wider shadow-xs">
            <Layers className="w-3.5 h-3.5 text-blue-700" />
            <span>TECHNICAL TRAINING • SECTION 02</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            New Programs & Bootcamps
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Accelerate your engineering skills with hands-on workshops, certified hardware cohorts, simulation bootcamps, and foundational courses.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8 pb-4 border-b border-slate-200/80">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`program-tab-${cat.toLowerCase()}`}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-200'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="program-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programs..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Grid of Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <ProgramCard
              key={program.id}
              program={program}
              onRegister={() => onRegisterClick(program)}
            />
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-semibold text-slate-700">No programs found matching this criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-purple-600 font-semibold underline"
            >
              Reset view
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Reusable Program Card
 * Requirements:
 * - Program name
 * - Organization
 * - Description
 * - Eligibility
 * - Date/Deadline
 * - Apply/Register button
 */
export function ProgramCard({
  program,
  onRegister,
}: {
  key?: string | number;
  program: ProgramItem;
  onRegister: () => void;
}) {
  return (
    <div
      id={`program-card-${program.id}`}
      className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between group"
    >
      <div>
        {/* Top Header: Category badge & Mode */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-50 text-purple-700 border border-purple-200/70">
            {program.category}
          </span>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500">
            <Laptop className="w-3.5 h-3.5 text-slate-400" />
            <span>{program.mode}</span>
            <span>•</span>
            <span className="text-emerald-600">{program.fees}</span>
          </div>
        </div>

        {/* Program Name */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2 mb-1.5">
          {program.programName}
        </h3>

        {/* Organization */}
        <p className="text-xs font-semibold text-slate-600 mb-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
          <span>{program.organization}</span>
        </p>

        {/* Description */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {program.description}
        </p>

        {/* Eligibility & Date/Deadline Box */}
        <div className="space-y-1.5 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px]">
          <div className="flex items-start gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 font-medium">Eligibility: </span>
              <span className="font-medium text-slate-700">{program.eligibility}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <div>
              <span className="text-slate-400 font-medium">Date / Deadline: </span>
              <span className="font-semibold text-slate-800">{program.dateOrDeadline}</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <div>
              <span className="text-slate-400 font-medium">Duration: </span>
              <span className="font-medium text-slate-600">{program.duration}</span>
            </div>
          </div>
        </div>

        {/* Official Website / Direct Portal */}
        {program.websiteUrl && (
          <div className="flex items-center justify-between mb-4 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Globe className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <span>Official Portal:</span>
            </span>
            <a
              href={program.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 font-semibold hover:text-purple-700 hover:underline flex items-center gap-1 truncate max-w-[170px]"
              title={`Visit ${program.websiteUrl}`}
            >
              <span className="truncate">{program.portalName || 'Visit Portal'}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>
        )}

        {/* Topics covered */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {program.keyTopics.map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-purple-50/70 text-purple-700 border border-purple-100"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Action buttons: Direct Apply & Details */}
      <div className="flex items-center gap-2 pt-2">
        <a
          id={`direct-program-btn-${program.id}`}
          href={program.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 active:scale-98 transition-all shadow-xs"
          title={`Directly register on official portal: ${program.portalName || program.organization}`}
        >
          <span>Enroll on Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <button
          id={`register-btn-${program.id}`}
          type="button"
          onClick={onRegister}
          className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          title="View full curriculum details"
        >
          <span>Details</span>
        </button>
      </div>
    </div>
  );
}
