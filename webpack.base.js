const path = require('path')
//html处理插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { title, theme, isDark, isCompact, proxy, port } = require('./config');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = (env) => {
	const nodeEnv = env.NODE_CONFIG;
	let publicPath = ''
	
	return {
		entry: {
			main: './src/index.tsx'
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: nodeEnv === 'development' ? '[name].js' : '[name].[hash].js',
			publicPath//publicPath是生成的dist中的html文件中自动引入js和css文件时在最前面拼的一部分字符串
		},
		//配置本地服务
		devServer: {
			//配置本地的静态资源文件夹，用来让这两个文件夹内部的文件可以通过访问http地址直接展示
			allowedHosts: 'all',//'auto' | 'all' | Array[string],
			'static': [
				path.resolve(__dirname, 'dist'),//这里是构建目标路径
				path.resolve(__dirname, 'public')//这里是public部分的内容
			],
			host: '0.0.0.0',//本地服务启动后的ip地址//localhost
			port: port || 8080,//本地服务启动的端口号
			hot: true,
			// open:true,//启动时自动打开默认浏览器
			https: false,
			historyApiFallback: true,  //缺少该配置，会出现上面的错误
			proxy
		},

		module: {
			rules: [
				{//配置babel-loader用来编译和解析js
					test: /\.js$/,
					use: { loader: 'babel-loader' }
				},
				{
					test: /\.(png|jpg|jpeg|gif)$/,
					use: [{
						loader: 'url-loader',
						options: {
							//当图片大小 小于limit时，则将图片转成base64字符串形式
							esModule: false,
							outputPath: './images/', //   ./是相对于dist目录而言
							limit: 500, //是把小于500B的文件打成Base64的格式，写入JS
						}
					},
						// {
						// 	loader: 'image-webpack-loader',
						// 	options: {
						// 		mozjpeg: {
						// 			progressive: true,
						// 			quality: 50,
						// 		},
						// 		optipng: {
						// 			enabled: true,
						// 		},
						// 		pngquant: {
						// 			quality: [0.5, 0.65],
						// 			speed: 4,
						// 		},
						// 		gifsicle: {
						// 			interlaced: false,
						// 		},
						// 		webp: {
						// 			// 不支持WEBP就不要写这一项
						// 			quality: 75,
						// 		},
						// 	},
						// }
					],
					type: 'javascript/auto'
				},
				{
					test: /\.(ts|js)x?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,//单独抽取css样式文件
						{ loader: 'css-loader' },
						{ loader: 'postcss-loader' },
					]
				},
				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,//单独抽取css样式文件
						{ loader: 'css-loader' },
						{ loader: 'postcss-loader' },
						{ loader: 'sass-loader' }
					]
				},
				{
					test: /\.less$/,
					use: [
						MiniCssExtractPlugin.loader,//单独抽取css样式文件
						{ loader: 'css-loader' },
						{ loader: 'postcss-loader' },
						{
							loader: 'less-loader',
							options: {
								lessOptions: {
									// 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
									modifyVars:
										isDark || isCompact
											? getThemeVariables({
												dark: isDark || false, // 开启暗黑模式
												compact: isCompact || false, // 开启紧凑模式
												...theme,
											})
											: theme,
									// 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
									javascriptEnabled: true,
								},
							},
						}
					]
				}
			]
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: { //抽取自定义组件
						name: 'commons',
						chunks: 'initial',
						minChunks: 2,//被两个地方引用过，就提取出来
					},
					vender: { //抽取node_module公共组件
						chunks: 'initial',
						name: 'vender',
						test: /[\\/]node_modules[\\/]/, //抽取node_modules
						minChunks: 1, //只要是一个地方引入的
						maxInitialRequests: 5,
						minSize: 0,
					}
				}
			}
		},
		plugins: [//html处理插件
			new HtmlWebpackPlugin({
				template: './src/index.html',//html模版文件位置
				filename: 'index.html',//生成的html文件名，生成的html文件路径会整合base中配置的path生成到目标位置
				chunks: ['main'],//生成的index.html中自动引入的组件，这里设置的是entry中定义的key
				title,
				inject: true,
				minify: {
					removeComments: true, //去除注释
					collapseWhitespace: true, //是否去除空格
					minimize: true,
					minifyCSS: true,
					minifyJS: true,
				},
			}),
			new MiniCssExtractPlugin({
				filename: nodeEnv === 'development' ? '[name].css' : '[name].[hash].css'
			}),
		],
		resolve: {
			//配置免后缀的文件类型
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.less'],
			//为全路径配置缩写@
			alias: {
				'@': path.join(__dirname, './src/'),
				'@/page': path.join(__dirname, './src/page/'),
			}
		}
	}
}