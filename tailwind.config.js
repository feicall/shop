/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#e11d48',
        'brand-red-light': '#fb7185',
        'brand-crimson': '#9f1239',
        'brand-orange': '#f97316',
        'brand-amber': '#f59e0b',
        'brand-cyan': '#06b6d4',
        'surface': '#0d0003',
        'surface-card': '#120008',
        'surface-card-2': '#1a000a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 25s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out infinite 1.5s',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(225,29,72,0.3) 0%, transparent 70%)',
        'card-glow': 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(225,29,72,0.12) 0%, transparent 100%)',
        'red-glow': 'radial-gradient(circle at center, rgba(225,29,72,0.4) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
