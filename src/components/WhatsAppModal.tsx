import { useState } from 'react';
import { X, MessageCircle, ExternalLink, Copy, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { STUDENT_INFO } from '../data/config';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const [copied, setCopied] = useState(false);
  const [customLink, setCustomLink] = useState('');

  if (!isOpen) return null;

  const isPlaceholder = STUDENT_INFO.whatsappGroupLink === 'YOUR_WHATSAPP_GROUP_LINK';
  const effectiveLink = customLink || STUDENT_INFO.whatsappGroupLink;

  const handleCopy = () => {
    navigator.clipboard?.writeText(effectiveLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpen = () => {
    if (isPlaceholder && !customLink) {
      alert(
        'Notice for M. Manoj:\n\nYou can set your real WhatsApp group link in "src/data/config.ts" under whatsappGroupLink.\n\nOnce added, students will be redirected directly to your WhatsApp invite.'
      );
    } else {
      window.open(effectiveLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 fill-white/20" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">SVCE Student Community</h3>
              <p className="text-xs text-emerald-100">Curated by M. Manoj • SVCE Engineering Hub</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs text-slate-600">
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-950">
            <p className="font-semibold text-emerald-900 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Stay Updated in Real-Time</span>
            </p>
            <p className="text-[11px] leading-relaxed text-emerald-800">
              Join the student community to receive updates about internships, programs, engineering opportunities and useful resources.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="font-bold text-slate-700 block">WhatsApp Invite Link</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                readOnly={!isPlaceholder}
                value={effectiveLink}
                onChange={(e) => setCustomLink(e.target.value)}
                placeholder="https://chat.whatsapp.com/..."
                className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 bg-slate-50 text-slate-700"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold shrink-0 flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {isPlaceholder && (
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-[11px] leading-relaxed">
              <p className="font-bold text-amber-800 mb-0.5">Note for M. Manoj:</p>
              This is currently set to the placeholder <code className="bg-amber-100 px-1 rounded font-mono">YOUR_WHATSAPP_GROUP_LINK</code>. You can paste your invite link in the input above or permanently set it in <code className="bg-amber-100 px-1 rounded font-mono">src/data/config.ts</code>!
            </div>
          )}

          <div className="space-y-1 pt-1 text-[11px] text-slate-500">
            <p className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Strictly engineering opportunities, hackathons, and study material.</span>
            </p>
            <p className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero spam • 100% student-driven.</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <button
            type="button"
            onClick={handleOpen}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
          >
            <span>Open WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
