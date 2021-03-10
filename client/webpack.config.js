const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const FileListPlugin = require("./plugins/FileListPlugin");
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === "development";
const config = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/public/",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js|jsx$/,
        use: [
          {
            loader: path.join(__dirname, "loaders/txtLoader.js"),
            options: { name: "ZYP" },
          },
          { loader: "babel-loader" },
         
        ],
      },
     
    ],
  },
  mode: "development",

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "client/index.html"),
    }),
    new FileListPlugin(),
  ],
};
console.log('isDev',isDev)
if (isDev) {
  config.entry = ["react-hot-loader/patch", "./src/index.js"];
  config.devtool = "#cheap-module-eval-source-map"; // source-map 方便排错
  config.devServer = {
    host: "127.0.0.1",
    port: "8888",
     //告诉服务器从哪个目录中提供内容
    contentBase: path.join(__dirname, "dist"),
    //启用 webpack 的模块热替换特性
    hot: true,
    //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
    overlay: {
      errors: true,
    },
    //webpack-dev-server打包的内容是放在内存中的，这些打包后的资源对外的的根目录就是publicPath，换句话说，这里我们设置的是打包后资源存放的位置
    publicPath: "/public/",
    // 404时页面跳转
    historyApiFallback: {
      index: "/public/index.html",
    },
  };
  config.plugins = [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ];
}
module.exports = config;
