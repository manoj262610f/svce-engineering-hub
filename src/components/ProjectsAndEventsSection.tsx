import { useState } from 'react';
import { ProjectIdeaItem, TechnicalEventItem } from '../types';
import { 
  Cpu, 
  Calendar, 
  Sparkles, 
  MapPin, 
  ExternalLink, 
  Wrench, 
  CheckCircle2, 
  Layers, 
  Lightbulb,
  Radio,
  FileCode2,
  Globe
} from 'lucide-react';

interface ProjectsAndEventsProps {
  projects: ProjectIdeaItem[];
  events: TechnicalEventItem[];
  onRegisterEvent: (event: TechnicalEventItem) => void;
}

export default function ProjectsAndEventsSection({
  projects,
  events,
  onRegisterEvent,
}: ProjectsAndEventsProps) {
  const [activeTab, setActiveTab] = useState<'projects' | 'events'>('projects');
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const domains = ['All', 'ECE Core', 'IoT & Embedded', 'Robotics', 'Software / Web'];

  const filteredProjects = projects.filter((p) => {
    if (selectedDomain === 'All') return true;
    return p.domain === selectedDomain;
  });

  return (
    <section id="projects" className="py-20 bg-[#F8FAFC] border-b border-slate-200/90 bg-official-dots relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-white text-slate-800 border border-slate-300 mb-3 uppercase tracking-wider shadow-xs">
              <Lightbulb className="w-3.5 h-3.5 text-blue-700" />
              <span>PROJECT BLUEPRINTS & EVENTS • SECTION 04</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Projects & Technical Events
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mt-2">
              Explore hands-on hardware/software engineering project blueprints with component lists, plus upcoming technical symposiums and lab workshops.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center bg-slate-200/80 p-1 rounded-lg self-start md:self-auto shrink-0 border border-slate-300/70">
            <button
              id="tab-btn-projects"
              type="button"
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold transition-all ${
                activeTab === 'projects'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-blue-700" />
              <span>Project Blueprints ({projects.length})</span>
            </button>
            <button
              id="tab-btn-events"
              type="button"
              onClick={() => setActiveTab('events')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold transition-all ${
                activeTab === 'events'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-blue-700" />
              <span>Symposiums & Events ({events.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Project Ideas */}
        {activeTab === 'projects' && (
          <div>
            {/* Domain filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
              <span className="text-xs font-medium text-slate-400 mr-1">Filter by branch focus:</span>
              {domains.map((dom) => (
                <button
                  key={dom}
                  type="button"
                  onClick={() => setSelectedDomain(dom)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedDomain === dom
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {dom}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  id={`project-card-${proj.id}`}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Domain & Difficulty Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                        {proj.domain}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                          proj.difficulty === 'Beginner'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                            : proj.difficulty === 'Intermediate'
                            ? 'bg-blue-50 text-blue-700 border border-blue-200/80'
                            : 'bg-rose-50 text-rose-700 border border-rose-200/80'
                        }`}
                      >
                        {proj.difficulty} Level
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {proj.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {proj.description}
                    </p>

                    {/* Suggested Components List */}
                    <div className="p-3 mb-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700 mb-2">
                        <Wrench className="w-3.5 h-3.5 text-indigo-500" />
                        <span>Recommended Components / Tools:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {proj.components.map((comp) => (
                          <span
                            key={comp}
                            className="px-2 py-0.5 rounded text-[10px] font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Learning Outcome */}
                    <div className="text-[11px] text-slate-600 space-y-1 mb-4">
                      <p className="font-semibold text-slate-800 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        <span>Core Learning Takeaways:</span>
                      </p>
                      <p className="pl-4 text-slate-500 italic leading-relaxed">
                        {proj.learningOutcome}
                      </p>
                    </div>
                  </div>

                  {/* Recommended For pill & Guide Link */}
                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <div className="text-[10px] text-slate-500">
                      <span className="font-semibold text-indigo-600">Ideal for: </span>
                      <span>{proj.recommendedFor}</span>
                    </div>

                    {proj.projectUrl && (
                      <a
                        id={`project-link-${proj.id}`}
                        href={proj.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 active:scale-98 transition-all border border-indigo-200/60"
                        title={`Open official guide for ${proj.title} on ${proj.portalName || 'official portal'}`}
                      >
                        <span>Open Project Hub ({proj.portalName || 'Official Guide'})</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Technical Events & Symposiums */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                id={`event-card-${event.id}`}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {event.eventType}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {event.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {event.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-600 mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                    <span>Host: {event.host}</span>
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs mb-5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-indigo-600" />
                      <span className="font-semibold text-slate-800">{event.date}</span>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      <span className="font-medium text-slate-700">Eligibility: </span>
                      {event.eligibility}
                    </div>
                  </div>
                </div>

                {/* Direct Event Registration and Details */}
                <div className="flex items-center gap-2 pt-2">
                  <a
                    id={`direct-event-btn-${event.id}`}
                    href={event.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-98 transition-all shadow-xs"
                    title={`Register directly on official site: ${event.title}`}
                  >
                    <span>Register on Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    id={`event-btn-${event.id}`}
                    type="button"
                    onClick={() => onRegisterEvent(event)}
                    className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
                    title="View details"
                  >
                    <span>Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
