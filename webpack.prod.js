//webpack.prod.js
const webpack = require('webpack');
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
//清理dist文件夹的插件，用来在每次执行构建的时候清空上次构建的结果防止文件缓存
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//引入抽取css样式插件
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionPlugin = require('compression-webpack-plugin') //gzip压缩
// const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin'); //打包速度分析
// const path = require('path')
// const smp = new SpeedMeasurePlugin();
const { projectName, distDir } = require('./config');
const plugins = [
	new CleanWebpackPlugin(),
	//配置样式抽取插件，生成的css文件名称为[name],[name]为entry中定义的key
	// new MiniCssExtractPlugin({
	// 	filename: '[name].css'
	// }),
	new CompressionPlugin({
		algorithm: 'gzip',
		test: /\.js$|\.html$|\.css$/,
		threshold: 10240,
		minRatio: 0.8
	}),
	// new webpack.SourceMapDevToolPlugin({
	// 	publicPath: `http://sourcemap.ximalaya.com/${projectName}/${distDir}/`,// 注意末尾的/
	// 	filename: '[file].map',
	// 	exclude: [new RegExp('vender'),new RegExp('css')],
	// }),
]
if (process.env.NODE_ANALYZE === 'analyze') {
	const BundleAnalyzerPlugin =
		require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
	plugins.push(
		new BundleAnalyzerPlugin({
			analyzerMode: 'server',
			analyzerHost: '127.0.0.1',
			analyzerPort: 8889,
			reportFilename: 'report.html',
			defaultSizes: 'parsed',
			generateStatsFile: false,
			statsFilename: 'stats.json',
			statsOptions: null,
			logLevel: 'info',
		}),
	);
}
module.exports = (env) => {
	return merge(base(env), {
		//定义环境为生产环境
		mode: 'production',
		module: {
			rules: [
				// {
				// 	test: /\.css$/,
				// 	use: [
				// 		MiniCssExtractPlugin.loader,//单独抽取css样式文件
				// 		{ loader: 'css-loader' },
				// 		{ loader: 'postcss-loader' },
				// 	]
				// },
				// {
				// 	test: /\.scss$/,
				// 	use: [
				// 		MiniCssExtractPlugin.loader,//单独抽取css样式文件
				// 		{ loader: 'css-loader' },
				// 		{ loader: 'postcss-loader' },
				// 		{ loader: 'sass-loader' }
				// 	]
				// },
				// {
				// 	test: /\.less$/,
				// 	use: [
				// 		MiniCssExtractPlugin.loader,//单独抽取css样式文件
				// 		{ loader: 'css-loader' },
				// 		{ loader: 'postcss-loader' },
				// 		{ loader: 'less-loader' }
				// 	]
				// }
			]
		},
		plugins: [
			...plugins,
			new webpack.DefinePlugin({
        //定义全局变量
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_CONFIG),
          // BASE_IP:baseIp
        },
      }),
		],
		devtool: false//独立配置源码映射
	})
}