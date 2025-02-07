/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secundaryblue: '#036b68',
        bluetext: '#dcfbff',
        primaryblue: '#61b5e3',
        dark: '#0000',
        white: '#ffff',
        grey: '#dcdcdc'
      }
    },
  },
  plugins: [],
}

