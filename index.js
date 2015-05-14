
var json5 = require("json5");
var loaderUtils = require("loader-utils");
var pick = require("lodash.pick");

module.exports = function(content) {
  var query = loaderUtils.parseQuery(this.query);
  var data = json5.parse(content);
  if(Array.isArray(data)) {
    data = data.map(function(item) {
      return pick(item, "name");
    });
  } else {
    data = pick(data, "name");
  }
  return JSON.stringify(data);
};
