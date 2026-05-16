import { useParams, Navigate, Link } from "react-router-dom";
import {
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import { serviceAreas, servicesData } from "@/lib/data";
import {
  PHONE_NUMBER,
  createWhatsAppLink,
  createEmergencyMessage,
} from "@/lib/utils";
import { useSEO } from "@/hooks/useSEO";

export default function AreaDetail() {
  const { slug } = useParams<{ slug: string }>();

  const areaName = serviceAreas.find(
    (a) => a.toLowerCase().replace(/\s/g, "-") === slug,
  );

  if (!areaName) {
    return <Navigate to="/areas" replace />;
  }

  useSEO({
    title: `Emergency Plumber in ${areaName} | 24/7 Response | Savvy Plumbing`,
    description: `Need an urgent plumber in ${areaName}? Savvy Plumbing offers 24/7 emergency response for burst pipes, blocked drains, and geysers in ${areaName}.`,
  });

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Local SEO Hero */}
      <section className="bg-blue-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-800 text-blue-100 border border-blue-700 font-semibold mb-6">
            <MapPin size={16} /> Local Plumbers in {areaName}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Emergency Plumber <span className="text-blue-400">{areaName}</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-light mb-8">
            Fast response times for burst pipes, blocked drains, and geyser
            repairs directly in {areaName}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={createWhatsAppLink(
                createEmergencyMessage(`Emergency in ${areaName}`, areaName),
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-transform hover:scale-105 shadow-xl shadow-green-500/20"
            >
              <MessageCircle size={24} />
              WhatsApp Us Now
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 text-blue-900 font-bold rounded-xl text-lg transition-colors shadow-xl"
            >
              <Phone size={24} className="text-blue-600" />
              Call Emergency Line
            </a>
          </div>
        </div>
      </section>

      {/* Trust factors specific to area */}
      <section className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl">
              <Clock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Fast {areaName} Response
              </h3>
              <p className="text-gray-600">
                We have vehicles stationed nearby for rapid dispatch.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Local Knowledge
              </h3>
              <p className="text-gray-600">
                Experienced with the specific water pressure and piping
                infrastructure of residential {areaName}.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl">
              <MapPin className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Surprises
              </h3>
              <p className="text-gray-600">
                Clear, transparent quotes before we begin any work at your
                property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services linking back */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Premium Plumbing Services in {areaName}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title} in {areaName}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-1"
                >
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
