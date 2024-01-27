const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    module: {
        rules: [
            

            {
                test:    /\.css$, /,
                
                use: [ 
                    'style-loader',
                    'css-loader',
                    'sass-loader', ]
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