const path = require('path');
module.exports = {
  // 模式
  mode: 'development', // 也可以使用 production
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 打包文件夹
    path: path.resolve(__dirname, 'dist'),
    // 打包文件
    filename: 'realize-utils.js',
    // 向外暴露的对象的名称
    library: 'utils',
    // 打包生成库可以通过esm/commonjs/require的语法引入
    libraryTarget: 'umd',
  },
  // // 启用sourcemap来调试webpack的输出。
  // devtool: "source-map",
  // resolve: {
  //   // Add '.ts' and '.tsx' 作为可解析扩展.
  //   extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  // },
  module: {
    unknownContextCritical: false,
    rules: [{
      test: /\.js$/,
      loader: "babel-loader"
    }],
    // loaders: [
    //   // 所有具有 '.ts' or '.tsx' 的扩展将由ts-loader处理。
    //   {
    //     test: /\.tsx?$/,
    //     loader: "ts-loader"
    //   }
    // ],
    // preLoaders: [
    //   // 所有输出的'.js'文件将有任何sourcemaps被'source-map-loader'重新处理  
    //   {
    //     test: /\.js$/,
    //     loader: "source-map-loader"
    //   }
    // ]
  }
}