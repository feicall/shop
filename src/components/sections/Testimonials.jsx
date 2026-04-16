import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { testimonialsContent } from '../../data/content';
import { FlatIcon } from '../ui/Icon3D';

const StarRating = ({ rating }) => (
  <div className="flex gap-1 justify-center">
    {Array.from({ length: 5 }).map((_, i) => (
      <FlatIcon key={i} name="Star" size={14} className={i < rating ? 'fill-brand-amber text-brand-amber' : 'text-gray-600'} />
    ))}
  </div>
);

const Avatar = ({ initials }) => (
  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-brand-crimson
                 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
    {initials}
  </div>
);

export default function Testimonials() {
  const { testimonials } = testimonialsContent;
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveIndex(i => (i + 1) % testimonials.length);

  const visibleCount = 3;
  const visible = [];
  for (let i = 0; i < visibleCount; i++) {
    visible.push(testimonials[(activeIndex + i) % testimonials.length]);
  }

  return (
    <section id="temoignages" className="relative py-24 overflow-hidden bg-surface-card">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[500px] h-[300px] bg-brand-red/10 bottom-0 right-[-100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">{testimonialsContent.label}</span>
          <h2 className="section-title mt-4 mb-6">
            {testimonialsContent.title}
            <span className="text-gradient-red italic">{testimonialsContent.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{testimonialsContent.subtitle}</p>
        </ScrollReveal>

        {/* Testimonials grid (desktop: 3, mobile: 1) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {visible.map((t, i) => (
              <motion.div
                key={`${activeIndex}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-dark p-6 flex flex-col gap-4"
              >
                <StarRating rating={t.rating} />
                <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <Avatar initials={t.avatar} />
                  <div>
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                    <div className="text-brand-red text-xs mt-0.5">{t.product}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="card-dark p-6 flex flex-col gap-4"
            >
              <StarRating rating={testimonials[activeIndex].rating} />
              <p className="text-gray-300 text-sm leading-relaxed">"{testimonials[activeIndex].text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                <Avatar initials={testimonials[activeIndex].avatar} />
                <div>
                  <div className="font-bold text-white text-sm">{testimonials[activeIndex].name}</div>
                  <div className="text-gray-500 text-xs">{testimonials[activeIndex].role}</div>
                  <div className="text-brand-red text-xs mt-0.5">{testimonials[activeIndex].product}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                       text-white hover:border-brand-red hover:text-brand-red transition-all"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-brand-red' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center
                       text-white hover:border-brand-red hover:text-brand-red transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
