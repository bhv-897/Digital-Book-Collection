/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        darkBg: '#0f172a',
        darkCard: '#1e293b',
        primary: '#6366f1',
        primaryHover: '#4f46e5',
      }
    },
  },
  plugins: [],
}

