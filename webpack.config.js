const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    module: {
        rules: [
            

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: {
                    loader: 'css-loader'
                }
            },

            {
              test: /\.js%/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env'],
                },
              },
            },
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Your next book',
            template: './src/template.html'
        })
    ]
}