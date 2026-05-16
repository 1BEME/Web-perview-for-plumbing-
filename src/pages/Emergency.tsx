import {
  MessageCircle,
  Phone,
  ArrowRight,
  Clock,
  ShieldAlert,
  CheckCircle2,
} from "lucide-react";
import {
  PHONE_NUMBER,
  createWhatsAppLink,
  createEmergencyMessage,
} from "@/lib/utils";
import { useSEO } from "@/hooks/useSEO";

export default function Emergency() {
  useSEO({
    title: "Emergency Plumber 24/7 | Savvy Plumbing Gauteng",
    description:
      "Urgent plumbing emergency? We dispatch our 24/7 plumbers across Gauteng immediately for burst pipes, flooding, or blocked drains.",
  });

  return (
    <div className="flex flex-col w-full bg-red-50 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24 w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-red-100 text-red-600 rounded-full mb-6">
            <ShieldAlert size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            24/7 Emergency Plumbing
          </h1>
          <p className="text-xl text-gray-600">
            Stop the damage now. Immediate response across Gauteng.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-red-100">
          <div className="bg-red-600 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">
                Need a Plumber IMMEDIATELY?
              </h2>
              <p className="text-red-100">
                Don't wait. Contact us now and we will dispatch someone right
                away.
              </p>
            </div>
            <div className="flex items-center gap-2 text-white bg-red-700 px-4 py-2 rounded-lg font-semibold">
              <Clock className="w-5 h-5 animate-pulse" />
              Current Wait Time: ~45 mins
            </div>
          </div>

          <div className="p-6 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <a
                href={createWhatsAppLink(
                  createEmergencyMessage("Emergency Priority Assist"),
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-4 p-8 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors border-2 border-green-200 group"
              >
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle size={32} />
                </div>
                <div className="text-center">
                  <span className="block text-xl font-bold text-green-700 mb-1">
                    WhatsApp Us
                  </span>
                  <span className="text-sm text-green-600">
                    Fastest way to share location & photos
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex flex-col items-center justify-center gap-4 p-8 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors border-2 border-blue-200 group"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={32} />
                </div>
                <div className="text-center">
                  <span className="block text-xl font-bold text-blue-800 mb-1">
                    Call {PHONE_NUMBER}
                  </span>
                  <span className="text-sm text-blue-600">
                    Speak directly to dispatcher
                  </span>
                </div>
              </a>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                We handle all emergencies, including:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Burst Pipes & Major Leaks",
                  "Overflowing Toilets",
                  "Blocked Main Sewer Lines",
                  "Burst Geysers",
                  "No Hot Water",
                  "Flooded Bathrooms",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <CheckCircle2 size={18} className="text-red-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
