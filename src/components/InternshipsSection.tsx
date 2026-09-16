import { useState, useMemo } from 'react';
import { InternshipItem, DomainType, LocationType, CompensationType } from '../types';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  Filter, 
  Banknote, 
  GraduationCap, 
  Sparkles,
  PlusCircle,
  Tag,
  Globe
} from 'lucide-react';

interface InternshipsSectionProps {
  internships: InternshipItem[];
  onApplyClick: (item: InternshipItem) => void;
  onOpenAddModal: () => void;
}

export default function InternshipsSection({
  internships,
  onApplyClick,
  onOpenAddModal,
}: InternshipsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<DomainType>('All');
  const [selectedLocation, setSelectedLocation] = useState<LocationType>('All');
  const [selectedCompensation, setSelectedCompensation] = useState<CompensationType>('All');

  const domains: DomainType[] = [
    'All',
    'Embedded Systems / IoT',
    'Electronics / VLSI',
    'Robotics & Hardware',
    'Software / Web',
    'AI & Data Science',
    'Core Engineering',
  ];

  const locations: LocationType[] = ['All', 'Remote', 'Bangalore', 'Hyderabad', 'Chennai', 'On-site'];
  const compensations: CompensationType[] = ['All', 'Paid', 'Unpaid'];

  const filteredInternships = useMemo(() => {
    return internships.filter((item) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesDomain = selectedDomain === 'All' || item.domain === selectedDomain;
      const matchesLocation =
        selectedLocation === 'All' ||
        item.location.toLowerCase().includes(selectedLocation.toLowerCase()) ||
        (selectedLocation === 'Remote' && item.mode === 'Remote');

      const matchesCompensation =
        selectedCompensation === 'All' || item.compensationType === selectedCompensation;

      return matchesSearch && matchesDomain && matchesLocation && matchesCompensation;
    });
  }, [internships, searchQuery, selectedDomain, selectedLocation, selectedCompensation]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDomain('All');
    setSelectedLocation('All');
    setSelectedCompensation('All');
  };

  return (
    <section id="internships" className="py-20 bg-white border-b border-slate-200/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-slate-100 text-slate-800 border border-slate-300 mb-3 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5 text-blue-700" />
              <span>OFFICIAL DIRECTORY • SECTION 01</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Internship Opportunities
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mt-2">
              Curated student internships in electronics, embedded firmware, robotics, software development, and premier government & corporate research labs.
            </p>
          </div>

          <button
            id="add-internship-trigger-btn"
            type="button"
            onClick={onOpenAddModal}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-colors shadow-xs self-start md:self-auto"
          >
            <PlusCircle className="w-4 h-4 text-blue-700" />
            <span>Submit Opportunity</span>
          </button>
        </div>

        {/* Filter Controls Box */}
        <div className="bg-slate-50/70 rounded-xl p-4 sm:p-5 border border-slate-200 mb-8 space-y-4">
          
          {/* Top Row: Search input + Compensation pills */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="internship-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role, skills (e.g. Verilog, STM32, Python), or lab..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Compensation Toggle: All / Paid / Unpaid */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0">
              <span className="text-[11px] font-semibold text-slate-500 px-2 flex items-center gap-1">
                <Banknote className="w-3.5 h-3.5" />
                <span>Type:</span>
              </span>
              {compensations.map((comp) => (
                <button
                  key={comp}
                  id={`filter-comp-${comp.toLowerCase()}`}
                  type="button"
                  onClick={() => setSelectedCompensation(comp)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCompensation === comp
                      ? 'bg-white text-indigo-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {comp}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Row: Domain Pills & Location Filter */}
          <div className="pt-3 border-t border-slate-100 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Domain chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 lg:pb-0 scrollbar-none">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <span>Domain:</span>
              </span>
              {domains.map((domain) => (
                <button
                  key={domain}
                  id={`domain-tab-${domain.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}`}
                  type="button"
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-2.5 py-1 rounded-lg text-xs whitespace-nowrap transition-colors ${
                    selectedDomain === domain
                      ? 'bg-indigo-600 text-white font-medium shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>

            {/* Location selector & Bangalore Quick Filter */}
            <div className="flex items-center gap-2 shrink-0 flex-wrap">
              <button
                id="quick-bangalore-internships-btn"
                type="button"
                onClick={() => setSelectedLocation(selectedLocation === 'Bangalore' ? 'All' : 'Bangalore')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  selectedLocation === 'Bangalore'
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-xs'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>📍 Bangalore Tech Labs</span>
              </button>

              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                  <span>Location:</span>
                </span>
                <select
                  id="internship-location-select"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value as LocationType)}
                  className="text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc === 'All' ? 'All Locations' : loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter & Active Filter summary */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <p>
            Showing <strong className="text-slate-800">{filteredInternships.length}</strong> of{' '}
            {internships.length} internships
          </p>
          {(searchQuery || selectedDomain !== 'All' || selectedLocation !== 'All' || selectedCompensation !== 'All') && (
            <button
              id="reset-internship-filters-btn"
              type="button"
              onClick={resetFilters}
              className="text-indigo-600 hover:text-indigo-800 font-semibold underline underline-offset-2"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Internship Cards Grid */}
        {filteredInternships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((internship) => (
              <InternshipCard
                key={internship.id}
                internship={internship}
                onApply={() => onApplyClick(internship)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8">
            <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No internships match your filter</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mb-4">
              Try adjusting your search terms or clearing your location/domain filters to explore more opportunities.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-4 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 rounded-xl hover:bg-indigo-100"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Reusable Internship Card Component
 * Strictly supports:
 * - Internship title
 * - Company/organization name
 * - Domain
 * - Location
 * - Paid/Unpaid
 * - Eligibility
 * - Last date
 * - Short description
 * - Apply button
 */
export function InternshipCard({
  internship,
  onApply,
}: {
  key?: string | number;
  internship: InternshipItem;
  onApply: () => void;
}) {
  const isBangalore = internship.location.toLowerCase().includes('bangalore') || 
                      internship.location.toLowerCase().includes('bengaluru');

  return (
    <div
      id={`internship-card-${internship.id}`}
      className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all flex flex-col justify-between group"
    >
      <div>
        {/* Top Badges: Domain, Bangalore Flag, Paid/Unpaid */}
        <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200/60">
              {internship.domain}
            </span>
            {isBangalore && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                <MapPin className="w-2.5 h-2.5" />
                <span>Bangalore</span>
              </span>
            )}
          </div>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
              internship.compensationType === 'Paid'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/80'
                : 'bg-amber-50 text-amber-700 border border-amber-200/80'
            }`}
          >
            {internship.compensationType === 'Paid' ? 'Paid Internship' : 'Unpaid / Experience'}
          </span>
        </div>

        {/* Prominent Application Deadline Alert Banner */}
        <div className="mb-3 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200/80 flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 font-bold text-rose-800">
            <Calendar className="w-3.5 h-3.5 text-rose-600 shrink-0" />
            <span>Last Date: <strong className="font-extrabold text-rose-950">{internship.lastDate}</strong></span>
          </span>
          <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-rose-200/70 text-rose-900 font-bold">
            Active
          </span>
        </div>

        {/* Internship Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-1.5">
          {internship.title}
        </h3>

        {/* Organization Name */}
        <p className="text-xs font-semibold text-slate-600 mb-3 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <span>{internship.organization}</span>
        </p>

        {/* Key Info: Location & Stipend */}
        <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-500 mb-3.5 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span>{internship.location} ({internship.mode})</span>
          </div>
          {internship.stipend && (
            <div className="flex items-center gap-1 font-semibold text-emerald-600">
              <Banknote className="w-3.5 h-3.5" />
              <span>{internship.stipend}</span>
            </div>
          )}
        </div>

        {/* Short Description */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {internship.shortDescription}
        </p>

        {/* Eligibility Details */}
        <div className="space-y-1.5 mb-4 p-3 bg-slate-50/80 rounded-xl border border-slate-100 text-[11px]">
          <div className="flex items-start gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 font-medium">Eligibility: </span>
              <span className="font-medium text-slate-700">{internship.eligibility}</span>
            </div>
          </div>
        </div>

        {/* Official Website / Direct Portal Link */}
        {internship.websiteUrl && (
          <div className="flex items-center justify-between mb-4 px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 text-[11px]">
            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
              <Globe className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span>Official Portal:</span>
            </span>
            <a
              href={internship.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 font-semibold hover:text-indigo-700 hover:underline flex items-center gap-1 truncate max-w-[170px]"
              title={`Visit ${internship.websiteUrl}`}
            >
              <span className="truncate">{internship.portalName || 'Visit Portal'}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>
        )}

        {/* Skills chips */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {internship.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600"
            >
              #{skill}
            </span>
          ))}
          {internship.skills.length > 3 && (
            <span className="px-1.5 py-0.5 text-[10px] text-slate-400 font-medium">
              +{internship.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Direct Apply and Details Actions */}
      <div className="flex items-center gap-2 pt-2">
        <a
          id={`direct-apply-btn-${internship.id}`}
          href={internship.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-98 transition-all shadow-xs"
          title={`Visit official site and apply at ${internship.organization}`}
        >
          <span>Apply on Official Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <button
          id={`details-btn-${internship.id}`}
          type="button"
          onClick={onApply}
          className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          title="View comprehensive details"
        >
          <span>Details</span>
        </button>
      </div>
    </div>
  );
}
