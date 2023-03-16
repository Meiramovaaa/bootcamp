const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

// const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode:"development",
    entry: {
        'index' : ['./public_html/assets/vendors/jquery/jquery-3.4.1.slim.js',
        './public_html/assets/vendors/jquery/jquery-3.4.1.js',
        './public_html/assets/vendors/isotope/isotope.pkgd.min.js',
        './public_html/assets/js/johndoe.js',
        './public_html/assets/vendors/bootstrap/bootstrap.js',
        './public_html/assets/vendors/bootstrap/bootstrap.bundle.js',
        './public_html/assets/scss/johndoe.scss',
        './public_html/assets/vendors//bootstrap/bootstrap.affix.js' ],
        // 'js/index': './src/index',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ MiniCssExtractPlugin.loader,
                    'css-loader',
                    
                ]
            }
        ]
      },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: true,
        minimizer: [
          // Для webpack @ 5 вы можете использовать синтаксис `...` для расширения существующих минимизаторов (например, `terser-webpack-plugin`), раскомментируйте следующую строку
          // `...`,
          new CssMinimizerPlugin(),
        ],
      },
    plugins: [
        new MiniCssExtractPlugin({
        filename: 'index.css',
        chunkFilename: 'index.css'}),
        new webpack.ProvidePlugin({
            $: "jquery",
            masonry: 'masonry-layout'
        }),
        new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
        }),
        
    ],
    resolve: {
        alias: {
          jquery: "jquery"
      }
      },
}