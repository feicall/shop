import { ScrollReveal, StaggerChildren, StaggerItem } from '../ui/ScrollReveal';
import { benefitsContent } from '../../data/content';
import { FlatIcon, Icon3D } from '../ui/Icon3D';

export default function Benefits() {
  return (
    <section className="relative py-24 overflow-hidden bg-surface-card">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[500px] h-[300px] bg-brand-red/10 top-0 left-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">{benefitsContent.label}</span>
          <h2 className="section-title mt-4">
            {benefitsContent.title}
            <span className="text-gradient-red italic">{benefitsContent.titleHighlight}</span>
          </h2>
        </ScrollReveal>

        {/* Table avant/après headers */}
        <div className="grid grid-cols-2 gap-4 mb-4 max-w-3xl mx-auto">
          <div className="text-center py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-gray-400">
            <FlatIcon name="X" size={16} className="text-gray-400 mr-1 opacity-70" /> Avant
          </div>
          <div className="text-center py-2 rounded-xl bg-brand-red/10 border border-brand-red/30 text-sm font-semibold text-brand-red">
            <FlatIcon name="Check" size={16} className="text-brand-red mr-1 opacity-70" /> Après l'iPhone
          </div>
        </div>

        <StaggerChildren className="max-w-3xl mx-auto flex flex-col gap-3" staggerDelay={0.1}>
          {benefitsContent.benefits.map((benefit, i) => (
            <StaggerItem key={i}>
              <div className="grid grid-cols-2 gap-3">
                {/* Before */}
                <div className="card-dark p-4 flex items-center gap-3 border-red-900/20 bg-red-950/10">
                  <Icon3D name={benefit.icon} size={20} color="gray" className="scale-75" />
                  <span className="text-gray-400 text-sm line-through">{benefit.before}</span>
                </div>
                {/* After */}
                <div className="card-dark p-4 flex items-center gap-3 border-brand-red/20 bg-brand-red/5">
                  <Icon3D name={benefit.icon} size={20} color="red" className="scale-75" />
                  <span className="text-white text-sm font-medium">{benefit.after}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
