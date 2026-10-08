/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#F8FAFC',
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
        },
        heading: '#0F172A',
        body: '#475569',
        card: '#FFFFFF',
        border: '#E2E8F0',
      }
    }
  },
  plugins: [],
}
