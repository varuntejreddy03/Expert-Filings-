import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useWhatsAppModal } from '../../hooks/useWhatsAppModal.js';
import SectionTitle from '../ui/SectionTitle.jsx';

const cards = [
  {
    title: 'For Salary',
    forms: 'ITR 1 & ITR 2',
    price: '999',
    from: '#0F2C6B',
    to: '#1565C0',
    darkText: '#0F2C6B',
    glow: 'rgba(21,101,192,0.28)',
    iconBg: 'rgba(147,197,253,0.20)',
    iconColor: '#BFDBFE',
    features: ['Form 16 review', 'AIS and 26AS check', 'Deductions mapped', 'Refund guidance'],
  },
  {
    title: 'For Business',
    forms: 'ITR 3 & ITR 4',
    price: '1499',
    from: '#064E3B',
    to: '#16A34A',
    darkText: '#064E3B',
    glow: 'rgba(22,163,74,0.28)',
    iconBg: 'rgba(134,239,172,0.20)',
    iconColor: '#BBF7D0',
    features: ['P&L review', 'Presumptive tax support', 'GST data check', 'Computation summary'],
  },
];

function CheckGlyph({ bg, color }) {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: bg }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M11.6 3.7 5.9 9.4 2.8 6.3"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ItrCard({ card }) {
  const { openModal } = useWhatsAppModal();
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const x = useSpring(rotateX, { stiffness: 160, damping: 20 });
  const y = useSpring(rotateY, { stiffness: 160, damping: 20 });

  const onMouseMove = (event) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 4);
    rotateX.set((0.5 - py) * 4);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      whileHover={{ y: -6, boxShadow: `0 22px 56px ${card.glow}` }}
      style={{
        rotateX: x,
        rotateY: y,
        transformStyle: 'preserve-3d',
        background: `linear-gradient(135deg, ${card.from}, ${card.to})`,
      }}
      className="relative overflow-hidden rounded-3xl p-6 text-white shadow-[0_16px_48px_rgba(15,44,107,0.18)] will-change-transform sm:p-8 md:p-9"
    >
      <span aria-hidden="true" className="absolute -right-12 -top-12 h-[200px] w-[200px] rounded-full bg-white/[0.05]" />
      <span aria-hidden="true" className="absolute -bottom-8 -left-8 h-[120px] w-[120px] rounded-full bg-white/[0.04]" />

      <div className="relative z-10">
        <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
          {card.forms}
        </span>
        <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white md:text-4xl">{card.title}</h3>

        <div className="mt-6 flex items-end gap-2">
          <span className="mb-3 font-body text-2xl text-white/70">₹</span>
          <span className="font-num text-[clamp(3.25rem,6vw,4.5rem)] leading-none text-white">{card.price}</span>
          <span className="mb-3 text-sm font-medium text-white/50">/filing</span>
        </div>

        <div className="my-5 border-t border-white/10" />

        <ul className="space-y-3.5">
          {card.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm font-normal leading-6 text-white/80">
              <CheckGlyph bg={card.iconBg} color={card.iconColor} />
              {feature}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => openModal('Income Tax Returns')}
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-display text-base font-bold shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-[1.01] hover:bg-white/90 active:scale-95"
          style={{ color: card.darkText }}
        >
          File Now
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </motion.article>
  );
}

export default function ITRSection() {
  return (
    <section id="itr-section" className="overflow-x-clip bg-white section-pad">
      <div className="container-page">
        <SectionTitle
          eyebrow="ITR Filing Plans"
          title="Choose the right filing path."
          description="Two clear starting points. Every return is reviewed against your documents before filing."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 px-1 sm:px-2 lg:grid-cols-2 lg:gap-8">
          {cards.map((card) => (
            <ItrCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
