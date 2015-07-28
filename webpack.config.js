var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common',"common.bundle.js"), 
		new ExtractTextPlugin("[name].bundle.css"),
		// new webpack.BannerPlugin("this is from banner")
		// new webpack.optimize.UglifyJsPlugin({sourceMap : true})
	],
	context: __dirname + "/app",
	entry: {
		main : "./scripts/main.jsx",
		common : ['jquery','react']
	},
	output: {
		path: __dirname + "/app/bundles",
		filename: "[name].bundle.js"
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel'
		},{
        	test: /\.scss$/,
		    loader: "style!css!sass"
      	},{ 
      		test: /\.css$/, 
      		loader: ExtractTextPlugin.extract("style-loader", "css-loader") 
      	}]
	}
};