const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const isDevelopment = argv.mode !== 'production'

  return {
    entry: './src/index.js',
    mode: argv.mode,
    output: {
      path: path.resolve(__dirname, "dist"), // string
      //publicPath: "/dist/",
      filename: "bundle.js", // string
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
        allChunks: true,
        disable: false
      }),
      new HtmlWebPackPlugin({
        title: 'React Application',
        template: './src/index.html',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, "src")],
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: [["@babel/plugin-transform-runtime",
                {
                  "absoluteRuntime": false,
                  "corejs": false,
                  "helpers": true,
                  "regenerator": true,
                  "useESModules": false
                }]]
              },
            },
            {
              loader: "eslint-loader",
              options: {
                fix: true,
                emitError: true,
              }
            }
          ]
        },
        {
          test: /\.s(c|a)ss$/,
          exclude: /\.module\.s(a|c)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.module\.s(a|c)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                },
                localsConvention: 'camelCase',
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        }
      ]
    },
    resolve: {
      modules: [
        "node_modules",
        path.resolve(__dirname, "src")
      ],
      extensions: [".js", ".json", ".jsx", ".css"],

      alias: {
      },
    },


    devtool: "source-map", // enum

    context: __dirname, // string (absolute path!)

    target: "web", // enum

    devServer: {
      contentBase: path.join(__dirname, '.'), // boolean | string | array, static file location
      compress: true, // enable gzip compression
      historyApiFallback: true, // true for index.html upon 404, object for multiple paths
      hot: false, // hot module replacement. Depends on HotModuleReplacementPlugin
      https: false, // true for self-signed, object for cert authority
      noInfo: false,
      inline: false
    },
  }
}