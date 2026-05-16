import { useState } from "react";
import { MessageCircle, Phone, MapPin, Mail, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import {
  PHONE_NUMBER,
  createWhatsAppLink,
  createEmergencyMessage,
} from "@/lib/utils";
import { serviceAreas } from "@/lib/data";
import { useSEO } from "@/hooks/useSEO";

type ContactFormData = {
  name: string;
  phone: string;
  issue: string;
  location: string;
};

export default function Contact() {
  useSEO({
    title: "Contact Us | Savvy Plumbing Gauteng",
    description:
      "Contact Savvy Plumbing for immediate emergency service. Call, WhatsApp, or fill out our form for a fast dispatch in Gauteng.",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // In a real app we'd submit this to a backend/email service endpoint
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-blue-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            We're ready to dispatch a plumber to your location immediately.
            Reach out via WhatsApp, phone, or the form below.
          </p>
        </div>
      </section>

      <section className="py-16 -mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          {/* Quick Action Cards */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                  <MessageCircle size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  WhatsApp Us (Fastest)
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Send us a message with photos of the issue for an instant
                  quote.
                </p>
                <a
                  href={createWhatsAppLink(createEmergencyMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-md shadow-green-500/20"
                >
                  Start Chat
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden flex-grow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Call the Dispatcher
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Speak directly to our team to arrange an emergency call-out.
              </p>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex justify-center items-center w-full px-4 py-3 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold border border-blue-200 rounded-xl transition-colors"
              >
                {PHONE_NUMBER}
              </a>

              <div className="mt-8 space-y-4 border-t border-gray-100 pt-6">
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Clock size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Hours:</strong> 24/7, 365 Days a year
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <MapPin size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Serves:</strong>{" "}
                    {serviceAreas.slice(0, 4).join(", ")} & more
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-600">
                  <Mail size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Email:</strong> info@savvyplumbing.co.za
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Request a Call-Back or Quote
            </h2>

            {submitSuccess ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-xl border border-green-200 text-center">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Message Sent Successfully!
                </h3>
                <p>Our team will contact you shortly to confirm the details.</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 px-6 py-2 bg-white text-green-700 font-semibold rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="e.g. 082 123 4567"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="location"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Suburb / Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="e.g. Sandton"
                    {...register("location", {
                      required: "Location is required",
                    })}
                  />
                  {errors.location && (
                    <span className="text-red-500 text-xs">
                      {errors.location.message}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="issue"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Describe the Plumbing Issue
                  </label>
                  <textarea
                    id="issue"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="e.g. My geyser burst and water is leaking through the ceiling..."
                    {...register("issue", {
                      required: "Please describe the issue",
                    })}
                  ></textarea>
                  {errors.issue && (
                    <span className="text-red-500 text-xs">
                      {errors.issue.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl text-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>Send Message</>
                  )}
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
