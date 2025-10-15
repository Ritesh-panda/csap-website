/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#06B6D4',
        secondary: '#4338CA',
        background: '#F9FAFB',
        surface: '#E5E7EB',
        border: '#D1D5DB',
        textPrimary: '#111827',
        textSecondary: '#4B5563',
        innovation: '#8B5CF6'
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #2563EB 0%, #06B6D4 50%, #8B5CF6 100%)',
      },
      boxShadow: {
        'glass': '0 8px 30px rgba(2,6,23,0.12)',
        'glow': '0 8px 30px rgba(37,99,235,0.18)'
      }
    },

  plugins: [],
}
}