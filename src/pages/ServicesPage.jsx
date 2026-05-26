import { motion } from 'framer-motion';
import ServicesGrid from '../components/sections/ServicesGrid.jsx';
import CTABanner from '../components/sections/CTABanner.jsx';
import { pageTransition } from '../utils/animations.js';

export default function ServicesPage() {
  return (
    <motion.div {...pageTransition}>
      <section className="relative overflow-hidden bg-brand-midnight pb-20 pt-32 text-white">
        <div
          aria-hidden="true"
          className="absolute -right-44 -top-52 h-[680px] w-[680px] rounded-full bg-brand-blue/30 blur-[170px]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-dot-grid opacity-[0.04]" />
        <div className="container-page relative z-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">13 Service Lines</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05]">
            Services built for serious compliance.
          </h1>
          <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.8] text-slate-400">
            Tax filing, business setup, registrations and annual compliance handled through one expert-led workflow.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <CTABanner
        title="Need help choosing the right service?"
        subtitle="Tell us your situation and we will point you to the correct compliance path before you spend on filing."
      />
    </motion.div>
  );
}
