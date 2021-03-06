import path from 'path';
/*
 * required to get webpack >=2.0 to work, for the loader plug-in.
import _webpack from 'webpack';
*/
console.log("webpack.config.dev.js called"); // eslint-line-disabled no-console //
/*
 * this file is called by babel-node buildscripts/srcServer.js, line 18
 */

export default {
  devtool: 'inline-source-map',
/*
 * custom property no longer supported by webpack 2.0 onward...
 * */
  debug: true,
  noInfo: false, // verbose mode
  /* */
  // https://webpack.js.org/concepts/entry-points/
  entry: [
    path.resolve(__dirname, 'src/index') // entry point: /src/index.js
  ],
  target: 'web', // possible options include "node", "electron"<- for desktop
  output: {
    path: path.resolve(__dirname, 'src'), // no actual physical files will be creatd.
    publicPath: '/',                      // instead, webpack serve our build from memory
    filename: 'bxbundle.js'
  },
  // need to include the loader plugin to allow custom property to work..
  plugins: [
  /*
  new _webpack.LoaderOptionsPlugin({
    debug:true,
    noInfo:false,
  })
  */
  ],
  // regexp syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  // / -> delimiter. \. -> match . instead of any char. $ -> the end of line.
  module: {
    loaders: [
      // need to replace babel with babel-loader in webpack 2.0 onward
      // need to replace css with css-loader in webpack 2.0 onward
      // need to replace style with style-loader in webpack 2.0 onward
      /*
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loaders: ['style-loader','css-loader']}
      */
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style-loader','css']}

    ]
  }
}


