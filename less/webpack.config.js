const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { ModuleFederationPlugin } = require('webpack').container;

const config = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
        directory: path.join(__dirname, ''),
        },
        compress: true,
        port: 3000,
    },
    module: {
        
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 
                    {
                        loader: 'style-loader',
                    },
                    'css-loader', 'postcss-loader' ]
            },
            {
                test: /old\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        // options: { singleton: true }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /^(?:(?!old\.less).)+\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 2,
                            // localIdentName: 'pref_LESS_[folder]__[local]___[hash:base64:5]'
                        }
                    },
                    { loader: 'postcss-loader' },
                    { loader: 'less-loader' }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            // components: path.resolve(__dirname, 'src/components/'),
            sharedStyles: path.resolve(__dirname, 'styles/less')
            // constants: path.resolve(__dirname, 'src/constants/')
        },
        extensions: ['.js', '.css', '.less']
    },

    performance: {
        maxEntrypointSize: 300000,
        maxAssetSize: 300000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.js',}),
        new ModuleFederationPlugin({
            name: 'index', 
          }),
    ]
};

module.exports = config;