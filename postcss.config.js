module.exports = {
  plugins: {
    'autoprefixer': {},
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: ['src/styles/global.css']
    }
  }
}