export const WHATSAPP_PHONE = '919573984793';
export const PHONE_PRIMARY = '+91 9573984793';
export const PHONE_SECONDARY = '+91 9398047509';
export const EMAIL = 'venkat@expertfilings.in';
export const INSTAGRAM_URL = 'https://instagram.com/expert_filings';

export function normalizePhone(phone) {
  return String(phone || '').replace(/\D/g, '');
}

export function isValidIndianMobile(phone) {
  return /^[6-9]\d{9}$/.test(normalizePhone(phone));
}

export function buildWhatsAppUrl({ name, phone, city, service, message }) {
  const lines = [
    `Hi Expert Filings! I'm ${name} from ${city}.`,
    `Contact: ${phone}.`,
    `Interested in: ${service}.`,
  ];

  if (message) {
    lines.push(`Message: ${message}.`);
  }

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines.join(' '))}`;
}

export function openWhatsApp(payload) {
  window.open(buildWhatsAppUrl(payload), '_blank', 'noopener,noreferrer');
}
