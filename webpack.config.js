const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        // other: './src/other.js', // 多入口时，hmr会报错，Update failed: ChunkLoadError: Loading hot update chunk index failed.
        // third: './src/third.js'
    },
    // entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    mode: 'development',
    // target: 'web',
    // target: ['web', 'es5'],
    devServer: {
        contentBase: "build",
        compress: true,
        port: 9000,
        hot: true,
        hotOnly: true, // js更新后不会自动刷新页面
        before(app) {
            app.get('/api/info', (req, res) => {
                res.json({
                    key: 'value'
                })
            })
        }
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
        title: 'test title'
    })],
    // MiniCssExtractPlugin在webpack5中暂时报错
    // new MiniCssExtractPlugin()
    // webpack5 css hmr不需要HotModuleReplacementPlugin
    /*new webpack.HotModuleReplacementPlugin()*/
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [MiniCssExtractPlugin.loader, 'css-loader'] MiniCssExtractPlugin在webpack5中暂时报错
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader"
                }]
            },
            {
                test: /\.png$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        name: "[name]_[hash:6].[ext]",
                        outputPath: "images/",
                        limit: 20 * 1024 // 小于120kb的，为base64，否则就是文件
                    }
                }]
            }
        ]
    },
    devtool: "cheap-module-source-map", // inline-source-map
    optimization: {
        splitChunks: {
            chunks: "all",
            name: "vendor"
        },
        // sideEffects: true,
        usedExports: true
    }
}