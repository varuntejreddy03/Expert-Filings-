import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getServiceIcon } from './serviceIcons.js';

export const categoryStyles = {
  Tax: { color: '#1565C0', bg: 'rgba(21,101,192,0.10)', shadow: 'rgba(21,101,192,0.16)' },
  Business: { color: '#16A34A', bg: 'rgba(22,163,74,0.10)', shadow: 'rgba(22,163,74,0.16)' },
  Compliance: { color: '#7C3AED', bg: 'rgba(124,58,237,0.10)', shadow: 'rgba(124,58,237,0.16)' },
  Registrations: { color: '#DC2626', bg: 'rgba(220,38,38,0.10)', shadow: 'rgba(220,38,38,0.16)' },
};

export default function ServiceCard({ service }) {
  const Icon = getServiceIcon(service.icon);
  const style = categoryStyles[service.category] || categoryStyles.Tax;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
        boxShadow: `0 16px 48px ${style.shadow}`,
        borderColor: style.color,
      }}
      transition={{ duration: 0.22 }}
      className="relative h-full overflow-hidden rounded-2xl border border-[#E8EDF5] bg-white shadow-[0_4px_24px_rgba(21,101,192,0.08)]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[3px] rounded-r-full transition-all duration-300"
        style={{ backgroundColor: style.color, boxShadow: `0 0 20px ${style.shadow}` }}
      />
      <Link to={`/services/${service.slug}`} className="group flex h-full flex-col p-6">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: style.bg }}
        >
          <Icon className="h-6 w-6" style={{ color: style.color }} />
        </div>
        <p
          className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: style.color }}
        >
          {service.category}
        </p>
        <h3 className="mt-1 font-display text-xl font-bold leading-[1.3] text-brand-navy">{service.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{service.short}</p>
        <div className="mt-auto pt-6">
          <span
            className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 transition-all group-hover:underline"
            style={{ color: style.color }}
          >
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
