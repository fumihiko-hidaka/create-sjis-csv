module.exports = [
  {
    mode: 'development',
    entry: {
      app: [
        'babel-polyfill',
        './base.js',
      ],
    },
    output: {
      path: __dirname,
      filename: 'app.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },
  },
];
