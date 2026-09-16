import { useState } from 'react';
import { STUDENT_INFO } from '../data/config';
import { 
  MessageCircle, 
  Users, 
  Bell, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  Shield,
  HelpCircle
} from 'lucide-react';

export default function WhatsAppCommunitySection() {
  const [copied, setCopied] = useState(false);
  const [showConfigHelper, setShowConfigHelper] = useState(false);

  const isPlaceholder = STUDENT_INFO.whatsappGroupLink === 'YOUR_WHATSAPP_GROUP_LINK';

  const handleJoinClick = () => {
    if (isPlaceholder) {
      setShowConfigHelper(true);
    } else {
      window.open(STUDENT_INFO.whatsappGroupLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopy = () => {
    navigator.clipboard?.writeText(STUDENT_INFO.whatsappGroupLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="community" className="py-20 bg-[#0B1528] text-white relative overflow-hidden bg-official-navy-grid border-b border-slate-800">
      {/* Subtle institutional ambient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-[11px] font-mono font-bold bg-slate-800/90 text-emerald-400 border border-slate-700 mb-6 uppercase tracking-wider shadow-xs">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>COMMUNICATION DESK • SECTION 07</span>
          </div>

          {/* Main Heading: "Stay Updated" */}
          <h2
            id="community-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-100"
          >
            Stay Updated
          </h2>

          {/* Text strictly as specified in requirements */}
          <p
            id="community-subtext"
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Join the student community to receive updates about internships, programs, engineering opportunities and useful resources.
          </p>

          {/* WhatsApp CTA Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              id="join-whatsapp-btn"
              type="button"
              onClick={handleJoinClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 border border-emerald-600/80 shadow-xs active:scale-98 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Join WhatsApp Group</span>
              <ExternalLink className="w-4 h-4 opacity-75" />
            </button>

            <button
              id="copy-whatsapp-link-btn"
              type="button"
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Invite Link</span>
                </>
              )}
            </button>
          </div>

          {/* Community Perks */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto pt-6 border-t border-slate-800">
            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1">
                <Bell className="w-3.5 h-3.5 text-blue-400" />
                <span>Instant Deadline Alerts</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Never miss last-minute application dates for internships & hackathons.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span>Hackathon Teammate Search</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Form project and competition teams across engineering disciplines.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Spam Guarantee</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Strictly student opportunities, verified courses, and technical toolkits only.
              </p>
            </div>
          </div>

          {/* Easily replaceable note for Manoj */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowConfigHelper(!showConfigHelper)}
              className="text-xs text-slate-400 hover:text-slate-300 underline inline-flex items-center gap-1"
            >
              <HelpCircle className="w-3 h-3" />
              <span>How to customize your WhatsApp Group link</span>
            </button>

            {showConfigHelper && (
              <div className="mt-4 p-4 rounded-xl bg-slate-800 border border-indigo-500/40 text-left text-xs text-slate-300 max-w-xl mx-auto">
                <p className="font-bold text-white mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  <span>How to update the WhatsApp link:</span>
                </p>
                <p className="text-[11px] text-slate-300 mb-2 leading-relaxed">
                  Open <code className="bg-slate-900 px-1.5 py-0.5 rounded text-indigo-300">src/data/config.ts</code> and replace:
                </p>
                <pre className="bg-slate-950 p-2.5 rounded-lg text-emerald-400 font-mono text-[11px] overflow-x-auto border border-slate-800 mb-2">
                  whatsappGroupLink: "https://chat.whatsapp.com/your-invite-code"
                </pre>
                <p className="text-[10px] text-slate-400">
                  Current value: <span className="font-mono text-amber-300">{STUDENT_INFO.whatsappGroupLink}</span>
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
