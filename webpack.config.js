var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSCSS = new ExtractTextPlugin('./src/scss/master.scss');

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './public/assets');
var APP_DIR = path.resolve(__dirname, 'src/app');

// Project Variables
var project_name = "shiftdesign"; // Your projects name

module.exports = {
    devtool: "inline-source-map",
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app/index.js',
    },
    output: {
        filename: project_name + '.bundle.js',
        path: BUILD_DIR,
        publicPath: '/assets'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test : /\.js?/,
                exclude: /(node_modules|bower_components)/,
                loader : 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                    publicPath: "/assets"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: project_name + '.css',
            disable: false,
            allChunks: true
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development, 
            // ./public directory is being served 
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/'
        }, {
            reload: false
        })
    ]
};