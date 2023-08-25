/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
         
        '1100': '1100px', 
        '1150': '1150px',
        '1200': '1200px',
        '1250': '1250px',
      },
    },
  },
  plugins: [],
}