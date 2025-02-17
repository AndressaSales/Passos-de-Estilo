/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secundaryblue: '#004643',
        bluetext: '#dcfbff',
        primaryblue: '#61b5e3',
        dark: '#001e1d',
        white: '#fffffe',
        grey: '#dcdcdc'
      }
    },
  },
  plugins: [],
}

