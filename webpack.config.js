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

const loaders = [
	{
		test:	/\.(otf|eot|ttf|woff|woff2)$/,
		loader: 'file-loader?name=fonts/' + ('[name].[ext]')
	},
	{
		test:	/\.(png|jpg|gif|ico)$/,
		loader: 'file-loader?name=images/' + ('[name].[ext]')
	},
	{
	test: /\.css$/,
	loader: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: 'css-loader?importLoaders=1!postcss-loader'
		})
	},
	{
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use:'css-loader?sourceMap&importLoaders=1!postcss-loader!resolve-url-loader!sass-loader?sourceMap=true&sourceMapContents=true'
		})
	},
	{
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules(?!\/svg-inline-react)/,
		query:	 {
			presets: ['es2015', 'react', 'stage-0']
		}
	},
];

const config = [
	{
		name : 'client',
		target : 'web',
		context : path.resolve(__dirname, 'src'),
		entry : './js/client.js',
		output : {
			path: path.resolve(__dirname, 'build', 'static'),
			filename : 'main.js'
		},
		module : {
			loaders : loaders
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
	},
	{
		name : 'server',
		target: 'node',
		context: path.resolve(__dirname, 'src'),
		entry : './js/server.js',
		output : {
			path: path.resolve(__dirname, 'build'),
			filename: 'server.js',
			libraryTarget: 'commonjs2',
			publicPath: '/'
		},

		node: {
			console: false,
			global: false,
			process: false,
			Buffer: false,
			__filename: false,
			__dirname: false
		},

		plugins : [
			new ExtractTextPlugin('[name].css')
		],

		module : {
			loaders : loaders
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
];

module.exports = config;
