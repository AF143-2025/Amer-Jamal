/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        surface: {
          light: '#FFFFFF',
          secondary: '#F8FAFC',
          tertiary: '#F1F5F9',
          border: '#E2E8F0',
          dark: '#07090E',
          'dark-card': '#0D111A',
          'dark-border': 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', 'Cairo', '"Plus Jakarta Sans"', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        almarai: ['Almarai', 'sans-serif'],
        readex: ['"Readex Pro"', 'sans-serif'],
        navbar: ['Cairo', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"IBM Plex Sans Arabic"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.02)',
        'elevated': '0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'dropdown': '0 12px 28px -4px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift-slow': 'drift 22s ease-in-out infinite alternate',
        'drift-reverse': 'driftReverse 28s ease-in-out infinite alternate',
        'glow-spin': 'spin 60s linear infinite',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(40px, -25px) scale(1.08)' },
          '100%': { transform: 'translate(-30px, 20px) scale(0.96)' },
        },
        driftReverse: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-40px, 30px) scale(1.1)' },
          '100%': { transform: 'translate(25px, -20px) scale(0.94)' },
        },
      }
    },
  },
  plugins: [],
}
