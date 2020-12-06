const path = require('path');
module.exports = {
    entry: {
        index: './src/index.js',
        other: './src/other.js',
        third: './src/third.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}