import {
  BadgeCheck,
  BadgeIndianRupee,
  Building2,
  Factory,
  FileText,
  Handshake,
  HeartHandshake,
  Landmark,
  ReceiptText,
  Rocket,
  ShieldCheck,
  Ship,
  Utensils,
} from 'lucide-react';

export const serviceIconMap = {
  BadgeCheck,
  BadgeIndianRupee,
  Building2,
  Factory,
  FileText,
  Handshake,
  HeartHandshake,
  Landmark,
  ReceiptText,
  Rocket,
  ShieldCheck,
  Ship,
  Utensils,
};

export function getServiceIcon(icon) {
  return serviceIconMap[icon] || FileText;
}
