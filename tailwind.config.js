module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './**/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        transparent: 'transparent'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
