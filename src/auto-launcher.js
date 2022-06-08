const console = {
  log: require("debug")("battery-life-extender:auto-launcher:log"),
  warn: require("debug")("battery-life-extender:auto-launcher:warn"),
  debug: require("debug")("battery-life-extender:auto-launcher:debug"),
  error: require("debug")("battery-life-extender:auto-launcher:error"),
};

const AutoLaunch = require("auto-launch");
const { app } = require("electron");
const { appName } = require("./config");

module.exports = {
  setup() {
    const appFile = app.getPath("exe");
    console.log("setup");

    const autoLauncher = new AutoLaunch({
      name: appName,
      path: appFile,
    });

    autoLauncher.enable();
  },
};
