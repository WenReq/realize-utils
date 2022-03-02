const path = require('path');
module.exports = {
  /*
    模式： 可以启用相应模式下的 webpack 内置的优化
    development 
      会将 process.env.NODE_ENV 的值设为 development。 
      启用 NamedChunksPlugin 和 NamedModulesPlugin。
    production 
      会将 process.env.NODE_ENV 的值设为 production。 
      启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin,OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
  */
  mode: 'production', // 也可以使用 production
  // 入口
  entry: './src/index.js',
  // 追踪错误和警告，不要用于生产环境。
  devtool: 'inline-source-map',
  // 提供了一个简单的 web 服务器，并且能够实时重新加载。
  devServer: {
    // 告诉开发服务器(dev server)，在哪里查找文件。
    contentBase: './test_dist/index.html',
    compress: true,
  },
  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'),
    // 打包文件名称
    filename: 'realize-utils.js',
    // 向外暴露的对象的名称
    library: 'utils',
    // 打包生成库可以通过esm/commonjs/require的语法引入
    libraryTarget: 'umd',
  },
  // 处理非js文件，loader 将所有类型文件转为 webpack 能够处理的有效模块，再进行打包。
  module: {
    unknownContextCritical: false,
    rules: [
      // “嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.js' 的路径」时，在你对它打包之前，先使用 babel-loader 转换一下。”
      {
        // 匹配被 loader 处理的文件
        test: /\.js$/,
        // 使用什么 loader 处理；babel-loader 将包含ES6更高级的语法转换为 ES5 语法。
        loader: "babel-loader"
      }
    ],
  }
}