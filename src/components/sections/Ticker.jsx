const TICKER_ITEMS = [
  'NOUVEL IPHONE',
  'PERFORMANCES BIONIC',
  'PHOTOGRAPHIE PRO',
  'AUTONOMIE OPTIMISÉE',
  'LIVRAISON 24H',
  'GARANTIE APPLE',
  'SATISFACTION TOTALE',
  '5G ULTRA',
  'DESIGN PREMIUM',
];

// On duplique pour l'effet infini
const ALL_ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS];

export default function Ticker() {
  return (
    <div className="ticker-wrapper py-4 bg-surface-card border-y border-brand-red/20 overflow-hidden">
      <div className="ticker-content">
        {ALL_ITEMS.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 text-sm font-semibold text-gray-300">
            {item}
            <span className="text-brand-red select-none">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
