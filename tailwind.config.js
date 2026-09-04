/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0a0d12',
          'dark-card': '#10151d',
          'dark-subtle': '#161d27',
          light: '#f8fafc',
          'light-card': '#ffffff',
          'light-subtle': '#f1f5f9',
        },
        border: {
          dark: '#1e2633',
          'dark-subtle': '#283344',
          light: '#e2e8f0',
        },
        accent: {
          DEFAULT: '#00d2ff',
          hover: '#38bdf8',
          subtle: 'rgba(0, 210, 255, 0.1)',
          glow: 'rgba(0, 210, 255, 0.25)',
        },
        text: {
          primary: {
            dark: '#f3f4f6',
            light: '#0f172a',
          },
          secondary: {
            dark: '#9ca3af',
            light: '#64748b',
          },
          muted: {
            dark: '#6b7280',
            light: '#94a3b8',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Cascadia Code',
          'Consolas',
          'monospace',
        ],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
