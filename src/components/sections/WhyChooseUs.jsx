import { motion } from 'framer-motion';
import { CheckCircle2, Headphones, LockKeyhole, Zap } from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter.jsx';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations.js';

const features = [
  { icon: CheckCircle2, title: 'Accurate Filing', subtitle: 'Zero errors. Expert reviewed.' },
  { icon: LockKeyhole, title: 'Data Privacy', subtitle: 'Your documents, encrypted.' },
  { icon: Headphones, title: 'Dedicated CA', subtitle: 'One expert, your whole journey.' },
  { icon: Zap, title: 'Fast Processing', subtitle: 'Most filings done in 24-48 hrs.' },
];

const stats = [
  { value: 1000, suffix: '+', label: 'Clients' },
  { value: 500, suffix: '+', label: 'ITRs' },
  { value: 13, suffix: '+', label: 'Services' },
  { value: 100, suffix: '%', label: 'Secure' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-brand-midnight section-pad text-white">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/[0.15] blur-[140px]"
      />
      <div className="container-page relative z-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.p variants={fadeUp} className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">
            Why Expert Filings
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 font-display text-[clamp(2.25rem,4vw,3rem)] font-extrabold leading-[1.1]">
            Compliance that
            <span className="block bg-gradient-text-dark bg-clip-text text-transparent">works for you.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-[1.0625rem] leading-[1.75] text-slate-400">
            A precise filing process, clean communication and secure handling of every financial document.
          </motion.p>

          <motion.div variants={staggerContainer} className="mt-9 space-y-5">
            {features.map(({ icon: Icon, title, subtitle }) => (
              <motion.div key={title} variants={fadeUp} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-green shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <span>
                  <span className="block font-display text-base font-semibold text-white">{title}</span>
                  <span className="block text-sm text-slate-400">{subtitle}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                gradient={index % 2 === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
