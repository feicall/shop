import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/content';
import { FlatIcon } from '../ui/Icon3D';
import navLogo from '../../video/nav-logo.png';

const footerLinks = {
  Produits: [
    { label: 'Gammes iPhone', href: '#offres' },
    { label: 'Nouveautés', href: '#offres' },
    { label: 'Classiques', href: '#offres' },
    { label: 'Accessoires', href: '#offres' },
  ],
  Navigation: [
    { label: 'Résultats', href: '#preuves' },
    { label: 'Témoignages', href: '#temoignages' },
    { label: 'FAQ', href: '#faq' },
  ],
  Contact: [
    { label: 'WhatsApp', href: siteConfig.whatsapp, external: true, icon: 'MessageCircle' },
    { label: 'Facebook', href: siteConfig.facebook, external: true, icon: 'Facebook' },
  ],
};

export default function Footer() {
  const handleAnchorClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-card border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={navLogo} alt="Logo" className="w-16 h-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Revendeur agréé Apple. L'excellence technologique accessible à tous, livrée chez vous en 24h.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{title}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link to={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                        {link.label}
                      </Link>
                    ) : link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2"
                      >
                        {link.icon && <FlatIcon name={link.icon} size={16} />}
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleAnchorClick(link.href)}
                        className="text-gray-400 hover:text-white text-sm transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} {siteConfig.brand}. Tous droits réservés. Revendeur officiellement agréé Apple.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-xs">Mentions légales</span>
            <span className="text-gray-500 text-xs">Politique de confidentialité</span>
            <span className="text-gray-500 text-xs">CGV</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
