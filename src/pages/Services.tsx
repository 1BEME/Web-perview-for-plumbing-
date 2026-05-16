import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { servicesData } from "@/lib/data";
import { createWhatsAppLink, createEmergencyMessage } from "@/lib/utils";
import { useSEO } from "@/hooks/useSEO";

export default function Services() {
  useSEO({
    title:
      "Plumbing Services | Burst Pipes, Blocked Drains, Geysers | Savvy Plumbing",
    description:
      "Expert plumbing services in Gauteng. We specialize in geyser repairs, blocked drains, burst pipes, leak detection, and full bathroom renovations.",
  });

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-blue-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Our Plumbing Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Comprehensive residential and commercial plumbing solutions in
            Gauteng. Fixed right the first time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col group"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-col gap-3 mt-auto border-t border-gray-100 pt-6">
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                  <a
                    href={createWhatsAppLink(
                      createEmergencyMessage(service.title),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors"
                  >
                    <MessageCircle size={20} />
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Don't see your specific problem here?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We handle almost any plumbing issue imaginable. Send us a message
            describing your problem for a free direct quote.
          </p>
          <a
            href={createWhatsAppLink(
              "Hi Savvy Plumbing, I have a general plumbing inquiry: ",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl text-lg transition-colors"
          >
            <MessageCircle size={20} />
            Enquire Currently
          </a>
        </div>
      </section>
    </div>
  );
}
