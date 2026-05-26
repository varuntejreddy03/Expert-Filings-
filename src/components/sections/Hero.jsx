import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  Landmark,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWhatsAppModal } from '../../hooks/useWhatsAppModal.js';
import Button from '../ui/Button.jsx';

const proofItems = [
  { icon: ShieldCheck, label: 'Secure document flow' },
  { icon: FileCheck2, label: 'Expert-reviewed filings' },
  { icon: LockKeyhole, label: 'Private by design' },
];

const workItems = [
  { icon: FileCheck2, title: 'Income Tax Return', meta: 'Review in progress', progress: '86%' },
  { icon: Landmark, title: 'GST Compliance', meta: 'Monthly return ready', progress: '72%' },
  { icon: Building2, title: 'Company Setup', meta: 'Documents verified', progress: '64%' },
];

const lineVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { openModal } = useWhatsAppModal();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050B1D] text-white">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-44 h-[760px] w-[760px] rounded-full bg-[#1565C0]/25 blur-[170px]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-[42%] h-[460px] w-[460px] rounded-full bg-[#16A34A]/15 blur-[130px]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-dot-grid opacity-[0.035]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050B1D] to-transparent" />

      <div className="container-page relative z-10 grid min-h-screen items-center gap-12 pb-14 pt-28 lg:grid-cols-[0.52fr_0.48fr]">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
            Tax filing Business Advisory Start-up support
          </motion.div>

          <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.65rem,4.25vw,4.25rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
            {['Expert Support', 'for Every Filing'].map((line, index) => (
              <motion.span
                key={line}
                custom={index}
                variants={lineVariant}
                initial="hidden"
                animate="visible"
                className={index === 1 ? 'block bg-gradient-text-dark bg-clip-text text-transparent' : 'block'}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
            className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.75] text-slate-400"
          >
            ITR filing, GST, registrations and business advisory for individuals and growing teams across
            Eluru, Vijayawada and Hyderabad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.42 }}
            className="mt-6 flex max-w-2xl flex-wrap gap-x-7 gap-y-3"
          >
            {proofItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-green">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-sm font-semibold leading-5 text-slate-100">{label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.52 }}
            className="mt-7 flex flex-col gap-4 sm:flex-row"
          >
            <Button onClick={() => openModal('Income Tax Returns')} icon={ArrowRight} size="lg">
              Start ITR Filing
            </Button>
            <Button as={Link} to="/services" variant="outline" size="lg" icon={ChevronDown}>
              See Services
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="hidden lg:block"
        >
          <div className="relative ml-auto max-w-[520px]">
            <div className="absolute -left-8 top-10 h-28 w-28 rounded-3xl bg-emerald-400/10 blur-2xl" />
            <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-3xl bg-blue-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.12] bg-white/[0.07] p-5 shadow-[0_32px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">Expert Filings Desk</p>
                  <h2 className="mt-2 font-display text-[1.85rem] font-extrabold leading-tight text-white">
                    Your filing command center
                  </h2>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-green shadow-[0_14px_36px_rgba(21,101,192,0.38)]">
                  <Sparkles className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {workItems.map(({ icon: Icon, title, meta, progress }, index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + index * 0.12, duration: 0.35 }}
                    className="rounded-2xl border border-white/[0.10] bg-[#0D1B3E]/70 p-3.5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08]">
                          <Icon className="h-5 w-5 text-blue-200" />
                        </span>
                        <div>
                          <h3 className="font-display text-base font-bold text-white">{title}</h3>
                          <p className="text-sm text-slate-400">{meta}</p>
                        </div>
                      </div>
                      <span className="font-num text-3xl leading-none text-emerald-300">{progress}</span>
                    </div>
                    <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: progress }}
                        transition={{ delay: 0.65 + index * 0.12, duration: 0.7, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-emerald-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/[0.10] bg-white/[0.06] p-3.5">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Starting at</p>
                  <p className="mt-1 font-num text-4xl leading-none text-white">₹999</p>
                </div>
                <div className="rounded-2xl border border-white/[0.10] bg-white/[0.06] p-3.5">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Review time</p>
                  <p className="mt-1 font-num text-4xl leading-none text-white">24h</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span className="text-sm font-semibold text-emerald-50">Documents stay secure throughout the workflow</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
