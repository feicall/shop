import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FlatIcon } from '../ui/Icon3D';

const navItems = [
  { icon: 'LayoutDashboard', label: 'Dashboard', path: '/dashboard' },
  { icon: 'Package', label: 'Produits', path: '/dashboard/products' },
  { icon: 'Users', label: 'Clients', path: '/dashboard/users' },
  { icon: 'DollarSign', label: 'Ventes', path: '/dashboard/sales' },
  { icon: 'Activity', label: 'Analytics', path: '/dashboard/analytics' },
  { icon: 'Settings', label: 'Paramètres', path: '/dashboard/settings' },
];

export default function Sidebar({ mobileOpen, onClose }) {
  const location = useLocation();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-6 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center text-white font-black text-sm
                         shadow-[0_0_20px_rgba(225,29,72,0.4)]">
            i
          </div>
          <div>
            <div className="font-black text-white text-sm">iShop Pro</div>
            <div className="text-gray-500 text-xs">Admin Panel</div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                           transition-all duration-200 group
                           ${isActive
                              ? 'bg-brand-red/20 text-white border border-brand-red/30 shadow-[0_0_15px_rgba(225,29,72,0.1)]'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                           }`}
              >
                <span className="text-base"><FlatIcon name={item.icon} size={20} /></span>
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-red"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/5">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
        >
          <span>←</span>
          Retour au site
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 glass border-r border-white/5 flex-shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="lg:hidden fixed inset-0 bg-black/60 z-40"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-64 glass border-r border-white/5 z-50 flex flex-col"
            >
              <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">✕</button>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
