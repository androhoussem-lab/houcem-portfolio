/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [
    './src/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : 'Poppins',
        'dancing': 'Dancing Script'
      },
      colors : {
        'rose':'#EA37A3',
        'blue':'#2BBEF2',
        'purple' : '#6B4EE6',
        'mirage':'#201932'
      },
      height: {
        '128': '40rem',
      }
    },
  },
  plugins: [],
}
