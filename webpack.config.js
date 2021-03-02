const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Test: path.resolve(__dirname, './src/__test__'),
      Assets: path.resolve(__dirname, './src/assets'),
      Components: path.resolve(__dirname, './src/components'),
      Context: path.resolve(__dirname, './src/context'),
      Hooks: path.resolve(__dirname, './src/hooks'),
      Pages: path.resolve(__dirname, './src/pages'),
      Routes: path.resolve(__dirname, './src/routes'),
      Services: path.resolve(__dirname, './src/services'),
      Styles: path.resolve(__dirname, './src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new webpack.SourceMapDevToolPlugin(),

    // new MiniCssExtractPlugin({
    //   filename: 'assets/[name].css',
    // }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    port: 3000,
    open: true,
  },
  devtool: false,
};
