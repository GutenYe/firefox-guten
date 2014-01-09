var widget = require("sdk/widget")
var cm = require("sdk/context-menu")
var util = require("./util")

new cm.Item({
  label: "mplayer",
  accesskey: "a",
  context: cm.SelectorContext("a"),
  contentScript: "self.on('click', function(node, data){ self.postMessage(node.href) })",
  onMessage: function(url) {
    util.run("/usr/bin/smplayer", [url])
  }
})
