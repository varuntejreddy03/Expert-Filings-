import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { serviceCategories, services } from '../../data/services.js';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/animations.js';
import { cn } from '../ui/Button.jsx';
import ServiceCard from '../ui/ServiceCard.jsx';

export default function ServicesGrid({ items = services, showFilters = true }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const visibleServices = useMemo(() => {
    if (!showFilters || activeCategory === 'All') return items;
    return items.filter((service) => service.category === activeCategory);
  }, [activeCategory, items, showFilters]);

  return (
    <section className="bg-[#F8FAFF] section-pad">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
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
            <div className="hidden flex-wrap gap-3 lg:flex">
              {serviceCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    'rounded-full border px-5 py-2.5 text-sm font-semibold transition-all',
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
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2 lg:hidden">
            {serviceCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all',
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleServices.map((service) => (
            <motion.div key={service.slug} variants={fadeUp} layout>
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
