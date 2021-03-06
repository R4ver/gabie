var webpack = require('webpack');
var path = require('path');
var project_settings = require('./project-settings');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSCSS = new ExtractTextPlugin('./src/scss/master.scss');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './public/');
var ASSETS_DIR = BUILD_DIR + "/assets";
var APP_DIR = path.resolve(__dirname, 'src/app');

console.log(project_settings)

module.exports = {
    devtool: "eval",
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app/index.js',
    },
    output: {
        path: ASSETS_DIR,
        filename: project_settings.project_name + '.bundle.js',
        publicPath: '/assets'
    },
    devServer: {
        contentBase: './public',
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
        new CopyWebpackPlugin([
            { context: 'app', from: '**/*.html', to: BUILD_DIR },
            { context: 'app', from: '*.html', to: BUILD_DIR },
        ], {
            debug: true
        }),
        new WriteFilePlugin(),
        new ExtractTextPlugin({
            filename: project_settings.project_name + '.css',
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