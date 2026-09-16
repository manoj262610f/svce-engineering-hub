import { useState } from 'react';
import { EngineeringOpportunityItem, EngineeringOpportunityType } from '../types';
import { 
  Trophy, 
  Flag, 
  Users, 
  Calendar, 
  Award, 
  ExternalLink, 
  Compass, 
  Clock, 
  CheckCircle,
  Zap,
  Globe,
  MapPin
} from 'lucide-react';

interface EngineeringSectionProps {
  opportunities: EngineeringOpportunityItem[];
  onRegisterClick: (item: EngineeringOpportunityItem) => void;
}

export default function EngineeringSection({
  opportunities,
  onRegisterClick,
}: EngineeringSectionProps) {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [onlyBangalore, setOnlyBangalore] = useState<boolean>(false);

  const types = ['All', 'Hackathon', 'Competition', 'Challenge', 'Project Opportunity', 'Technical Event'];

  const filteredList = opportunities.filter((item) => {
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const isBangalore = (item.location?.toLowerCase().includes('bangalore') || 
                         item.location?.toLowerCase().includes('bengaluru') || 
                         item.tags.some(t => t.toLowerCase().includes('bangalore') || t.toLowerCase().includes('bengaluru')));
    
    if (onlyBangalore && !isBangalore) return false;
    return matchesType;
  });

  const bangaloreCount = opportunities.filter((item) => 
    item.location?.toLowerCase().includes('bangalore') || 
    item.location?.toLowerCase().includes('bengaluru') || 
    item.tags.some(t => t.toLowerCase().includes('bangalore') || t.toLowerCase().includes('bengaluru'))
  ).length;

  return (
    <section id="engineering" className="py-20 bg-white border-b border-slate-200/90 bg-official-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-slate-100 text-slate-800 border border-slate-300 mb-3 uppercase tracking-wider shadow-xs">
            <Zap className="w-3.5 h-3.5 text-blue-700" />
            <span>COMPETITIVE ARENA • SECTION 03</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Engineering Opportunities & Hackathons
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Participate in prestigious Bangalore in-person hackathons, national hardware design contests, student research challenges, and premier technical symposiums.
          </p>
        </div>

        {/* Filter Pills & Bangalore Quick Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {types.map((type) => (
              <button
                key={type}
                id={`opp-type-${type.replace(/\s+/g, '-').toLowerCase()}`}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedType === type
                    ? 'bg-[#0B1528] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {type === 'All' ? 'All Opportunities' : type}
              </button>
            ))}
          </div>

          {/* Dedicated Bangalore Hackathons Filter Button */}
          <button
            id="filter-bangalore-hackathons-btn"
            type="button"
            onClick={() => setOnlyBangalore(!onlyBangalore)}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs border ${
              onlyBangalore
                ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                : 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>📍 Bangalore Hackathons & Events ({bangaloreCount})</span>
            {onlyBangalore && <CheckCircle className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((opp) => {
            const isBlr = opp.location?.toLowerCase().includes('bangalore') || 
                          opp.location?.toLowerCase().includes('bengaluru') || 
                          opp.tags.some(t => t.toLowerCase().includes('bangalore') || t.toLowerCase().includes('bengaluru'));

            return (
              <div
                key={opp.id}
                id={`engineering-card-${opp.id}`}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Header: Type and Team Size */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200/70">
                        <Trophy className="w-3 h-3" />
                        <span>{opp.type}</span>
                      </span>
                      {isBlr && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                          <MapPin className="w-2.5 h-2.5" />
                          <span>Bangalore Event</span>
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <Users className="w-3 h-3 text-slate-400" />
                      <span>{opp.teamSize}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1.5">
                    {opp.title}
                  </h3>

                  {/* Organizer */}
                  <p className="text-xs font-semibold text-slate-600 mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{opp.organizer}</span>
                  </p>

                  {/* Location badge if specified */}
                  {opp.location && (
                    <div className="flex items-center gap-1.5 mb-3 px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200/70 text-xs text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span className="font-medium line-clamp-1">{opp.location}</span>
                    </div>
                  )}

                  {/* Prize Pool or Benefit */}
                  <div className="p-3 mb-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50/50 border border-amber-200/70 flex items-center gap-2 text-xs font-bold text-amber-900">
                    <Award className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="line-clamp-1">{opp.prizeOrBenefit}</span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {opp.description}
                  </p>

                  {/* Eligibility & Dates Box */}
                  <div className="space-y-1.5 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px]">
                    <div className="flex items-start gap-1.5">
                      <span className="text-slate-400 font-medium">Eligibility: </span>
                      <span className="font-medium text-slate-700">{opp.eligibility}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span className="text-slate-400 font-medium">Last Date / Deadline: </span>
                      <span className="font-semibold text-rose-600">{opp.deadline}</span>
                    </div>
                    {opp.eventDate && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="text-slate-400 font-medium">Event Date: </span>
                        <span className="font-medium text-slate-800">{opp.eventDate}</span>
                      </div>
                    )}
                  </div>

                  {/* Official Website Portal */}
                  {opp.websiteUrl && (
                    <div className="flex items-center justify-between mb-4 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 text-[11px]">
                      <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <Globe className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>Official Portal:</span>
                      </span>
                      <a
                        href={opp.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold hover:text-blue-700 hover:underline flex items-center gap-1 truncate max-w-[170px]"
                        title={`Visit ${opp.websiteUrl}`}
                      >
                        <span className="truncate">{opp.portalName || 'Visit Portal'}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {opp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dual Actions: Direct Registration & Details */}
                <div className="flex items-center gap-2 pt-2">
                  <a
                    id={`direct-opp-btn-${opp.id}`}
                    href={opp.registerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-98 transition-all shadow-xs"
                    title={`Direct register at official portal: ${opp.portalName || opp.organizer}`}
                  >
                    <span>Direct Register</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    id={`view-opp-btn-${opp.id}`}
                    type="button"
                    onClick={() => onRegisterClick(opp)}
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200"
                  >
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
