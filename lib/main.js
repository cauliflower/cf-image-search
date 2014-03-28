require("sdk/tabs").on("ready", runScript);

function runScript(tab) {
  tab.attach({
    contentScript: ""
  });
}
