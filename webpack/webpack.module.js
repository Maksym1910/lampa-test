module.exports = ({
  rules: [
    {
      test: /\.(js|ts)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    },
  ],
});
