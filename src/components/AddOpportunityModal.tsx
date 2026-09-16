import React, { useState } from 'react';
import { X, PlusCircle, Sparkles, Check, Copy, Code2 } from 'lucide-react';
import { InternshipItem, DomainType } from '../types';

interface AddOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddInternship: (item: InternshipItem) => void;
}

export default function AddOpportunityModal({
  isOpen,
  onClose,
  onAddInternship,
}: AddOpportunityModalProps) {
  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [domain, setDomain] = useState<DomainType>('Embedded Systems / IoT');
  const [location, setLocation] = useState('Bangalore');
  const [mode, setMode] = useState<'Remote' | 'Hybrid' | 'On-site'>('Hybrid');
  const [compensationType, setCompensationType] = useState<'Paid' | 'Unpaid'>('Paid');
  const [stipend, setStipend] = useState('₹15,000 / month');
  const [eligibility, setEligibility] = useState('1st - 4th Year B.Tech ECE / CSE');
  const [lastDate, setLastDate] = useState('November 30, 2026');
  const [shortDescription, setShortDescription] = useState('');
  const [skillsStr, setSkillsStr] = useState('C, Microcontrollers, KiCad');
  const [applyUrl, setApplyUrl] = useState('https://forms.gle/sample-link');
  const [copiedCode, setCopiedCode] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  if (!isOpen) return null;

  const generatedObject: InternshipItem = {
    id: `intern-${Date.now().toString().slice(-4)}`,
    title: title || 'New Engineering Internship',
    organization: organization || 'Open Engineering Research Lab',
    domain,
    location,
    mode,
    compensationType,
    stipend: compensationType === 'Paid' ? stipend : undefined,
    eligibility: eligibility || 'Open to all Engineering Undergraduates',
    lastDate: lastDate || 'December 15, 2026',
    shortDescription:
      shortDescription ||
      'Hands-on engineering opportunity covering circuit prototyping, firmware, and collaborative open-source tool development.',
    skills: skillsStr.split(',').map((s) => s.trim()).filter(Boolean),
    applyUrl: applyUrl || 'https://forms.gle/placeholder',
    badge: 'Newly Added',
  };

  const tsCodeSnippet = `  {
    id: "${generatedObject.id}",
    title: "${generatedObject.title}",
    organization: "${generatedObject.organization}",
    domain: "${generatedObject.domain}",
    location: "${generatedObject.location}",
    mode: "${generatedObject.mode}",
    compensationType: "${generatedObject.compensationType}",
    stipend: "${generatedObject.stipend || ''}",
    eligibility: "${generatedObject.eligibility}",
    lastDate: "${generatedObject.lastDate}",
    shortDescription: "${generatedObject.shortDescription}",
    skills: ${JSON.stringify(generatedObject.skills)},
    applyUrl: "${generatedObject.applyUrl}",
    badge: "Student Curated"
  },`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !organization) {
      alert('Please fill in at least the Title and Organization name.');
      return;
    }
    onAddInternship(generatedObject);
    setSuccessMessage(true);
    setTimeout(() => {
      setSuccessMessage(false);
      onClose();
    }, 1200);
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText(tsCodeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 mb-1">
              <Sparkles className="w-3 h-3" />
              <span>Easy Update Helper</span>
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Publish or Share a New Opportunity
            </h3>
            <p className="text-xs text-slate-500">
              Add a listing live to the website, or copy the TypeScript code for <code>src/data/internships.ts</code>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          {successMessage && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Successfully added opportunity to active list!</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Opportunity / Internship Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Firmware & Sensor Interfacing Intern"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Organization / Research Lab *</label>
              <input
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. Open Embedded Research Lab"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 text-xs"
              />
              <span className="text-[10px] text-slate-400 block mt-0.5">
                (Student rule: No commercial company names)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Domain</label>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value as DomainType)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
              >
                <option value="Embedded Systems / IoT">Embedded Systems / IoT</option>
                <option value="Electronics / VLSI">Electronics / VLSI</option>
                <option value="Robotics & Hardware">Robotics & Hardware</option>
                <option value="Software / Web">Software / Web</option>
                <option value="AI & Data Science">AI & Data Science</option>
                <option value="Core Engineering">Core Engineering</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Bangalore or Remote"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Mode</label>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value as any)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
              >
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="On-site">On-site</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Type</label>
              <select
                value={compensationType}
                onChange={(e) => setCompensationType(e.target.value as any)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
              >
                <option value="Paid">Paid</option>
                <option value="Unpaid">Unpaid / Mentorship</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Stipend / Benefit</label>
              <input
                type="text"
                value={stipend}
                onChange={(e) => setStipend(e.target.value)}
                placeholder="e.g. ₹15,000 / month"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Last Date</label>
              <input
                type="text"
                value={lastDate}
                onChange={(e) => setLastDate(e.target.value)}
                placeholder="e.g. November 30, 2026"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Eligibility Criteria</label>
            <input
              type="text"
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
              placeholder="e.g. 1st to 3rd Year B.Tech (ECE/EEE/CSE)"
              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Short Description</label>
            <textarea
              rows={2}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Brief summary of what the student will work on..."
              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Skills (Comma separated)</label>
              <input
                type="text"
                value={skillsStr}
                onChange={(e) => setSkillsStr(e.target.value)}
                placeholder="e.g. C, STM32, Oscilloscope"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Apply URL / Google Form</label>
              <input
                type="text"
                value={applyUrl}
                onChange={(e) => setApplyUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs"
              />
            </div>
          </div>

          {/* Quick Copy Snippet */}
          <div className="pt-2">
            <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
              <span className="font-semibold flex items-center gap-1">
                <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Code for permanent saving in `src/data/internships.ts`:</span>
              </span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="text-indigo-600 hover:text-indigo-800 font-bold inline-flex items-center gap-1"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCode ? 'Copied Snippet!' : 'Copy Code Snippet'}</span>
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add to Live Website</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
