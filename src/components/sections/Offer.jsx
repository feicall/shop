import { motion } from 'framer-motion';
import { ScrollReveal, StaggerChildren, StaggerItem } from '../ui/ScrollReveal';
import { offerContent, siteConfig } from '../../data/content';
import { FlatIcon } from '../ui/Icon3D';

const colorMap = {
  gray: {
    border: 'border-white/10',
    badge: 'bg-white/10 text-white',
    btn: 'btn-secondary',
    glow: '',
  },
  red: {
    border: 'border-brand-red/50',
    badge: 'bg-brand-red text-white',
    btn: 'btn-primary',
    glow: 'shadow-[0_0_40px_rgba(225,29,72,0.2)]',
    scale: true,
  },
  orange: {
    border: 'border-brand-orange/30',
    badge: 'bg-brand-orange text-white',
    btn: 'btn-secondary border-brand-orange/40 hover:border-brand-orange',
    glow: '',
  },
};

const PlanCard = ({ plan, index }) => {
  const colors = colorMap[plan.color] || colorMap.gray;
  const isPrimary = plan.color === 'red';

  return (
    <motion.div
      className={`card-dark relative flex flex-col overflow-hidden border ${colors.border} ${colors.glow}
                 ${isPrimary ? 'lg:scale-105 lg:-translate-y-2' : ''}`}
    >
      {/* Badge "le plus vendu" */}
      {plan.badge && (
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${colors.badge}`}>
          <FlatIcon name="Flame" size={14} className="text-white" /> {plan.badge}
        </div>
      )}

      <div className="p-6 flex-1">
        {/* Header */}
        <div className="mb-6">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-1">{plan.storage}</p>
          <h3 className="text-2xl font-black text-white">{plan.name}</h3>
        </div>

        {/* Pricing */}
        <div className="mb-6">
          <span className="text-gray-500 line-through text-lg mr-2">{plan.originalPrice}</span>
          <div className="text-5xl font-black text-white">
            {plan.price}
          </div>
          <div className="text-brand-amber text-sm font-semibold mt-1 flex items-center gap-1">
            <FlatIcon name="CheckCircle2" size={14} /> {plan.savings}
          </div>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-2.5 mb-8">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
              <FlatIcon name="Check" size={16} className="text-brand-red mt-0.5 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <a
          href={`${siteConfig.whatsapp}?text=${encodeURIComponent(`Bonjour, je souhaite commander l'${plan.name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${colors.btn} w-full justify-center text-sm font-semibold`}
        >
          Commander ce modèle →
        </a>
      </div>
    </motion.div>
  );
};

export default function Offer() {
  return (
    <section id="offres" className="relative py-24 overflow-hidden">
      <div className="glow-orb w-[700px] h-[400px] bg-brand-red/15 top-0 left-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-6">
          <span className="section-label">{offerContent.label}</span>
          <h2 className="section-title mt-4 mb-6">
            {offerContent.title}{' '}
            <span className="text-gradient-red italic">{offerContent.titleHighlight}</span>
          </h2>
        </ScrollReveal>

        {/* Urgency badge */}
        <ScrollReveal delay={0.1} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full border border-brand-red/30">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
            <span className="text-white text-sm font-semibold">{offerContent.badge}</span>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid md:grid-cols-3 gap-6 items-start" staggerDelay={0.1}>
          {offerContent.plans.map((plan, i) => (
            <StaggerItem key={i}>
              <PlanCard plan={plan} index={i} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Guarantee */}
        <ScrollReveal delay={0.4} className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Paiement sécurisé · Satisfait ou remboursé · Garantie Apple officielle
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
