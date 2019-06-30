const path = require('path');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, '../build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        // images and fonts
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'src',
          },
        },
      },
      {
        // TODO: this is to be checked
        // json structure
        test: /\.(json)$/i,
        use: {
          loader: 'json',
          // ,
          // options: {
          //   name: '[path][name].[ext]',
          //   context: 'src',
          // },
        },
      },
      {
        // TODO: this is to be checked
        // audio formats
        test: /\.(ogg|mp3|wav)$i/,
        use: {
          loader: 'url',
          // ,
          // options: {
          //   name: '[path][name].[ext]',
          //   context: 'src',
          // },
        },
      },
    ],
  },
  plugins: [
    // templates
    new NunjucksWebpackPlugin({
      templates: [
        {
          from: path.resolve(__dirname, '../src/tmpl/pages/index.html'),
          to: path.resolve(__dirname, '../src/html/index.html'),
        },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'html/legacy.html',
      inject: false, // no link css
      template: path.resolve(__dirname, '../src/html/legacy.html'),
    }),
    new HtmlWebpackPlugin({
      filename: 'html/index.html',
      xhtml: true, // selfclosed tag to link css
      template: path.resolve(__dirname, '../src/html/index.html'),
    }),
  ],
};
