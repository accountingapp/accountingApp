const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  watch: true,
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
        {
            enforce: "pre",
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "eslint-loader"
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }
            }
        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        },
        {
            test: /\.(jpg|png|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]',
                  }
              },
            ],
          },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
  ]
}