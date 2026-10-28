/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        petroleo: { DEFAULT: '#0B1F26', light: '#163842', medium: '#2B5560' },
        amber: { DEFAULT: '#FFC23D' },
        'off-white': { DEFAULT: '#F2F4F1' },
        'verde-agua': { DEFAULT: '#4FB39A' },
        tinta: { DEFAULT: '#2A434B' },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'Arial Narrow', 'sans-serif'],
        body: ['"Atkinson Hyperlegible"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
