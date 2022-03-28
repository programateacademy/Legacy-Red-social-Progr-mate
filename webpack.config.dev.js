const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: ["regenerator-runtime/runtime.js", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader" }],
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:5]'
                            }
                        }
                    }
                ],
            },
            {
                test: /\.(png|gif|jpg|woff|otf|svg|pdf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: { name: "assets/[hash].[ext]" },
                    },
                ],
            },
            // {
            //   test: /\.(png|gif|jpg|woff|otf|svg)$/,
            //   use: ['url-loader?limit=100000']
            // }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new Dotenv(),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3006,
        historyApiFallback: true,
    },
};
