import { motion } from 'framer-motion';
import {
  Clock3,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { useState } from 'react';
import Button, { cn } from '../components/ui/Button.jsx';
import { services } from '../data/services.js';
import { useWhatsAppModal } from '../hooks/useWhatsAppModal.js';
import {
  EMAIL,
  INSTAGRAM_URL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  isValidIndianMobile,
  openWhatsApp,
} from '../utils/whatsapp.js';
import { pageTransition } from '../utils/animations.js';

const initialForm = {
  name: '',
  phone: '',
  city: '',
  service: '',
  message: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!isValidIndianMobile(form.phone)) errors.phone = 'Enter a valid 10-digit mobile number.';
  if (!form.city.trim()) errors.city = 'City is required.';
  if (!form.service) errors.service = 'Select a service.';
  return errors;
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const { openModal } = useWhatsAppModal();

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    openWhatsApp(form);
    setForm(initialForm);
  };

  const inputClass = (field) =>
    cn(
      'w-full rounded-2xl border-gray-200 bg-white px-4 py-4 shadow-sm focus:border-brand-blue focus:ring-brand-blue',
      errors[field] && 'border-red-500 focus:border-red-500 focus:ring-red-500',
    );

  return (
    <motion.div {...pageTransition}>
      <section className="relative overflow-hidden bg-brand-midnight pb-20 pt-32 text-white">
        <div aria-hidden="true" className="absolute -right-44 -top-52 h-[680px] w-[680px] rounded-full bg-brand-blue/30 blur-[170px]" />
        <div aria-hidden="true" className="absolute -left-44 top-1/3 h-[480px] w-[480px] rounded-full bg-brand-green-light/20 blur-[130px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.04]" />
        <div className="container-page relative z-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">Contact Expert Filings</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05]">
            Speak to a compliance expert today.
          </h1>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.8] text-slate-400">
            Send your query through WhatsApp, call directly, or schedule a consultation for filing and registration support.
          </p>
        </div>
      </section>

      <section className="bg-[#F8FAFF] section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-[#E8EDF5] bg-white p-6 shadow-[0_16px_48px_rgba(21,101,192,0.12)] md:p-8">
            <h2 className="font-display text-3xl font-extrabold text-brand-navy">Send via WhatsApp</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1 block text-sm font-bold text-brand-navy">Full Name*</label>
                <input id="contact-name" value={form.name} onChange={(event) => updateField('name', event.target.value)} className={inputClass('name')} />
                {errors.name ? <p className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-1 block text-sm font-bold text-brand-navy">Phone Number*</label>
                <input id="contact-phone" type="tel" inputMode="numeric" value={form.phone} onChange={(event) => updateField('phone', event.target.value)} className={inputClass('phone')} />
                {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone}</p> : null}
              </div>
              <div>
                <label htmlFor="contact-city" className="mb-1 block text-sm font-bold text-brand-navy">City*</label>
                <input id="contact-city" value={form.city} onChange={(event) => updateField('city', event.target.value)} className={inputClass('city')} />
                {errors.city ? <p className="mt-1 text-sm text-red-600">{errors.city}</p> : null}
              </div>
              <div>
                <label htmlFor="contact-service" className="mb-1 block text-sm font-bold text-brand-navy">Service Interested*</label>
                <select id="contact-service" value={form.service} onChange={(event) => updateField('service', event.target.value)} className={inputClass('service')}>
                  <option value="">Select service</option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.title}>{service.title}</option>
                  ))}
                </select>
                {errors.service ? <p className="mt-1 text-sm text-red-600">{errors.service}</p> : null}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-1 block text-sm font-bold text-brand-navy">Message</label>
              <textarea
                id="contact-message"
                rows="5"
                value={form.message}
                onChange={(event) => updateField('message', event.target.value)}
                className="w-full rounded-2xl border-gray-200 bg-white px-4 py-4 shadow-sm focus:border-brand-blue focus:ring-brand-blue"
              />
            </div>
            <Button type="submit" icon={Send} className="mt-6 w-full md:w-auto">
              Send via WhatsApp
            </Button>
          </form>

          <aside className="rounded-3xl bg-brand-midnight p-6 text-white shadow-[0_16px_48px_rgba(0,0,0,0.35)] md:p-8">
            <h2 className="font-display text-3xl font-extrabold">Contact Info</h2>
            <div className="mt-7 space-y-5">
              <a href={`tel:${PHONE_PRIMARY.replace(/\D/g, '')}`} className="flex gap-4 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15">
                <Phone className="h-6 w-6 shrink-0 text-brand-green" />
                <span>{PHONE_PRIMARY} / {PHONE_SECONDARY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex gap-4 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15">
                <Mail className="h-6 w-6 shrink-0 text-brand-green" />
                <span>{EMAIL}</span>
              </a>
              <div className="flex gap-4 rounded-2xl bg-white/10 p-4">
                <MapPin className="h-6 w-6 shrink-0 text-brand-green" />
                <span>Eluru | Vijayawada | Hyderabad</span>
              </div>
              <div className="flex gap-4 rounded-2xl bg-white/10 p-4">
                <Clock3 className="h-6 w-6 shrink-0 text-brand-green" />
                <span>Mon-Sun: 10 AM - 7 PM</span>
              </div>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15">
                <Instagram className="h-6 w-6 shrink-0 text-brand-green" />
                <span>@expert_filings</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="container-page">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl bg-brand-midnight">
            <div className="absolute inset-0 bg-dot-grid opacity-[0.05]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,71,161,0.78),rgba(21,101,192,0.65),rgba(22,163,74,0.5))]" />
            <div className="relative z-10 flex min-h-[320px] flex-col items-center justify-center p-8 text-center text-white">
              <MapPin className="h-12 w-12 text-brand-green" />
              <h2 className="mt-5 font-display text-4xl font-extrabold">Eluru | Vijayawada | Hyderabad</h2>
              <p className="mt-3 max-w-2xl text-slate-200">
                Google Maps embed placeholder for office consultation hubs and service areas.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a href={`tel:${PHONE_PRIMARY.replace(/\D/g, '')}`} className="rounded-2xl border border-[#E8EDF5] bg-[#F8FAFF] p-5 text-center font-display font-bold text-brand-navy transition-all hover:-translate-y-1 hover:bg-brand-blue hover:text-white hover:shadow-[0_16px_48px_rgba(21,101,192,0.14)]">
              <Phone className="mx-auto mb-3 h-6 w-6" />
              Call Now
            </a>
            <button onClick={() => openModal()} type="button" className="rounded-2xl border border-[#E8EDF5] bg-[#F8FAFF] p-5 text-center font-display font-bold text-brand-navy transition-all hover:-translate-y-1 hover:bg-brand-green hover:text-white hover:shadow-[0_16px_48px_rgba(22,163,74,0.14)]">
              <MessageCircle className="mx-auto mb-3 h-6 w-6" />
              WhatsApp
            </button>
            <a href={`mailto:${EMAIL}`} className="rounded-2xl border border-[#E8EDF5] bg-[#F8FAFF] p-5 text-center font-display font-bold text-brand-navy transition-all hover:-translate-y-1 hover:bg-brand-blue hover:text-white hover:shadow-[0_16px_48px_rgba(21,101,192,0.14)]">
              <Mail className="mx-auto mb-3 h-6 w-6" />
              Email
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="rounded-2xl border border-[#E8EDF5] bg-[#F8FAFF] p-5 text-center font-display font-bold text-brand-navy transition-all hover:-translate-y-1 hover:bg-brand-green hover:text-white hover:shadow-[0_16px_48px_rgba(22,163,74,0.14)]">
              <Instagram className="mx-auto mb-3 h-6 w-6" />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
