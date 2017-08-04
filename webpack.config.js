const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const path = require('path');

var DEV;

if(process.env.NODE_ENV === 'production') {
	DEV = false;
} else {
	process.env.NODE_ENV = 'development';
	DEV = true;
}


const config =
{
	context: path.resolve(__dirname, 'src'),
	entry : './js/server.js',
	output : {
		path: path.resolve(__dirname, 'build'),
		filename: 'server.js',
		libraryTarget: 'commonjs2',
		publicPath: '/'
	},

	target: 'node',

	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false
},

	plugins : [],

	module : {
		loaders : [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules(?!\/svg-inline-react)/,
				query:	 {
					presets: ['es2015', 'react', 'stage-0']
				}
			},
		]
	},

	resolve : {
		extensions: ['.js', '.json', '.jpg', '.png', '.svg', '.sass', '.scss', '.css'],
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'src/js'),
			path.resolve(__dirname, 'src/sass'),
			path.resolve(__dirname, 'src/assets'),
			path.resolve(__dirname, 'node_modules')
		]
	}
}

module.exports = config;
