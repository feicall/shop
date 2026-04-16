import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { faqContent } from '../../data/content';

const FaqItem = ({ faq, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/5 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left
                   hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-white text-sm pr-4">{faq.question}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-brand-red text-xl flex-shrink-0 font-bold"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Faq() {
  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="glow-orb w-[400px] h-[400px] bg-brand-red/10 top-0 right-0" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">{faqContent.label}</span>
          <h2 className="section-title mt-4">
            {faqContent.title}
            <span className="text-gradient-red italic">{faqContent.titleHighlight}</span>
            {faqContent.titleEnd}
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {faqContent.faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <FaqItem faq={faq} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
