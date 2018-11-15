const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          'define-loader'
        ]
      }
    ]
  },
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loader')
    ]
  }
}