module.exports = {
  purge: {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
    ],
    options: {
        whitelistPatterns: [/^vs-/],
    }
},
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
