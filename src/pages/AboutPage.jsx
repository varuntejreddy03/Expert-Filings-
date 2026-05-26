import { motion } from 'framer-motion';
import {
  BadgeCheck,
  Clock3,
  Crosshair,
  Gauge,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Target,
  UserRound,
} from 'lucide-react';
import CTABanner from '../components/sections/CTABanner.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { PHONE_PRIMARY } from '../utils/whatsapp.js';
import { fadeUp, pageTransition, staggerContainer, viewportOnce } from '../utils/animations.js';

const values = [
  { icon: ShieldCheck, title: 'Integrity', text: 'Clear advice, no inflated promises and no shortcuts around compliance.' },
  { icon: Crosshair, title: 'Accuracy', text: 'Document-backed review before every filing and registration step.' },
  { icon: Gauge, title: 'Speed', text: 'Fast coordination through digital workflows and WhatsApp-first updates.' },
  { icon: HeartHandshake, title: 'Client-First', text: 'Guidance that fits the client profile, business model and risk level.' },
];

const locations = ['Eluru', 'Vijayawada', 'Hyderabad'];

export default function AboutPage() {
  return (
    <motion.div {...pageTransition}>
      <section className="relative overflow-hidden bg-brand-midnight pb-20 pt-32 text-white">
        <div aria-hidden="true" className="absolute -right-44 -top-52 h-[680px] w-[680px] rounded-full bg-brand-blue/30 blur-[170px]" />
        <div aria-hidden="true" className="absolute -left-44 top-1/3 h-[480px] w-[480px] rounded-full bg-brand-green-light/20 blur-[130px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-[0.04]" />
        <div className="container-page relative z-10">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-blue-300">About Expert Filings</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,5.5rem)] font-extrabold leading-[1.05]">
            Tax Compliance & Business Advisory Platform.
          </h1>
          <p className="mt-6 max-w-3xl text-[1.0625rem] leading-[1.8] text-slate-400">
            Expert Filings is dedicated to making financial compliance simple, secure, and stress-free for individuals and businesses across India.
          </p>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <SectionTitle
              center={false}
              eyebrow="Our Story"
              title="Built for clarity in"
              highlight="financial compliance"
              description="We serve clients who want compliance handled with professional care, plain communication and practical turnaround times."
            />
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-5 md:grid-cols-2"
          >
            <motion.div variants={fadeUp} className="rounded-3xl border border-[#E8EDF5] bg-[#F8FAFF] p-7 shadow-[0_4px_24px_rgba(21,101,192,0.08)]">
              <Target className="h-9 w-9 text-brand-blue" />
              <h2 className="mt-5 font-display text-2xl font-extrabold text-brand-navy">Mission</h2>
              <p className="mt-3 leading-7 text-slate-500">
                Make tax filing, statutory compliance and business registrations accessible through expert review and simple digital communication.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-3xl bg-brand-midnight p-7 text-white shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
              <BadgeCheck className="h-9 w-9 text-brand-green" />
              <h2 className="mt-5 font-display text-2xl font-extrabold">Vision</h2>
              <p className="mt-3 leading-7 text-white/75">
                Become the trusted compliance partner for individuals, startups, small businesses and institutions across South India.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8FAFF] section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="Values" title="The standards behind" highlight="our work" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-3xl border border-[#E8EDF5] bg-white p-6 shadow-[0_4px_24px_rgba(21,101,192,0.08)]">
                <div className="icon-ring flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <Icon className="h-7 w-7 text-brand-blue" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <SectionTitle center={false} eyebrow="Locations" title="Local presence across" highlight="three cities" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {locations.map((city) => (
                <div key={city} className="rounded-3xl border border-[#E8EDF5] bg-[#F8FAFF] p-6">
                  <MapPin className="h-8 w-8 text-brand-green-dark" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-brand-navy">{city}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Client consultation hub. Address shared during appointment scheduling.
                  </p>
                  <p className="mt-4 text-sm font-bold text-brand-blue">{PHONE_PRIMARY}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-[linear-gradient(135deg,#0D47A1,#1565C0,#16A34A)] p-7 text-white shadow-[0_16px_48px_rgba(21,101,192,0.2)]">
            <Clock3 className="h-10 w-10" />
            <h2 className="mt-5 font-display text-3xl font-extrabold">Business Hours</h2>
            <p className="mt-4 text-lg font-semibold">Mon-Sun: 10:00 AM - 7:00 PM</p>
            <p className="mt-2 text-white/75">Available all days for guided compliance support.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFF] section-pad">
        <div className="container-page">
          <SectionTitle eyebrow="Team" title="Meet Our" highlight="Experts" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {['Tax Filing Specialist', 'Business Compliance Advisor', 'Registration Consultant'].map((role, index) => (
              <div key={role} className="rounded-3xl border border-[#E8EDF5] bg-white p-6 text-center shadow-[0_4px_24px_rgba(21,101,192,0.08)]">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-bg">
                  <UserRound className="h-10 w-10 text-brand-blue" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">Expert {index + 1}</h3>
                <p className="mt-2 text-sm font-semibold text-brand-muted">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Work with a compliance team that explains every step." />
    </motion.div>
  );
}
