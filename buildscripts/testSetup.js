
// this file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests runs. ?
require("babel-register")();

// Disable webpack features that Mocha doesn't understand
// css file is not understood by mocha, hence the statement below is asking
// mocha to treat css as an empty function

require.extensions[".css"] = function(){};
