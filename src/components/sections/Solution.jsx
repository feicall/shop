import { motion } from 'framer-motion';
import { ScrollReveal, StaggerChildren, StaggerItem } from '../ui/ScrollReveal';
import { solutionContent, siteConfig } from '../../data/content';
import { Icon3D, FlatIcon } from '../ui/Icon3D';
import heroImage from '../../video/hero-iphone.png';

export default function Solution() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="glow-orb w-[600px] h-[400px] bg-brand-red/15 top-0 right-[-200px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-brand-crimson/10 bottom-0 left-[-100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">{solutionContent.label}</span>
          <h2 className="section-title mt-4 mb-6">
            {solutionContent.title}{' '}
            <span className="text-gradient-red italic">{solutionContent.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{solutionContent.subtitle}</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* iPhone image */}
          <ScrollReveal direction="fade">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-red-glow opacity-30 blur-3xl rounded-full" />
              <motion.img
                src={heroImage}
                alt="Premium iPhone"
                className="relative h-[480px] object-contain drop-shadow-[0_0_80px_rgba(225,29,72,0.5)]"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </ScrollReveal>

          {/* Features grid */}
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {solutionContent.features.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="card-dark p-5 group">
                  <Icon3D name={feature.icon} size={28} color="red" className="mb-4" />
                  <h3 className="font-bold text-white mb-2 text-sm">{feature.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{feature.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="mt-16 text-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base inline-flex"
          >
            <FlatIcon name="MessageCircle" size={18} className="mr-1" />
            Je veux mon iPhone maintenant
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
