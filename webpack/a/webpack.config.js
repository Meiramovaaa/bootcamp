const path = require('path');
const pathTo = './public_html/assets/vendors'
const fs = require("fs");
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
  entry: [`${pathTo}/jquery/jquery-3.4.1.slim.js`, `${pathTo}/jquery/jquery-3.4.1.js`, `./public_html/assets/js/johndoe.js`, `${pathTo}/bootstrap/bootstrap.js`, `${pathTo}/bootstrap/bootstrap.bundle.js`, `${pathTo}/bootstrap/bootstrap.affix.js`, 
  `${pathTo}/isotope/isotope.pkgd.js`, './public_html/assets/scss/johndoe.scss',],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public_html'),
  },
  module: {
    rules: [
      { // a loader loads file with matching extension no matter
        // if it is listed in entry: or imported inside js
        test: /\.s[ac]ss$/i,
            use: [ MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      // Для webpack @ 5 вы можете использовать синтаксис `...` для расширения существующих минимизаторов (например, `terser-webpack-plugin`), раскомментируйте следующую строку
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'all.css',
    chunkFilename: 'all.css'}),
    new webpack.ProvidePlugin({
      $: "jquery",
      masonry: 'masonry-layout'
    }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  })],
  
  resolve: {
    alias: {
      jquery: "jquery"
  }
  },
  
  
  mode: 'development'
};