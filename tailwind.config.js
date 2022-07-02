module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./HOC/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'max': '575.98px' },
      sm: { 'min': '576px', 'max': '767.98px' },
      md: { 'min': '768px', 'max': '991.98px' },
      lg: { 'min': '992px', 'max': '1199.98px' },
      xl: { 'min': '1200px', 'max': '1399.98px' },
      'xxl': { 'min': '1400px' },
      '3xl': { 'min': '1450px', 'max': '1550.98px' },
      '4xl': { 'min': '1551px', 'max': '1650.98px' },
      '5xl': { 'min': '1650px', 'max': '1750.98px' },

    },
    extend: {
      colors: {
        "main": 'rgba(160, 4, 125, 1)'

      },
      height: {
        "84": "21rem",
        "94": "22rem",
        "98": "27rem",
        "100": "28rem",
        "103": "32rem",
        '104': '32.5rem',
        '108': '34rem',
      },
      width: {
        "84": "21rem",
        "94": "22rem",
        "98": "27rem",
        "100": "28rem",
        '104': '31rem',
        '108': '36rem',
        '110': '38rem',
      },
      top: {
        "104": "28rem"
      }
    },
  },
  plugins: [],
}
