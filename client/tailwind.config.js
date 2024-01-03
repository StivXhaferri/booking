/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '0px', 'max': '767px'},   // Small screens (640px - 767px)
      'md': {'min': '768px', 'max': '1023px'},  // Medium screens (768px - 1023px)
      'lg': {'min': '1024px', 'max': '1280px'}, // Large screens (1024px - 1279px)
      'xl': {'min': '1281px'},                  // Extra large screens (1280px and above)
    },
  },
  plugins: [],
}