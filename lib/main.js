var data = require("sdk/self").data;
var tabs = require("sdk/tabs");

var pageMod = require("sdk/page-mod");
pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("image-listener.js"),
  onAttach: function(worker) {
    worker.port.on('element-url', function(imageURL) {
      tabs.open("https://www.google.com/searchbyimage?image_url="
        + encodeURIComponent(imageURL));
    });
  }
});
