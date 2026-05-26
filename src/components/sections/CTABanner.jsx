import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { useWhatsAppModal } from '../../hooks/useWhatsAppModal.js';
import { PHONE_PRIMARY } from '../../utils/whatsapp.js';

export default function CTABanner({
  title = "Ready to File? Let's Get Started.",
  subtitle = 'Start with a quick WhatsApp consultation and get the right compliance path before sharing documents.',
}) {
  const { openModal } = useWhatsAppModal();
  const [firstLine, secondLine] = title.includes('?')
    ? [title.split('?')[0] + '?', title.split('?').slice(1).join('?').trim()]
    : [title, ''];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0D47A1_0%,#1565C0_52%,#16A34A_100%)] px-6 py-10 text-white shadow-[0_24px_72px_rgba(21,101,192,0.24)] md:px-16 md:py-14"
        >
          <div aria-hidden="true" className="noise-overlay absolute inset-0 opacity-[0.03]" />
          <span aria-hidden="true" className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-white/[0.05]" />
          <span aria-hidden="true" className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/[0.05]" />

          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">
                Expert support is one step away
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.12] md:text-5xl">
                <span className="block">{firstLine}</span>
                {secondLine ? <span className="block">{secondLine}</span> : null}
              </h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-blue-100">{subtitle}</p>
            </div>

            <div className="flex min-w-fit flex-col gap-3">
              <button
                type="button"
                onClick={() => openModal()}
                className="flex w-full min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-white px-10 py-4 font-display text-base font-bold text-blue-900 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:bg-blue-50 active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </button>
              <a
                href={`tel:${PHONE_PRIMARY.replace(/\D/g, '')}`}
                className="flex w-full min-w-[220px] items-center justify-center gap-3 rounded-2xl border-2 border-white/40 bg-transparent px-10 py-4 font-display text-base font-bold text-white transition-all duration-300 hover:scale-105 hover:border-white/80 hover:bg-white/10 active:scale-95"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
