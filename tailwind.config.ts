import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        'navy': '#020817',
        'navy-light': '#0a1628',
        'navy-card': '#0d1f3c',
        'orange': '#f97316',
        'amber': '#fbbf24',
        'sky': '#38bdf8',
        'blue-mid': '#3b82f6',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #f97316, #fbbf24)',
        'gradient-cool': 'linear-gradient(135deg, #38bdf8, #3b82f6)',
        'gradient-both': 'linear-gradient(135deg, #f97316, #fbbf24, #38bdf8)',
        'hero-bg': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59,130,246,0.15), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
