const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'src/scripts/index.js'),
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
              // compiles Less to CSS
            //   "style-loader",
              "css-loader",
              "less-loader",
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'all.css',
            chunkFilename: 'all.css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ]
}