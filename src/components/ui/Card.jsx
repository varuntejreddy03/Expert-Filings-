import { motion } from 'framer-motion';
import { cn } from './Button.jsx';

export default function Card({ children, className = '', glass = false, asMotion = false, ...props }) {
  const Component = asMotion ? motion.div : 'div';

  return (
    <Component
      className={cn(
        glass
          ? 'glass-card'
          : 'rounded-[1.5rem] border border-gray-100 bg-white shadow-sm shadow-brand-blue/5',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
