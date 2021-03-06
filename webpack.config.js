const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/teste-martin-luz/",
  },
  module: {
    rules: [
        {
            test: /\.(scss)$/,
            use: [{
              loader: 'style-loader', // inject CSS to page
            }, {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader', // Run post css actions
              options: {
                postcssOptions: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                    return [
                        require('precss'),
                        require('autoprefixer')
                    ];
                    }
                }
              }
            }, {
              loader: 'sass-loader' // compiles Sass to CSS
            }]
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
    ],
  },
};