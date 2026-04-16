import {
  AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts';
import { ScrollReveal } from '../ui/ScrollReveal';
import { chartData } from '../../data/content';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass rounded-xl p-3 border border-brand-red/20 text-xs">
        <p className="text-gray-300 font-semibold mb-2">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color }} className="font-bold">
            {entry.name}: {entry.name === 'revenus' ? `${entry.value.toLocaleString()}€` : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Charts() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Revenus */}
      <ScrollReveal className="card-dark p-6">
        <h3 className="text-white font-bold mb-1">Revenus mensuels</h3>
        <p className="text-gray-400 text-xs mb-6">7 derniers mois</p>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e11d48" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#e11d48" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 10 }} axisLine={false} tickLine={false}
                   tickFormatter={(v) => `${(v/1000).toFixed(0)}k€`} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenus"
              stroke="#e11d48"
              strokeWidth={2}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ScrollReveal>

      {/* Ventes */}
      <ScrollReveal delay={0.1} className="card-dark p-6">
        <h3 className="text-white font-bold mb-1">Nombre de ventes</h3>
        <p className="text-gray-400 text-xs mb-6">7 derniers mois</p>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={chartData}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e11d48" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#9f1239" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
            <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#6b7280', fontSize: 10 }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="ventes" fill="url(#salesGradient)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ScrollReveal>
    </div>
  );
}
