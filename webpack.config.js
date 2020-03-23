const webpack = require("webpack");
const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@': path.join(__dirname, './src'),
            'components': '@/components'
        }
    },
    module: {

        rules: [{
                test: /\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader?modules', 'sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.ttf|woff|woff2|eot|svg$/,
                use: ['url-loader', 'file-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, './index.html')
    })]
}