import { motion } from 'framer-motion';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import StatsCards from '../components/dashboard/StatsCards';
import Charts from '../components/dashboard/Charts';
import RecentSales from '../components/dashboard/RecentSales';
import UsersTable from '../components/dashboard/UsersTable';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="mb-8">
          <h1 className="text-3xl font-black text-white">Dashboard Overview</h1>
          <p className="text-gray-400 mt-2">Bienvenue sur votre espace administrateur iShop Pro.</p>
        </header>

        <StatsCards />
        
        <div className="mt-8">
          <Charts />
        </div>
        
        <div className="mt-8">
          <RecentSales />
        </div>

        <div className="mt-8">
          <UsersTable />
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
