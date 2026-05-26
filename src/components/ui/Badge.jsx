import { cn } from './Button.jsx';

const variants = {
  blue: 'bg-brand-blue/10 text-brand-blue ring-brand-blue/15',
  green: 'bg-brand-green/10 text-brand-green-dark ring-brand-green/20',
  navy: 'bg-brand-navy/10 text-brand-navy ring-brand-navy/15',
  white: 'bg-white/10 text-white ring-white/20',
};

export default function Badge({ children, variant = 'blue', className = '' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] ring-1',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
