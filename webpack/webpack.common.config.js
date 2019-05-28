const path = require('path');
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        // images and fonts
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'src'
          }
        }
      }
    ]
  },
  plugins: [
    // templates
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: path.resolve(__dirname, '../src/tmpl/pages/index.html'),
          to: path.resolve(__dirname, '../src/html/index.html')
        }
      ]
      //configure: [{}]
    }),
    new HtmlWebpackPlugin({
      filename: 'html/legacy.html',
      inject: false, // no link css
      template: path.resolve(__dirname, '../src/html/legacy.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      xhtml: true, // selfclosed tag to link css
      template: path.resolve(__dirname, '../src/html/index.html')
    })
  ]
};