export default function Header({ mobileOpen, setMobileOpen }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 sm:px-6 bg-surface-card border-b border-white/5 lg:hidden">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMobileOpen(true)}
          className="text-gray-400 hover:text-white"
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
        <span className="font-bold text-white content-center h-full">Dashboard</span>
      </div>
    </header>
  );
}
