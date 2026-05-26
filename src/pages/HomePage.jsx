import { motion } from 'framer-motion';
import CTABanner from '../components/sections/CTABanner.jsx';
import Hero from '../components/sections/Hero.jsx';
import ITRSection from '../components/sections/ITRSection.jsx';
import ServicesGrid from '../components/sections/ServicesGrid.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx';
import { pageTransition } from '../utils/animations.js';

export default function HomePage() {
  return (
    <motion.div {...pageTransition}>
      <Hero />
      <ITRSection />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner subtitle="Start with a quick WhatsApp consultation and know the right filing path before you share documents." />
    </motion.div>
  );
}
