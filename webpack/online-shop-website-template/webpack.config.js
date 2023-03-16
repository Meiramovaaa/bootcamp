const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin =  require('mini-css-extract-plugin')

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const autoprefixer = require("autoprefixer")
// const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode:  "development",
    devServer: {
        static: {
          directory: path.join(__dirname, ''),
        },
        compress: true,
        port: 3000,
      },
    entry: {
        'js/index' :'./main/main.js',
        'js/index' :'./mail/contact.js',
        'js/index' :'./js/jquery/jquery-3.4.1.min.js',
        'js/index' :'./js/bootstrap/bootstrap.bundle.min.js',
        'js/index' :'./lib/easing/easing.min.js',
        'js/index' :'./lib/owlcarousel/owl.carousel.min.js',
        'js/index' :'./mail/jqBootstrapValidation.min.js',
        
        'style/index':'./lib/animate/animate.min.css',
        'style/index': './lib/owlcarousel/assets/owl.carousel.min.css',
        'style/index':'./css/style.css'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
   
    module: {
        rules: [
            {
                test: /\.css$/i,
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
                    },
                  ]
            }
        ]
      },
      // postcss: [
      //   autoprefixer({
      //     browsers: ['last 3 versions', '> 1%']
      //   })
      // ],
    
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
        filename: './style/index.css',
        chunkFilename: './style/index.css'}),
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