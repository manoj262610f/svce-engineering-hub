import { useState } from 'react';
import { CAREER_RESOURCES } from '../data/resources';
import { CareerResourceCategory } from '../types';
import { 
  FileText, 
  Briefcase, 
  Award, 
  BookOpen, 
  Globe, 
  Compass, 
  ChevronRight, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Layers,
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';

export default function ResourcesSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('resume-resources');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const activeCategory =
    CAREER_RESOURCES.find((c) => c.id === activeCategoryId) || CAREER_RESOURCES[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-4 h-4" />;
      case 'Briefcase':
        return <Briefcase className="w-4 h-4" />;
      case 'Award':
        return <Award className="w-4 h-4" />;
      case 'BookOpen':
        return <BookOpen className="w-4 h-4" />;
      case 'Globe':
        return <Globe className="w-4 h-4" />;
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard?.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="resources" className="py-20 bg-white border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-slate-100 text-slate-800 border border-slate-300 mb-3 uppercase tracking-wider shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>PRACTICAL TOOLKITS • SECTION 05</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Engineering Career Resources
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Practical, actionable resources curated specifically for engineering students: ATS resumes, core technical interview prep, EDA simulators, and year-by-year career roadmaps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: 6 Category Buttons */}
          <div className="lg:col-span-4 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 mb-3">
              Resource Modules
            </p>
            {CAREER_RESOURCES.map((cat) => {
              const isSelected = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`res-cat-btn-${cat.id}`}
                  type="button"
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white text-indigo-700 font-bold border-indigo-200 shadow-sm'
                      : 'bg-white/60 text-slate-700 hover:bg-white hover:text-slate-900 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <span className="text-sm block leading-tight">{cat.title}</span>
                      <span className="text-[11px] font-normal text-slate-400">
                        {cat.items.length} curated guides
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-indigo-600 translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Category Items with In-Depth Previews */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              {/* Category Header */}
              <div className="border-b border-slate-100 pb-5 mb-6">
                <div className="flex items-center gap-2 text-indigo-600 font-semibold text-xs mb-1">
                  {getCategoryIcon(activeCategory.iconName)}
                  <span>{activeCategory.title}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {activeCategory.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  {activeCategory.subtitle}
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-6">
                {activeCategory.items.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {/* Preview Content Checklist */}
                    {item.previewContent && item.previewContent.length > 0 && (
                      <div className="p-3.5 bg-white rounded-lg border border-slate-200 text-xs mb-3 space-y-1.5 font-mono text-slate-700">
                        <div className="flex items-center justify-between text-[11px] font-sans font-bold text-slate-500 pb-1 mb-1 border-b border-slate-100">
                          <span>Curated Checklist / Quick Reference</span>
                          <button
                            type="button"
                            onClick={() => handleCopy(item.previewContent!.join('\n'), idx)}
                            className="inline-flex items-center gap-1 text-[11px] text-indigo-600 hover:text-indigo-800"
                          >
                            {copiedIndex === idx ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-600" />
                                <span className="text-emerald-600 font-semibold">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy Notes</span>
                              </>
                            )}
                          </button>
                        </div>
                        {item.previewContent.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2">
                            <span className="text-indigo-500 font-bold shrink-0">›</span>
                            <span className="text-[11px] leading-relaxed">{point}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[11px] text-slate-400">
                        Free student reference material
                      </span>
                      {item.actionUrl && item.actionUrl.startsWith('http') ? (
                        <a
                          href={item.actionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800"
                        >
                          <span>{item.actionLabel}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            const note = item.previewContent ? item.previewContent.join('\n') : item.description;
                            handleCopy(note, idx);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                        >
                          <span>{item.actionLabel}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
