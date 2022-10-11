//webpack.dev.js
const webpack = require('webpack');
//引入webpack-merge用来合并配置到webpack.base.js中
const { merge } = require('webpack-merge');
//引入webpack.base.js
const base = require('./webpack.base.js')
// const path = require('path')
//merge用法用来将配置内容合并到webpack.base.js中
//第一个参数是原始的webpack的配置json对象
//第二个参数是我们要合并的单独的配置对象
//他们最终会形成一个整体的大json
module.exports = (env) => {
	return merge(base(env), {
		//定义环境为开发环境
		mode: 'development',
		module: {
			rules: [
				// { //用来编译css代码,
				// 	test: /\.css$/,
				// 	use: [ //loader是自下而上执行的，顺序不能错
				// 		{ loader: 'style-loader' },
				// 		{ loader: 'css-loader' },
				// 		{ loader: 'postcss-loader' },
				// 	]
				// },
				// { //用来编译sass代码
				// 	test: /\.scss$/,
				// 	use: [//loader是自下而上执行的，顺序不能错
				// 		{ loader: 'style-loader' },
				// 		{ loader: 'css-loader' },
				// 		{ loader: 'postcss-loader' },
				// 		{ loader: 'sass-loader' }
				// 	]
				// },
				// {
				// 	test: /\.less$/,
				// 	use: [
				// 		{ loader: 'style-loader' },
				// 		{ loader: 'css-loader' },
				// 		{ loader: 'postcss-loader' },
				// 		{ loader: 'less-loader' }
				// 	]
				// }
			]
		},
		plugins: [
			new webpack.DefinePlugin({
        //定义全局变量
        'process.env': {
          NODE_ENV: JSON.stringify(env.NODE_CONFIG),
          // BASE_IP:baseIp
        },
      }),
		],
		devtool: 'inline-source-map'//内联配置源码映射
	})
}