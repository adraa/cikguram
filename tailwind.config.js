/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CC0000',
          dark: '#990000',
          light: '#FF2222',
        },
        accent: {
          DEFAULT: '#C9A020',
          light: '#FFD700',
          dark: '#B8900A',
        },
        road: {
          green: '#1A7A3C',
          'green-light': '#22A050',
          black: '#111111',
          yellow: '#C9A020',
          red: '#CC0000',
        },
        surface: {
          DEFAULT: '#F8F8F6',
          2: '#F0EFEB',
          3: '#E8E7E2',
          dark: '#111111',
        },
        border: {
          DEFAULT: 'rgba(0,0,0,0.08)',
          strong: 'rgba(0,0,0,0.15)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'DM Sans', 'sans-serif'],
        body: ['var(--font-body)', 'Manrope', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '0.9' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-red': 'linear-gradient(135deg, #FF4444 0%, #CC0000 50%, #990000 100%)',
        'gradient-light': 'linear-gradient(180deg, #FFFFFF 0%, #F8F8F6 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'beam-drop': 'beam-drop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'beam-slide': 'beam-slide 6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'fade-up': 'fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'red': '0 8px 32px rgba(204, 0, 0, 0.25)',
        'red-lg': '0 16px 64px rgba(204, 0, 0, 0.3)',
        'card': '0 2px 16px rgba(0,0,0,0.07)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.12)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};