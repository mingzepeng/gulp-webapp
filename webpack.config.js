var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")],
	context: __dirname + "/app/react",
	entry: "./main.jsx",
	output: {
		path: __dirname + "/app/react",
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
      		loader: "style!css" 
      	}]
	}
};