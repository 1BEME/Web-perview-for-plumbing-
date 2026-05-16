import {
  Droplet,
  Wrench,
  ThermometerSun,
  Search,
  Bath,
  AlertTriangle,
} from "lucide-react";

export const servicesData = [
  {
    id: "burst-pipes",
    title: "Burst Pipes Repair",
    description:
      "Immediate shutoff and repair for burst or leaking pipes to prevent flooding and structural damage.",
    icon: Droplet,
    slug: "burst-pipes",
    promise: "Under 60min response",
  },
  {
    id: "blocked-drains",
    title: "Blocked Drains",
    description:
      "Fast, effective unblocking of drains, sinks, and toilets using high-pressure jetting.",
    icon: Wrench,
    slug: "blocked-drains",
    promise: "Clear flow guaranteed",
  },
  {
    id: "geyser-repairs",
    title: "Geyser Repairs & Installs",
    description:
      "No hot water? Leaking geyser? We repair thermostats, elements, and install new SABS approved geysers.",
    icon: ThermometerSun,
    slug: "geyser-repairs",
    promise: "Same-day hot water",
  },
  {
    id: "leak-detection",
    title: "Leak Detection",
    description:
      "Non-invasive, advanced acoustic leak detection to find hidden water leaks quickly.",
    icon: Search,
    slug: "leak-detection",
    promise: "Save money on water bills",
  },
  {
    id: "bathroom-plumbing",
    title: "Bathroom Plumbing",
    description:
      "From fixing a leaking tap to full bathroom plumbing installations and renovations.",
    icon: Bath,
    slug: "bathroom-plumbing",
    promise: "Neat, professional work",
  },
  {
    id: "emergency-plumbing",
    title: "Emergency Plumbing 24/7",
    description:
      "Total plumbing failures, severe leaks, or overflowing sewerage handled anytime, day or night.",
    icon: AlertTriangle,
    slug: "emergency",
    promise: "24/7 Immediate Dispatch",
  },
];

export const serviceAreas = [
  "Johannesburg",
  "Pretoria",
  "Sandton",
  "Randburg",
  "Centurion",
  "Midrand",
  "Edenvale",
  "Roodepoort",
  "Kempton Park",
  "Boksburg",
];

export const reviews = [
  {
    name: "Johan Van Der Merwe",
    location: "Sandton",
    text: "Savvy Plumbing saved me! Geyser burst at 2 AM. They were at my door in 45 minutes and had it sorted by sunrise. Absolute legends.",
    rating: 5,
  },
  {
    name: "Thabo Mbeki",
    location: "Midrand",
    text: "Professional, fast, and didn't leave a mess. Blocked drain was fixed in no time. Highly recommend their WhatsApp booking.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    location: "Pretoria",
    text: "Very transparent with pricing and great communication. The team was polite and fixed the burst pipe quickly. Thank you!",
    rating: 5,
  },
];
