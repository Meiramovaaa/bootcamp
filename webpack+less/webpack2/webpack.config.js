
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    // mode: NODE_ENV.process.,
    mode: process.env.PORT ? process.env.PORT : "development",
    entry: {
        bundle: path.resolve(__dirname, 'index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: './images/[name][ext]'
    },
    module: {
        rules: [
          {
            test: /\.less$/i,
            use: [ MiniCssExtractPlugin.loader,
              "css-loader",
              
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: {
                    plugins: [
                      "autoprefixer"
                    ]
                  }
                }
              },"less-loader",
            ],
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    optimization:{
      minimize:true,
      minimizer:[
        new CssMinimizerPlugin()
      ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'all.css',
            chunkFilename: 'all.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
    ]
}