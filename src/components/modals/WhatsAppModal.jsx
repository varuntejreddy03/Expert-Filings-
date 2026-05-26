import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { services } from '../../data/services.js';
import { useWhatsAppModal } from '../../hooks/useWhatsAppModal.js';
import { isValidIndianMobile, openWhatsApp } from '../../utils/whatsapp.js';
import Button, { cn } from '../ui/Button.jsx';

const emptyForm = {
  name: '',
  phone: '',
  city: '',
  service: '',
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required.';
  if (!isValidIndianMobile(form.phone)) errors.phone = 'Enter a valid 10-digit mobile number.';
  if (!form.city.trim()) errors.city = 'City is required.';
  if (!form.service) errors.service = 'Select a service.';
  return errors;
}

function FieldError({ children }) {
  return children ? <p className="mt-1 text-sm font-medium text-red-600">{children}</p> : null;
}

export default function WhatsAppModal() {
  const { isOpen, closeModal, selectedService, openModal } = useWhatsAppModal();
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setForm((current) => ({
        ...current,
        service: selectedService || current.service || 'Income Tax Returns',
      }));
      setErrors({});
    }
  }, [isOpen, selectedService]);

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
    closeModal();
    setForm(emptyForm);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="whatsapp-modal-title"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md rounded-[1.75rem] bg-white p-6 shadow-2xl shadow-black/25 sm:p-8"
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-bg text-brand-muted transition-colors hover:bg-brand-navy hover:text-white"
                aria-label="Close WhatsApp form"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-7 pr-12">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-brand-blue/20">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h2 id="whatsapp-modal-title" className="font-display text-3xl font-extrabold text-brand-navy">
                  Connect with Our Expert
                </h2>
                <p className="mt-2 text-sm leading-6 text-brand-muted">
                  Share your basic details and our team will continue the conversation on WhatsApp.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="mb-1 block text-sm font-bold text-brand-navy" htmlFor="wa-name">
                    Full Name
                  </label>
                  <input
                    id="wa-name"
                    type="text"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    className={cn(
                      'w-full rounded-2xl border-gray-200 px-4 py-3 text-brand-text shadow-sm focus:border-brand-blue focus:ring-brand-blue',
                      errors.name && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                    )}
                  />
                  <FieldError>{errors.name}</FieldError>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-bold text-brand-navy" htmlFor="wa-phone">
                    Contact Number
                  </label>
                  <input
                    id="wa-phone"
                    type="tel"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(event) => updateField('phone', event.target.value)}
                    className={cn(
                      'w-full rounded-2xl border-gray-200 px-4 py-3 text-brand-text shadow-sm focus:border-brand-blue focus:ring-brand-blue',
                      errors.phone && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                    )}
                  />
                  <FieldError>{errors.phone}</FieldError>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-bold text-brand-navy" htmlFor="wa-city">
                    City
                  </label>
                  <input
                    id="wa-city"
                    type="text"
                    value={form.city}
                    onChange={(event) => updateField('city', event.target.value)}
                    className={cn(
                      'w-full rounded-2xl border-gray-200 px-4 py-3 text-brand-text shadow-sm focus:border-brand-blue focus:ring-brand-blue',
                      errors.city && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                    )}
                  />
                  <FieldError>{errors.city}</FieldError>
                </div>

                <div>
                  <label className="mb-1 block text-sm font-bold text-brand-navy" htmlFor="wa-service">
                    Service Interested
                  </label>
                  <select
                    id="wa-service"
                    value={form.service}
                    onChange={(event) => updateField('service', event.target.value)}
                    className={cn(
                      'w-full rounded-2xl border-gray-200 px-4 py-3 text-brand-text shadow-sm focus:border-brand-blue focus:ring-brand-blue',
                      errors.service && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                    )}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <FieldError>{errors.service}</FieldError>
                </div>

                <Button type="submit" icon={Send} className="w-full">
                  Continue on WhatsApp
                </Button>
              </form>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50">
        <div className="group relative">
          <motion.span
            className="absolute inset-0 rounded-full bg-brand-green"
            animate={{ scale: [1, 1.8], opacity: [0.5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeOut' }}
          />
          <button
            type="button"
            onClick={() => openModal()}
            className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-brand-navy shadow-2xl shadow-brand-green/40 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-green/35"
            aria-label="Chat with us on WhatsApp"
          >
            <MessageCircle className="h-7 w-7" />
          </button>
          <span className="pointer-events-none absolute bottom-full right-0 mb-3 w-max rounded-full bg-brand-navy px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            Chat with us
          </span>
        </div>
      </div>
    </>
  );
}
