var webpack = require('webpack');
var path = require('path');
var project_settings = require('./project-settings');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractSCSS = new ExtractTextPlugin('./src/scss/master.scss');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, './build/');
var ASSETS_DIR = BUILD_DIR + "/assets";
var APP_DIR = path.resolve(__dirname, 'src/app');

module.exports = {
    devtool: 'source-map',
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app/index.js',
    },
    output: {
        path: ASSETS_DIR,
        filename: project_settings.project_name + '.bundle.js'
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
        ]),
        new ExtractTextPlugin({
            filename: project_settings.project_name + '.css',
            disable: false,
            allChunks: true
        })
    ]
};