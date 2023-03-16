const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"development",
    entry: {
        bundle:path.resolve(__dirname, "src/index.js")
    },
    output: {
        path:path.resolve(__dirname, "dist"),
        filename:"[name].js",
        clean:true,
        assetModuleFilename:'[name][ext]'
    },
    devtool:'source-map',
    devServer: {
        static: {
        directory: path.join(__dirname, ''),
        },
        open:true,
        compress: true,
        port: 3000,
        hot:true,
        historyApiFallback:true
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  publicPath: 'assets',
                },
            },
            {
                test:/\js$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'bundle.js',}),
        // new HTMLWebpackPlugin({
        //     template: "index.html"
        // }),
    ]
}

// module.exports = config;