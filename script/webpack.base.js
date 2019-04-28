const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const resolve = function (p) {
    return path.resolve(process.cwd(), p)
}


module.exports = {
    entry: resolve("src/index.jsx"),
    output: {
        path: resolve("dist"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".less"],
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
                    // {
                    //     loader: MiniCssExtractPlugin.loader,
                    // },
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
    optimization: {
        splitChunks: {
            name: "vendors",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve("src/index.html")
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
}