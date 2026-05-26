import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '../../data/testimonials.js';
import SectionTitle from '../ui/SectionTitle.jsx';

function initials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .replace('.', '')
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="bg-[#F0F5FF] section-pad">
      <div className="container-page">
        <SectionTitle
          eyebrow="Client Stories"
          title="Trusted by professionals"
          highlight="& businesses across AP."
          description="Clear, responsive support for salaried professionals, founders and local businesses."
        />

        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="expert-testimonials !pb-14"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className="h-auto">
                <article className="flex h-full flex-col rounded-3xl border border-[#E2EAF8] bg-white p-8 shadow-[0_4px_24px_rgba(21,101,192,0.06)]">
                  <div className="text-lg tracking-[0.16em] text-yellow-400" aria-label="5 star rating">
                    ★★★★★
                  </div>
                  <p className="mt-6 flex-1 text-base italic leading-[1.8] text-slate-700">{item.quote}</p>
                  <div className="mt-7 flex items-center gap-4 border-t border-[#E2EAF8] pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-green font-display text-sm font-bold text-white">
                      {initials(item.name)}
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
