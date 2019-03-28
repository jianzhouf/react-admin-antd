const webpackMerge = require('webpack-merge');
const webpack = require("webpack")
const base = require('./webpack.base');
const path = require("path")
const resolve = function (p) {
    return path.resolve(process.cwd(), p)
}

module.exports = webpackMerge(base, {
    mode: "development",
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    // devtool: 'eval',
    devServer: {
        contentBase: resolve("dist"),
        port: 8888,
        compress: true,
        hot: true,
        open: false,
        progress: true,
        stats: 'minimal',
    }
})