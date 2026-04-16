import { ScrollReveal } from '../ui/ScrollReveal';
import { recentSalesData } from '../../data/content';

const statusConfig = {
  'Livré': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'En cours': 'bg-brand-amber/20 text-brand-amber border-brand-amber/30',
  'En attente': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

export default function RecentSales() {
  return (
    <ScrollReveal className="card-dark overflow-hidden">
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold">Ventes récentes</h3>
          <p className="text-gray-400 text-xs mt-0.5">6 dernières transactions</p>
        </div>
        <button className="text-brand-red text-xs font-semibold hover:text-brand-red-light transition-colors">
          Voir tout →
        </button>
      </div>
      <div className="table-responsive">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              {['Commande', 'Client', 'Produit', 'Montant', 'Statut', 'Date'].map(h => (
                <th key={h} className="text-left text-gray-500 text-xs font-semibold uppercase tracking-wider px-6 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentSalesData.map((sale, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                <td className="px-6 py-4 text-brand-red font-mono font-semibold text-xs">{sale.id}</td>
                <td className="px-6 py-4 text-white font-medium">{sale.client}</td>
                <td className="px-6 py-4 text-gray-400 text-xs">{sale.product}</td>
                <td className="px-6 py-4 text-white font-bold">{sale.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${statusConfig[sale.status]}`}>
                    {sale.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500 text-xs">{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollReveal>
  );
}
