const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

const jquery = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  jquery: 'jquery',
  'window.jQuery': 'jquery',
  Popper: ['popper.js', 'default']
})

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].[hash].css',
  disable: process.env.NODE_ENV === 'development'
})

const cleanup = new WebpackCleanupPlugin({
  exclude: ['manifest.json', 'fonts/**/*', 'images']
})

const assets = new AssetsPlugin({
  filename: 'manifest.json',
  path: path.resolve(`./public/`),
  fullPath: false
})

const env = new webpack.DefinePlugin({
  'process.env': {
    'SUBSTRATE_URL': JSON.stringify('https://sackrin/'),
    'SUBSTRATE_API_URL': JSON.stringify('https://sackrin/api/')
  }
})

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve('public'),
    filename: 'js/app.[chunkhash].js',
    publicPath: `/`
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      images: path.resolve('src/images/'),
      config: path.resolve('src/config/'),
      components: path.resolve('src/components/'),
      containers: path.resolve('src/containers/'),
      reducers: path.resolve('src/reducers/'),
      scripts: path.resolve('src/scripts/')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        enforce: 'pre',
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss|.css$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true}
            },
            {
              loader: 'sass-loader',
              options: {sourceMap: true}
            }
          ],
          fallback: 'style-loader'})
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg)(\?.*$|$)/,
        exclude: [/node_modules/, /src\/fonts/],
        loader: 'url-loader?limit=1024&name=images/[name].[ext]'
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot|otf)(\?.*$|$)/,
        exclude: [/images/, /src\/images/],
        loader: 'url-loader?limit=1024&name=fonts/[path][name].[ext]'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, extractSass, jquery, cleanup, assets, env ]
}
