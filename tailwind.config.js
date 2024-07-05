/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      colors: {
        main: '#252729',
        second: '#F8FAFF',
        third: '#2D2F32',
        fourth: '#E8EAEE',
        grayDark: '#6E7074',
        gray: '#7F8183',
        ocean: '#3ABCFF'
      },
    },
  },
  plugins: [],
}

