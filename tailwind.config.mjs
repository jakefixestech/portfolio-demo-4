/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Room 1 - Hero - Deep Magenta/Fuchsia
        magenta: {
          deep: '#6b1d4e',
          plum: '#2d0f3a',
        },
        gold: {
          warm: '#f4c542',
          deep: '#d4a018',
        },
        // Room 2 - Crystals - Teal/Turquoise
        teal: {
          deep: '#0d4f4f',
          aqua: '#1a7a7a',
          glow: '#7fdbdb',
        },
        amethyst: '#9b59b6',
        rose: '#f5a3c7',
        // Room 3 - Candles - Amber/Orange
        amber: {
          deep: '#8b4513',
          burnt: '#cc5500',
          honey: '#f5a623',
        },
        cream: '#fff5e6',
        // Room 4 - Books - Forest Green
        forest: {
          deep: '#1a3d2e',
          moss: '#2d5a3d',
        },
        burgundy: '#722f37',
        parchment: '#f4e9d8',
        // Room 5 - The Hollow - Midnight Purple
        midnight: {
          purple: '#1a0a2e',
          indigo: '#2d1b4e',
        },
        electric: {
          violet: '#8b5cf6',
          pink: '#ec4899',
        },
        silver: '#c0c0c0',
        // Room 6 - Footer - Earthy Brown
        earth: {
          chocolate: '#3d2314',
          terracotta: '#c45a3b',
        },
        sage: '#9caf88',
      },
      fontFamily: {
        display: ['Cinzel Decorative', 'serif'],
        heading: ['Cinzel', 'serif'],
        body: ['Crimson Text', 'serif'],
        accent: ['Satisfy', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'flicker': 'flicker 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '25%': { opacity: '0.9' },
          '50%': { opacity: '1' },
          '75%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};
