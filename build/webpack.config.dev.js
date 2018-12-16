'use strict'
const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js",
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
