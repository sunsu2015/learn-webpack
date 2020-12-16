const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        index: './src/index.js',
        other: './src/other.js',
        third: './src/third.js'
    },
    // entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    mode: 'development',
    devServer: {
        contentBase: "build",
        compress: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
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
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
        title: 'test title'
    })],
    devtool: "cheap-module-source-map", // inline-source-map
    optimization: {
        splitChunks: {
            chunks: "all",
            name: "vendor"
        },
        // sideEffects: true,
        // usedExports: true
    }
}