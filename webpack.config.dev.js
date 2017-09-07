import path from 'path';
import _webpack from 'webpack';

export default {
  devtool: 'inline-source-map',
/*
 * custom property no longer supported by webpack 2.0 onward...
  debug: true,
  noInfo: false, // verbose mode
  */
  // https://webpack.js.org/concepts/entry-points/
  entry: [
    path.resolve(__dirname, 'src/index') // entry point: /src/index.js
  ],
  target: 'web', // possible options include "node", "electron"<- for desktop
  output: {
    path: path.resolve(__dirname, 'src'), // no actual physical files will be creatd.
    publicPath: '/',                      // instead, webpack serve our build from memory
    filename: 'bundle.js'
  },
  // need to include the loader plugin to allow custom property to work..
  plugins: [
    new _webpack.LoaderOptionsPlugin({
      debug:true,
      noInfo:false,
    })
  ],
  // regexp syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  // / -> delimiter. \. -> match . instead of any char. $ -> the end of line.
  module: {
    loaders: [
      // need to replace babel with babel-loader in webpack 2.0 onward
      // need to replace css with css-loader in webpack 2.0 onward
      // need to replace style with style-loader in webpack 2.0 onward
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
    ]
  }
}


