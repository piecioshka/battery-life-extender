const path = require("path");
const { app } = require("electron");

const root = app.getAppPath();

const ONE_SECOND = 1000; // in milliseconds unit
const CHECKING_BATTERY_STATUS_INTERVAL_TIME = 60; // in seconds unit

module.exports = {
  appName: "Battery Life Extender",

  batteryLowIconPath: path.join(root, "images", "battery", "battery-low.png"),
  batteryFullIconPath: path.join(root, "images", "battery", "battery-full.png"),
  trayIconPath: path.join(root, "icons", "app-icon-16x16.png"),

  // Battery levels are between 0 and 1.
  MINIMAL_BATTERY_LIFE: 0.15,
  MAXIMUM_BATTERY_LIFE: 0.97,

  locale: {
    en: {
      CONNECT_POWER: "Battery discharged\nPlug in the power cable!",
      DISCONNECT_POWER: "Battery fully charged\nDisconnect the power cable!",
      CLOSE: "Close",
    },
  },

  INTERVAL_TIME: CHECKING_BATTERY_STATUS_INTERVAL_TIME * ONE_SECOND,
};
