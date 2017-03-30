const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const buildEntry = (entryPoint) => ([
	 'webpack/hot/dev-server'
    ,'webpack/hot/only-dev-server'
    ,path.join(__dirname, entryPoint)
]);

const config = {
	entry: {
		app: buildEntry('/src/app/app.js'),
		appTest: buildEntry('/src/app/appTest.js')
	},
	devServer: {
		contentBase: 'src/www',
		devtool: 'eval',
		hot: true,
		inline: true,
		port: 3003,
		host: 'localhost',
	},
    eslint: {
        configFile: './.eslintrc.json'
    },
	devtool: 'eval',
	output: {
		path: buildPath,
		filename: "[name].js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new TransferWebpackPlugin([
			{from: 'www'},
		], path.resolve(__dirname, 'src')),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': '"development"'
			}
		})
	],
	module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
        ],
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: [nodeModulesPath],
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!sass-loader",
			},
		],
	}
};

module.exports = config;
