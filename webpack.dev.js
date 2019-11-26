const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const Dotenv = require('dotenv-webpack');
module.exports = {
    mode: 'development',
    resolve: {

        extensions: [".ts", ".tsx"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'REACT APP',
            template: './src/index.html'
        }),
        new Dotenv({
            path: './.env.development',
        })

    ],
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },

            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }, {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './dist',
        hot: true
    }, externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};