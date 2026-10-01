const console = {
  log: require("debug")("battery-life-extender:auto-launcher:log"),
  warn: require("debug")("battery-life-extender:auto-launcher:warn"),
  debug: require("debug")("battery-life-extender:auto-launcher:debug"),
  error: require("debug")("battery-life-extender:auto-launcher:error"),
};

const { app } = require("electron");

module.exports = {
  setup() {
    console.log("setup");

    // Registers the app as a login item (SMAppService on macOS 13+).
    app.setLoginItemSettings({ openAtLogin: true });
  },
};
