const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: '**/*.json', context: './src' }
    ]),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html'
    })
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
            customAttrAssign: [ /\)?\]?=/ ]
          }
        }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {minimize: true}
          }
        ]
      },
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' },
      { test: /\.json$/, use: 'json-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
    ]
  },

  watchOptions: {
    aggregateTimeout: 0,
    poll: 500,
    ignored: /node_modules/
  }
};
