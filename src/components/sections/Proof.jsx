import { useInView } from 'react-intersection-observer';
import { ScrollReveal, StaggerChildren, StaggerItem } from '../ui/ScrollReveal';
import { proofContent } from '../../data/content';
import { useCounter } from '../../hooks/useCounter';
import { Icon3D } from '../ui/Icon3D';

const StatCard = ({ icon, value, label, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="card-dark p-6 text-center group cursor-default">
      <Icon3D name={icon} size={32} color="red" className="mb-4 mx-auto" />
      <div className="text-4xl font-black text-white mb-1 group-hover:text-brand-red transition-colors">
        {value}
      </div>
      <div className="text-gray-400 text-sm font-medium">{label}</div>
    </div>
  );
};

export default function Proof() {
  return (
    <section id="preuves" className="relative py-24 overflow-hidden">
      {/* Glow */}
      <div className="glow-orb w-[500px] h-[300px] bg-brand-red/10 top-0 right-[-100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">{proofContent.label}</span>
          <h2 className="section-title mt-4 mb-6">
            {proofContent.title}{' '}
            <span className="text-gradient-red italic">{proofContent.titleHighlight}</span>
          </h2>
          <p className="section-subtitle mx-auto">{proofContent.subtitle}</p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.1}>
          {proofContent.stats.map((stat, i) => (
            <StaggerItem key={i}>
              <StatCard {...stat} index={i} />
            </StaggerItem>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
}
