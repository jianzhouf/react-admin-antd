const webpackMerge = require('webpack-merge');
const webpack = require("webpack")
const base = require('./webpack.base');
const path = require("path")
const resolve = function (p) {
    return path.resolve(process.cwd(), p)
}

module.exports = webpackMerge(base, {
    mode: "production",
})