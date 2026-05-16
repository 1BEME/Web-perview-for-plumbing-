import { Link } from "react-router-dom";
import {
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Zap,
  MapPin,
} from "lucide-react";
import {
  PHONE_NUMBER,
  createWhatsAppLink,
  createEmergencyMessage,
} from "@/lib/utils";
import { servicesData, reviews } from "@/lib/data";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Savvy Plumbing | 24/7 Emergency Plumber in Gauteng",
    description:
      "Fast, reliable emergency plumbing services across Gauteng. We fix burst pipes, blocked drains, and geysers fast. WhatsApp or Call now.",
  });

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="relative bg-blue-900 text-white overflow-hidden py-20 lg:py-32">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
          <div className="flex-1 flex flex-col gap-6 lg:items-start items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white font-bold mb-2 shadow-lg shadow-red-600/30">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              24/7 Emergency Plumbers Available Now
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Fast, Reliable{" "}
              <span className="text-blue-400">Emergency Plumbing</span> in
              Gauteng
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-light">
              We fix burst pipes, blocked drains, and geysers fast — before the
              damage spreads.
            </p>

            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-4">
              <a
                href={createWhatsAppLink(createEmergencyMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg transition-transform hover:scale-105 shadow-xl shadow-green-500/20"
              >
                <MessageCircle size={24} />
                WhatsApp Plumber Now
              </a>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 text-blue-900 font-bold rounded-xl text-lg transition-colors shadow-xl"
              >
                <Phone size={24} className="text-blue-600" />
                Call Emergency Line
              </a>
            </div>

            <div className="flex flex-wrap m-auto lg:m-0 justify-center lg:justify-start gap-4 mt-6 text-blue-200 text-sm font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-blue-400" /> Licensed &
                Insured
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} className="text-blue-400" /> Under 60min
                Response
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-blue-400" /> Gauteng Local
              </span>
            </div>
          </div>

          <div className="hidden lg:block flex-1 relative">
            <img
              src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1000&auto=format&fit=crop"
              alt="Professional Plumber smiling"
              className="rounded-2xl shadow-2xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[250px]">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock size={24} className="text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 leading-tight">
                    Fast Arrival
                  </p>
                  <p className="text-sm text-gray-500">Across Gauteng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-8 text-center sm:text-left">
          <div className="flex-1 flex flex-col items-center sm:items-start">
            <span className="text-4xl font-extrabold text-blue-900">10+</span>
            <span className="text-gray-500 font-medium">Years Experience</span>
          </div>
          <div className="flex-1 flex flex-col items-center sm:items-start">
            <span className="text-4xl font-extrabold text-blue-900">24/7</span>
            <span className="text-gray-500 font-medium">
              Emergency Response
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center sm:items-start">
            <span className="text-4xl font-extrabold text-blue-900">5k+</span>
            <span className="text-gray-500 font-medium">Jobs Completed</span>
          </div>
          <div className="flex-1 flex flex-col items-center sm:items-start">
            <div className="flex text-yellow-400 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-500 font-medium">
              5-Star Rated Service
            </span>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER RED */}
      <section className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-500 rounded-full animate-bounce">
              <AlertTriangleIcon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Burst Pipe? Blocked Drain? Don't Wait!
              </h2>
              <p className="text-red-100">
                Stop the damage before it gets worse. We are on standby.
              </p>
            </div>
          </div>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="whitespace-nowrap px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-10 transition-colors shadow-lg"
          >
            Call Emergency Plumber
          </a>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Core Plumbing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional, guaranteed workmanship for every plumbing issue in
              your home or business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="flex flex-col gap-4 mt-auto">
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-600 bg-green-50 p-2 rounded-lg">
                    <Zap size={16} /> {service.promise}
                  </div>
                  <a
                    href={createWhatsAppLink(
                      createEmergencyMessage(service.title),
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-between items-center w-full px-4 py-3 bg-gray-50 hover:bg-green-500 hover:text-white text-gray-800 font-semibold rounded-xl transition-colors group/btn"
                  >
                    <span>Fix it now</span>
                    <MessageCircle
                      size={18}
                      className="text-green-500 group-hover/btn:text-white"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              View All Services <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / CONTACT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Get Your Plumbing Fixed in 3 Simple Steps
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Send a WhatsApp
                  </h4>
                  <p className="text-gray-600">
                    Click any green button to instantly open WhatsApp. Tell us
                    your issue and location.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Fast Dispatch
                  </h4>
                  <p className="text-gray-600">
                    We dispatch the nearest available plumber to your location
                    immediately.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    Problem Solved
                  </h4>
                  <p className="text-gray-600">
                    Our expert diagnoses and fixes the issue fast, leaving your
                    home clean and dry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Request Immediate Help
            </h3>
            <a
              href={createWhatsAppLink(createEmergencyMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-lg mb-4 shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={24} />
              WhatsApp Us Now
            </a>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-medium">
                OR
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-3 w-full py-4 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold rounded-xl text-lg transition-colors"
            >
              <Phone size={24} />
              Call {PHONE_NUMBER}
            </a>
            <p className="text-center text-sm text-gray-500 mt-6">
              No call-out fee if you accept the quote. <br />
              All work is guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Loved by Gauteng Homeowners
            </h2>
            <p className="text-lg text-gray-600">
              Hear what our satisfied customers have to say about our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 flex items-center justify-center rounded-full font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">
                      {review.name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {review.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Icon helper
function AlertTriangleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
