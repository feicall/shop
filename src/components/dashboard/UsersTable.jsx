import { ScrollReveal } from '../ui/ScrollReveal';
import { usersData } from '../../data/content';

export default function UsersTable() {
  return (
    <ScrollReveal className="card-dark overflow-hidden mt-6">
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold">Clients récents</h3>
          <p className="text-gray-400 text-xs mt-0.5">Derniers inscrits</p>
        </div>
        <button className="text-brand-red text-xs font-semibold hover:text-brand-red-light transition-colors">
          Voir tout →
        </button>
      </div>
      <div className="table-responsive">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              {['Client', 'Email', 'Commandes', 'Total dépensé', 'Rejoint le', 'VIP'].map(h => (
                <th key={h} className="text-left text-gray-500 text-xs font-semibold uppercase tracking-wider px-6 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, i) => (
              <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
                <td className="px-6 py-4 text-white font-medium">{user.name}</td>
                <td className="px-6 py-4 text-gray-400 text-xs">{user.email}</td>
                <td className="px-6 py-4 text-white text-xs">{user.orders}</td>
                <td className="px-6 py-4 text-white font-bold text-xs">{user.total}</td>
                <td className="px-6 py-4 text-gray-500 text-xs">{user.joined}</td>
                <td className="px-6 py-4">
                  {user.vip ? (
                    <span className="bg-brand-orange/20 text-brand-orange border border-brand-orange/30 px-2 py-0.5 rounded text-[10px] font-bold uppercase">VIP</span>
                  ) : (
                    <span className="text-gray-500 text-xs">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollReveal>
  );
}
