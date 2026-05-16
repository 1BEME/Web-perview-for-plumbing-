import { MessageCircle, Phone } from "lucide-react";
import {
  PHONE_NUMBER,
  createWhatsAppLink,
  createEmergencyMessage,
} from "@/lib/utils";

export default function StickyEmergencyBtn() {
  return (
    <>
      {/* Mobile Bottom Bar (Mobile First strategy) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 flex gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
          className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-3.5 rounded-xl active:scale-95 transition-transform shadow-md shadow-red-600/20"
        >
          <Phone size={22} className="fill-current" /> Call Now
        </a>
        <a
          href={createWhatsAppLink(createEmergencyMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3.5 rounded-xl active:scale-95 transition-transform shadow-md shadow-green-500/20"
        >
          <MessageCircle size={22} /> WhatsApp
        </a>
      </div>

      {/* Desktop Floating Button */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3">
        {/* Phone Button */}
        <a
          href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
          className="group relative flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full shadow-xl shadow-red-600/30 hover:bg-red-700 hover:scale-105 transition-all duration-300"
          aria-label="Call emergency plumber"
        >
          <Phone size={28} className="fill-current" />
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Call Dispatcher
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={createWhatsAppLink(createEmergencyMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-xl shadow-green-500/40 hover:bg-green-600 hover:scale-105 transition-all duration-300"
          aria-label="WhatsApp emergency plumber"
        >
          {/* Ping animation effect */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-ping"></span>
          <MessageCircle size={32} />

          {/* Tooltip on hover */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp Us Now
          </span>
        </a>
      </div>
    </>
  );
}
