import forms from '@tailwindcss/forms';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1565C0',
          'blue-light': '#1E88E5',
          'blue-dark': '#0D47A1',
          green: '#16A34A',
          'green-light': '#34D399',
          'green-dark': '#047857',
          navy: '#0D1B3E',
          midnight: '#050E24',
          ink: '#020B1A',
          bg: '#F8FAFF',
          surface: '#FFFFFF',
          text: '#1A1A2E',
          muted: '#6B7280',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1565C0 0%, #16A34A 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0D47A1 0%, #1565C0 55%, #16A34A 100%)',
        'gradient-text-dark': 'linear-gradient(90deg, #60A5FA, #34D399)',
        'gradient-text-light': 'linear-gradient(90deg, #1565C0, #16A34A)',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        num: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 22px 80px rgba(21, 101, 192, 0.22)',
        'green-glow': '0 22px 80px rgba(46, 204, 64, 0.22)',
      },
      transitionDuration: {
        400: '400ms',
      },
      opacity: {
        12: '0.12',
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        72: '0.72',
        78: '0.78',
        98: '0.98',
      },
      keyframes: {
        'slow-pan': {
          '0%, 100%': { transform: 'translate3d(-2%, -1%, 0) scale(1)' },
          '50%': { transform: 'translate3d(2%, 1%, 0) scale(1.03)' },
        },
      },
      animation: {
        'slow-pan': 'slow-pan 12s ease-in-out infinite',
      },
    },
  },
  plugins: [forms, animate],
};
