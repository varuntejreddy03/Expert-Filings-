import { useCountUp } from '../../hooks/useCountUp.js';
import { cn } from './Button.jsx';

export default function AnimatedCounter({ value, suffix = '', label, className = '', gradient = false }) {
  const { ref, value: current } = useCountUp(value);

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className={cn('font-num text-6xl leading-none md:text-7xl', gradient ? 'bg-gradient-text-dark bg-clip-text text-transparent' : 'text-white')}>
        {current}
        <span>{suffix}</span>
      </div>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{label}</p>
    </div>
  );
}
