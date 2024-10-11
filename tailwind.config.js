module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customGreen: '#17150B',
        customOrange: '#D6A689',
        primary: '#242122',
        secondary: '#6B6B6B',
        customGrey: '#FAF8F6',
        customDarkGray: '#F3F1EE',
      },
      screens: {
        xs: '430px'
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}