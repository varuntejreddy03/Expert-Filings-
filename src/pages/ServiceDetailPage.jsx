import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, FileCheck2 } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import CTABanner from '../components/sections/CTABanner.jsx';
import Button from '../components/ui/Button.jsx';
import ServiceCard from '../components/ui/ServiceCard.jsx';
import { getServiceIcon } from '../components/ui/serviceIcons.js';
import { getRelatedServices, getServiceBySlug } from '../data/services.js';
import { useWhatsAppModal } from '../hooks/useWhatsAppModal.js';
import { fadeUp, pageTransition, staggerContainer, viewportOnce } from '../utils/animations.js';

const process = ['Share Documents', 'Expert Review', 'Filing', 'Confirmation'];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const { openModal } = useWhatsAppModal();

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = getServiceIcon(service.icon);
  const related = getRelatedServices(service);

  return (
    <motion.div {...pageTransition}>
      <section className="relative overflow-hidden bg-brand-midnight pb-20 pt-32 text-white">
        <div aria-hidden="true" className="absolute -right-44 -top-52 h-[680px] w-[680px] rounded-full bg-brand-blue/30 blur-[170px]" />
        <div aria-hidden="true" className="absolute -left-44 top-1/3 h-[480px] w-[480px] rounded-full bg-brand-green-light/20 blur-[130px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.04]" />
        <div className="container-page relative z-10">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-white/70" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="icon-ring flex h-28 w-28 items-center justify-center rounded-full bg-brand-navy">
              <Icon className="h-12 w-12 text-white" />
            </div>
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">{service.category}</p>
              <h1 className="mt-4 font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05]">{service.title}</h1>
              <p className="mt-6 max-w-3xl text-[1.0625rem] leading-[1.8] text-slate-400">{service.short}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="space-y-12">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] text-brand-navy">What is it?</h2>
              <div className="mt-5 space-y-5 text-[1.0625rem] leading-[1.75] text-slate-500">
                {service.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] text-brand-navy">Who needs this?</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.whoNeeds.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-[#E8EDF5] bg-[#F8FAFF] p-4 text-sm font-semibold text-brand-navy">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green-dark" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] text-brand-navy">Documents Required</h2>
              <div className="mt-5 rounded-3xl border border-[#E8EDF5] bg-white p-6 shadow-[0_4px_24px_rgba(21,101,192,0.08)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.documents.map((document) => (
                    <div key={document} className="flex items-start gap-3 text-sm font-semibold text-brand-text">
                      <FileCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                      {document}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] text-brand-navy">Our Process</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-4">
                {process.map((step, index) => (
                  <div key={step} className="relative rounded-2xl border border-[#E8EDF5] bg-[#F8FAFF] p-5">
                    <div className="font-num text-5xl leading-none bg-gradient-text-light bg-clip-text text-transparent">0{index + 1}</div>
                    <p className="mt-3 font-display text-lg font-bold text-brand-navy">{step}</p>
                    {index < process.length - 1 ? (
                      <ArrowRight className="absolute -right-5 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-brand-green-dark md:block" />
                    ) : null}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-[#E8EDF5] bg-[#F8FAFF] p-6 shadow-[0_16px_48px_rgba(21,101,192,0.14)]">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">Pricing</p>
              <p className="mt-3 font-num text-6xl leading-none text-brand-navy">{service.price}</p>
              <p className="mt-3 text-sm leading-6 text-brand-muted">
                Final pricing depends on complexity, document status and government fee requirements where applicable.
              </p>
              <Button onClick={() => openModal(service.title)} icon={ArrowRight} className="mt-6 w-full">
                Get Started via WhatsApp
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#F8FAFF] py-16 md:py-24">
        <div className="container-page">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue">Related</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] text-brand-navy">Related Services</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {related.map((item) => {
              return (
                <motion.div key={item.slug} variants={fadeUp}>
                  <ServiceCard service={item} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <CTABanner title={`Ready to start ${service.title}?`} />
    </motion.div>
  );
}
