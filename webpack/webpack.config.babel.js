/* eslint-disable security/detect-unsafe-regex */
/* eslint no-console:0 */
const { HotModuleReplacementPlugin, ProvidePlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const Globals = require('./globals');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const path = require('path');
const moment = require('moment');

const title = "Customer Success Playbook";

const webpackConfig = {
  target: 'web',
  context: path.join(__dirname, '..'),
  entry: {
    IMPage: [path.join(__dirname, '..', 'assets/app/index.jsx')],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '..', 'dist/assets/bundles/'),
    publicPath: './bundles/',
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-chunk-bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
          },

          {
            test: /\.(png|jpg|gif)$/,
            use: [{ loader: 'url-loader' }],
          },

          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[hash].[ext]',
                  useRelativePath: false,
                  outputPath: '../fonts/',
                  publicPath: '/fonts/',
                },
              },
            ],
          },

          {
            test: /\.html$/,
            use: [
              {
                loader: 'html-loader',
                options: {
                  name: '[name].[ext]',
                },
              },
            ],
          },

          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  babelrc: false,
                  presets: [
                    [
                      'env',
                      {
                        'targets': { 'browsers': ['last 1 version', 'not dead', '> 1% in US'] },
                        'useBuiltIns': true,
                      },
                    ],
                    'flow',
                    'react',
                  ],
                  plugins: [
                    'syntax-dynamic-import',
                    'syntax-decorators',
                    'add-module-exports',
                    ['prism-import', { 'libraryName': 'prism-reactjs', 'style': 'css' }],
                    [
                      'transform-runtime',
                      {
                        'helpers': false,
                        'polyfill': true,
                        'regenerator': true,
                        'moduleName': 'babel-runtime',
                      },
                    ],
                    'transform-object-rest-spread',
                    'transform-decorators-legacy',
                    'transform-class-properties',
                    'react-hot-loader/babel', // this must come after all transform-* plugins
                  ],
                },
              },
            ],
          },
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  useRelativePath: false,
                  outputPath: '../fonts/',
                  publicPath: '/fonts/',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, '..', 'dist/assets')], {
      verbose: process.env.VERBOSE === 'true',
      allowExternal: true,
    }),
    new ProvidePlugin(Globals),
    new HtmlWebpackPlugin({
      title,
      inject: true,
      template: path.join(__dirname, '..', 'assets/index.ejs'),
      filename: path.join(__dirname, '..', 'dist/assets/index.html'),
      favicon: path.join(__dirname, '..', 'assets/favicon/favicon.ico'),
    }),
  ],
  watchOptions: {
    aggregateTimeout: 3000,
    ignored: /node_modules/,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          warnings: true,
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
};

module.exports = function (env) {
  if (env && env.production) {
    console.log('Webpack: Build mode set to production');
    process.env.NODE_ENV = 'production';
    webpackConfig.mode = 'production';

    const datestring = moment().format('MM-DD-YY_HH:mm');
    webpackConfig.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'enabled',
        openAnalyzer: process.env.OPEN_ANALYZER === 'true',
        generateStatsFile: true,
        statsFilename: path.join(
          __dirname,
          `./logs/webpack/production/stats_${datestring}.json`
        ),
      })
    );
    webpackConfig.optimization.minimize = true;
    webpackConfig.output.filename = '[hash].js';
    webpackConfig.output.chunkFilename = '[hash].[chunkhash].js';
    webpackConfig.devtool = 'source-map';
  } else {
    console.log('Webpack: Build mode set to development');
    process.env.NODE_ENV = 'development';
    webpackConfig.mode = 'development';
    webpackConfig.optimization.minimize = false;
    webpackConfig.plugins.push(
      new WriteFilePlugin({
        test: /\.((woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?)|(html|ejs)$/,
        useHashIndex: true,
      }),
      new HotModuleReplacementPlugin({
        // multiStep: true,
        // ADD multiStep BACK WHEN FIXED (https://github.com/webpack/webpack/issues/6693)
      })
    );
  }

  return webpackConfig;
};
