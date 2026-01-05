/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            orange: '#F05829', // Extracted from your buttons
            purple: '#5D45DB', // Extracted from your boxes
            dark: '#1A1A1A',
            bg: '#FFFFFF',
          }
        },
        fontFamily: {
          sans: ['var(--font-poppins)'],
        },
        animation: {
          'spin-slow': 'spin 15s linear infinite',
          'spin-reverse-slow': 'spin-reverse 12s linear infinite',
          'rain': 'rain 8s linear infinite',
        },
        keyframes: {
          'spin-reverse': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(-360deg)' },
          },
          'rain': {
            '0%': { transform: 'translateY(-100%)', opacity: '0' },
            '10%': { opacity: '1' },
            '90%': { opacity: '1' },
            '100%': { transform: 'translateY(100vh)', opacity: '0' },
          }
        }
      },
    },
    plugins: [],
  };