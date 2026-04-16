import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlatIcon } from './Icon3D';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher le bouton après avoir défilé de 400px
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-tr from-brand-red to-brand-crimson text-white shadow-[0_4px_20px_rgba(225,29,72,0.5)] border border-white/20 transition-all flex items-center justify-center"
          aria-label="Remonter en haut"
        >
          <FlatIcon name="ChevronUp" size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
