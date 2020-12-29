module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'sass-loader!style-loader!css-loader',
      }
    ]
  }
}