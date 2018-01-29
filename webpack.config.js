const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'output.js'
	},
	module: {
		rules: [
			{
				//files ending with .js
				test: /\.js$/,
				//exclude the node_modules directory
				exclude: /node_modules/,
				//use this (babel-core) loader
				loader: "babel-loader"
			},
			{
				test: /\.scss$/,// files ending with .scss,
				use: ExtractTextWebpackPlugin.extract({ //call our plugin with extract method
					use: ['css-loader', 'sass-loader'], //use these loaders
					fallback: 'style-loader' //fallback for any CSS not extractrd
				})//end extract
			}
		]//end rules
	},
	plugins: [
		new ExtractTextWebpackPlugin('styles.css'),//call the ExtractTextWebpackPlugin constructor and name our css file
	],
	devServer: {
		contentBase: path.resolve(__dirname, './public'),//A directory or URL to serve HTML content from
		historyApiFallback: true,//fallback to /index.html for single Page Applications.
		inline: true,//inline mode(set to false to disable including client scripts, like livereload)
	},
	devtool: 'eval-source-map'//enable devtool for better debugging experience
}

module.exports = config;

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new UglifyJsPlugin()
	)
}