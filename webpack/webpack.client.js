const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'development',
  // Tell webpack the root file of our
  // server application
  entry: path.join(process.cwd(), 'src/client/client.js'),

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public'),
  },
};

module.exports = merge(baseConfig, config);
