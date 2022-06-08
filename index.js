require("debug").enable("*");

const console = {
  log: require("debug")("battery-life-extender:index:log"),
  warn: require("debug")("battery-life-extender:index:warn"),
  debug: require("debug")("battery-life-extender:index:debug"),
  error: require("debug")("battery-life-extender:index:error"),
};

require("./src/tray");
const { app } = require("electron");
const { appName, INTERVAL_TIME } = require("./src/config");
const { verify } = require("./src/logic");
const { setup: autoStart } = require("./src/auto-launcher");

/**
 * Go go go!!1
 */
async function main() {
  app.setName(appName);

  // App should works in background
  app.hide();
  app.dock.hide();

  // For production version
  if (app.isPackaged) {
    // Best advantage will be when app is running after restart
    autoStart();
  }

  if (app.isInApplicationsFolder()) {
    console.log("App is in /Applications/ folder");
  } else {
    console.warn("App is NOT in /Applications/ folder");
  }

  setInterval(async () => {
    try {
      await verify();
    } catch (err) {
      console.error(err);
    }
  }, INTERVAL_TIME);
}

app.on("ready", main);
