// 어디서 처음 시작하는가,
// 어떤 파일 쓸 건가, 또 어떤 것을 사용해 불러올 것인가.
// 어디에 아웃풋 할건가.(어떤 이름으로)
// 서버는 어떻게 사용할 것인가?

module.exports = {
	entry: [
		'./src/index.js'
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		port: 3000,
		historyApiFallback: true
	}
}