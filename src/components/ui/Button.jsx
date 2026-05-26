const variants = {
  primary:
    'bg-gradient-to-r from-brand-blue to-brand-green text-white shadow-[0_8px_24px_rgba(21,101,192,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-105',
  outline:
    'border-2 border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/40 hover:shadow-lg',
  outlineLight:
    'border-2 border-brand-blue/20 bg-white text-brand-blue hover:bg-brand-blue hover:text-white hover:shadow-lg hover:shadow-brand-blue/15',
  white:
    'bg-white text-brand-navy shadow-[0_8px_32px_rgba(0,0,0,0.18)] hover:scale-105 hover:bg-blue-50',
  dark:
    'bg-brand-navy text-white shadow-lg shadow-brand-navy/20 hover:scale-105 hover:bg-brand-blue-dark',
  ghost:
    'text-brand-navy hover:bg-brand-bg hover:text-brand-blue',
};

const sizes = {
  sm: 'min-w-[140px] px-5 py-3 text-sm',
  md: 'min-w-[160px] px-7 py-4 text-base',
  lg: 'min-w-[170px] px-8 py-4 text-base',
};

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Button({
  as: Component = 'button',
  type = 'button',
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) {
  const content = (
    <>
      {Icon && iconPosition === 'left' ? <Icon aria-hidden="true" className="h-5 w-5 shrink-0" /> : null}
      <span>{children}</span>
      {Icon && iconPosition === 'right' ? <Icon aria-hidden="true" className="h-5 w-5 shrink-0" /> : null}
    </>
  );

  return (
    <Component
      type={Component === 'button' ? type : undefined}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-display font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-blue/25 disabled:pointer-events-none disabled:opacity-60',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {content}
    </Component>
  );
}
