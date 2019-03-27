const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const resolve = function (p) {
    return path.resolve(process.cwd(), p)
}

module.exports = {
    entry: resolve("src/index.jsx"),
    mode: "development",
    output: {
        path: resolve("dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }

                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve("src/index.html")
        })
    ],
    devServer: {
        contentBase: resolve("dist"),
        port: 8888,
        compress: true,
        hot: true,
        open: true,
        progress: true,
        stats: 'minimal',
    }
}