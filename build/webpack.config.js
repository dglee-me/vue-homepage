const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool: "eval",
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "@": path.resolve(__dirname, "../src/")
        }
    },
    entry: {
        app: "./src/main.js"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: "vue-loader"
        },{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },{
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            use: "file-loader"
        }]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].css' })
    ],
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "../dist")
    }
};