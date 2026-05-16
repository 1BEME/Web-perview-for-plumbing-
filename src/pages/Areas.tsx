import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { serviceAreas } from "@/lib/data";
import { useSEO } from "@/hooks/useSEO";

export default function Areas() {
  useSEO({
    title: "Plumbing Service Areas | Gauteng | Savvy Plumbing",
    description:
      "View all the areas Savvy Plumbing serves in Gauteng. We provide rapid emergency response to Sandton, Joburg, Pretoria, Centurion, and more.",
  });

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      <section className="bg-blue-900 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Areas We Serve
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
            Fast, reliable plumbing across Gauteng. We've got response teams
            stationed near you.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area}
                to={`/areas/${area.toLowerCase().replace(/\s/g, "-")}`}
                className="flex items-center justify-between p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={24} className="text-blue-500" />
                  <span className="font-bold text-gray-900 text-lg">
                    {area}
                  </span>
                </div>
                <ArrowRight
                  size={20}
                  className="text-gray-300 group-hover:text-blue-500 transition-colors"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
