var {Cc, Ci} = require("chrome");

exports.run = function(cmd, params) {
  var file = Cc["@mozilla.org/file/local;1"].createInstance(Ci.nsILocalFile);
  var process = Cc["@mozilla.org/process/util;1"].createInstance(Ci.nsIProcess);
  file.initWithPath(cmd);
  process.init(file);
  process.run(false, params, params.length);  
}

