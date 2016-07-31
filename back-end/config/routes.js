var normalizedPath = require("path").join(__dirname, "../api/routes")
  , requireDic = [];

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  requireDic.push(require("../api/routes/" + file)());
});

var routes = function (dic) {
  var obj = {};
  dic.forEach(function (routes) {
    for (p in routes) {
      obj[p] = routes[p];
    }
  })
  return obj;
}

module.exports.routes = routes(requireDic);
