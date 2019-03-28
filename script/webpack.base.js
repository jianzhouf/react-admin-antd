const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const resolve = function (p) {
    return path.resolve(process.cwd(), p)
}


module.exports = {
    entry: resolve("src/index.jsx"),
    output: {
        path: resolve("dist"),
        filename: "[name].[hash].js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            pages: resolve("src/pages"),
            components: resolve("src/components"),
        }
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
        }),
    ],
}