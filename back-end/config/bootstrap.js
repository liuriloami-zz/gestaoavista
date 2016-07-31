var randomHash = require('random-hashtag');

module.exports.bootstrap = function (cb) {
  if (process.env == 'production') return cb();  
  cb();
};
