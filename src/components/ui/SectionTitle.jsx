import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/animations.js';
import { cn } from './Button.jsx';

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  center = true,
  dark = false,
  className = '',
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl', className)}
    >
      {eyebrow ? (
        <p className={cn('mb-3 font-body text-xs font-semibold uppercase tracking-[0.15em]', dark ? 'text-blue-300' : 'text-brand-blue')}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn('section-title text-balance', dark && 'text-white')}>
        {title}
        {highlight ? <span className={cn(dark ? 'gradient-text-dark' : 'gradient-text-light')}> {highlight}</span> : null}
      </h2>
      {description ? (
        <p className={cn('mt-5 text-[1.0625rem] leading-[1.75]', dark ? 'text-slate-400' : 'text-slate-500', center ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
