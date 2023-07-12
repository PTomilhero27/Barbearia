/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  prefix: 'tw-',
  purge: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      primary: ' #0D121E',
      primaryDark: '#080B16',
      secondary: '#F0B35B',
      black: '#000000',
      white: '#ffffff',
    },
  },
  plugins: [],
}

