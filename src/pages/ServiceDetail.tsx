import { useParams, Navigate, Link } from "react-router-dom";
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
} from "lucide-react";
import { servicesData } from "@/lib/data";
import {
  PHONE_NUMBER,
  createWhatsAppLink,
  createEmergencyMessage,
} from "@/lib/utils";
import { useSEO } from "@/hooks/useSEO";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  useSEO({
    title: `${service.title} | Expert Plumbers Gauteng`,
    description: service.description,
  });

  const isEmergency = slug === "emergency";

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section
        className={`py-16 sm:py-24 ${isEmergency ? "bg-red-600" : "bg-blue-900"} text-white`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-medium transition-colors"
          >
            <ArrowLeft size={16} /> Back to services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <service.icon size={32} className="text-white" />
            </div>
            {isEmergency && (
              <span className="px-3 py-1 bg-red-500 rounded-full text-sm font-bold animate-pulse">
                PRIORITY RESPONSE
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl font-light leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why choose Savvy Plumbing for {service.title}?
              </h2>
              <ul className="space-y-4">
                {[
                  "Guaranteed workmanship on all repairs",
                  "Transparent pricing upfront—no surprise costs",
                  "Fully licensed, insured & qualified local plumbers",
                  service.promise,
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      size={24}
                      className={
                        isEmergency
                          ? "text-red-500 shrink-0"
                          : "text-green-500 shrink-0"
                      }
                    />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="text-yellow-500" />
                Don't delay repairs
              </h3>
              <p className="text-gray-600">
                Postponing plumbing issues often leads to severe water damage,
                structural rot, and significantly higher repair bills. Let us
                secure your home immediately.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[400px]">
            <div className="sticky top-28 bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Get It Fixed Fast
              </h3>
              <div className="space-y-4">
                <a
                  href={createWhatsAppLink(
                    createEmergencyMessage(service.title),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-transform hover:scale-105 shadow-md shadow-green-500/20"
                >
                  <MessageCircle size={24} />
                  WhatsApp Us Now
                </a>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className={`flex items-center justify-center gap-3 w-full py-4 font-bold rounded-xl text-lg transition-colors border-2 ${isEmergency ? "bg-red-50 text-red-600 border-red-200 hover:bg-red-100" : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"}`}
                >
                  <Phone size={24} />
                  Call {PHONE_NUMBER}
                </a>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                We aim to respond to all inquiries within minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
