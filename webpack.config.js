const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
    'entry': './assets/scripts/index.js',
    'devServer': {
        contentBase: './dist',
        hot: true,
        port: 8080
    },
    'output': {
        'filename': 'bundle.js',
        'path': path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,

            },
            {
                test: /\.(sa|sc|c)ss$/,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            //includePaths: ['./assets/scss']
                        }
                    }
                ]
            }
        ],
    },


    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            // 'path': path.resolve(__dirname, 'dist')
        }),

        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        })
    ]
};