import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileText,
  ShieldAlert,
} from 'lucide-react';
import { useState } from 'react';
import CTABanner from '../components/sections/CTABanner.jsx';
import Badge from '../components/ui/Badge.jsx';
import Button, { cn } from '../components/ui/Button.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { itrFaqs, itrProcess, itrTypes } from '../data/itr.js';
import { useWhatsAppModal } from '../hooks/useWhatsAppModal.js';
import { fadeUp, pageTransition, viewportOnce } from '../utils/animations.js';

export default function ITRFilingPage() {
  const [activeItr, setActiveItr] = useState(itrTypes[0].id);
  const [openDocs, setOpenDocs] = useState(itrTypes[0].id);
  const [openFaq, setOpenFaq] = useState(itrFaqs[0].question);
  const { openModal } = useWhatsAppModal();

  const selectedItr = itrTypes.find((itr) => itr.id === activeItr) || itrTypes[0];

  return (
    <motion.div {...pageTransition}>
      <section className="relative overflow-hidden bg-brand-midnight pb-20 pt-32 text-white">
        <div aria-hidden="true" className="absolute -right-44 -top-52 h-[680px] w-[680px] rounded-full bg-brand-blue/30 blur-[170px]" />
        <div aria-hidden="true" className="absolute -left-44 top-1/3 h-[480px] w-[480px] rounded-full bg-brand-green-light/20 blur-[130px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.04]" />
        <div className="container-page relative z-10 grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">ITR Filing Desk</p>
            <h1 className="mt-4 font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05]">
              File the right ITR form with expert review.
            </h1>
            <p className="mt-6 max-w-2xl text-[1.0625rem] leading-[1.8] text-slate-400">
              Salary, capital gains, business income or presumptive taxation. We match your profile to the right form and prepare a clean filing pack.
            </p>
            <Button onClick={() => openModal('Income Tax Returns')} icon={ArrowRight} className="mt-8">
              File Now
            </Button>
          </div>

          <div className="glass-card hidden rounded-3xl p-5 md:block">
            <div className="rounded-3xl bg-white p-6 text-brand-navy">
              <div className="flex items-center gap-4">
                <div className="icon-ring flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <ClipboardCheck className="h-8 w-8 text-brand-blue" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue">Smart Selector</p>
                  <h2 className="font-display text-2xl font-extrabold">ITR Readiness</h2>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                {itrTypes.map((itr) => (
                  <div key={itr.id} className="flex items-center justify-between rounded-2xl bg-brand-bg p-4">
                    <span className="font-display font-bold">{itr.id}</span>
                    <span className="font-num text-3xl leading-none text-brand-blue">{itr.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <SectionTitle
            eyebrow="Selector"
            title="Which ITR Form is"
            highlight="Right for You?"
            description="Choose your likely form, then connect with an expert for confirmation before filing."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr]">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {itrTypes.map((itr) => (
                <button
                  key={itr.id}
                  type="button"
                  onClick={() => setActiveItr(itr.id)}
                  className={cn(
                    'rounded-2xl border p-5 text-left transition-all',
                    activeItr === itr.id
                      ? 'border-transparent bg-gradient-brand text-white shadow-xl shadow-brand-blue/20'
                      : 'border-[#E8EDF5] bg-[#F8FAFF] text-brand-navy hover:border-brand-blue/30',
                  )}
                >
                  <span className="font-display text-xl font-extrabold">{itr.id}</span>
                  <span className="mt-1 block text-sm opacity-80">{itr.title}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={selectedItr.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-[#E8EDF5] bg-[#F8FAFF] p-6 shadow-[0_4px_24px_rgba(21,101,192,0.08)] md:p-8"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <Badge variant={selectedItr.accent}>{selectedItr.id}</Badge>
                    <h2 className="mt-4 font-display text-4xl font-extrabold text-brand-navy">{selectedItr.title}</h2>
                    <p className="mt-4 max-w-2xl text-[1.0625rem] leading-[1.75] text-slate-500">{selectedItr.summary}</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 text-center shadow-lg shadow-brand-blue/5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">Starts at</p>
                    <p className="font-num text-6xl leading-none text-brand-navy">{selectedItr.price}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-navy">Suitable for</h3>
                    <ul className="mt-4 space-y-3">
                      {selectedItr.suitableFor.map((item) => (
                        <li key={item} className="flex gap-3 text-sm font-semibold text-brand-text">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green-dark" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-brand-navy">Not ideal for</h3>
                    <ul className="mt-4 space-y-3">
                      {selectedItr.notFor.map((item) => (
                        <li key={item} className="flex gap-3 text-sm font-semibold text-brand-muted">
                          <ShieldAlert className="h-5 w-5 shrink-0 text-brand-blue" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Button onClick={() => openModal('Income Tax Returns')} icon={ArrowRight} className="mt-8">
                  File {selectedItr.id}
                </Button>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFF] section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] text-brand-navy">Documents Checklist</h2>
            <div className="mt-7 space-y-4">
              {itrTypes.map((itr) => {
                const open = openDocs === itr.id;
                return (
                  <div key={itr.id} className="rounded-[1.25rem] border border-gray-100 bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() => setOpenDocs(open ? '' : itr.id)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="font-display text-xl font-bold text-brand-navy">{itr.id} Documents</span>
                      <ChevronDown className={cn('h-5 w-5 transition-transform', open && 'rotate-180')} />
                    </button>
                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <ul className="grid gap-3 border-t border-gray-100 p-5 sm:grid-cols-2">
                            {itr.documents.map((document) => (
                              <li key={document} className="flex gap-3 text-sm font-semibold text-brand-text">
                                <FileText className="h-5 w-5 shrink-0 text-brand-blue" />
                                {document}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.1] text-brand-navy">Filing Process</h2>
            <div className="mt-7 rounded-3xl border border-[#E8EDF5] bg-white p-6 shadow-[0_4px_24px_rgba(21,101,192,0.08)]">
              <div className="grid gap-5 md:grid-cols-5 lg:grid-cols-1">
                {itrProcess.map((step, index) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-brand font-num text-3xl text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold text-brand-navy">{step}</p>
                      <p className="text-sm text-brand-muted">Handled with confirmation at each stage.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-brand-blue/15 bg-white p-6 shadow-[0_4px_24px_rgba(21,101,192,0.08)]">
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">
                Deadline Reminder
              </p>
              <p className="mt-2 font-display text-3xl font-extrabold text-brand-navy">
                ITR Filing Deadline: July 31, 2026
              </p>
              <p className="mt-2 text-sm leading-6 text-brand-muted">
                Standard deadline for non-audit individual filings, subject to government extensions and case-specific due dates.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page max-w-4xl">
          <SectionTitle eyebrow="FAQ" title="Common ITR" highlight="Questions" />
          <div className="mt-10 space-y-4">
            {itrFaqs.map((faq) => {
              const open = openFaq === faq.question;
              return (
                <div key={faq.question} className="rounded-[1.25rem] border border-gray-100 bg-brand-bg">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? '' : faq.question)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-display text-lg font-bold text-brand-navy">{faq.question}</span>
                    <ChevronDown className={cn('h-5 w-5 transition-transform', open && 'rotate-180')} />
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden px-5 pb-5 leading-7 text-brand-muted"
                      >
                        {faq.answer}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner title="File your ITR with document-backed confidence." />
    </motion.div>
  );
}
