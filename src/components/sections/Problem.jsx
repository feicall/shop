import { ScrollReveal, StaggerChildren, StaggerItem } from '../ui/ScrollReveal';
import { problemContent } from '../../data/content';
import { Icon3D } from '../ui/Icon3D';

export default function Problem() {
  return (
    <section className="relative py-24 overflow-hidden bg-surface-card">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="glow-orb w-[400px] h-[400px] bg-brand-crimson/15 bottom-0 left-[-100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="section-label">{problemContent.label}</span>
          <h2 className="section-title mt-4 mb-6">
            {problemContent.title}{' '}
            <span className="text-gradient-red italic">{problemContent.titleHighlight}</span>{' '}
            {problemContent.titleEnd}
          </h2>
          <p className="section-subtitle mx-auto">{problemContent.subtitle}</p>
        </ScrollReveal>

        <StaggerChildren className="grid sm:grid-cols-2 gap-6" staggerDelay={0.12}>
          {problemContent.problems.map((problem, i) => (
            <StaggerItem key={i}>
              <div className="card-dark p-6 flex gap-4 group items-start">
                <Icon3D name={problem.icon} size={24} color="gray" className="flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-white mb-2 text-base">{problem.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Transition phrase */}
        <ScrollReveal delay={0.4} className="mt-16 text-center">
          <div className="glass rounded-2xl px-8 py-6 max-w-2xl mx-auto border border-brand-red/20">
            <p className="text-white text-lg font-semibold">
              Et si il existait une solution qui règle{' '}
              <span className="text-gradient-red font-black">tous ces problèmes à la fois ?</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
