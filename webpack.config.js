const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index.jsx",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            } 
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],

    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true
    }
};