// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

var webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const WriteFilePlugin = require('write-file-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
const path = require('path');
const paths = require('./config/paths');
const appPackageJson = require(paths.appPackageJson);

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-source-map', //'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, appPackageJson.clientBundleOutputDir), //Tell the server where to serve content from. This is only necessary if you want to serve static files.
		//compress: true,
		// If you use Docker, Vagrant or Cloud9, set
		// host: options.host || "0.0.0.0";
		//
		// 0.0.0.0 is available to all network devices
		// unlike default `localhost`.
		host: process.env.HOST, // Defaults to `localhost`
		port: process.env.PORT, // Defaults to 8080
		//	https: true,
		open: 'chrome', // Open the page in browser
		openPage: '',
		hot: true,
		//Enable devServer.historyApiFallback if you are using HTML5 History API based routing.,
		// proxy: [
		// 	{
		// 		context: ['/'],
		// 		target: 'http://localhost:5000'
		// 	}
		// ],
		overlay: {
			warnings: true,
			errors: true
		}
	},
	plugins: [
		// new BundleAnalyzerPlugin({
		// 	// Can be `server`, `static` or `disabled`.
		// 	// In `server` mode analyzer will start HTTP server to show bundle report.
		// 	// In `static` mode single HTML file with bundle report will be generated.
		// 	// In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
		// 	analyzerMode: 'server',
		// 	// Host that will be used in `server` mode to start HTTP server.
		// 	analyzerHost: '127.0.0.1',
		// 	// Port that will be used in `server` mode to start HTTP server.
		// 	analyzerPort: 8888,
		// 	// Path to bundle report file that will be generated in `static` mode.
		// 	// Relative to bundles output directory.
		// 	reportFilename: 'report.html',
		// 	// Module sizes to show in report by default.
		// 	// Should be one of `stat`, `parsed` or `gzip`.
		// 	// See "Definitions" section for more information.
		// 	defaultSizes: 'parsed',
		// 	// Automatically open report in default browser
		// 	openAnalyzer: true,
		// 	// If `true`, Webpack Stats JSON file will be generated in bundles output directory
		// 	generateStatsFile: false,
		// 	// Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
		// 	// Relative to bundles output directory.
		// 	statsFilename: 'stats.json',
		// 	// Options for `stats.toJson()` method.
		// 	// For example you can exclude sources of your modules from stats file with `source: false` option.
		// 	// See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
		// 	statsOptions: null,
		// 	// Log level. Can be 'info', 'warn', 'error' or 'silent'.
		// 	logLevel: 'info'
		// }),
		new webpack.HotModuleReplacementPlugin(),
		new WriteFilePlugin() // Forces webpack-dev-server to write bundle files to the file system. https://github.com/gajus/write-file-webpack-plugin
	]
});
