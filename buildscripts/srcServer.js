var _express = require("express");
var _path = require("path");
var _open = require("open");

var _myApp = _express();
var _myPort = 9090;

/*
* Code below to get webpack to work
*/

import _webpack from "webpack";
import _config from "../webpack.config.dev.js";
import _webpack_mw from 'webpack-dev-middleware';

const _compiler = _webpack(_config);

_myApp.use(_webpack_mw(_compiler, {
  noInfo: true,
  publicPath: _config.output.publicPath
}
)
);
/*
* Code above to get webpack to work
*/

_myApp.get("/", function(req, res){
  res.sendFile(_path.join(__dirname,'../src/index.html'));
});

_myApp.listen(_myPort, function(err){
  if(err){
    console.log(err);
  }
  else{
    _open("http://localhost:" + _myPort);
  }
});
