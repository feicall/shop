import { ScrollReveal } from '../ui/ScrollReveal';
import { siteConfig } from '../../data/content';
import { FlatIcon } from '../ui/Icon3D';

export default function CallToAction() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background glow massif */}
      <div className="absolute inset-0 bg-hero-glow opacity-50" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="glow-orb w-[800px] h-[400px] bg-brand-red/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <span className="section-label">PASSONS À L'ACTION</span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mt-4 mb-6 leading-tight">
            Prêt à vivre{' '}
            <span className="text-gradient-red italic">l'expérience Apple</span>{' '}
            ?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Rejoignez les <strong className="text-white">+4 800 clients</strong> qui ont déjà choisi iShop Pro.
            Livraison en 24h et garantie Apple officielle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg py-5 px-10"
            >
              <FlatIcon name="MessageCircle" size={20} />
              Échangeons sur WhatsApp
            </a>
            <button
              onClick={() => document.querySelector('#offres')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg py-5 px-10"
            >
              Voir les offres ↑
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-xs mt-8">
            <span className="flex items-center gap-1.5"><FlatIcon name="Rocket" size={14} /> Livraison 24h</span>
            <span className="flex items-center gap-1.5"><FlatIcon name="ShieldCheck" size={14} /> Garantie Apple</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
