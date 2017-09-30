var _express = require("express");
var _path = require("path");
var _open = require("open");
var _compression = require("compression");

/* eslint-disable no-console */

var _myApp = _express();
var _myPort = 9090;


/*
* Code below to reference dist server
*/
_myApp.use(_compression());
_myApp.use(_express.static('dist'));


_myApp.get("/", function(req, res){
  res.sendFile(_path.join(__dirname,'../dist/index.html'));
  console.log("_myApp.get(/) called");
});

_myApp.get('/users', function(req, res){
  // hard coding for simplicity, supposed to be done via database...
  // BX: implementation of query service??
  res.json([
    {"id":1, "firstName":"people1","lastName":"name1","email":"email1@email.com"},
    {"id":2, "firstName":"people2","lastName":"name2","email":"email2@email.com"},
    {"id":3, "firstName":"people3","lastName":"name3","email":"email3@email.com"}
  ]);
  console.log("_myApp.get(/users) called");
});

_myApp.listen(_myPort, function(err){
  console.log("_myApp.listen() called");

  if(err){
    console.log(err);
  }
  else{
    _open("http://localhost:" + _myPort);
  }
});
