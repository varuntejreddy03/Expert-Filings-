import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu, MessageCircle, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useWhatsAppModal } from '../../hooks/useWhatsAppModal.js';
import Button, { cn } from '../ui/Button.jsx';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'ITR Filing', to: '/itr-filing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Expert Filings home">
      <span className="flex h-9 w-[148px] items-center sm:h-10 sm:w-[178px] lg:h-10 lg:w-[188px]">
        <img
          src="/logo-transparent-tight.png"
          alt="Expert Filings logo"
          className="h-full w-full origin-left scale-[1.05] object-contain"
        />
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { openModal } = useWhatsAppModal();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navIsLight = isScrolled;

  return (
    <motion.header
      layout
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
        isScrolled
          ? 'border-black/5 bg-white/95 shadow-lg shadow-brand-blue/10 backdrop-blur-xl'
          : 'border-white/[0.04] bg-brand-midnight/35 backdrop-blur-md',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => {
                const active = item.to === '/services' ? pathname.startsWith('/services') : isActive;
                return cn(
                  'relative -mx-2 rounded-lg px-2 py-2 font-display text-sm font-semibold [box-shadow:none] [outline:0!important] transition-colors focus-visible:[outline:0!important]',
                  navIsLight
                    ? active
                      ? 'text-brand-blue'
                      : 'text-brand-navy/75 hover:text-brand-blue'
                    : active
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white',
                );
              }}
            >
              {({ isActive }) => {
                const active = item.to === '/services' ? pathname.startsWith('/services') : isActive;
                return (
                  <>
                    {item.label}
                    {active ? (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-green"
                      />
                    ) : null}
                  </>
                );
              }}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button onClick={() => openModal()} icon={ArrowRight} size="sm" className="min-w-[150px] px-6 py-3">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors lg:hidden',
            navIsLight
              ? 'border-brand-navy/10 bg-white text-brand-navy'
              : 'border-white/20 bg-white/10 text-white backdrop-blur-xl',
          )}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isMenuOpen ? 'x' : 'menu'}
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'calc(100vh - 64px)', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-white/10 bg-brand-navy/98 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
              className="container-page flex h-full flex-col justify-between py-8"
            >
              <div className="space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.to}
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-2xl px-4 py-4 font-display text-2xl font-bold transition-colors',
                          (item.to === '/services' ? pathname.startsWith('/services') : isActive)
                            ? 'bg-white text-brand-blue'
                            : 'text-white hover:bg-white/10',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <Button
                onClick={() => openModal()}
                icon={MessageCircle}
                iconPosition="left"
                className="w-full"
              >
                WhatsApp Expert
              </Button>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
