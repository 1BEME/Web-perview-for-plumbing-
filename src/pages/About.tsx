import { ShieldCheck, Award, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function About() {
  useSEO({
    title: "About Us | Savvy Plumbing Gauteng",
    description:
      "Learn why Savvy Plumbing is Gauteng's most trusted emergency plumbing team. Fully licensed, insured, and dedicated to fast response times.",
  });

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="bg-blue-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            About Savvy Plumbing
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Gauteng's most trusted emergency plumbing team. Dedicated to doing
            it right the first time.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Savvy Plumbing was founded with a single mission: to provide the
              homeowners and businesses of Gauteng with reliable, transparent,
              and high-quality emergency plumbing services. We realised that
              finding a plumber you can trust—especially in the middle of the
              night—was harder than it should be.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we operate a fleet of fully-equipped response vehicles
              manned by licensed, experienced professionals who take pride in
              their craft. Whether it's a blocked drain or a major commercial
              pipe burst, we bring the same level of urgency and expertise to
              every single job.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop"
                alt="Plumber working"
                className="rounded-2xl shadow-md object-cover h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1607567634354-94e4cc556aee?q=80&w=600&auto=format&fit=crop"
                alt="Pipes"
                className="rounded-2xl shadow-md object-cover h-64 w-full mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values drive every decision we make on site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Licensed & Compliant
              </h3>
              <p className="text-gray-600">
                All our work complies with South African national standards and
                local bylaws.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Clock size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                On-Time Arrival
              </h3>
              <p className="text-gray-600">
                We respect your time. When we say an emergency response takes 60
                mins, we mean it.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Workmanship Guarantee
              </h3>
              <p className="text-gray-600">
                If there’s an issue with our repair, we come back and fix it for
                free. Guaranteed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                No hidden fees, no nasty surprises. You approve the quote before
                we start work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
