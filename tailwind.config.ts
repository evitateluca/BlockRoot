/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideIn: 'slideIn 0.5s ease-out',
        glassEffect: 'glassEffect 5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        glassEffect: {
          '0%': { opacity: 0.3, transform: 'scale(1.02)' },
          '50%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0.3, transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}
