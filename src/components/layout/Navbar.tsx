import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import {
  cn,
  PHONE_NUMBER,
  createWhatsAppLink,
  createEmergencyMessage,
} from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Emergency", href: "/emergency" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-blue-900 text-white py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div
            className={cn(
              "p-2 rounded-lg",
              isScrolled ? "bg-blue-600" : "bg-white",
            )}
          >
            <svg
              className={cn(
                "w-6 h-6",
                isScrolled ? "text-white" : "text-blue-900",
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <span
            className={cn(
              "text-xl font-bold tracking-tight",
              isScrolled ? "text-blue-900" : "text-white",
            )}
          >
            Savvy Plumbing
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-blue-400",
                isScrolled
                  ? "text-gray-700 hover:text-blue-600"
                  : "text-gray-100",
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105",
              isScrolled
                ? "text-blue-600 bg-blue-50"
                : "text-white bg-blue-800 hover:bg-blue-700",
            )}
          >
            <Phone size={16} />
            {PHONE_NUMBER}
          </a>
          <a
            href={createWhatsAppLink(createEmergencyMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm bg-green-500 text-white hover:bg-green-600 transition-transform hover:scale-105 shadow-md shadow-green-500/30"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn("p-2", isScrolled ? "text-gray-900" : "text-white")}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-800 font-semibold px-4 py-3 rounded-lg hover:bg-gray-50 text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-gray-100">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-blue-700 bg-blue-50 border border-blue-100 w-full"
            >
              <Phone size={20} />
              Call {PHONE_NUMBER}
            </a>
            <a
              href={createWhatsAppLink(createEmergencyMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold bg-green-500 text-white hover:bg-green-600 w-full shadow-md"
            >
              <MessageCircle size={20} />
              WhatsApp Emergency
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
