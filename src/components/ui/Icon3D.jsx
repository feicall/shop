import * as Icons from 'lucide-react';

export const Icon3D = ({ name, color = 'red', size = 24, className = '' }) => {
  const IconComponent = Icons[name] || Icons.CircleHelp || Icons.HelpCircle || Icons.AlertCircle || Icons.Box;
  if (!IconComponent) return null;
  
  const colorStyles = {
    red: "from-brand-red to-brand-crimson shadow-brand-red/40",
    amber: "from-brand-amber to-orange-600 shadow-brand-amber/40",
    green: "from-emerald-400 to-emerald-600 shadow-emerald-500/40",
    cyan: "from-brand-cyan to-blue-600 shadow-brand-cyan/40",
    gray: "from-gray-600 to-gray-800 shadow-gray-500/40"
  };

  const selectedColor = colorStyles[color] || colorStyles.red;

  return (
    <div className={`
      relative inline-flex flex-shrink-0 items-center justify-center
      bg-gradient-to-br ${selectedColor}
      shadow-[0_8px_16px_-4px_var(--tw-shadow-color),inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.2)]
      rounded-xl border border-white/20
      text-white
      before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/20 before:to-transparent before:rounded-xl leading-none
      ${className}
    `}
    style={{ padding: size / 3 }}
    >
      <IconComponent size={size} className="block relative z-10 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
    </div>
  );
};

export const FlatIcon = ({ name, className = '', size = 20 }) => {
  const IconComponent = Icons[name] || Icons.CircleHelp || Icons.HelpCircle || Icons.AlertCircle || Icons.Box;
  if (!IconComponent) return null;
  return <IconComponent size={size} className={`inline-block flex-shrink-0 ${className}`} />;
}
