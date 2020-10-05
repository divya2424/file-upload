const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-[hash].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    contentBase: __dirname + "/dist",
    port: 3000,
  },
  resolve: {
    // priority of lookup -> left to right
    modules: ["src", "node_modules", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: "babel-loader",
      },
      // {
      //   test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      //   loader: "file-loader",
      //   options: {
      //     name: "dist/media/[name].[ext]",
      //     publicPath: (url) => url.replace(/dist/, ""),
      //   },
      // },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      {
        test: /\.(jpeg|jpg|gif|png)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
    ignored: ["files/**/*.js", "node_modules/**"],
  },
};
