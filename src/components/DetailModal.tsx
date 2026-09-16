import { X, Calendar, MapPin, ExternalLink, GraduationCap, Banknote, ShieldCheck, CheckCircle2, Globe } from 'lucide-react';
import { InternshipItem, ProgramItem, EngineeringOpportunityItem, TechnicalEventItem } from '../types';

type ModalItem = 
  | { type: 'internship'; data: InternshipItem }
  | { type: 'program'; data: ProgramItem }
  | { type: 'opportunity'; data: EngineeringOpportunityItem }
  | { type: 'event'; data: TechnicalEventItem };

interface DetailModalProps {
  item: ModalItem | null;
  onClose: () => void;
}

export default function DetailModal({ item, onClose }: DetailModalProps) {
  if (!item) return null;

  let title = '';
  let organization = '';
  let description = '';
  let eligibility = '';
  let deadline = '';
  let applyUrl = '';
  let websiteUrl: string | undefined = undefined;
  let portalName: string | undefined = undefined;
  let compensation = '';
  let locationInfo = '';
  let tags: string[] = [];

  if (item.type === 'internship') {
    title = item.data.title;
    organization = item.data.organization;
    description = item.data.detailedDescription || item.data.shortDescription;
    eligibility = item.data.eligibility;
    deadline = item.data.lastDate;
    applyUrl = item.data.applyUrl;
    websiteUrl = item.data.websiteUrl;
    portalName = item.data.portalName;
    compensation = item.data.stipend || (item.data.compensationType === 'Paid' ? 'Paid' : 'Unpaid');
    locationInfo = `${item.data.location} (${item.data.mode})`;
    tags = item.data.skills;
  } else if (item.type === 'program') {
    title = item.data.programName;
    organization = item.data.organization;
    description = item.data.description;
    eligibility = item.data.eligibility;
    deadline = item.data.dateOrDeadline;
    applyUrl = item.data.applyUrl;
    websiteUrl = item.data.websiteUrl;
    portalName = item.data.portalName;
    compensation = item.data.fees;
    locationInfo = `${item.data.mode} • ${item.data.duration}`;
    tags = item.data.keyTopics;
  } else if (item.type === 'opportunity') {
    title = item.data.title;
    organization = item.data.organizer;
    description = item.data.description;
    eligibility = item.data.eligibility;
    deadline = item.data.deadline;
    applyUrl = item.data.registerUrl;
    websiteUrl = item.data.websiteUrl;
    portalName = item.data.portalName;
    compensation = item.data.prizeOrBenefit;
    locationInfo = `${item.data.mode} • Team: ${item.data.teamSize}`;
    tags = item.data.tags;
  } else if (item.type === 'event') {
    title = item.data.title;
    organization = item.data.host;
    description = item.data.description;
    eligibility = item.data.eligibility;
    deadline = item.data.date;
    applyUrl = item.data.registerUrl;
    websiteUrl = item.data.websiteUrl;
    locationInfo = item.data.location;
    tags = [item.data.eventType];
  }

  const isBangalore = locationInfo.toLowerCase().includes('bangalore') || 
                      locationInfo.toLowerCase().includes('bengaluru') ||
                      tags.some(t => t.toLowerCase().includes('bangalore') || t.toLowerCase().includes('bengaluru'));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-200">
                Opportunity Details
              </span>
              {isBangalore && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                  <MapPin className="w-2.5 h-2.5" />
                  <span>Bangalore Location</span>
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-slate-900 leading-snug">
              {title}
            </h3>
            <p className="text-xs font-semibold text-slate-600 mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              <span>{organization}</span>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-600">
          {/* Key Facts strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
            {locationInfo && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Format / Location</span>
                <span className="font-semibold text-slate-800 text-xs">{locationInfo}</span>
              </div>
            )}
            {compensation && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Benefit / Stipend</span>
                <span className="font-semibold text-emerald-600 text-xs">{compensation}</span>
              </div>
            )}
            {deadline && (
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Deadline / Date</span>
                <span className="font-semibold text-rose-600 text-xs">{deadline}</span>
              </div>
            )}
          </div>

          {/* Official Website Verification Strip */}
          {(websiteUrl || applyUrl) && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 bg-indigo-50/70 rounded-xl border border-indigo-100/90 text-xs">
              <div className="flex items-center gap-2 text-indigo-950 font-medium">
                <Globe className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Verified Official Portal:</span>
                <span className="font-bold text-slate-800">{portalName || organization}</span>
              </div>
              <a
                href={websiteUrl || applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-bold text-indigo-700 bg-white border border-indigo-200/80 hover:bg-indigo-50 hover:text-indigo-900 transition-colors self-start sm:self-auto"
                title={`Visit official site ${websiteUrl || applyUrl}`}
              >
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-2">About This Opportunity</h4>
            <p className="leading-relaxed text-slate-600 whitespace-pre-line">
              {description}
            </p>
          </div>

          {/* Eligibility */}
          <div className="p-3.5 bg-indigo-50/50 rounded-xl border border-indigo-100">
            <h4 className="font-bold text-indigo-950 mb-1 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <span>Eligibility & Student Requirements</span>
            </h4>
            <p className="text-indigo-900/90 leading-relaxed">
              {eligibility}
            </p>
          </div>

          {/* Skills / Tags */}
          {tags.length > 0 && (
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Key Topics / Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Verification & Safety Note */}
          <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Student Safety Note:</strong> Legitimate student internships and academic programs never charge any application fees. Always apply directly via genuine research lab portals.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>

          <a
            id="modal-apply-btn"
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm transition-all"
            title={`Open official registration portal at ${applyUrl}`}
          >
            <span>Proceed to Official Registration Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
