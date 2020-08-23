const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        home: "./src/index.js",
        playlist: "./src/playlist.js"
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   'file-loader',
                 ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/pages/index.html",
            filename: "index.html",
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/playlist.html",
            filename: "playlist.html",
            chunks: ['playlist']
        })
    ],
    devtool: 'inline-source-map'
};