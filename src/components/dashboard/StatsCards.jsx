import { motion } from 'framer-motion';
import { ScrollReveal, StaggerChildren, StaggerItem } from '../ui/ScrollReveal';
import { dashboardStats } from '../../data/content';
import { FlatIcon } from '../ui/Icon3D';

const colorMap = {
  red: 'from-brand-red/20 to-brand-crimson/10 border-brand-red/30',
  orange: 'from-brand-orange/20 to-brand-orange/5 border-brand-orange/30',
  cyan: 'from-brand-cyan/20 to-brand-cyan/5 border-brand-cyan/30',
  green: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30',
};

const iconBgMap = {
  red: 'bg-brand-red/20 text-brand-red',
  orange: 'bg-brand-orange/20 text-brand-orange',
  cyan: 'bg-brand-cyan/20 text-brand-cyan',
  green: 'bg-emerald-500/20 text-emerald-400',
};

export default function StatsCards() {
  return (
    <StaggerChildren className="grid grid-cols-2 xl:grid-cols-4 gap-4" staggerDelay={0.08}>
      {dashboardStats.map((stat, i) => (
        <StaggerItem key={i}>
          <div className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5
                          ${colorMap[stat.color]} card-dark`}>
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${iconBgMap[stat.color]}`}>
                <FlatIcon name={stat.icon} size={20} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full
                              ${stat.up ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
            <div className="text-gray-400 text-xs font-medium">{stat.title}</div>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
