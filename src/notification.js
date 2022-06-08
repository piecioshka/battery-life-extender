const console = {
  log: require("debug")("battery-life-extender:notification:log"),
  warn: require("debug")("battery-life-extender:notification:warn"),
  error: require("debug")("battery-life-extender:notification:error"),
};

const { Notification } = require("electron");
const {
  locale,
  appName,
  batteryFullIcon,
  batteryLowIcon,
} = require("./config");

const DEFAULT_SETTINGS = {
  title: appName,
};

function notify(settings) {
  console.log("notify");
  try {
    const supported = Notification.isSupported();

    if (supported) {
      const notifier = new Notification(settings);
      notifier.show();
    } else {
      console.warn("Notification are not supported");
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  connect() {
    const settings = {
      ...DEFAULT_SETTINGS,
      body: locale.pl.CONNECT_POWER,
      sound: "Hero",
      icon: batteryLowIcon,
    };
    notify(settings);
  },
  disconnect() {
    const settings = {
      ...DEFAULT_SETTINGS,
      body: locale.pl.DISCONNECT_POWER,
      sound: "Ping",
      icon: batteryFullIcon,
    };
    notify(settings);
  },
};
