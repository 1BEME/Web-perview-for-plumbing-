import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "27600000000"; // Replace with actual SA number
export const PHONE_NUMBER = "060 000 0000"; // Replace with actual SA number

export const createWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const createEmergencyMessage = (service?: string, location?: string) => {
  const issueStr = service ? `Issue: ${service}` : "Issue: Emergency Plumbing";
  const locationStr = location
    ? `Location: ${location}`
    : "Location: Need to confirm";
  return `Hi Savvy Plumbing, I need urgent assistance.\n${issueStr}\n${locationStr}\nPlease contact me ASAP.`;
};
