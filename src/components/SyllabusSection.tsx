import { useState, useMemo, useEffect } from 'react';
import { SVCE_ECE_SEMESTERS, ECE_SUB_BRANCHES } from '../data/eceSyllabus';
import { SVCE_CSE_SEMESTERS, CSE_SUB_BRANCHES } from '../data/cseSyllabus';
import { 
  BookOpen, 
  Youtube, 
  Search, 
  ExternalLink, 
  Layers, 
  GraduationCap,
  Sparkles,
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  Video,
  Cpu,
  Code2
} from 'lucide-react';
import CategoryBridge from './CategoryBridge';

interface SyllabusSectionProps {
  initialDepartment?: 'ECE' | 'CSE';
  initialSemester?: number;
  onNavigateToCategory?: (categoryId: string, dept?: 'ECE' | 'CSE', sem?: number) => void;
  onOpenCategoryModal?: () => void;
}

export default function SyllabusSection({ 
  initialDepartment = 'ECE', 
  initialSemester = 1,
  onNavigateToCategory,
  onOpenCategoryModal
}: SyllabusSectionProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<'ECE' | 'CSE'>(initialDepartment);
  const [selectedSemester, setSelectedSemester] = useState<number>(initialSemester);
  const [selectedBranch, setSelectedBranch] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSubjectId, setExpandedSubjectId] = useState<string | null>(null);

  useEffect(() => {
    if (initialDepartment) {
      setSelectedDepartment(initialDepartment);
    }
  }, [initialDepartment]);

  useEffect(() => {
    if (initialSemester) {
      setSelectedSemester(initialSemester);
    }
  }, [initialSemester]);

  // Handle department change
  const handleDepartmentChange = (dept: 'ECE' | 'CSE') => {
    setSelectedDepartment(dept);
    setSelectedBranch('All');
    setExpandedSubjectId(null);
  };

  // Active semesters dataset
  const activeSemestersList = selectedDepartment === 'ECE' ? SVCE_ECE_SEMESTERS : SVCE_CSE_SEMESTERS;
  const activeSubBranchesList = selectedDepartment === 'ECE' ? ECE_SUB_BRANCHES : CSE_SUB_BRANCHES;

  // Active semester data
  const currentSemesterData = useMemo(() => {
    return activeSemestersList.find((s) => s.semester === selectedSemester) || activeSemestersList[0];
  }, [activeSemestersList, selectedSemester]);

  // Filtered subjects in the active semester
  const filteredSubjects = useMemo(() => {
    return currentSemesterData.subjects.filter((subject) => {
      // Branch filter
      if (selectedBranch !== 'All' && subject.subBranch !== selectedBranch) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTitle = subject.title.toLowerCase().includes(q);
        const matchesCode = subject.code.toLowerCase().includes(q);
        const matchesBranch = subject.subBranch.toLowerCase().includes(q);
        const matchesBook = subject.textbooks.some(
          (b) => b.title.toLowerCase().includes(q) || b.authors.toLowerCase().includes(q)
        );
        const matchesModule = subject.modules.some(
          (m) =>
            m.moduleTitle.toLowerCase().includes(q) ||
            m.keyTopics.some((t) => t.toLowerCase().includes(q)) ||
            m.channelName.toLowerCase().includes(q)
        );
        return matchesTitle || matchesCode || matchesBranch || matchesBook || matchesModule;
      }
      return true;
    });
  }, [currentSemesterData, selectedBranch, searchQuery]);

  const toggleSubjectExpand = (id: string) => {
    setExpandedSubjectId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="syllabus" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-white text-slate-800 border border-slate-300 mb-3 uppercase tracking-wider shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
            <span>SVCE BANGALORE • ACADEMIC SYLLABUS DIRECTORY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            1st Sem to 8th Sem Syllabus, Textbooks & YouTube Classes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Complete autonomous curriculum breakdown for <strong>Electronics & Communication (ECE)</strong> and <strong>Computer Science & Engineering (CSE)</strong>: prescribed reference textbooks, author details, and chapter-by-chapter video lectures from top educators.
          </p>
        </div>

        {/* =========================================================================
            DEPARTMENT SWITCHER (ECE vs CSE)
            ========================================================================= */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="p-1 bg-white rounded-xl border border-slate-300 shadow-xs inline-flex items-center">
            <button
              id="dept-tab-ece"
              type="button"
              onClick={() => handleDepartmentChange('ECE')}
              className={`min-h-[44px] px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center gap-2.5 ${
                selectedDepartment === 'ECE'
                  ? 'bg-[#0B1528] text-amber-400 border border-amber-500/30 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Cpu className={`w-4 h-4 ${selectedDepartment === 'ECE' ? 'text-amber-400' : 'text-slate-500'}`} />
              <div className="text-left">
                <span className="block font-black leading-tight">ECE Department</span>
                <span className="text-[10px] font-normal opacity-80 hidden sm:block">Electronics & Communication (Sem 1–8)</span>
              </div>
            </button>

            <button
              id="dept-tab-cse"
              type="button"
              onClick={() => handleDepartmentChange('CSE')}
              className={`min-h-[44px] px-5 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center gap-2.5 ${
                selectedDepartment === 'CSE'
                  ? 'bg-indigo-950 text-cyan-300 border border-cyan-400/40 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Code2 className={`w-4 h-4 ${selectedDepartment === 'CSE' ? 'text-cyan-300' : 'text-slate-500'}`} />
              <div className="text-left">
                <span className="block font-black leading-tight">CSE Department</span>
                <span className="text-[10px] font-normal opacity-80 hidden sm:block">Computer Science & Engg (Sem 1–8)</span>
              </div>
            </button>
          </div>

          <div className="text-xs text-slate-500 font-mono hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            <span>Autonomous Scheme 2022+ Prescribed Syllabus</span>
          </div>
        </div>

        {/* =========================================================================
            MOBILE-FIRST HORIZONTAL SEMESTER SELECTOR
            ========================================================================= */}
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-slate-300 shadow-xs mb-6">
          <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-700" />
              <span>Select {selectedDepartment} Semester (Sem 1 – Sem 8)</span>
            </span>
            <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-mono">
              {currentSemesterData.academicYear} • {currentSemesterData.totalCredits} Credits
            </span>
          </div>

          {/* Swipeable Scrollbar-free Sem Tabs for Mobile */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none snap-x">
            {activeSemestersList.map((sem) => {
              const isSelected = sem.semester === selectedSemester;
              return (
                <button
                  key={sem.semester}
                  id={`sem-tab-${selectedDepartment}-${sem.semester}`}
                  type="button"
                  onClick={() => {
                    setSelectedSemester(sem.semester);
                    setExpandedSubjectId(null);
                  }}
                  className={`snap-start shrink-0 min-h-[44px] px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center gap-2 border ${
                    isSelected
                      ? selectedDepartment === 'ECE'
                        ? 'bg-[#0B1528] text-amber-400 border-amber-500/40 shadow-xs'
                        : 'bg-indigo-950 text-cyan-300 border-cyan-400/40 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? (selectedDepartment === 'ECE' ? 'bg-amber-400' : 'bg-cyan-300') : 'bg-slate-300'}`} />
                  <span className="whitespace-nowrap font-mono">{sem.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            SEARCH & SUB-BRANCH FILTERS
            ========================================================================= */}
        <div className="space-y-3 mb-8">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              id="syllabus-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${selectedDepartment} subjects (e.g. ${selectedDepartment === 'ECE' ? '22EC31, FFT, K-map' : '22CS32, DSA, OS, SQL'}), book authors, or YouTube channels...`}
              className="w-full pl-10 pr-4 py-3 min-h-[44px] bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 px-2 py-1 rounded"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sub-Branch Horizontal Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase shrink-0 mr-1 hidden sm:inline-flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" /> Track:
            </span>
            {activeSubBranchesList.map((branch) => {
              const isBranchActive = selectedBranch === branch.id;
              return (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => setSelectedBranch(branch.id)}
                  className={`shrink-0 min-h-[36px] px-3 py-1.5 rounded text-xs font-medium transition-colors border whitespace-nowrap ${
                    isBranchActive
                      ? selectedDepartment === 'ECE'
                        ? 'bg-blue-800 text-white border-blue-900 shadow-xs font-bold'
                        : 'bg-indigo-800 text-white border-indigo-900 shadow-xs font-bold'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {branch.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            ACTIVE SEMESTER OVERVIEW BANNER
            ========================================================================= */}
        <div className={`bg-white rounded-xl border border-slate-300/80 p-4 sm:p-5 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-l-4 ${
          selectedDepartment === 'ECE' ? 'border-l-blue-800' : 'border-l-indigo-800'
        }`}>
          <div>
            <div className="flex items-center gap-2">
              <span className={`font-mono text-xs font-bold uppercase tracking-wider ${
                selectedDepartment === 'ECE' ? 'text-blue-800' : 'text-indigo-800'
              }`}>
                {selectedDepartment} {currentSemesterData.name} Overview
              </span>
              <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono font-bold border border-slate-200">
                {currentSemesterData.academicYear}
              </span>
            </div>
            <p className="text-sm font-semibold text-slate-800 mt-1">
              {currentSemesterData.shortDesc}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-xs font-mono">
            <div className="px-3 py-1.5 bg-slate-50 rounded border border-slate-200 text-center">
              <span className="text-slate-500 block text-[10px] uppercase">Courses</span>
              <span className="font-bold text-slate-900 text-sm">{filteredSubjects.length} Active</span>
            </div>
            <div className="px-3 py-1.5 bg-emerald-50 rounded border border-emerald-200 text-center">
              <span className="text-emerald-700 block text-[10px] uppercase">Credits</span>
              <span className="font-bold text-emerald-800 text-sm">{currentSemesterData.totalCredits} Total</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SUBJECT CARDS LIST
            ========================================================================= */}
        {filteredSubjects.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-xs">
            <GraduationCap className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800 mb-1">No courses found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
              No subjects matched your filter criteria in {currentSemesterData.name}. Try clearing the search or choosing "All Tracks".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedBranch('All');
              }}
              className="px-4 py-2 bg-blue-800 text-white text-xs font-bold rounded-lg hover:bg-blue-900"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredSubjects.map((subject) => {
              const isExpanded = expandedSubjectId === subject.id;

              return (
                <div
                  key={subject.id}
                  id={`subject-card-${subject.id}`}
                  className="bg-white rounded-xl border border-slate-300/80 shadow-xs hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Card Main Header */}
                  <div className="p-4 sm:p-6 border-b border-slate-100">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-xs sm:text-sm font-black px-2.5 py-1 rounded border ${
                          selectedDepartment === 'ECE' 
                            ? 'text-blue-900 bg-blue-50 border-blue-200' 
                            : 'text-indigo-900 bg-indigo-50 border-indigo-200'
                        }`}>
                          {subject.code}
                        </span>
                        <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                          {subject.subBranch}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-slate-500">{subject.hoursPerWeek} Hrs/Wk</span>
                        <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {subject.credits} Credits
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      {subject.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {subject.overview}
                    </p>

                    {/* Quick highlights bar */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex flex-wrap items-center gap-3 text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                          <strong className="text-slate-700">{subject.textbooks.length}</strong> Prescribed Books
                        </span>
                        <span className="flex items-center gap-1">
                          <Video className="w-3.5 h-3.5 text-red-600" />
                          <strong className="text-slate-700">{subject.modules.length}</strong> Chapter Video Modules
                        </span>
                        {subject.examScheme && (
                          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                            • {subject.examScheme}
                          </span>
                        )}
                      </div>

                      {/* Expand / Collapse Button */}
                      <button
                        type="button"
                        onClick={() => toggleSubjectExpand(subject.id)}
                        className={`inline-flex items-center gap-1.5 min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                          selectedDepartment === 'ECE'
                            ? 'text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200'
                            : 'text-indigo-900 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200'
                        }`}
                      >
                        <span>{isExpanded ? 'Hide Details' : 'View Textbooks & Video Classes'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Content: Textbooks & Modules Breakdown */}
                  {isExpanded && (
                    <div className="p-4 sm:p-6 bg-slate-50/70 border-t border-slate-200/80 space-y-6">
                      
                      {/* =========================================================================
                          PRESCRIBED & REFERENCE TEXTBOOKS
                          ========================================================================= */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-blue-700" />
                            <span>Important & Prescribed Textbooks (SVCE Syllabus)</span>
                          </h4>
                          <span className="text-[11px] font-mono text-slate-500">
                            {subject.textbooks.length} Books
                          </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {subject.textbooks.map((book, idx) => (
                            <div
                              key={idx}
                              className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-1.5">
                                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                    book.category === 'Prescribed Standard Textbook'
                                      ? 'bg-blue-50 text-blue-800 border border-blue-200'
                                      : book.category === 'Exam Preparation Key'
                                      ? 'bg-amber-50 text-amber-800 border border-amber-200'
                                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                                  }`}>
                                    {book.category}
                                  </span>
                                  {book.edition && (
                                    <span className="text-[10px] font-mono text-slate-400">
                                      {book.edition}
                                    </span>
                                  )}
                                </div>
                                <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                  {book.title}
                                </h5>
                                <p className="text-[11px] text-slate-600 mt-0.5">
                                  Author: <strong className="text-slate-800">{book.authors}</strong>
                                  {book.publisher ? ` • ${book.publisher}` : ''}
                                </p>
                                <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed bg-slate-50 p-2 rounded border border-slate-100">
                                  {book.coverage}
                                </p>
                              </div>

                              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-end">
                                <a
                                  href={book.searchUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-800 hover:text-blue-950 transition-colors"
                                >
                                  <span>Find Textbook Online</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* =========================================================================
                          MODULE-BY-MODULE BEST YOUTUBE VIDEO LECTURES
                          ========================================================================= */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                            <Youtube className="w-4 h-4 text-red-600" />
                            <span>Curated Chapter-by-Chapter YouTube Video Classes</span>
                          </h4>
                          <span className="text-[11px] font-mono text-slate-500">
                            {subject.modules.length} Modules Mapped
                          </span>
                        </div>

                        <div className="space-y-3">
                          {subject.modules.map((mod) => (
                            <div
                              key={mod.moduleNumber}
                              className="bg-white rounded-lg p-4 border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                                <div className="flex items-center gap-2">
                                  <span className="w-6 h-6 rounded-full bg-red-50 text-red-700 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-red-200">
                                    M{mod.moduleNumber}
                                  </span>
                                  <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                                    {mod.moduleTitle}
                                  </h5>
                                </div>
                                <span className="text-[11px] font-mono font-semibold text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 w-fit">
                                  Channel: <strong className="text-slate-800">{mod.channelName}</strong>
                                </span>
                              </div>

                              {/* Topics List */}
                              <div className="mb-3">
                                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                                  Key Syllabus Topics:
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                  {mod.keyTopics.map((topic, tidx) => (
                                    <span
                                      key={tidx}
                                      className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                                    >
                                      {topic}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Recommended Video Box with Direct YouTube Link */}
                              <div className="p-3 rounded-lg bg-red-50/40 border border-red-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                                    <Youtube className="w-4 h-4 text-red-600 shrink-0" />
                                    <span>{mod.recommendedVideoTitle}</span>
                                  </div>
                                  <p className="text-[11px] text-slate-600 mt-1 italic">
                                    {mod.whyBest}
                                  </p>
                                </div>

                                <a
                                  href={mod.youtubeUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-2xs shrink-0 active:scale-98"
                                >
                                  <Video className="w-3.5 h-3.5" />
                                  <span>Watch on YouTube</span>
                                  <ExternalLink className="w-3 h-3 text-red-200" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* =========================================================================
                          TOP RECOMMENDED COURSE PLAYLISTS
                          ========================================================================= */}
                      {subject.topPlaylists && subject.topPlaylists.length > 0 && (
                        <div className="pt-2">
                          <h4 className="text-xs font-mono uppercase font-bold text-slate-500 mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                            <span>Complete Full-Course Playlists (Semester Exam & GATE Prep)</span>
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {subject.topPlaylists.map((pl, pidx) => (
                              <a
                                key={pidx}
                                href={pl.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white rounded-lg border border-slate-200 hover:border-slate-300 flex items-center justify-between gap-3 group transition-colors"
                              >
                                <div>
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                                      {pl.badge}
                                    </span>
                                    <span className="text-[11px] font-mono text-slate-400">
                                      {pl.channelName}
                                    </span>
                                  </div>
                                  <h6 className="text-xs font-bold text-slate-900 group-hover:text-blue-800 transition-colors line-clamp-1">
                                    {pl.title}
                                  </h6>
                                  <p className="text-[10px] text-slate-500 mt-0.5">
                                    {pl.ratingNote}
                                  </p>
                                </div>
                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-800 shrink-0" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Category Bridge: Jump to other categories */}
        {onNavigateToCategory && (
          <CategoryBridge
            currentCategory="syllabus"
            onNavigateToCategory={onNavigateToCategory}
            onOpenCategoryModal={onOpenCategoryModal || (() => {})}
          />
        )}

      </div>
    </section>
  );
}
