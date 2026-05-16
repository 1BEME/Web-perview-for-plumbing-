import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { serviceAreas, servicesData } from "@/lib/data";
import { PHONE_NUMBER } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Savvy Plumbing
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed mt-2">
              Fast, reliable emergency plumbing services across Gauteng. We're
              on call 24/7 to solve your plumbing nightmares before they spread.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone size={18} className="text-blue-400" />
                <span className="font-semibold text-white">{PHONE_NUMBER}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 shrink-0 mt-1" />
                <span>Serving Johannesburg, Pretoria & surrounding areas</span>
              </div>
              <a
                href="mailto:info@savvyplumbing.co.za"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail size={18} className="text-blue-400" />
                <span>info@savvyplumbing.co.za</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/emergency"
                  className="text-red-400 hover:text-red-300 font-semibold transition-colors"
                >
                  24/7 Emergency
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg mb-2">Our Services</h3>
            <ul className="flex flex-col gap-3">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-lg mb-2">
              Areas We Serve
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.slice(0, 8).map((area) => (
                <li key={area} className="text-sm">
                  <Link
                    to={`/areas/${area.toLowerCase().replace(/\s/g, "-")}`}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Savvy Plumbing. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
