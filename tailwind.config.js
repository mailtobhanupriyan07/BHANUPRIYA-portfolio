/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#060816',
        violetGlow: '#7c3aed',
        blueGlow: '#38bdf8',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 80px rgba(56, 189, 248, 0.16)',
      },
    },
  },
  plugins: [],
};
