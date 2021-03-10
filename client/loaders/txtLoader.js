"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = txtLoader;

var _loaderUtils = require("loader-utils");

function txtLoader(source) {
  const options =  _loaderUtils.getOptions(this);
  // console.log('options',options)
  source = source.replace(/\[myOwnTarget]/g, options.name);
  return source;
}
