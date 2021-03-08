const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || "development";

module.exports = {
	mode,
	entry: "./src/index.tsx",
	output: {
		path: __dirname + "/dist",
		publicPath: "/",
		filename: "[name].js"
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"] 
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			templateParameters: {
				env: process.env.NODE_ENV === "production" ? "" : "[DEV]",
			},
			minify: process.env.NODE_ENV === "production" ? {
				collapseWhitespace: true,
				removeComments: true
			} : false
		})
	],
	devServer: {
		contentBase: "./dist",
		port: 3000,
		historyApiFallback: true
	}
}