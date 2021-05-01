const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
    mode: "development",
    devtool: "eval",
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: [".js", ".vue"]
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
            use: ["style-loader", "css-loader"]
        },{
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            use: "file-loader"
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "../dist")
    }
};