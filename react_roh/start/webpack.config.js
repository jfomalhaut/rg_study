// 1. 어디서 처음 시작하는가?
// 2. 어떤 파일 쓸 건가? 어떤 것을 사용해 불러올 것인가?
// 3. 어디에 아웃풋 할 건가? (어떤 이름으로)
// 4. 서버는 어떻게 사용할 것인가?


// 웹팩 상황이 바뀌어야 될 상황이 언제?

module.exports = {
    // 1번에 대한
    entry: [
        './src/index.js'
    ],
    // 2번에 대한 답
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
    // 어떤 확장자를 쓸 것인지?
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    // 어디에 export할 것인지에 대한 내용
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    // 서버에 대한 내
    devServer: {
        contentBase: './dist',
        port: 3000,
        historyApiFallback: true,
    }
};