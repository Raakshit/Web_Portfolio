module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        custom_blue: '#CADCFC',
      },
      gradientColorStops: theme => ({
        'indigo-700': theme('colors.indigo.700'),
        'indigo-900': theme('colors.indigo.900'),
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}