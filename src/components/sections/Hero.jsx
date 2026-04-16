import { motion } from 'framer-motion';
import { useTypewriter } from '../../hooks/useTypewriter';
import { heroContent, siteConfig } from '../../data/content';
import { FlatIcon } from '../ui/Icon3D';
import iphone17Image from '../../video/iphone-17-transparent.png';

const FLOATING_TAGS = heroContent.tags;

const FloatingTag = ({ label, style, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="absolute glass px-3 py-1.5 rounded-full text-xs font-semibold text-white
               shadow-[0_0_20px_rgba(225,29,72,0.3)] flex items-center gap-1.5 z-10"
    style={style}
    whileHover={{ scale: 1.05 }}
  >
    <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block" />
    {label}
  </motion.div>
);

export default function Hero() {
  const typeText = useTypewriter(
    ['changer ta vie', 'redéfinir ton quotidien', 'booster ta créativité', 'te démarquer'],
    80, 50, 2500
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Video/Image background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1920&q=80"
          alt="iPhone hero background"
          className="w-full h-full object-cover object-bottom lg:object-center"
        />
        <div className="video-overlay absolute inset-0" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0 grid-bg opacity-30" />

      {/* Glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-brand-red/30 top-[-200px] left-[-200px] z-0" />
      <div className="glow-orb w-[400px] h-[400px] bg-brand-crimson/20 bottom-[-100px] right-[-100px] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-gray-300 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              {heroContent.badge}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-2"
            >
              {heroContent.title}
            </motion.h1>

            {/* Typewriter line */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 min-h-[1.2em]"
            >
              <span className="text-gradient-red italic">{typeText}</span>
              <span className="text-brand-red animate-pulse ml-1">|</span>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              {heroContent.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
              >
                <FlatIcon name="ShoppingCart" size={18} />
                {heroContent.cta1}
              </a>
              <button
                onClick={() => document.querySelector('#offres')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-base"
              >
                {heroContent.cta2}
                <FlatIcon name="ArrowDown" size={18} className="ml-1" />
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-4 mt-8 justify-center lg:justify-start text-sm"
            >
              <div className="flex items-center gap-1 text-brand-amber font-medium">
                {Array(5).fill(0).map((_, i) => <FlatIcon key={i} name="Star" size={14} className="fill-brand-amber text-brand-amber" />)}
                <span className="text-gray-400 ml-1">+350 avis</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-gray-400 flex items-center gap-1.5"><FlatIcon name="Rocket" size={14} /> Livraison 24h</span>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-gray-400 flex items-center gap-1.5"><FlatIcon name="ShieldCheck" size={14} /> Garantie Apple</span>
            </motion.div>
          </div>

          {/* Right — iPhone mockup with floating tags */}
          <div className="relative flex items-center justify-center h-[500px] lg:h-[600px]">
            {/* Glow behind phone */}
            <div className="absolute w-64 h-64 rounded-full bg-brand-red/20 blur-[80px]" />

            {/* iPhone image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full flex justify-center items-center"
            >
              <motion.img
                src={iphone17Image}
                alt="iPhone 17 Pro Max"
                className="h-[400px] sm:h-[480px] object-contain drop-shadow-[0_0_60px_rgba(225,29,72,0.4)]"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Floating tags */}
            <FloatingTag label="Face ID" style={{ top: '10%', left: '5%' }} delay={0.5} />
            <FloatingTag label="Puce A17 Pro" style={{ top: '25%', right: '2%' }} delay={0.7} />
            <FloatingTag label="Camera 48MP" style={{ bottom: '30%', left: '2%' }} delay={0.9} />
            <FloatingTag label="5G Ultra" style={{ bottom: '15%', right: '5%' }} delay={1.1} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Défiler</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-brand-red to-transparent"
        />
      </motion.div>
    </section>
  );
}
