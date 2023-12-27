const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
     entry: "./src/scripts/main.js",
     output: {
    filename: "app.bundle.js",
    path: __dirname + "/dist"
     },
     plugins: [
         new HtmlWebpackPlugin({
         hash: true,
         title: 'Library',
         myPageHeader: 'Your next book!',
         template: './src/template.html',
         filename: 'index.html'
    })
     ]
};