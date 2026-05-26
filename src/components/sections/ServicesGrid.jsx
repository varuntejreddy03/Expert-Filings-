import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { serviceCategories, services } from '../../data/services.js';
import { fadeUp, staggerContainer } from '../../utils/animations.js';
import { cn } from '../ui/Button.jsx';
import ServiceCard from '../ui/ServiceCard.jsx';

export default function ServicesGrid({ items = services, showFilters = true }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const gridRef = useRef(null);
  const hasMounted = useRef(false);
  const categoryParam = searchParams.get('category');
  const activeCategory = showFilters && serviceCategories.includes(categoryParam) ? categoryParam : 'All';

  const visibleServices = useMemo(() => {
    if (!showFilters || activeCategory === 'All') return items;
    return items.filter((service) => service.category === activeCategory);
  }, [activeCategory, items, showFilters]);

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;

    setSearchParams(
      (current) => {
        const next = new URLSearchParams(current);
        if (category === 'All') {
          next.delete('category');
        } else {
          next.set('category', category);
        }
        return next;
      },
      { replace: true },
    );
  };

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const gridTop = gridRef.current?.getBoundingClientRect().top ?? 0;
    if (gridTop < 96) {
      gridRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [activeCategory]);

  return (
    <section className="bg-[#F8FAFF] section-pad">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue">
              What We Offer
            </p>
            <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.25rem,4vw,3rem)] font-extrabold leading-[1.1] text-brand-navy">
              13 Services. One Expert Team.
            </h2>
            <p className="mt-4 max-w-2xl text-[1.0625rem] leading-[1.75] text-slate-500">
              Everything from ITR to Incorporation, handled end-to-end.
            </p>
          </div>

          {showFilters ? (
            <div className="hidden max-w-full flex-wrap justify-end gap-2.5 lg:flex">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={cn(
                    'rounded-full border px-4 py-2.5 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30',
                    activeCategory === category
                      ? 'border-transparent bg-gradient-brand text-white shadow-[0_8px_24px_rgba(21,101,192,0.22)]'
                      : 'border-[#E8EDF5] bg-white text-slate-600 hover:bg-blue-50 hover:text-brand-blue',
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {showFilters ? (
          <div className="no-scrollbar -mx-6 mt-6 flex gap-2.5 overflow-x-auto px-6 pb-2 lg:hidden">
            {serviceCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={cn(
                  'shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30',
                  activeCategory === category
                    ? 'border-transparent bg-gradient-brand text-white shadow-[0_8px_24px_rgba(21,101,192,0.22)]'
                    : 'border-[#E8EDF5] bg-white text-slate-600 hover:bg-blue-50 hover:text-brand-blue',
                )}
              >
                {category}
              </button>
            ))}
          </div>
        ) : null}

        <motion.div
          ref={gridRef}
          key={activeCategory}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visibleServices.map((service) => (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 16, scale: 0.98 }}
                layout
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
