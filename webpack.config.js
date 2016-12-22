var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!bootstrap/dist/js/bootstrap.min.js',
		'./app/index.js',
	],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
			"window.jQuery": "jquery",
            "window.Tether": 'tether'
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js' 
	},
	resolve: {
		root: __dirname,
		alias: {
		},
		extensions: ['', '.js']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	}	
};